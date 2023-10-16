import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  getProduct,
} from "../controllers/product-controller";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/product", createProduct);
router.get("/product", getProduct);

export default router;
