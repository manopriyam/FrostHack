import Category from "../models/categoryModel.js";

export const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = new Category({ name });
        await category.save();
        res.status(201).json({ message: "Category added", category });
    } catch (error) {
        res.status(500).json({ message: "Error adding category", error: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.json({ message: "Category deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error: error.message });
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};
