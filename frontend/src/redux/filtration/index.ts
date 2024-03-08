import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

import { TypeCheckBox, TypeFilterPrice } from "../../Type";

type typeParams = {
  pathPage: string;
  filterAge: TypeCheckBox;
  filterPrice: TypeFilterPrice;
};

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

  async (params: typeParams) => {
    const { pathPage, filterAge, filterPrice } = params;
    console.log(filterPrice);
    console.log(pathPage);

    let filterByAge = "";
    if (filterAge.value !== "family") {
      filterByAge = `filterAge=${filterAge.value}`;
    }
    console.log(filterByAge);
    const { data } = await axios.get(
      `http://localhost:5030/data/${pathPage}?${filterByAge}&priceMin=${filterPrice.Min}&priceMax=${filterPrice.Max}`,
    );

    return data;
  },
);
export const filtrationSlice = createSlice({
  name: "catalogPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder // fulfilled выполнено
      .addCase(fetchCatalog.fulfilled, (state, action: PayloadAction<productType[]>) => {
        console.log(action.payload, "act");
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

// передаем полученные данные
export const selectProductData = (state: RootState) => state.filter;

export default filtrationSlice.reducer;
