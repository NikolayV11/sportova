import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { TypeCheckBox, TypeFilterPrice } from "../../Type";

type TypeStale = {
  filterAge: TypeCheckBox;
  filterPrice: TypeFilterPrice;
  checkBox: TypeCheckBox[];
  sale: boolean;
};
const initialState: TypeStale = {
  filterAge: { title: "Вся семья", value: "family" },
  filterPrice: { Min: 0, Max: 99999 },
  sale: false,
  checkBox: [
    { title: "Вся семья", value: "family" },
    { title: "Взрослые", value: "adults" },
    { title: "Детские", value: "children's" },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const filterParamsSlice = createSlice({
  name: "filterParams",
  initialState,
  reducers: {
    paramsFilterAge(state, action: PayloadAction<TypeCheckBox>) {
      console.log(action.payload);
      state.filterAge = action.payload;
    },
    paramsFilterPriceMin(state, action: PayloadAction<number>) {
      console.log(action.payload, "reduxMin");
      state.filterPrice.Min = action.payload;
    },
    paramsFilterPriceMax(state, action: PayloadAction<number>) {
      console.log(action.payload, "reduxMax");
      state.filterPrice.Max = action.payload;
    },
    paramsFilterSale(state, action: PayloadAction<boolean>) {
      console.log(action.payload, "sale");
      state.sale = action.payload;
    },
  },
});

export const { paramsFilterAge, paramsFilterPriceMin, paramsFilterPriceMax, paramsFilterSale } =
  filterParamsSlice.actions;
export const parametersFilters = (state: RootState) => state.FilterParams;

export default filterParamsSlice.reducer;
