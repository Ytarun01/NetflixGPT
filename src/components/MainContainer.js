import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies);

  if (!movies || movies.length === 0) return null; // Add check for empty array

  const mainMovie = movies[1]; // Ensure movies array has at least 2 elements
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie || {}; // Add fallback in case mainMovie is undefined

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
