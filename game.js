'use strict';

// ========== CONSTANTES ==========
const T = 32, VW = 640, VH = 360, WW = 64, WH = 64;

// ========== CANVAS ==========
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
let SCALE = 2;

function resizeCanvas() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  SCALE = Math.max(2, Math.floor(Math.min(w / VW, h / VH)));
  canvas.width = VW * SCALE;
  canvas.height = VH * SCALE;
  canvas.style.width = (VW * SCALE) + 'px';
  canvas.style.height = (VH * SCALE) + 'px';
  canvas.style.left = ((w - VW * SCALE) / 2) + 'px';
  canvas.style.top = ((h - VH * SCALE) / 2) + 'px';
  ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
  ctx.imageSmoothingEnabled = false;
}

window.addEventListener('resize', resizeCanvas);

// ========== HASH ==========
function hsh(x, y) {
  let h = (x * 374761393 + y * 668265263) ^ 0x5bf03635;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return (h ^ (h >>> 16)) & 0x7fffffff;
}

// ========== GENERADOR DE MUNDO ==========
const world = [];
const worldVars = [];

for (let y = 0; y < WH; y++) {
  world[y] = [];
  worldVars[y] = [];
  for (let x = 0; x < WW; x++) {
    const v = hsh(x, y);
    const r = (v % 1000) / 1000;
    let b = 0;
    if (r < 0.1) b = 2;
    else if (r < 0.2) b = 3;
    else if (r < 0.4) b = 6;
    else if (r < 0.6) b = 0;
    else if (r < 0.75) b = 1;
    else if (r < 0.85) b = 4;
    else b = 5;
    world[y][x] = b;
    worldVars[y][x] = v % 4;
  }
}

// Suavizar biomas
for (let iter = 0; iter < 3; iter++) {
  const nuevo = world.map(r => [...r]);
  for (let y = 1; y < WH - 1; y++) {
    for (let x = 1; x < WW - 1; x++) {
      const counts = {};
      for (let dy = -1; dy <= 1; dy++)
        for (let dx = -1; dx <= 1; dx++) {
          const b = world[y + dy][x + dx];
          counts[b] = (counts[b] || 0) + 1;
        }
      let best = 0, bestCount = 0;
      for (const b in counts) {
        if (counts[b] > bestCount) { bestCount = counts[b]; best = b; }
      }
      if (bestCount >= 5) nuevo[y][x] = best;
    }
  }
  for (let y = 0; y < WH; y++) for (let x = 0; x < WW; x++) world[y][x] = nuevo[y][x];
}

// ========== SISTEMA DE ENTIDADES ==========
class Entity {
  constructor(x, y, type) {
    this.x = x; this.y = y;
    this.vx = 0; this.vy = 0;
    this.type = type;
    this.frame = 0;
    this.ft = 0;
    this.dir = 0;
    this.hp = 1;
    this.maxHp = 1;
  }
}

class Animal extends Entity {
  constructor(x, y, animalType) {
    super(x, y, 'animal');
    this.animalType = animalType;
    this.hp = 3;
    this.maxHp = 3;
    this.speed = 80 + Math.random() * 40;
    this.fleeDist = 100;
    this.wanderTimer = 0;
    this.wanderDir = { x: 0, y: 0 };
  }

  update(dt, player) {
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < this.fleeDist && dist > 0) {
      // Huir
      this.vx = -dx / dist * this.speed * 1.5;
      this.vy = -dy / dist * this.speed * 1.5;
    } else {
      // Deambular
      this.wanderTimer -= dt;
      if (this.wanderTimer <= 0) {
        this.wanderTimer = 1 + Math.random() * 3;
        const angle = Math.random() * Math.PI * 2;
        this.wanderDir.x = Math.cos(angle);
        this.wanderDir.y = Math.sin(angle);
      }
      this.vx = this.wanderDir.x * this.speed * 0.3;
      this.vy = this.wanderDir.y * this.speed * 0.3;
    }

    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.x = Math.max(T, Math.min(WW * T - T, this.x));
    this.y = Math.max(T, Math.min(WH * T - T, this.y));

