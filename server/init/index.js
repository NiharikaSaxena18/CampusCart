const mongoose = require('mongoose');
const Product = require('../models/Product');
const data = require('./products').data;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/campuscart', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const initDB = async () => {
    try {
        // Clear existing products
        await Product.deleteMany({});
        console.log("Existing products cleared");

        // Insert sample products
        await Product.insertMany(data);
        console.log("Sample products added to the database");
    } catch (error) {
        console.error("Error initializing database:", error);
    } finally {
        mongoose.connection.close();
    }
};

initDB()
    .then(() => console.log("Database initialization complete"))
    .catch(err => console.error("Database initialization failed:", err));