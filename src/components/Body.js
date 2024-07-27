import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const { uid, email, displayName } = user;
  //     dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //     // navigate("/browse");
  //   } else {
  //     dispatch(removeUser());
  //     // navigate("/");
  //   }
  // });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
