import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    console.log("Request to:", config.url);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response from:", response.config.url);
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    if (error.response?.status === 401) {
      alert("Session expired. Please log in again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
