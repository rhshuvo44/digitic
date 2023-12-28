import axios from "axios";
import { base_url, config } from "../../utils/axiosCongif";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  return response.data;
};
const getUserWishlists = async () => {
  const response = await axios.get(`${base_url}user/wishlist/`, config);
  return response.data;
};
const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart/`, cartData, config);
  return response.data;
};
const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart/`, config);
  return response.data;
};

export const authService = {
  login,
  register,
  getUserWishlists,
  addToCart,
  getCart,
};
