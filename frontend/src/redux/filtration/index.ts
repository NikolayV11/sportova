import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

export type productType = {
  id: number;
  title: string;
  price: number;
  discount?: number;
  urlImg: string;
};

type silect = {
  items: productType[];
};
const initialState: silect = {
  items: [],
};

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalogStatus",

  async (params: any) => {
    console.log(params);
    const { pathPage } = params;
    console.log("dataServer", pathPage);
    const { data } = await axios.get<any>(`http://localhost:5030/data/${pathPage}`);
    console.log(data);
    return data;
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
        if (action.payload) {
          const data = action.payload;
          state.items = data.map((item: productType) => {
            item.urlImg = "http://localhost:5030/public/img/" + item.urlImg;
            return item;
          });
        }
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

export const selectProductData = (state: RootState) => state.filter;

export default filtrationSlice.reducer;
