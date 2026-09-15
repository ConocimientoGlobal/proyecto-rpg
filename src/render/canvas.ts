export let CANVAS_SCALE = 1;

export const mapSetup = (
  map_width: number,
  map_height: number
): HTMLCanvasElement => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;
  
  canvas.width = map_width;
  canvas.height = map_height;
  
  const scaleX = screenW / map_width;
  const scaleY = screenH / map_height;
  CANVAS_SCALE = Math.min(scaleX, scaleY);
  
  canvas.style.width = (map_width * CANVAS_SCALE) + 'px';
  canvas.style.height = (map_height * CANVAS_SCALE) + 'px';
  canvas.style.position = 'absolute';
  canvas.style.left = ((screenW - map_width * CANVAS_SCALE) / 2) + 'px';
  canvas.style.top = ((screenH - map_height * CANVAS_SCALE) / 2) + 'px';
  
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
