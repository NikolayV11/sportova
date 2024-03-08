import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { TypeCheckBox } from "../../Type";

const initialState = {
  filterAge: { title: "Вся семья", value: "family" },
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
  },
});

export const { paramsFilterAge } = filterParamsSlice.actions;
export const parametersFilters = (state: RootState) => state.FilterParams;

export default filterParamsSlice.reducer;
