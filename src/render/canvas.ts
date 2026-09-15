let SCALE = 1;

export const mapSetup = (): HTMLCanvasElement => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  // Fit 9:16 viewport into screen
  const scaleX = screenW / 720;
  const scaleY = screenH / 1280;
  SCALE = Math.max(scaleX, scaleY);

  canvas.width = screenW;
  canvas.height = screenH;
  canvas.style.width = screenW + "px";
  canvas.style.height = screenH + "px";
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";

  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  return canvas;
};

export const getScale = () => SCALE;
