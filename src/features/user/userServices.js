import { base_url } from "../../utils/axiosCongif";

const axios = require("axios");
const registerUser = async (user) => {
  const res = await axios.post(`${base_url}user/register`, user);
  console.log(res);
  if (res?.data) {
    return res?.data;
  }
};

export const authServices = {
  registerUser,
};
