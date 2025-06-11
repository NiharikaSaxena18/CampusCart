const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// GET all products
router.get('/', async (req, res) => {
    try {
        const { category, search, minPrice, maxPrice, condition } = req.query;
        let filter = { isAvailable: true };

        if (category) filter.category = category;
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = parseFloat(minPrice);
            if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
        }
        if (condition) filter.condition = condition;

        const products = await Product.find(filter)
            .populate('seller', 'name college hostel')
            .sort({ createdAt: -1 });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate('seller', 'name college hostel phoneNumber email');
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create new product (protected route)
router.post('/', auth, async (req, res) => {
    try {
        const product = new Product({
            ...req.body,
            seller: req.user.id
        });
        
        await product.save();
        await product.populate('seller', 'name college hostel');
        
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update product (protected route)
router.put('/:id', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        // Check if user is the seller
        if (product.seller.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }
        
        Object.assign(product, req.body);
        await product.save();
        
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE product (protected route)
router.delete('/:id', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        // Check if user is the seller
        if (product.seller.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }
        
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;