    // Animación
    this.ft += dt;
    if (this.ft > 0.25) { this.ft = 0; this.frame = (this.frame + 1) % 4; }

    // Dirección
    if (Math.abs(this.vx) > Math.abs(this.vy)) {
      this.dir = this.vx > 0 ? 2 : 1;
    } else if (Math.abs(this.vy) > 5) {
      this.dir = this.vy > 0 ? 0 : 3;
    }
  }
}

class NPC extends Entity {
  constructor(x, y, name, dialogue) {
    super(x, y, 'npc');
    this.name = name;
    this.dialogue = dialogue;
  }
}

// Crear entidades
const entities = [];
const animalTypes = ['deer', 'boar', 'rabbit', 'fox', 'wolf', 'bird', 'cow', 'sheep', 'pig', 'horse', 'dog', 'cat', 'chicken', 'fish'];

for (let i = 0; i < 15; i++) {
  const x = 30 + (hsh(i, 100) % 30) * T;
  const y = 30 + (hsh(i, 200) % 30) * T;
  entities.push(new Animal(x, y, animalTypes[i % 14]));
}

entities.push(new NPC(35 * T, 35 * T, 'Viejo Sabio', [
  'Bienvenido a PachaMirai!',
  'Explora con cuidado...',
  'Todo problema tiene mas de una solucion.',
  'Puedes ahuyentar animales o hablar con ellos.'
]));

entities.push(new NPC(50 * T, 45 * T, 'Guardabosque', [
  'Cuida la naturaleza!',
  'Los animales son inocentes.',
  'Usa el habla antes del acero.'
]));

// ========== JUGADOR ==========
const player = {
  x: WW * T / 2,
  y: WH * T / 2,
  vx: 0, vy: 0,
  dir: 0, frame: 0, ft: 0,
  state: 'idle',
  atkTimer: 0,
  attackCooldown: 0.4,
  hp: 100, maxHp: 100,
  mp: 50, maxMp: 50,
  xp: 0, lvl: 1,
  gold: 50,
  inventory: {
    wood: 0, stone: 0, herb: 0,
    potion: 3, apple: 0, gem: 0
  },
  selectedSlot: 0
};

// ========== SISTEMA DE ITEMS ==========
const ITEMS = [
  { id: 'sword', name: 'Espada', icon: '⚔️', type: 'weapon', damage: 1 },
  { id: 'axe', name: 'Hacha', icon: '🪓', type: 'tool', gather: 'wood' },
  { id: 'pickaxe', name: 'Pico', icon: '⛏️', type: 'tool', gather: 'stone' },
  { id: 'seeds', name: 'Semillas', icon: '🌱', type: 'usable' },
  { id: 'wood', name: 'Madera', icon: '🪵', type: 'material' },
  { id: 'stone', name: 'Piedra', icon: '🪨', type: 'material' },
  { id: 'potion', name: 'Pocion', icon: '🧪', type: 'consumable', heal: 50 },
  { id: 'apple', name: 'Manzana', icon: '🍎', type: 'consumable', heal: 20 },
];

// ========== SISTEMA DE COMBATE ==========
function doAttack() {
  if (player.atkTimer > 0) return;
  player.atkTimer = player.attackCooldown;
  player.state = 'attack';

  const attackRange = 45;
  const px = player.x;
  const py = player.y;

  for (let i = entities.length - 1; i >= 0; i--) {
    const e = entities[i];
    if (e.type !== 'animal') continue;
    const dx = e.x - px;
    const dy = e.y - py;
    if (Math.sqrt(dx * dx + dy * dy) < attackRange) {
      e.hp -= 1;
      showFloat('-1 HP', e.x, e.y, '#ff4444');
      if (e.hp <= 0) {
        player.xp += 10;
        showFloat('+10 XP', e.x, e.y, '#ffcc00');
        // Drop
        if (Math.random() < 0.3) player.inventory.herb++;
        entities.splice(i, 1);
      }
    }
  }
}

