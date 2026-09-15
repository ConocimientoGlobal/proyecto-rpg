export let CANVAS_SCALE = 1;

export const mapSetup = (
  map_width: number,
  map_height: number
): HTMLCanvasElement => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  canvas.width = map_width;
  canvas.height = map_height;
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  CANVAS_SCALE = Math.min(screenWidth / map_width, screenHeight / map_height);
  
  canvas.style.width = (map_width * CANVAS_SCALE) + 'px';
  canvas.style.height = (map_height * CANVAS_SCALE) + 'px';
  canvas.style.position = 'absolute';
  canvas.style.left = ((screenWidth - map_width * CANVAS_SCALE) / 2) + 'px';
  canvas.style.top = ((screenHeight - map_height * CANVAS_SCALE) / 2) + 'px';
  
  return canvas;
};

export const getCtx = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.scale(CANVAS_SCALE, CANVAS_SCALE);
  return ctx;
};
