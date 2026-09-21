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

const ENEMY_ATTACK_COOLDOWN = 60;
let enemyAttackTimer = 0;
let gameCanvas: HTMLCanvasElement | null = null;

// Camera position (top-left of viewport)
let cameraX = 0;
let cameraY = 0;

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
    futureKeyState.y = MOVESPEED;
  } else if (controller.isPressed("left")) {
    futureKeyState.x = MOVESPEED;
  } else if (controller.isPressed("down")) {
    futureKeyState.y = -MOVESPEED;
  } else if (controller.isPressed("right")) {
    futureKeyState.x = -MOVESPEED;
  }

  const playerCollisions = colliders.some((collider: BoxCollider) =>
    checkCollision(player, collider, futureKeyState)
  );

  const moveMobile = (mobile: BoxCollider | Sprite) => {
    const movementDirection = controller.getMovement();
    if (!movementDirection) {
      player.animate("idle");
      return;
    }
    const { axis, velocity } = controller.motion[movementDirection];
    player.animate(movementDirection);
    enemies.forEach(enemy => enemy.follow(player, colliders))

    if (!playerCollisions && hasKey(mobile.position, axis)) {
      mobile.position[axis] += velocity;
    }
  };

  moveMobile(player);

  enemies.forEach((enemy: Playable) => {
    enemy.regen().attack(player, randomInt(0, enemy.attacks.length - 1), ctx);
    player.regen().attack(enemy, controller.getAttack(), ctx);
  })

  // Update camera to follow player (center in viewport)
  const scale = getScale();
  const viewW = gameCanvas ? gameCanvas.width / scale : 507;
  const viewH = gameCanvas ? gameCanvas.height / scale : 896;
  
  const targetCamX = player.position.x - (viewW / 2);
  const targetCamY = player.position.y - (viewH / 2);
  
  // Clamp camera to map bounds
  const clampedCamX = Math.max(0, Math.min(targetCamX, MAP_WIDTH - viewW));
  const clampedCamY = Math.max(0, Math.min(targetCamY, MAP_HEIGHT - viewH));
  
  // Smooth lerp
  cameraX += (clampedCamX - cameraX) * 0.1;
  cameraY += (clampedCamY - cameraY) * 0.1;
};

export const animationBuilder = ({
  bg,
  player,
  state,
  canvas,
  fg,
  enemies,
}: AnimationBuilderArgs): void => {
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
  const colliders = getColliders();
  gameCanvas = canvas;
  
  // Initialize camera
  cameraX = player.position.x - 253;
  cameraY = player.position.y - 448;
  
  const animate = (): void => {
    const scale = getScale();
    
    // Clear screen
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Apply viewport scaling
    ctx.save();
    ctx.scale(scale, scale);
    
    // Camera transform (centered on player)
    ctx.translate(-cameraX, -cameraY);
    
    // Draw game world
    bg.draw(ctx);
    player.draw(ctx);
    enemies.forEach(enemy => enemy.draw(ctx));
    fg.draw(ctx);
    
    ctx.restore();
    
    // Draw HUD
    drawHUD(ctx, player, canvas);
    
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

const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
