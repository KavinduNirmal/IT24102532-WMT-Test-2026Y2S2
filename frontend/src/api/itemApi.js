import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

console.log("imported URL:", import.meta.env.VITE_API_URL);
console.log("API Base URL:", API.defaults.baseURL);

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;