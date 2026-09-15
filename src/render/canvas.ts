export const mapSetup = (
  map_width: number,
  map_height: number
): HTMLCanvasElement => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  const scaleX = screenWidth / map_width;
  const scaleY = screenHeight / map_height;
  const scale = Math.min(scaleX, scaleY);
  
  canvas.width = Math.floor(map_width * scale);
  canvas.height = Math.floor(map_height * scale);
  
  canvas.style.width = canvas.width + 'px';
  canvas.style.height = canvas.height + 'px';
  canvas.style.position = 'absolute';
  canvas.style.left = ((screenWidth - canvas.width) / 2) + 'px';
  canvas.style.top = ((screenHeight - canvas.height) / 2) + 'px';
  
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.scale(scale, scale);
  
  return canvas;
};

export const getCtx = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  return ctx;
};
