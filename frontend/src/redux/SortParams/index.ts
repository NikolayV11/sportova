import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { TypeParams, TypeValueParams, ParamsSort } from "../../Type";

const initialState: ParamsSort = {
  params: TypeValueParams.DESC,
  type: TypeParams.DISCOUNTS,
};

export const SortParamsSlice = createSlice({
  name: "SortParamsSlice",
  initialState,
  reducers: {
    setSortParamsSlice(state, action: PayloadAction<ParamsSort>) {
      state.params = action.payload.params;
      state.type = action.payload.type;
    },
  },
});

export const { setSortParamsSlice } = SortParamsSlice.actions;
export const parametersSort = (state: RootState) => state.SortParamsSlice;

export default SortParamsSlice.reducer;
