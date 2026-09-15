export let CANVAS_SCALE = 1;

export const mapSetup = (
  map_width: number,
  map_height: number
): HTMLCanvasElement => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  CANVAS_SCALE = Math.min(screenWidth / map_width, screenHeight / map_height);
  
  canvas.width = Math.floor(map_width * CANVAS_SCALE);
  canvas.height = Math.floor(map_height * CANVAS_SCALE);
  
  canvas.style.width = canvas.width + 'px';
  canvas.style.height = canvas.height + 'px';
  canvas.style.position = 'absolute';
  canvas.style.left = ((screenWidth - canvas.width) / 2) + 'px';
  canvas.style.top = ((screenHeight - canvas.height) / 2) + 'px';
  
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.scale(CANVAS_SCALE, CANVAS_SCALE);
  
  return canvas;
};

export const getCtx = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  return ctx;
};
