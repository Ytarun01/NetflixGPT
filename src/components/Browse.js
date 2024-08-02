import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcomming from "../hooks/useUpcomming";
import Gpt from "./Gpt";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const nowPlayingMovies = useNowPlaying();
  const popularMovies = usePopularMovie();
  const upcomingMovies = useUpcomming();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <>
      <Header />
      {showGptSearch ? (
        <Gpt />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
