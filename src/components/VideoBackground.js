import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailervideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div>
      {trailervideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailervideo.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
