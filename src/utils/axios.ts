import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "/api",
  timeout: 3000,
});
if (process.env.MOCK && process.env.MOCK === "true") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const mock = require("~/stubs/mock").default;
  mock(axiosInstance);
}
export default axiosInstance;
