import Axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const API_URL = "https://api.tvmaze.com/singlesearch/shows";

export const apiSlice = createSlice({
  name: "rickandmorty",
  initialState: {
    episodes: [],
    favourites: [],
  },
  reducers: {
    addEpisodes: (state, action) => {
      state.episodes.push(...action.payload);
    },
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

// async thunk function
export const addEpisodesFromAPI = () => (dispatch) => {
  Axios.get(API_URL, {
    params: { q: "rick-&-morty", embed: "episodes" },
  }).then((response) => {
    const { episodes } = response.data._embedded;
    dispatch(addEpisodes(episodes));
  });
};

export const { addEpisodes, addFavourite, removeFavourite } = apiSlice.actions;
export const selectEpisodes = (state) => state.api.episodes;
export const selectFavourites = (state) => state.api.favourites;

export default apiSlice.reducer;
