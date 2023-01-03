import axios from "axios";

const axiosCall = (url) => {
  return axios.get(`http://localhost:3000/${url}`);
};

export default axiosCall;
