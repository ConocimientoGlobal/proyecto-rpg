import { defineConfig } from 'vite';
import { rpgjs, tiledMapFolderPlugin } from '@rpgjs/vite';
import startServer from './src/server.ts';

export default defineConfig({
  base: './',
  optimizeDeps: {
    include: ['pixi.js > @xmldom/xmldom']
  },
  plugins: [
    tiledMapFolderPlugin({
      sourceFolder: './src/tiled',
      publicPath: './map',
      buildOutputPath: 'map'
    }),
    ...rpgjs({
      server: startServer
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
