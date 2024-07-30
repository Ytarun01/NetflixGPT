import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log(movies + "hi");
  return (
    <div className="bg-black p-12">
      <div className="mt-0 md:-mt-40 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcomming"} movies={movies.Upcomming} />
        <MovieList title={"Top Rated"} movies={movies.PopularMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
