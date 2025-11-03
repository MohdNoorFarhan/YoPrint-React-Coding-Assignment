// src/features/detailSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface DetailState {
  loading: boolean;
  error: string | null;
  data: any | null;
}

const initialState: DetailState = { loading: false, error: null, data: null };

const slice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    detailStarted(state) {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    detailSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    detailFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
    clearDetail(state) {
      state.loading = false;
      state.error = null;
      state.data = null;
    },
  },
});

export const { detailStarted, detailSuccess, detailFailure, clearDetail } =
  slice.actions;
export default slice.reducer;
