import express from "express";
import cors from "cors";
import { productRouter } from "./routes/products.js";
export const app = express();


// Using middlewares 
app.use(express.json());
app.use(cors({
    origin : "http://localhost:3000",
    methods :["GET","POST","PUT","DELETE"],
    credentials: true,
}))
app.use("/api/products" , productRouter);

app.get("/", (req,res)=>{
    res.send("BELIEVE IN YOURSELF");
})
