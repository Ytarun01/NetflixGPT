import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlaying();
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
};

export default Browse;
