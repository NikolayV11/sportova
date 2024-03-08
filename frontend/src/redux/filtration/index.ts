import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

import { TypeCheckBox, TypeFilterPrice } from "../../Type";

type typeParams = {
  pathPage: string;
  filterAge: TypeCheckBox;
  filterPrice: TypeFilterPrice;
  sale: boolean;
  filterColor: string[];
  filterLoad: string[];
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
    const { pathPage, filterAge, filterPrice, sale, filterColor, filterLoad } = params;

    let filterByAge = "";
    let filterSale = "";
    let filterColorArr = "";
    let filterLoadArr = "";

    if (filterColor.length > 0) {
      filterColorArr = `color=[${filterColor}]`;
    }
    if (filterLoad.length > 0) {
      filterLoadArr = `load=[${filterLoad}]`;
    }

    if (sale) {
      filterSale = `sale=true`;
    }
    if (filterAge.value !== "family") {
      filterByAge = `filterAge=${filterAge.value}`;
    }

    const { data } = await axios.get(
      `http://localhost:5030/data/${pathPage}?${filterByAge}&priceMin=${filterPrice.Min}&priceMax=${filterPrice.Max}&${filterSale}&${filterColorArr}&${filterLoadArr}`,
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
        // console.log("act");
        if (action.payload) {
          const data = action.payload;
          state.items = data.map((item: productType) => {
            item.urlImg = "http://localhost:5030/public/img/" + item.urlImg;
            return item;
          });
        }
      }) // pending в ожидании
      .addCase(fetchCatalog.pending, (state) => {
        // console.log("long");
        state.items = [];
      }) // rejected отклоненный
      .addCase(fetchCatalog.rejected, (state) => {
        // console.log("err");
        state.items = [];
      });
  },
});

// передаем полученные данные
export const selectProductData = (state: RootState) => state.filter;

export default filtrationSlice.reducer;
