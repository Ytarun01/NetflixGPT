import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/const";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => {
    store.movies.nowPlayingMovies;
  });
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlayingMovies) getNowPlaying();
  }, []);
};

export default useNowPlaying;
