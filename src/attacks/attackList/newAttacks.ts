import { Attack } from "../core";
import { Playable } from "../../sprites";
import { randomInt } from "../../utils/misc";

export class Fireball extends Attack {
  constructor() {
    super({
      name: "Fireball",
      damage: 80,
      type: "fire",
      range: 200,
      cost: 30,
      accuracy: 0.9,
      cooldown: 3,
      description: "A blazing ball of fire",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): Fireball {
    const damage = (user.magik / target.immunity) * this.damage;
    target.takeDamage(damage);
    user.reduceMana(this.cost);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): Fireball {
    const r = randomInt(10, 30);
    ctx.fillStyle = "rgba(255, 100, 0, 0.7)";
    ctx.beginPath();
    ctx.arc(
      target.position.x + target.width / 2,
      target.position.y + target.height / 2,
      r,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.fill();
    return this;
  }
}

export class IceShard extends Attack {
  constructor() {
    super({
      name: "Ice Shard",
      damage: 40,
      type: "ice",
      range: 150,
      cost: 20,
      accuracy: 0.95,
      cooldown: 1,
      description: "Sharp ice projectile",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): IceShard {
    const damage = (user.magik / target.immunity) * this.damage;
    target.takeDamage(damage);
    user.reduceMana(this.cost);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): IceShard {
    ctx.strokeStyle = "rgba(100, 200, 255, 0.8)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(user.position.x + user.width / 2, user.position.y + user.height / 2);
    ctx.lineTo(target.position.x + target.width / 2, target.position.y + target.height / 2);
    ctx.stroke();
    return this;
  }
}

export class Heal extends Attack {
  constructor() {
    super({
      name: "Heal",
      damage: 0,
      heal: 100,
      type: "holy",
      range: 0,
      cost: 40,
      accuracy: 1,
      cooldown: 5,
      description: "Restore HP",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): Heal {
    user.heal(this.heal);
    user.reduceMana(this.cost);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): Heal {
    const r = randomInt(20, 50);
    ctx.strokeStyle = "rgba(100, 255, 100, 0.8)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(
      user.position.x + user.width / 2,
      user.position.y + user.height / 2,
      r,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.stroke();
    return this;
  }
}

export class LightningBolt extends Attack {
  constructor() {
    super({
      name: "Lightning Bolt",
      damage: 120,
      type: "electric",
      range: 250,
      cost: 60,
      accuracy: 0.85,
      cooldown: 4,
      description: "A powerful lightning strike",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): LightningBolt {
    const damage = (user.magik / target.immunity) * this.damage;
    target.takeDamage(damage);
    user.reduceMana(this.cost);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): LightningBolt {
    ctx.strokeStyle = "rgba(255, 255, 0, 0.9)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(user.position.x + user.width / 2, user.position.y + user.height / 2);
    for (let i = 0; i < 5; i++) {
      const x = user.position.x + (target.position.x - user.position.x) * (i / 5) + randomInt(-30, 30);
      const y = user.position.y + (target.position.y - user.position.y) * (i / 5) + randomInt(-30, 30);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(target.position.x + target.width / 2, target.position.y + target.height / 2);
    ctx.stroke();
    return this;
  }
}

export class PoisonSting extends Attack {
  constructor() {
    super({
      name: "Poison Sting",
      damage: 30,
      type: "poison",
      range: 100,
      cost: 15,
      accuracy: 0.9,
      cooldown: 2,
      description: "A toxic stab",
      effects: [],
    });
  }

  activate(user: Playable, target: Playable): PoisonSting {
    const damage = (user.muscle / target.armour) * this.damage;
    target.takeDamage(damage);
    user.reduceMana(this.cost);
    return this;
  }

  render(
    user: Playable,
    target: Playable,
    ctx: CanvasRenderingContext2D
  ): PoisonSting {
    ctx.fillStyle = "rgba(0, 200, 0, 0.6)";
    for (let i = 0; i < 8; i++) {
      const x = target.position.x + randomInt(0, target.width);
      const y = target.position.y + randomInt(0, target.height);
      ctx.beginPath();
      ctx.arc(x, y, randomInt(3, 8), 0, 2 * Math.PI);
      ctx.fill();
    }
    return this;
  }
}
