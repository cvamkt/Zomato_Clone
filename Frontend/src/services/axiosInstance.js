import axios from "axios";

const API_URL = "http://localhost:5000/api/restaurants";

const axiosInstance = axios.create({
  baseURL: API_URL, // optional if you want to call endpoints relative to this
});

export default axiosInstance;