// ========== SISTEMA DE INTERACCIÓN ==========
function doInteract() {
  for (const e of entities) {
    if (e.type === 'npc') {
      const dx = e.x - player.x;
      const dy = e.y - player.y;
      if (Math.sqrt(dx * dx + dy * dy) < 50) {
        const msg = e.dialogue[Math.floor(Math.random() * e.dialogue.length)];
        showDialogue(e.name + ': ' + msg);
        return;
      }
    }
  }
}

// Recurso gathering
function gatherResource() {
  const px = Math.floor(player.x / T);
  const py = Math.floor(player.y / T);
  const tile = world[py] ? world[py][px] : -1;

  const selItem = ITEMS[player.selectedSlot];
  if (!selItem || selItem.type !== 'tool') return;

  if (selItem.gather === 'wood' && tile === 6) {
    player.inventory.wood++;
    showFloat('+1 Madera', player.x, player.y - 20, '#8d6e63');
    // Quitar árbol
    world[py][px] = 0;
    worldVars[py][px] = 0;
  } else if (selItem.gather === 'stone' && tile === 4) {
    player.inventory.stone++;
    showFloat('+1 Piedra', player.x, player.y - 20, '#9e9e9e');
    world[py][px] = 0;
    worldVars[py][px] = 0;
  }
}

// ========== INVENTARIO ==========
function toggleInventory() {
  const inv = document.getElementById('inventory');
  if (inv.style.display === 'flex') {
    inv.style.display = 'none';
  } else {
    updateInventoryUI();
    inv.style.display = 'flex';
  }
}

function updateInventoryUI() {
  const grid = document.getElementById('inv-grid');
  grid.innerHTML = '';
  let slotIdx = 0;
  for (const item of ITEMS) {
    const count = player.inventory[item.id] || 0;
    if (count > 0 || item.type === 'weapon' || item.type === 'tool') {
      const slot = document.createElement('div');
      slot.className = 'inv-slot';
      slot.innerHTML = item.icon;
      if (count > 0) {
        const countEl = document.createElement('span');
        countEl.className = 'count';
        countEl.textContent = count;
        slot.appendChild(countEl);
      }
      grid.appendChild(slot);
      slotIdx++;
    }
  }
  // Rellenar espacios vacíos
  for (let i = slotIdx; i < 15; i++) {
    const slot = document.createElement('div');
    slot.className = 'inv-slot';
    grid.appendChild(slot);
  }
}

// ========== UI ==========
function showDialogue(text) {
  const d = document.getElementById('dialogue');
  d.textContent = text;
  d.style.display = 'block';
  setTimeout(() => d.style.display = 'none', 3000);
}

