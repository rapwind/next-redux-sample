process.env.MOCK = "true";
// eslint-disable-next-line import/first
import axios from "~/utils/axios";

describe("axios", () => {
  it("should return correct object when use mock", () => {
    expect(axios.get("/sample/1")).resolves.toEqual(
      expect.objectContaining({
        data: {
          id: "1",
          name: "たろう",
        },
      })
    );
  });
});
