// Servidor RPG-JS completo para Glitch
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// API básica
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', players: 0 });
});

// WebSocket para RPG-JS
io.on('connection', (socket) => {
  console.log('Jugador conectado:', socket.id);
  
  socket.on('player:move', (data) => {
    socket.broadcast.emit('player:moved', { id: socket.id, ...data });
  });
  
  socket.on('player:join', (data) => {
    socket.broadcast.emit('player:joined', { id: socket.id, ...data });
  });
  
  socket.on('disconnect', () => {
    console.log('Jugador desconectado:', socket.id);
    socket.broadcast.emit('player:left', { id: socket.id });
  });
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🎮 PachaMirai RPG corriendo en http://localhost:${PORT}`);
  console.log(`📁 Archivos estáticos: ${path.join(__dirname, 'dist')}`);
  console.log(`🔌 WebSocket activo`);
});
