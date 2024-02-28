import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
import { error } from "console";

// interface CounterState {
//   value: boolean;
// }

const initialState: any = {
  items: [],
};

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalogStatus",

  async () => {
    // const { order, sortType, category, search, currentPage, limit } = params;
    console.log("dataServer");
    const { data } = await axios.get<any>(`http://localhost:5030/data/street_equipment`);
    console.log(data);
  },
);
export const filtrationSlice = createSlice({
  name: "catalogPage",

  initialState,
  reducers: {
    // setActiveCatalog(state, action: PayloadAction<boolean>) {},
  },
  extraReducers: (builder) => {
    builder // fulfilled выполнено
      .addCase(fetchCatalog.fulfilled, (state, action: PayloadAction<any>) => {
        console.log(action, "act");
        state.items = action.payload;
      }) // pending в ожидании
      .addCase(fetchCatalog.pending, (state) => {
        console.log("long");
        state.items = [];
      }) // rejected отклоненный
      .addCase(fetchCatalog.rejected, (state) => {
        console.log("err");
        state.items = [];
      });
  },
});

// export const { setActiveCatalog } = filtrationSlice.actions;

export const selectCount = (state: RootState) => state.catalog.value;

export default filtrationSlice.reducer;
