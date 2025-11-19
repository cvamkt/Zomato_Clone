import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req,res) => {
    res.send("API is running...");
});


app.use("/api/restaurants", restaurantRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
    
});
