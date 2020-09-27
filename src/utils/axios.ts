import axios from "axios";

const { MOCK, API_BASE_URL } = process.env;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL || "/api",
  timeout: 3000,
});
if (MOCK && MOCK === "true") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const mock = require("~/stubs/mock").default;
  mock(axiosInstance);
}
export default axiosInstance;
