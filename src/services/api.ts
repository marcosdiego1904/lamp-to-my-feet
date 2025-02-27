import axios from "axios";
import API_BASE_URL from "../config/api";

// Configuración del cliente Axios
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCategories = async () => {
    try {
      const response = await api.get("/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };
  export const getSubcategories = async (categoryId: number) => {
    try {
      const response = await api.get(`/subcategories/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching subcategories for category ${categoryId}:`, error);
      return [];
    }
  };
  
  export const getVerses = async (subcategoryId: number) => {
    try {
      const response = await fetch(`http://localhost:5000/verses/${subcategoryId}`); // 🔥 URL CORRECTA
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Versículos obtenidos:", data); // Depuración
      return data;
    } catch (error) {
      console.error("Error obteniendo versículos:", error);
      return [];
    }
  };
  
  
  
  

export default api;
