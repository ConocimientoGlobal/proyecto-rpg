// Virtual viewport - 9:16 aspect ratio (what the player sees)
export const VIEW_WIDTH = 720;
export const VIEW_HEIGHT = 1280;

// World map size (4:3 aspect ratio)
export const MAP_WIDTH: number = 1920;
export const MAP_HEIGHT: number = 1440;

export const TILE_WIDTH: number = 64;
export const TILE_HEIGHT: number = 64;
export const CHAR_WIDTH: number = 16;
export const CHAR_HEIGHT: number = 16;

// Offsets to center the initial view on the player
// These are negative because the bg image starts at negative coords
export const MAP_X_OFFSET: number = -(VIEW_WIDTH / 2);
export const MAP_Y_OFFSET: number = -(VIEW_HEIGHT / 2);

// Player starts at center of viewport
export const CHAR_X_OFFSET: number = VIEW_WIDTH / 2;
export const CHAR_Y_OFFSET: number = VIEW_HEIGHT / 2;
export const BAR_OFFSET: number = 2;
export const BAR_HEIGHT: number = 10;

export const ENEMY_CHASE_DISTANCE: number = CHAR_WIDTH * 50;

export const IS_COLLIDER: number = 955;
export const MOVESPEED: number = 4;
export const TILES: { rows: number, cols: number } = {
    rows: 40,
    cols: 30
}

export const DIRECTIONS = [[-1, 0], [0, -1], [1, 0], [0, 1]];
