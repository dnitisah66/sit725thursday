const express = require('express');
const app = express();
const http = require('http').createServer(app); // Create HTTP server
const io = require('socket.io')(http);          // Attach socket.io to the server
const path = require('path');

// Import your routes
const projectRoutes = require('./routes/projectRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', projectRoutes);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Generate random number every second for THIS socket
  const interval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 10); // 0–9
    console.log("Generated:", randomNumber); // Debug log
    socket.emit('number', randomNumber);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('User disconnected');
    clearInterval(interval);
  });
});



// Start server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
