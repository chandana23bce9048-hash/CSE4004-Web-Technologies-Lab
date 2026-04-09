const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Connection Error:', err));

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});