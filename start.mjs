import { createServer } from '@rpgjs/server';
import express from 'express';
import { createServer as createHttpServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { provideMain } from './src/modules/main/index.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createHttpServer(app);

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Servidor RPG-JS
const rpgServer = createRPGServer({
  providers: [provideMain()]
});

// Adjuntar WebSocket
rpgServer.io.attach(httpServer);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`RPG-JS corriendo en http://localhost:${PORT}`);
  console.log(`- Archivos estáticos: ${path.join(__dirname, 'dist')}`);
  console.log(`- WebSocket activo en /socket.io`);
});
