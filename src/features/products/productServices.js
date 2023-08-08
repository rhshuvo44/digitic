import axios from "axios";
import { base_url } from "../../utils/axiosCongif";

const getallProducts = async () => {
  const responsive = await axios.get(`${base_url}product/`);
  return responsive.data;
};
export const productServices = {
  getallProducts,
};
