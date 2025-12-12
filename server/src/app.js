const express = require('express');
const app = express();
const coffeeRoutes = require('./routes/coffee');

// Middleware
app.use(express.json());

// Routes
app.use('/', coffeeRoutes);

// Start server
const PORT = 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
