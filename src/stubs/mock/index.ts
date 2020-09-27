import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import SampleEntity from "~/entities/SampleEntity";
import samples from "./samples.json";

const axiosMock = (instance: AxiosInstance): void => {
  const mock = new MockAdapter(instance);
  mock.onGet("/api/sample").reply(200, samples);
  samples.forEach((sample: SampleEntity) => {
    mock.onGet(`/api/sample/${sample.id}`).reply(200, sample);
  });
};
export default axiosMock;
