import Restaurant from "../model/restaurantModel.js";


//allRestaurant
export const getAllrestaurant = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

//add new
export const createRestaurant = async (req, res) => {
    try {
        const newRestaurant = await Restaurant.create(req.body);
        // await newRestaurant.save();

        return res.status(201).json({
            success: true,
            message: "Restaurant created successfully",
            data: newRestaurant
        });
    } catch (error) {
        console.log("this is the error: ",error);
        
      return res
      .status(500)
      .json({ error: "Server error while creating new data" });
    }
}