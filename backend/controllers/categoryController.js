const { Category } = require("../models");

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Category name is required' })
        }

        const category = await Category.create({ name })
        return res.status(201).json({ message: "Category created successfully", category })
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while creating the category' });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        return res.status(200).json({ categories });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while fetching categories' });
    }
};