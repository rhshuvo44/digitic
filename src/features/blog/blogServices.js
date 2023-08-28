import axios from "axios";
import { base_url } from "../../utils/axiosCongif";

const getallblogs = async () => {
  const responsive = await axios.get(`${base_url}blog/`);
  return responsive.data;
};
const getBlog = async (id) => {
  const responsive = await axios.get(`${base_url}blog/${id}`);
  return responsive.data;
};

export const blogServices = {
  getallblogs,
  getBlog,
};
