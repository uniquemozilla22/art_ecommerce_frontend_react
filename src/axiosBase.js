import axios from "axios";

const base = "http://192.168.1.116:4000/";

const axiosBase = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
