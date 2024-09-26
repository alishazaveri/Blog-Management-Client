import axios from "axios";

export const SERVICE = axios.create({
  baseURL: "https://blog-management-ad3d.onrender.com",
  withCredentials: true,
});
