import axios from "axios";
import mock from "~/stubs/mock";

// const { MOCK } = process.env;
const MOCK = true;

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
});
if (MOCK) {
  mock(axiosInstance);
}
export default axiosInstance;
