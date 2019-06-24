import axios from "axios";

const instance = axios.create({
  baseURL: "13.233.238.238:5000/"
});

export default instance;
