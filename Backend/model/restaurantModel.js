import mongoose, { mongo } from "mongoose";

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            default: 0,
        },
        cuisine: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);