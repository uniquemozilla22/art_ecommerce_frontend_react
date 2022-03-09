import axios from "axios";
import store from "./store/store";

const base = "http://localhost:4000/";

const axiosBase = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
