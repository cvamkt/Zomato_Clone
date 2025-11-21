import Restaurant from "../model/restaurantModel.js";


//allRestaurant
export const getAllrestaurant = async (req, res) => {

    const{search, category, rating} = req.query;

    let filter = {};

    if (search) {
        filter.name = {$regex: search, $options: "i"};
    }

    if(category) {
        filter.category = category;
    }
    if(rating) {
        filter.rating = {$gte: Number(rating)};
    }
    try {
        const restaurants = await Restaurant.find(filter);
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

//add new
export const createRestaurant = async (req, res) => {
    try {
        if (!req.file) {
            return res
            .status(400)
            .json({error : "Image is required"});
        }
         console.log("req.body:", req.body);
        console.log("req.file:", req.file);
        const newRestaurant = await Restaurant.create({
            name: req.body.name,
            image:req.file.path,
            rating: req.body.rating,
            cuisine: req.body.cuisine,
            price: req.body.price,
            location: req.body.location,
            category: req.body.category,

    });
    console.log("dikha be" + newRestaurant);
    
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