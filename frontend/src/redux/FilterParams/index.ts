import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { TypeCheckBox, TypeFilterPrice } from "../../Type";

type TypeStale = {
  filterAge: TypeCheckBox;
  filterPrice: TypeFilterPrice;
  checkBox: TypeCheckBox[];
  sale: boolean;
  filterColor: string[];
  filterLoad: string[];
};
const initialState: TypeStale = {
  filterAge: { title: "Вся семья", value: "family" },
  filterPrice: { Min: 0, Max: 99999 },
  sale: false,
  filterColor: [],
  filterLoad: [],
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
      state.filterAge = action.payload;
    },
    paramsFilterPriceMin(state, action: PayloadAction<number>) {
      state.filterPrice.Min = action.payload;
    },
    paramsFilterPriceMax(state, action: PayloadAction<number>) {
      state.filterPrice.Max = action.payload;
    },
    paramsFilterSale(state, action: PayloadAction<boolean>) {
      state.sale = action.payload;
    },
    paramsFilterColor(state, action: PayloadAction<TypeCheckBox>) {
      if (action.payload.status) {
        state.filterColor.push(action.payload.value);
        return;
      }
      state.filterColor = state.filterColor.filter((item) => item !== action.payload.value);
    },
    paramsFilterLoad(state, action: PayloadAction<TypeCheckBox>) {
      if (action.payload.status) {
        state.filterLoad.push(action.payload.value);
        return;
      }
      state.filterLoad = state.filterLoad.filter((item) => item !== action.payload.value);
    },
  },
});

export const {
  paramsFilterAge,
  paramsFilterPriceMin,
  paramsFilterPriceMax,
  paramsFilterSale,
  paramsFilterColor,
  paramsFilterLoad,
} = filterParamsSlice.actions;
export const parametersFilters = (state: RootState) => state.FilterParams;

export default filterParamsSlice.reducer;
