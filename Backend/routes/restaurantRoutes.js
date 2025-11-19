import express from "express";
import { createRestaurant, getAllrestaurant } from "../controllers/restaurantController.js";


const router = express.Router();

router.get("/", getAllrestaurant);
router.post("/", createRestaurant);

export default router;