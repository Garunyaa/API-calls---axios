import express from "express";
import { connectDB } from "./configs/db";
import productRoutes from "./routes/product-routes";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

connectDB();

app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
