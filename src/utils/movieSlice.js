import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: [] },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.PopularMovie = action.payload;
    },
    addUpcomming: (state, action) => {
      state.Upcomming = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovie,
  addUpcomming,
} = movieSlice.actions;
export default movieSlice.reducer;
