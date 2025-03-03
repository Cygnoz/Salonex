const Category = require("../database/model/category");
const { cleanData } = require("../services/cleanData");

// Check if category name exists 
const isDuplicateCategory = async (categoryName, res) => {
  const existingCategory = await Category.findOne({ categoryName });
  if (existingCategory) {
    console.error("Category with this name already exists.");
    res.status(400).json({ message: "Category with this name already exists" });
    return true;
  }
  return false;
};


// Check if category name exists - EDIT
const isDuplicateCategoryExist = async (categoryName, categoryId, res) => {
  const existingCategory = await Category.findOne({
    categoryName,
    _id: { $ne: categoryId },
  });
  if (existingCategory) {
    console.error("Category with this name already exists.");
    res.status(400).json({ message: "Category with this name already exists" });
    return true;
  }
  return false;
};

// Validate Category Data
function validateCategoryData(data, res) {
  const errors = [];
  if (!data.categoryName) errors.push("Category name is required.");

  if (errors.length > 0) {
    res.status(400).json({ message: errors.join(", ") });
    return false;
  }
  return true;
}

// Add Category
exports.addCategory = async (req, res) => {
  try {
    const cleanedData = cleanData(req.body);
    const { categoryName } = cleanedData;

    if (!validateCategoryData(cleanedData, res)) return;
    if (await isDuplicateCategory(categoryName, res)) return;

    const newCategory = new Category(cleanedData);
    const savedCategory = await newCategory.save();

    res.status(201).json({
      message: "Category added successfully",
      savedCategory,
    });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get All Categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories.length) {
      return res.status(404).json({ message: "No categories found." });
    }
    res.status(200).json({
      message: "Categories fetched successfully",
      categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Edit Category
exports.editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const cleanedData = cleanData(req.body);
    const { categoryName } = cleanedData;

    if (!validateCategoryData(cleanedData, res)) return;
    if (await isDuplicateCategoryExist(categoryName, id, res)) return;

    const updatedCategory = await Category.findByIdAndUpdate(id, cleanedData, {
      new: true,
    });
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category updated successfully",
      updatedCategory,
    });
  } catch (error) {
    console.error("Error editing category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category deleted successfully",
      deletedCategory,
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
