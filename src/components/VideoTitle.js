import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="pt-36 px-12 ">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="w-1/4 text-lg py-6">{overview}</p>
        <button className="bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-xl">
          play
        </button>
        <button className="mx-2 bg-gray-800  text-black p-4 px-12 text-xl bg-opacity-50 rounded-xl">
          more info
        </button>
      </div>
    </>
  );
};

export default VideoTitle;
