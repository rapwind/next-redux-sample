import MockAdapter from "axios-mock-adapter";
import axios from "~/utils/axios";
import sampleSlice, { actions, SampleState } from "./sampleSlice";

describe("sampleSlice", () => {
  const initialState = {
    loadingList: false,
    loadingListError: false,
    loadingFetch: false,
    loadingFetchError: false,
    list: [],
    data: {},
  };

  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("/api/sample").reply(200, []);
    mock.onGet("/api/sample/1").reply(200, {
      id: "1",
      name: "たろう",
    });
  });

  it("listSampleAction.pending", () => {
    const action = { type: actions.listSampleAction.pending };
    const state = sampleSlice.reducer({ ...initialState }, action);
    expect(state).toEqual(
      expect.objectContaining({
        list: [],
        loadingList: true,
        loadingListError: false,
      })
    );
  });

  it("listSampleAction.resolved", () => {
    const sampleObjects = [
      {
        id: "0",
        name: "test",
      },
    ];
    const action = {
      type: actions.listSampleAction.fulfilled,
      payload: [...sampleObjects],
    };
    const state = sampleSlice.reducer({ ...initialState }, action);
    expect(state).toEqual(
      expect.objectContaining({
        list: [...sampleObjects],
        loadingList: false,
        loadingListError: false,
      })
    );
  });

  it("listSampleAction.rejected", () => {
    const action = { type: actions.listSampleAction.rejected };
    const state = sampleSlice.reducer({ ...initialState }, action);
    expect(state).toEqual(
      expect.objectContaining({
        list: [],
        loadingList: false,
        loadingListError: true,
      })
    );
  });

  it("fetchSampleAction.pending", () => {
    const action = { type: actions.fetchSampleAction.pending };
    const state = sampleSlice.reducer({ ...initialState }, action);
    expect(state).toEqual(
      expect.objectContaining({
        data: {},
        loadingFetch: true,
        loadingFetchError: false,
      })
    );
  });

  it("fetchSampleAction.resolved", () => {
    const sampleObject = {
      id: "0",
      name: "test",
    };
    const action = {
      type: actions.fetchSampleAction.fulfilled,
      payload: {...sampleObject},
    };
    const state = sampleSlice.reducer({ ...initialState }, action);
    expect(state).toEqual(
      expect.objectContaining({
        data: {...sampleObject},
        loadingFetch: false,
        loadingFetchError: false,
      })
    );
  });

  it("fetchSampleAction.rejected", () => {
    const action = { type: actions.fetchSampleAction.rejected };
    const state = sampleSlice.reducer({ ...initialState }, action);
    expect(state).toEqual(
      expect.objectContaining({
        data: {},
        loadingFetch: false,
        loadingFetchError: true,
      })
    );
  });

  it("listSampleAction should return empty array", async () => {
    const dispatch = jest.fn();
    const state: SampleState = { ...initialState };
    const thunk = actions.listSampleAction();
    await thunk(dispatch, () => state, null);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).nthCalledWith(
      1,
      expect.objectContaining({
        type: actions.listSampleAction.pending.type,
      })
    );
    expect(dispatch).nthCalledWith(
      2,
      expect.objectContaining({
        payload: [],
        type: actions.listSampleAction.fulfilled.type,
      })
    );
  });

  it("fetchSampleAction should return correct object", async () => {
    const dispatch = jest.fn();
    const state: SampleState = { ...initialState };
    const thunk = actions.fetchSampleAction({ id: "1" });
    await thunk(dispatch, () => state, null);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).nthCalledWith(
      1,
      expect.objectContaining({
        type: actions.fetchSampleAction.pending.type,
      })
    );
    expect(dispatch).nthCalledWith(
      2,
      expect.objectContaining({
        payload: {
          id: "1",
          name: "たろう",
        },
        type: actions.fetchSampleAction.fulfilled.type,
      })
    );
  });

  it("fetchSampleAction throw 404 error", async () => {
    const dispatch = jest.fn();
    const state: SampleState = { ...initialState };
    const thunk = actions.fetchSampleAction({ id: "0" });
    await thunk(dispatch, () => state, null);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).nthCalledWith(
      1,
      expect.objectContaining({
        type: actions.fetchSampleAction.pending.type,
      })
    );
    expect(dispatch).nthCalledWith(
      2,
      expect.objectContaining({
        type: actions.fetchSampleAction.rejected.type,
      })
    );
  });
});
