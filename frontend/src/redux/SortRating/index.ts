import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  rating: "",
};

export const SortRatingSlice = createSlice({
  name: "SortRatingSlice",
  initialState,
  reducers: {
    setSortRating(state, action: PayloadAction<string>) {
      state.rating = action.payload;
    },
  },
});

export const { setSortRating } = SortRatingSlice.actions;
export const parametersRating = (state: RootState) => state.SortRatingSlice;

export default SortRatingSlice.reducer;
