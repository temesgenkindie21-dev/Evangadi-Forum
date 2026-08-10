import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:4567/api",
});

export default axiosBase;
