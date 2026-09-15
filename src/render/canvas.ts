export let CANVAS_SCALE = 1;

export const mapSetup = (
  map_width: number,
  map_height: number
): HTMLCanvasElement => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Set canvas to fill the entire screen
  canvas.width = screenWidth;
  canvas.height = screenHeight;
  canvas.style.width = screenWidth + 'px';
  canvas.style.height = screenHeight + 'px';
  canvas.style.position = 'absolute';
  canvas.style.left = '0';
  canvas.style.top = '0';
  
  // Calculate scale to cover the screen (crop sides if needed)
  // This ensures the game fills a 9:16 screen without black bars
  CANVAS_SCALE = Math.max(screenWidth / map_width, screenHeight / map_height);
  
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  
  return canvas;
};

export const getCtx = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  return ctx;
};