function showFloat(text, x, y, color) {
  const el = document.createElement('div');
  el.className = 'float-msg';
  el.textContent = text;
  el.style.color = color || '#ffcc00';
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  document.getElementById('ui').appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

function updateHUD() {
  document.getElementById('hp-fill').style.width = (player.hp / player.maxHp * 100) + '%';
  document.getElementById('mp-fill').style.width = (player.mp / player.maxMp * 100) + '%';
  document.getElementById('xp-fill').style.width = (player.xp / (player.lvl * 50) * 100) + '%';
  document.getElementById('hp-txt').textContent = player.hp + '/' + player.maxHp;
  document.getElementById('mp-txt').textContent = player.mp + '/' + player.maxMp;
  document.getElementById('xp-txt').textContent = player.xp + '/' + (player.lvl * 50);
  document.getElementById('lvl-display').textContent = 'Nv ' + player.lvl;
  document.getElementById('gold-display').textContent = '🪙 ' + player.gold;

  // Actualizar hotbar
  const slots = document.querySelectorAll('#hotbar .slot');
  slots.forEach((s, i) => {
    s.classList.toggle('active', i === player.selectedSlot);
    const item = ITEMS[i];
    if (item) {
      const count = player.inventory[item.id] || 0;
      const countEl = s.querySelector('.count');
      if (countEl) countEl.textContent = count > 0 ? count : '';
    }
  });
}

function toggleMenu() {
  const m = document.getElementById('menu');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}

// ========== INPUT TÁCTIL (solo móvil) ==========
let jx = 0, jy = 0, ja = false, jsX = 0, jsY = 0, jid = null;

// Nota: El joystick usa su propio elemento div (#joystick)

// Botones UI
document.getElementById('btn-atk').onclick = doAttack;
document.getElementById('btn-act').onclick = () => { doInteract(); gatherResource(); };
document.getElementById('btn-inv').onclick = toggleInventory;
document.getElementById('m-resume').onclick = toggleMenu;
document.getElementById('m-save').onclick = () => {
  localStorage.setItem('pacha_save', JSON.stringify(player));
  showDialogue('💾 Guardado');
};
document.getElementById('m-load').onclick = () => {
  const s = localStorage.getItem('pacha_save');
  if (s) { Object.assign(player, JSON.parse(s)); showDialogue('📂 Cargado'); }
  else showDialogue('❌ Sin partida');
};
document.getElementById('m-menu').onclick = () => showDialogue('Menu principal: proximamente...');
document.getElementById('inv-close').onclick = toggleInventory;

// Joystick - control directo (sin teclado)
(function () {
  const joy = document.getElementById('joystick');
  const knob = document.getElementById('joy-knob');
  let active = false, cx = 0, cy = 0;

  function start(e) {
    active = true;
    const r = joy.getBoundingClientRect();
    cx = r.left + r.width / 2;
    cy = r.top + r.height / 2;
    move(e);
  }

  function move(e) {
    if (!active) return;
    e.preventDefault();
    const t = e.touches ? e.touches[0] : e;
    const dx = t.clientX - cx, dy = t.clientY - cy;
    const maxR = 35;
    const d = Math.min(Math.sqrt(dx * dx + dy * dy), maxR);
    const a = Math.atan2(dy, dx);

    knob.style.transform = `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px))`;

    // Normalizar a -1..1
    jx = (Math.cos(a) * d) / maxR;
    jy = (Math.sin(a) * d) / maxR;

    if (d < 5) { jx = 0; jy = 0; }
  }

  function end() {
    active = false;
    jx = 0; jy = 0;
    knob.style.transform = 'translate(-50%, -50%)';
  }

  joy.addEventListener('touchstart', start, { passive: false });
  joy.addEventListener('touchmove', move, { passive: false });
  joy.addEventListener('touchend', end);
  joy.addEventListener('mousedown', start);
  document.addEventListener('mousemove', e => { if (active) move(e); });
  document.addEventListener('mouseup', end);
})();

// ========== RENDERIZADO ==========

const TILE_COLORS = [
  ['#3a6b2a', '#4a7c2e', '#387328', '#48802c'], // 0 pasto
  ['#5d4037', '#6d4c41', '#4e342e', '#795548'], // 1 tierra
  ['#0d47a1', '#1565c0', '#1976d2', '#0d47a1'], // 2 agua
  ['#f9a825', '#fdd835', '#ffb300', '#f9a825'], // 3 arena
  ['#616161', '#757575', '#9e9e9e', '#616161'], // 4 piedra
  ['#e0e0e0', '#f5f5f5', '#fafafa', '#e0e0e0'], // 5 nieve
  ['#2d5a2d', '#2d5a2d', '#2d5a2d', '#2d5a2d']  // 6 árbol
];

function drawTile(t, x, y, v) {
  ctx.fillStyle = TILE_COLORS[t][v];
  ctx.fillRect(x, y, T, T);

  // Detalles específicos
  if (t === 0) {
    ctx.fillStyle = '#5a9a3a';
    ctx.fillRect(x + 4, y + 26, 2, 6);
    ctx.fillRect(x + 5, y + 24, 1, 2);
    ctx.fillRect(x + 14, y + 25, 2, 7);
    ctx.fillRect(x + 15, y + 23, 1, 2);
    ctx.fillRect(x + 24, y + 27, 2, 5);
  } else if (t === 2) {
    ctx.fillStyle = 'rgba(66,165,245,0.5)';
    ctx.fillRect(x + 4, y + 8, 8, 2);
    ctx.fillRect(x + 16, y + 18, 6, 2);
    ctx.fillRect(x + 8, y + 26, 10, 2);
  } else if (t === 4) {
    ctx.fillStyle = '#757575';
    ctx.fillRect(x + 4, y + 10, 8, 6);
    ctx.fillRect(x + 14, y + 6, 6, 6);
  } else if (t === 6) {
    ctx.fillStyle = '#4e342e';
    ctx.fillRect(x + 11, y + 14, 10, 16);
    ctx.fillStyle = '#1b5e20';
    ctx.beginPath(); ctx.arc(x + 16, y + 10, 10, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#2e7d32';
    ctx.beginPath(); ctx.arc(x + 15, y + 8, 7, 0, Math.PI * 2); ctx.fill();
  }
}

function drawPlayer(x, y, dir, frame, state) {
  const bob = state === 'walk' ? [0, -2, 0, 2][frame] : 0;
  const leg = state === 'walk' ? [0, 3, 0, -3][frame] : 0;
  const cx = x + 16, cy = y + 16 + bob;

  // Sombra
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.beginPath(); ctx.ellipse(cx, cy + 12, 8, 3, 0, 0, Math.PI * 2); ctx.fill();

  // Piernas
  ctx.fillStyle = '#5d4037';
  ctx.fillRect(cx - 4, cy + 2, 3, 10 + leg);
  ctx.fillRect(cx + 1, cy + 2, 3, 10 - leg);
  ctx.fillStyle = '#3e2723';
  ctx.fillRect(cx - 4, cy + 11 + leg, 3, 3);
  ctx.fillRect(cx + 1, cy + 11 - leg, 3, 3);

  // Cuerpo
  ctx.fillStyle = '#1565c0';
  ctx.fillRect(cx - 6, cy - 6, 12, 10);
  ctx.fillStyle = '#1976d2';
  ctx.fillRect(cx - 5, cy - 5, 10, 8);

  // Cabeza
  ctx.fillStyle = '#ffccbc';
  ctx.fillRect(cx - 5, cy - 14, 10, 10);
  ctx.fillStyle = '#ffe0b2';
  ctx.fillRect(cx - 4, cy - 12, 8, 6);

  // Pelo
  ctx.fillStyle = '#3e2723';
  ctx.fillRect(cx - 6, cy - 15, 12, 4);

  // Ojos
  if (dir !== 3) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(cx - 3, cy - 10, 3, 3);
    ctx.fillRect(cx + 1, cy - 10, 3, 3);
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(cx - 2, cy - 9, 2, 2);
    ctx.fillRect(cx + 2, cy - 9, 2, 2);
  }

  // Espada
  if (state === 'attack' && frame < 2) {
    ctx.fillStyle = '#b0bec5';
    ctx.fillRect(cx + 8, cy - 10, 3, 14);
    ctx.fillStyle = '#ffc107';
    ctx.fillRect(cx + 6, cy + 4, 7, 3);
  }
}

function drawAnimal(x, y, type, dir, frame) {
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.beginPath(); ctx.ellipse(x + 16, y + 30, 8, 2, 0, 0, Math.PI * 2); ctx.fill();

  const colors = {
    deer: [160, 120, 80], boar: [80, 60, 40], rabbit: [240, 240, 240], fox: [200, 80, 20],
    wolf: [80, 80, 80], bird: [40, 100, 200], cow: [250, 250, 250], sheep: [250, 250, 240],
    pig: [250, 180, 180], horse: [120, 80, 60], dog: [250, 250, 240], cat: [200, 100, 50],
    chicken: [250, 250, 240], fish: [100, 180, 255]
  };
  const c = colors[type] || [150, 150, 150];
  ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;

  if (type === 'fish') {
    ctx.fillStyle = '#0d47a1'; ctx.fillRect(x, y, T, T);
    ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;
    ctx.beginPath(); ctx.ellipse(x + 16, y + 16, 10, 5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#212121'; ctx.fillRect(x + 8, y + 14, 2, 2);
  } else if (type === 'bird' || type === 'chicken') {
    ctx.beginPath(); ctx.ellipse(x + 14, y + 18, 8, 5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x + 22, y + 12, 5, 4, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#212121'; ctx.fillRect(x + 24, y + 11, 2, 2);
    ctx.fillStyle = '#ff0';
    ctx.beginPath(); ctx.moveTo(x + 26, y + 13); ctx.lineTo(x + 30, y + 12); ctx.lineTo(x + 26, y + 14); ctx.fill();
  } else {
    ctx.beginPath(); ctx.ellipse(x + 14, y + 18, 8, 5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x + 22, y + 12, 5, 4, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#212121'; ctx.fillRect(x + 24, y + 11, 2, 2);
    if (type === 'rabbit') { ctx.fillRect(x + 22, y + 6, 2, 4); ctx.fillRect(x + 25, y + 6, 2, 4); }
  }
}

function drawNPC(x, y, name) {
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.beginPath(); ctx.ellipse(x + 16, y + 30, 8, 2, 0, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#795548';
  ctx.fillRect(x + 6, y + 2, 20, 10);
  ctx.fillRect(x + 10, y, 12, 4);
  ctx.fillStyle = '#ffccbc';
  ctx.fillRect(x + 8, y + 10, 16, 10);
  ctx.fillStyle = '#1565c0';
  ctx.fillRect(x + 6, y + 18, 20, 12);
  ctx.fillStyle = '#fff';
  ctx.fillRect(x + 10, y + 13, 3, 3);
  ctx.fillRect(x + 18, y + 13, 3, 3);
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(x + 11, y + 14, 2, 2);
  ctx.fillRect(x + 19, y + 14, 2, 2);

  // Nombre
  ctx.fillStyle = '#ffcc00';
  ctx.font = '7px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(name, x + 16, y - 4);
}

// ========== MINIMAPA ==========
function renderMinimap() {
  const mc = document.getElementById('mc');
  if (!mc) return;
  const mctx = mc.getContext('2d');
  mctx.imageSmoothingEnabled = false;
  mctx.fillStyle = '#1a1a2e';
  mctx.fillRect(0, 0, 64, 64);

  const r = 20;
  const ppx = Math.floor(player.x / T);
  const ppy = Math.floor(player.y / T);

  for (let dy = -r; dy <= r; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      const wx = ppx + dx, wy = ppy + dy;
      if (wx < 0 || wx >= WW || wy < 0 || wy >= WH) continue;
      const t = world[wy][wx];
      mctx.fillStyle = t === 0 ? '#4caf50' : t === 1 ? '#8d6e63' : t === 2 ? '#0288d1' :
        t === 3 ? '#f9a825' : t === 4 ? '#757575' : t === 5 ? '#fff' : '#1b5e20';
      mctx.fillRect(32 + dx * 2, 32 + dy * 2, 2, 2);
    }
  }

  // Jugador
  mctx.fillStyle = '#fff';
  mctx.fillRect(31, 31, 3, 3);

  // NPCs
  mctx.fillStyle = '#fc0';
  for (const e of entities) {
    if (e.type === 'npc') {
      const nx = 32 + Math.floor((e.x / T - ppx) * 2);
      const ny = 32 + Math.floor((e.y / T - ppy) * 2);
      if (nx > 0 && nx < 64 && ny > 0 && ny < 64) mctx.fillRect(nx - 1, ny - 1, 3, 3);
    }
  }
}

// ========== RENDER PRINCIPAL ==========
function render() {
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, VW, VH);

  const cx = player.x - VW / 2 + T / 2;
  const cy = player.y - VH / 2 + T / 2;

  const sx = Math.max(0, Math.floor(cx / T));
  const sy = Math.max(0, Math.floor(cy / T));
  const ex = Math.min(WW - 1, Math.ceil((cx + VW) / T));
  const ey = Math.min(WH - 1, Math.ceil((cy + VH) / T));

  // Tiles
  for (let ty = sy; ty <= ey; ty++)
    for (let tx = sx; tx <= ex; tx++)
      drawTile(world[ty][tx], tx * T - cx, ty * T - cy, worldVars[ty][tx]);

  // Entidades ordenadas por Y
  const visible = entities.filter(e => {
    const ex = e.x - cx, ey = e.y - cy;
    return ex > -T && ex < VW + T && ey > -T && ey < VH + T;
  }).sort((a, b) => a.y - b.y);

  const px = player.x - cx, py = player.y - cy;
  let playerDrawn = false;

  for (const e of visible) {
    if (!playerDrawn && e.y > py) {
      drawPlayer(px, py, player.dir, player.frame, player.state);
      playerDrawn = true;
    }
    if (e.type === 'animal')
      drawAnimal(e.x - cx, e.y - cy, e.animalType, e.dir, e.frame);
    else if (e.type === 'npc')
      drawNPC(e.x - cx, e.y - cy, e.name);
  }

  if (!playerDrawn)
    drawPlayer(px, py, player.dir, player.frame, player.state);
}

// ========== UPDATE ==========
function update(dt) {
  let mx = 0, my = 0;
  if (ja) { mx = jx; my = jy; }

  const speed = 180;
  player.vx = mx * speed;
  player.vy = my * speed;
  player.x += player.vx * dt;
  player.y += player.vy * dt;
  player.x = Math.max(T, Math.min(WW * T - T, player.x));
  player.y = Math.max(T, Math.min(WH * T - T, player.y));

  // Dirección y estado
  if (Math.abs(mx) > Math.abs(my)) player.dir = mx > 0 ? 2 : 1;
  else if (my !== 0) player.dir = my > 0 ? 0 : 3;

  if (player.atkTimer > 0) { player.state = 'attack'; player.atkTimer -= dt; }
  else if (Math.abs(player.vx) > 1 || Math.abs(player.vy) > 1) player.state = 'walk';
  else player.state = 'idle';

  player.ft += dt;
  if (player.ft > 0.2) { player.ft = 0; player.frame = (player.frame + 1) % 4; }

  // Animales
  for (const e of entities) {
    if (e.type === 'animal') e.update(dt, player);
  }

  // Level up
  if (player.xp >= player.lvl * 50) {
    player.xp -= player.lvl * 50;
    player.lvl++;
    player.maxHp += 10; player.hp = player.maxHp;
    player.maxMp += 5; player.mp = player.maxMp;
    showDialogue('⭐ NIVEL ' + player.lvl + '!');
  }

  updateHUD();
}

// ========== GAME LOOP ==========
let last = 0;
function loop(ts) {
  const dt = Math.min((ts - last) / 1000, 0.1);
  last = ts;
  update(dt);
  render();
  renderMinimap();
  requestAnimationFrame(loop);
}

// Iniciar
resizeCanvas();
player.x = WW * T / 2;
player.y = WH * T / 2;
last = performance.now();
requestAnimationFrame(loop);
