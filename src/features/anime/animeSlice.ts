import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as jikan from "../../api/jikan";

type Anime = any;
const searchAnime = (jikan as any).searchAnime as (query: string, page?: number) => Promise<any>;
const getAnimeById = (jikan as any).getAnimeById as (id: number) => Promise<any>;

interface AnimeState {
  list: Anime[];
  query: string;
  page: number;
  selectedAnime: Anime | null;
  loading: boolean;
  error: string | null;
}

const initialState: AnimeState = {
  list: [],
  query: "",
  page: 1,
  selectedAnime: null,
  loading: false,
  error: null,
};

// ✅ Thunk for search
export const fetchAnimeList = createAsyncThunk(
  "anime/fetchAnimeList",
  async ({ query, page = 1 }: { query: string; page?: number }) => {
    const res = await searchAnime(query, page);
    return res.data; // Jikan returns { data: [...] }
  }
);

// ✅ Thunk for detail
export const fetchAnimeDetails = createAsyncThunk(
  "anime/fetchAnimeDetails",
  async (id: number) => {
    const res = await getAnimeById(id);
    return res.data;
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnimeList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload || [];
      })
      .addCase(fetchAnimeList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch anime";
      })
      .addCase(fetchAnimeDetails.fulfilled, (state, action) => {
        state.selectedAnime = action.payload;
      });
  },
});

export const { setQuery } = animeSlice.actions;
export default animeSlice.reducer;
