import React from "react";
import { IMG_URL } from "../utils/const";
const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <>
      <div className="w-48 pr-4">
        <img src={IMG_URL + posterpath} alt="" />
      </div>
    </>
  );
};

export default MovieCard;
