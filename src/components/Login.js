import React from "react";
import Header from "./Header";
import { useState } from "react";

function Login() {
  const [isSignIn, setisSignIn] = useState(true);
  const toggleSignIn = () => {
    setisSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
          alt="bg logo"
        />
      </div>
      <form className="p-12 absolute w-3/12 bg-black m-36 mx-auto right-0 left-0 text-white bg-opacity-70">
        <h1 className="font-bold text-3xl py-4 w-full">
          {isSignIn ? "Sign In " : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-500 rounded-xl bg-opacity-70"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500 rounded-xl bg-opacity-70"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-500 rounded-xl bg-opacity-70 "
        />
        <button className="p-4 my-4 w-full bg-red-700">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now. "
            : "Already registed ? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
