export const mapSetup = (
  map_width: number,
  map_height: number
): HTMLCanvasElement => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  canvas.width = map_width;
  canvas.height = map_height;
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  const scaleX = screenWidth / map_width;
  const scaleY = screenHeight / map_height;
  const scale = Math.min(scaleX, scaleY);
  
  canvas.style.width = (map_width * scale) + 'px';
  canvas.style.height = (map_height * scale) + 'px';
  canvas.style.position = 'absolute';
  canvas.style.left = ((screenWidth - map_width * scale) / 2) + 'px';
  canvas.style.top = ((screenHeight - map_height * scale) / 2) + 'px';
  
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  
  return canvas;
};

export const getCtx = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  return ctx;
};
