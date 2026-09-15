import { VIEW_WIDTH, VIEW_HEIGHT } from "../constants";

let SCALE = 1;

export const mapSetup = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const dpr = window.devicePixelRatio || 1;
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  // Calculate scale to fit the 9:16 viewport into the screen
  const scaleX = screenW / VIEW_WIDTH;
  const scaleY = screenH / VIEW_HEIGHT;
  SCALE = Math.min(scaleX, scaleY);

  // Set canvas size (CSS pixels)
  canvas.style.width = screenW + "px";
  canvas.style.height = screenH + "px";
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";

  // Set canvas resolution (device pixels)
  canvas.width = Math.floor(screenW * dpr);
  canvas.height = Math.floor(screenH * dpr);

  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.imageSmoothingEnabled = false;

  return canvas;
};

export const getScale = () => SCALE;
