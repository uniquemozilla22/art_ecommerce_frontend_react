import axios from "axios";

const base = "http://192.168.1.67:4000/";

const axiosBase = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosBase;
