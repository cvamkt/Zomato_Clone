import axiosInstance from "./axiosInstance";


//get

export const getRestaurant = async () => {
    try {
        
        const response = await axiosInstance.get("/");
        console.log("fetched restaurant:", response.data);
        
        return response.data;
    } catch (error) {
        console.error(error);
        return[];
        
    }
};

//search

export const searchRestuarant = async(query) => {
    try {
        
        const response = await axiosInstance.get(`/?search=${query}`);
        console.log("searched restaurant:", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return[];
        
    }
};

//filter by category

export const filterByCategory = async (category) => {
    try {
        
        const response = await axiosInstance.get(`/?category=${category}`);
        console.log("filtered restaurant:", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return[];
        
    }
};


//filter by rating

export const filterByrating = async (rating) => {
    try {
        
        const response = await axiosInstance.get(`/?rating=${rating}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return[];
    }
};