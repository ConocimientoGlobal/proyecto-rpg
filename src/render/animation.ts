import { getCtx } from "./canvas";
import { MOVESPEED } from "../constants";
import { getColliders, checkCollision } from "./collider";
import { BoxCollider } from "./collider";
import { State } from "../state";
import { Sprite, Playable } from "../sprites";

type MotionControlArgs = {
  ctx: CanvasRenderingContext2D;
  state: State;
  bg: Sprite;
  player: Playable;
  enemies: Playable[];
  fg: Sprite;
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
  } else if (controller.isPressed("left")) {
    futureKeyState.x = -MOVESPEED;
  } else if (controller.isPressed("down")) {
    futureKeyState.y = MOVESPEED;
  } else if (controller.isPressed("right")) {
    futureKeyState.x = MOVESPEED;
  }

  const playerCollisions = colliders.some((collider: BoxCollider) =>
    checkCollision(player, collider, futureKeyState)
  );

  const movementDirection = controller.getMovement();
  if (!movementDirection) {
    player.animate("idle");
  } else {
    const { velocity } = controller.motion[movementDirection];
    player.animate(movementDirection);
    enemies.forEach(enemy => {
      if (enemy.alive()) enemy.follow(player, colliders);
    });

    if (!playerCollisions) {
      const isHorizontal = controller.motion[movementDirection].axis === "x";
      const delta = velocity;
      
      if (isHorizontal) {
        player.position.x += delta;
      } else {
        player.position.y += delta;
      }
    }
  }

  enemyAttackTimer++;
  if (enemyAttackTimer >= ENEMY_ATTACK_COOLDOWN) {
    enemyAttackTimer = 0;
    enemies.forEach((enemy: Playable) => {
      if (enemy.alive()) {
        enemy.regen().attack(player, 0, ctx);
      }
    });
  }

  player.regen();
  const attackChoice = controller.getAttack();
  if (attackChoice !== null && enemies.length > 0) {
    const closestEnemy = enemies.reduce((closest, enemy) => {
      if (!enemy.alive()) return closest;
      const distToEnemy = Math.abs(enemy.position.x - player.position.x) + Math.abs(enemy.position.y - player.position.y);
      const distToClosest = Math.abs(closest.position.x - player.position.x) + Math.abs(closest.position.y - player.position.y);
      return distToEnemy < distToClosest ? enemy : closest;
    });
    player.attack(closestEnemy, attackChoice, ctx);
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
  const ctx: CanvasRenderingContext2D = getCtx(canvas);
  const colliders = getColliders();
  
  const animate = (): void => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    bg.draw(ctx);
    enemies.forEach(enemy => {
      if (enemy.alive()) {
        enemy.draw(ctx);
      }
    });
    player.draw(ctx);
    fg.draw(ctx);
    
    drawHUD(ctx, player, canvas);
    
    window.requestAnimationFrame(animate);
    motionControl({ ctx, state, bg, player, enemies, fg, colliders });
  };
  animate();
};

const drawHUD = (ctx: CanvasRenderingContext2D, player: Playable, canvas: HTMLCanvasElement) => {
  const hudX = 10;
  const hudY = 10;
  const barWidth = Math.min(150, canvas.width * 0.3);
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
  }
};
