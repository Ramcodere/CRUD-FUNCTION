

const express = require('express');
const app = express(); 
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const productRoutes = require('./routes/product');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/AprilProject')
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Set up view engine and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing request bodies and method override
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes
app.use(productRoutes);

// Start server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
