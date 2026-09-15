import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createRPGServer } from '@rpgjs/server';
import { provideMain } from './src/modules/main/index.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createServer(app);

// Servir archivos estáticos de dist
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Crear servidor RPG-JS con WebSocket
const rpgServer = createRPGServer({
  providers: [provideMain()]
});

// Integrar WebSocket en el mismo servidor HTTP
rpgServer.io.attach(httpServer);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`PachaMirai corriendo en http://localhost:${PORT}`);
});
