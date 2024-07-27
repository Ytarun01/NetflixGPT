import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/const";
import useNowPlaying from "../hooks/useNowPlaying";

import { addNowPlayingMovies } from "../utils/movieSlice";

const Browse = () => {
  // const dispatch = useDispatch();
  // const getNowPlaying = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json.results);
  //   dispatch(addNowPlayingMovies(json.results));
  // };
  // useEffect(() => {
  //   getNowPlaying();
  // }, []);
  useNowPlaying();
  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
