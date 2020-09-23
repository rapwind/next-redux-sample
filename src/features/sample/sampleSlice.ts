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
  loadingListError: boolean;
  loadingFetch: boolean;
  loadingFetchError: boolean;
  list: SampleEntity[];
  data: SampleEntity;
};

const initialState: SampleState = {
  loadingList: false,
  loadingListError: false,
  loadingFetch: false,
  loadingFetchError: false,
  list: [],
  data: {},
};

export const listSampleAction = createAsyncThunk<ListSampleResponse, void>(
  `${name}/listSampleAction`,
  (): Promise<ListSampleResponse> => SampleAPI.list()
);

export const fetchSampleAction = createAsyncThunk<
  FetchSampleResponse,
  FetchSampleRequest
>(
  `${name}/fetchSampleAction`,
  (payload): Promise<FetchSampleResponse> => SampleAPI.fetch(payload)
);

const sampleSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [listSampleAction.pending.type]: (state: SampleState): SampleState => ({
      ...state,
      loadingList: true,
      loadingListError: false,
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
      loadingListError: true,
      list: [],
    }),
    [fetchSampleAction.pending.type]: (state: SampleState): SampleState => ({
      ...state,
      loadingFetch: true,
      loadingFetchError: false,
    }),
    [fetchSampleAction.fulfilled.type]: (
      state: SampleState,
      action: PayloadAction<FetchSampleResponse>
    ): SampleState => ({
      ...state,
      loadingFetch: false,
      data: action.payload,
    }),
    [fetchSampleAction.rejected.type]: (state: SampleState): SampleState => ({
      ...state,
      loadingFetch: false,
      loadingFetchError: true,
      data: {},
    }),
  },
});

export default sampleSlice;
