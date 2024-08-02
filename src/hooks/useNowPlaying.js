import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/const";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

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
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      getNowPlaying();
    }
  }, [nowPlayingMovies, dispatch]);

  return nowPlayingMovies;
};

export default useNowPlaying;
