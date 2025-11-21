import React, { useEffect, useState } from "react";
import { debounce, } from "lodash";
import {
    getRestaurant,
    searchRestuarant,
    filterByCategory,
    filterByrating
}
    from "../services/restaurantService";
import { useMemo } from "react";

const RestaurantList = () => {

    const [restaurants, setRestaurant] = useState([]);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [ratingFilter, setRatingFilter] = useState("");


    useEffect(() => {
        fetchRestarants();
    }, []);

    const fetchRestarants = async () => {
        const data = await getRestaurant();
        setRestaurant(data);
    };


    const debouncedSearch = useMemo(
        () =>
            debounce(async (value) => {
                if (value) {
                    const data = await searchRestuarant(value);
                    setRestaurant(data);
                } else {
                    fetchRestarants();
                }
            }, 500),
        []
    );

    const handlesearch = async (e) => {
        const value = e.target.value;
        setSearch(value);
        debouncedSearch(value);
    };

    const handlecategoryChange = async (e) => {
        const value = e.target.value;
        setCategoryFilter(value);
        if (value) {
            const data = await filterByCategory(value);
            setRestaurant(data);
        } else {
            fetchRestarants();
        }
    };

    const handleRatingChange = async (e) => {
        const value = e.target.value;
        setRatingFilter(value);
        if (value) {
            const data = await filterByrating(value);
            setRestaurant(data);
        } else {
            fetchRestarants();
        }
    };




    return (
        <div className="container mx-auto p-4">
            <div className="my-8 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-extrabold text-red-500 mb-4"> FoodieZone</h1>
                <h2 className="text-2xl font-semibold text-gray-800">Restaurant List</h2>
            </div>
            <div className="mb-4 flex gap-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={handlesearch}
                    className="border p-2 rounded-md w-1/3"
                />

                <select
                    value={categoryFilter}
                    onChange={handlecategoryChange}
                    className="border p-2 rounded-md"
                >

                    <option value="">All Categories</option>
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Biryani">Biryani</option>
                </select>

                <select
                    value={ratingFilter}
                    onChange={handleRatingChange}
                    className="border p-2 rounded-md"
                >

                    <option value="">All Ratings</option>
                    <option value="5">5+</option>
                    <option value="4">4+</option>
                    <option value="3">3+</option>

                </select>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurants.map((r) => (
                    <li key={r._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
                        <img src={`http://localhost:5000/${r.image}`}
                            alt={r.name}
                            className="w-full h-40 object-cover rounded mb-2"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold text-lg">{r.name}</h2>
                            <p>Rating: {r.rating}</p>
                            <p>Cuisine: {r.cuisine}</p>
                            <p>Price: {r.price}</p>
                            <p>Location: {r.location}</p>
                            <button className="bg-red-400 hover:bg-red-300 text-white px-4 py-2 rounded-md transition-colors duration-200">
                                Order Now
                            </button>
                        </div>
                    </li>

                ))}
            </ul>

        </div>
    );
};

export default RestaurantList;