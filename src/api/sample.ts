import { SampleEntity } from "~/entities/Sample";
import axios from "~/utils/axios";

export type ListSampleResponse = SampleEntity[];
export type FetchSampleRequest = { id: string };
export type FetchSampleResponse = SampleEntity;

const SampleAPI = {
  list: async (): Promise<ListSampleResponse> =>
    (await axios.get("/sample")).data,
  fetch: async (req: FetchSampleRequest): Promise<FetchSampleResponse> =>
    (await axios.get(`/sample/${req.id}`)).data,
};
export default SampleAPI;
