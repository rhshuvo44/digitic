import axios from "axios";
import { base_url, config } from "../../utils/axiosCongif";

const createdContacts = async (enqData) => {
  const responsive = await axios.post(`${base_url}enquiry/`, enqData, config);
  return responsive.data;
};

export const contactServices = {
  createdContacts,
};
