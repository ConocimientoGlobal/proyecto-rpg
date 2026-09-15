import { mergeConfig } from "@signe/di";
import { provideRpg, startGame } from "@rpgjs/client";
import configClient from "./config/config.client";

// Crear un servidor mock para standalone
const mockServer = {
  start: () => Promise.resolve(),
  stop: () => Promise.resolve(),
  io: {} as any,
  options: {},
  scene: {} as any,
  player: {} as any,
  getModule: () => ({}),
  getScene: () => ({}),
  addScene: () => {},
  removeScene: () => {},
};

startGame(
  mergeConfig(configClient, {
    providers: [provideRpg(mockServer)],
  })
);
