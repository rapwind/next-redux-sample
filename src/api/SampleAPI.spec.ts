import MockAdapter from "axios-mock-adapter";
import axios from "~/utils/axios";
import SampleAPI from "./SampleAPI";

describe("SampleAPI", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("/api/sample").reply(200, []);
    mock.onGet("/api/sample/1").reply(200, {
      id: "1",
      name: "たろう",
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("fetch should return correct object", () => {
    expect(SampleAPI.fetch({ id: "1" })).resolves.toEqual({
      id: "1",
      name: "たろう",
    });
  });
  it("fetch should throw 404 status", () => {
    expect(SampleAPI.fetch({ id: "0" })).rejects.toThrowError();
  });
  it("list should return correct status", () => {
    expect(SampleAPI.list()).resolves.toEqual([]);
  });
});
