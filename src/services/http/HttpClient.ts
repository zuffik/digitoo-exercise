import axios, { AxiosInstance } from "axios";

export const createHttpClient = (): AxiosInstance =>
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: "json",
    headers: {
      "X-API-KEY": process.env.REACT_APP_API_KEY,
    },
  });

export const httpClient: AxiosInstance = createHttpClient();
