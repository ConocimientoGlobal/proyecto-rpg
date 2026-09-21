export let CANVAS_SCALE = 1;

// Viewport 9:16 (lo que se ve en pantalla, en píxeles del mundo)
export const VIEW_WIDTH = 507;
export const VIEW_HEIGHT = 896;

export const mapSetup = (
  map_width: number,
  map_height: number
): HTMLCanvasElement => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;
  
  canvas.width = screenW;
  canvas.height = screenH;
  canvas.style.width = screenW + 'px';
  canvas.style.height = screenH + 'px';
  canvas.style.position = 'absolute';
  canvas.style.left = '0';
  canvas.style.top = '0';
  
  // Escala para cubrir la pantalla con el viewport 9:16
  CANVAS_SCALE = Math.max(screenW / VIEW_WIDTH, screenH / VIEW_HEIGHT);
  
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  
  return canvas;
};

export const getCtx = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  return ctx;
};

export const getScale = () => CANVAS_SCALE;
