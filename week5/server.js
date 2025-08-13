const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/', projectRoutes);

// Start server
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port);
});
