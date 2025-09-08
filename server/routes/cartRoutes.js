import express from "express";
import { addToCart, getCart, removeCartItem } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", protect, getCart);
router.post("/add", protect, addToCart);
router.delete("/remove/:productId", protect, removeCartItem);

export default router;
