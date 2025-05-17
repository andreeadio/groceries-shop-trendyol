import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // maybe baseURL
});

export const getAllProducts = () => API.get("/products");
export const getAllRecipes = () => API.get("/recipes");
export const addToCart = (userId, product) => API.post(`/cart/${userId}/add`, product);