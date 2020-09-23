import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import SampleAPI, {
  FetchSampleRequest,
  FetchSampleResponse,
  ListSampleResponse,
} from "~/api/sample";
import SampleEntity from "~/entities/SampleEntity";

const name = "sample";

export type SampleState = {
  loadingList: boolean;
  loadingFetch: boolean;
  list: SampleEntity[];
  data: SampleEntity;
};

const initialState: SampleState = {
  loadingList: false,
  loadingFetch: false,
  list: [],
  data: {},
};

export const listSampleAction = createAsyncThunk<ListSampleResponse, void>(
  `${name}/list`,
  async (): Promise<ListSampleResponse> => {
    return SampleAPI.list();
  }
);

export const fetchSampleAction = createAsyncThunk<
  FetchSampleResponse,
  FetchSampleRequest
>(
  `${name}/fetch`,
  async (payload): Promise<FetchSampleResponse> => {
    return SampleAPI.fetch(payload);
  }
);

const sampleSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [listSampleAction.pending.type]: (state: SampleState): SampleState => ({
      ...state,
      loadingList: true,
    }),
    [listSampleAction.fulfilled.type]: (
      state: SampleState,
      action: PayloadAction<ListSampleResponse>
    ): SampleState => ({
      ...state,
      loadingList: false,
      list: action.payload,
    }),
    [listSampleAction.rejected.type]: (state: SampleState): SampleState => ({
      ...state,
      loadingList: false,
      list: [],
    }),
    [fetchSampleAction.pending.type]: (state: SampleState): SampleState => ({
      ...state,
      loadingFetch: true,
    }),
    [fetchSampleAction.fulfilled.type]: (
      state: SampleState,
      action: PayloadAction<FetchSampleResponse>
    ): SampleState => ({
      ...state,
      data: action.payload,
      loadingFetch: false,
    }),
    [fetchSampleAction.rejected.type]: (state: SampleState): SampleState => ({
      ...state,
      data: {},
      loadingFetch: false,
    }),
  },
});

export default sampleSlice;
