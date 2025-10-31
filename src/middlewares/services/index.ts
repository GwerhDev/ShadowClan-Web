import axios from "axios";
import { API_URL } from "../misc/const";

export const getUserData: any = async () => {
  const response: any = await axios.get(API_URL + "/auth", { withCredentials: true })
    .then(response => response.data);
  return response;
};

export const clearUserToken = async () => {
  try {
    await fetch(API_URL + "/logout", {
      method: "GET",
      credentials: "include"
    });
  } catch (error) {
    console.log(error);
    return;
  }
};