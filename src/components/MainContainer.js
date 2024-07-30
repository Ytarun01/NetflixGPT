import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[1];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie || {};

  return (
    <>
      {mainMovie && (
        <>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
        </>
      )}
    </>
  );
};

export default MainContainer;
