import axios from "axios";

const base = "http://localhost:4000";

const axiosBase = axios.create({
  baseURL: base,
});

export default axiosBase;
