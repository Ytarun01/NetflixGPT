import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="w-1/4 text-lg py-6">{overview}</p>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-xl">
          play
        </button>
        <button className="mx-2 bg-gray-800  text-white p-4 px-12 text-xl bg-opacity-50 rounded-xl">
          more info
        </button>
      </div>
    </>
  );
};

export default VideoTitle;
