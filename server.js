// Servidor para RPG-JS en Glitch
// Glitch usa process.env.PORT automáticamente
import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createServer(app);

// Servir archivos estáticos de dist
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🎮 PachaMirai corriendo en http://localhost:${PORT}`);
  console.log(`📁 Archivos estáticos: ${path.join(__dirname, 'dist')}`);
});
