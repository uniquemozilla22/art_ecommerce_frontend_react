import axios from "axios";

const base = "https://localhost:4000/";

const axiosBase = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
