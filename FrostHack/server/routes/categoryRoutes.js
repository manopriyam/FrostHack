import express from "express";
import { addCategory, deleteCategory, getCategories } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/add", addCategory);
router.delete("/delete/:id", deleteCategory);
router.get("/list", getCategories);

export default router;
