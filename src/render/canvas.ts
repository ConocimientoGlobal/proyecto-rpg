import { VIEW_WIDTH, VIEW_HEIGHT } from "../constants";

let SCALE = 1;

export const mapSetup = (): HTMLCanvasElement => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  // Canvas llena toda la pantalla
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
