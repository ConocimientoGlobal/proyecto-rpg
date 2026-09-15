// Viewport 9:16 para móvil
export const VIEW_WIDTH = 720;
export const VIEW_HEIGHT = 1280;

// Mapa del mundo (4:3 original de November)
export const MAP_WIDTH = 1920;
export const MAP_HEIGHT = 1440;

export const TILE_WIDTH = 64;
export const TILE_HEIGHT = 64;
export const CHAR_WIDTH = 16;
export const CHAR_HEIGHT = 16;

// Posición inicial del jugador (centrado en el mapa)
export const CHAR_X_OFFSET = MAP_WIDTH / 2;
export const CHAR_Y_OFFSET = MAP_HEIGHT / 2;

// Offsets del mapa (para centrar la vista inicial)
export const MAP_X_OFFSET = -(VIEW_WIDTH / 2);
export const MAP_Y_OFFSET = -(VIEW_HEIGHT / 2);

export const BAR_OFFSET = 2;
export const BAR_HEIGHT = 10;

export const ENEMY_CHASE_DISTANCE = CHAR_WIDTH * 50;

export const IS_COLLIDER = 955;
export const MOVESPEED = 4;

export const TILES = {
    rows: 40,
    cols: 30
};

export const DIRECTIONS = [[-1, 0], [0, -1], [1, 0], [0, 1]];
