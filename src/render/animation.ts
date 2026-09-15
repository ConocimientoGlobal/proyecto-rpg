import { getScale } from "./canvas";
import { MOVESPEED, MAP_WIDTH, MAP_HEIGHT } from "../constants";
import { getColliders, checkCollision } from "./collider";
import { BoxCollider } from "./collider";
import { State } from "../state";
import { Sprite, Playable } from "../sprites";
import { hasKey } from "../utils/misc";

type MotionControlArgs = {
  ctx: CanvasRenderingContext2D;
  state: State;
  player: Playable;
  enemies: Playable[];
  colliders: BoxCollider[];
};

type AnimationBuilderArgs = {
  bg: Sprite;
  player: Playable;
  enemies: Playable[];
  fg: Sprite;
  state: State;
  canvas: HTMLCanvasElement;
};

const ENEMY_ATTACK_COOLDOWN = 90;
let enemyAttackTimer = 0;

const motionControl = ({
  ctx,
  state,
  player,
  enemies,
  colliders,
}: MotionControlArgs): void => {
  const { controller } = state;
  let futureKeyState: coordinates = { x: 0, y: 0 };

  if (controller.isPressed("up")) {
    futureKeyState.y = -MOVESPEED;
  }
  if (controller.isPressed("left")) {
    futureKeyState.x = -MOVESPEED;
  }
  if (controller.isPressed("down")) {
    futureKeyState.y = MOVESPEED;
  }
  if (controller.isPressed("right")) {
    futureKeyState.x = MOVESPEED;
  }

  // Check collisions for each axis separately
  const playerCollisionsX = colliders.some((collider: BoxCollider) =>
    checkCollision(player, collider, { x: futureKeyState.x, y: 0 })
  );
  const playerCollisionsY = colliders.some((collider: BoxCollider) =>
    checkCollision(player, collider, { x: 0, y: futureKeyState.y })
  );

  const movementDirection = controller.getMovement();
  
  if (!movementDirection && futureKeyState.x === 0 && futureKeyState.y === 0) {
    player.animate("idle");
  } else {
    // Determine animation direction
    if (Math.abs(futureKeyState.x) > Math.abs(futureKeyState.y)) {
      player.animate(futureKeyState.x > 0 ? "right" : "left");
    } else if (futureKeyState.y !== 0) {
      player.animate(futureKeyState.y > 0 ? "down" : "up");
    } else if (futureKeyState.x !== 0) {
      player.animate(futureKeyState.x > 0 ? "right" : "left");
    }
    
    // Move enemies toward player
    enemies.forEach(enemy => {
      if (enemy.alive()) enemy.follow(player, colliders);
    });

    // Apply movement with collision (player moves through world)
    if (futureKeyState.x !== 0 && !playerCollisionsX) {
      player.position.x += futureKeyState.x;
    }
    if (futureKeyState.y !== 0 && !playerCollisionsY) {
      player.position.y += futureKeyState.y;
    }
  }

  // Enemy attacks with cooldown
  enemyAttackTimer++;
  if (enemyAttackTimer >= ENEMY_ATTACK_COOLDOWN) {
    enemyAttackTimer = 0;
    enemies.forEach((enemy: Playable) => {
      if (enemy.alive()) {
        enemy.regen().attack(player, 0, ctx);
      }
    });
  }

  // Player regen
  player.regen();
  
  // Player attacks
  const attackChoice = controller.getAttack();
  if (attackChoice !== null && enemies.length > 0) {
    const aliveEnemies = enemies.filter(e => e.alive());
    if (aliveEnemies.length > 0) {
      const closestEnemy = aliveEnemies.reduce((closest, enemy) => {
        const distToEnemy = Math.abs(enemy.position.x - player.position.x) + Math.abs(enemy.position.y - player.position.y);
        const distToClosest = Math.abs(closest.position.x - player.position.x) + Math.abs(closest.position.y - player.position.y);
        return distToEnemy < distToClosest ? enemy : closest;
      });
      player.attack(closestEnemy, attackChoice, ctx);
    }
  }
};

export const animationBuilder = ({
  bg,
  player,
  state,
  canvas,
  fg,
  enemies,
}: AnimationBuilderArgs): void => {
  const ctx = canvas.getContext("2d")!;
  const colliders = getColliders();
  
  // Camera position (top-left of viewport)
  let camX = player.position.x - 360;  // VIEW_WIDTH / 2
  let camY = player.position.y - 640;  // VIEW_HEIGHT / 2
  
  const animate = (): void => {
    const scale = getScale();
    
    // Clear screen
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Apply viewport scaling
    ctx.save();
    ctx.scale(scale, scale);
    
    // Camera transform (follow player)
    ctx.translate(-camX, -camY);
    
    // Draw game world
    bg.draw(ctx);
    enemies.forEach(enemy => {
      if (enemy.alive()) {
        enemy.draw(ctx);
      }
    });
    player.draw(ctx);
    fg.draw(ctx);
    
    ctx.restore();
    
    // Draw HUD (fixed position)
    drawHUD(ctx, player, canvas);
    
    // Update camera (smooth follow)
    const targetCamX = player.position.x - 360;
    const targetCamY = player.position.y - 640;
    
    // Clamp camera to map bounds
    const clampedCamX = Math.max(0, Math.min(targetCamX, MAP_WIDTH - 720));
    const clampedCamY = Math.max(0, Math.min(targetCamY, MAP_HEIGHT - 1280));
    
    // Smooth lerp
    camX += (clampedCamX - camX) * 0.1;
    camY += (clampedCamY - camY) * 0.1;
    
    window.requestAnimationFrame(animate);
    motionControl({ ctx, state, player, enemies, colliders });
  };
  animate();
};

const drawHUD = (ctx: CanvasRenderingContext2D, player: Playable, canvas: HTMLCanvasElement) => {
  const hudX = 10;
  const hudY = 10;
  const barWidth = 150;
  const barHeight = 14;
  const spacing = 6;

  ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
  ctx.fillRect(hudX - 4, hudY - 4, barWidth + 8, barHeight * 2 + spacing + 24);

  ctx.fillStyle = "#fff";
  ctx.font = "bold 12px monospace";
  ctx.fillText(`HP: ${Math.floor(player.hp)}/${player.maxHp}`, hudX, hudY + 10);

  ctx.fillStyle = "#333";
  ctx.fillRect(hudX, hudY + 16, barWidth, barHeight);
  ctx.fillStyle = player.hp / player.maxHp > 0.3 ? "#e74c3c" : "#ff0000";
  ctx.fillRect(hudX, hudY + 16, barWidth * Math.max(0, player.hp / player.maxHp), barHeight);

  ctx.fillStyle = "#fff";
  ctx.fillText(`MP: ${Math.floor(player.mana)}/${player.maxMana}`, hudX, hudY + 36);

  ctx.fillStyle = "#333";
  ctx.fillRect(hudX, hudY + 42, barWidth, barHeight);
  ctx.fillStyle = "#3498db";
  ctx.fillRect(hudX, hudY + 42, barWidth * Math.max(0, player.mana / player.maxMana), barHeight);
  
  if (player.hp <= 0) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#e74c3c";
    ctx.font = "bold 32px monospace";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 16px monospace";
    ctx.fillText("Restart to play again", canvas.width / 2, canvas.height / 2 + 30);
    ctx.textAlign = "start";
    
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) restartBtn.style.display = 'block';
  }
};
