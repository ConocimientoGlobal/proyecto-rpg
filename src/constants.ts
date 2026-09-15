// World map size (4:3 original November map)
export const MAP_WIDTH = 1920;
export const MAP_HEIGHT = 1440;

// Mobile viewport 9:16 (what's visible on screen)
export const VIEW_WIDTH = 720;
export const VIEW_HEIGHT = 1280;

export const TILE_WIDTH = 64;
export const TILE_HEIGHT = 64;
export const CHAR_WIDTH = 16;
export const CHAR_HEIGHT = 16;

// Player starts near top-left of map (not center)
// This allows camera to follow without going out of bounds initially
export const CHAR_X_OFFSET = VIEW_WIDTH / 2;
export const CHAR_Y_OFFSET = VIEW_HEIGHT / 2;

// Map offsets (background image offset)
export const MAP_X_OFFSET = 0;
export const MAP_Y_OFFSET = 0;

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
