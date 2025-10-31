import axios from "axios";
import { API_URL } from "../misc/const";

export const getUserData: any = async () => {
  const response: any = await axios.get(API_URL + "/auth", { withCredentials: true })
    .then(response => response.data)
  return response;
};