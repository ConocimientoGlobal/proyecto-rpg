import express from 'express';
import { createServer } from 'http';
import { Server } from 'socketio';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// Servir archivos estáticos de la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Manejar todas las rutas con index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Conexiones WebSocket para RPG-JS
io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  socket.on('player:move', (data) => {
    socket.broadcast.emit('player:moved', { id: socket.id, ...data });
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
