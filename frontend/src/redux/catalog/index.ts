import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "catalog",

  initialState,
  reducers: {
    setActiveCatalog(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const { setActiveCatalog } = counterSlice.actions;

export const selectCount = (state: RootState) => state.catalog.value;

export default counterSlice.reducer;
