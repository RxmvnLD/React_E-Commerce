import axios from "axios";
import { baseURL } from "../config/index.js";

export const getToken = () => {
  const storedToken = window.localStorage.getItem("token");
  if (typeof storedToken === "string") {
    return storedToken;
  } else {
    return false;
  }
};

const axiosInstance = axios.create({
  baseURL: baseURL,
});

//Post
export const axiosPost = async (url, data) => {
  try {
    const res = await axiosInstance.post(url, data);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const axiosGet = async (url) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const axiosPut = async (url, data) => {
  try {
    const res = await axiosInstance.put(url, data);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const axiosDel = async (url, data) => {
  try {
    const res = await axiosInstance.delete(url, { data });
    return res.data;
  } catch (error) {
    throw error.response;
  }
};
