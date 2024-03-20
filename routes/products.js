import express  from "express";
import { deleteProduct, getAllProducts, newProduct,  } from "../controllers/products.js";

export const productRouter = express.Router();

productRouter.post("/new",  newProduct);
productRouter.get("/all", getAllProducts);
productRouter.delete("/:id", deleteProduct);