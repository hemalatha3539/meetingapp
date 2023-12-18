import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./navbar";
import Mymeet from "./mymeet";
import Addmeet from "./Addmeet";
import Allmeets from "./Allmeets";
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div className="index">
      <Nav />
      <Outlet/>
    </div>
  );
};
const ways = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
     
      {
        path: "/",
        element: <Allmeets />,
      },
      {
        path: "/Mymeet",
        element: <Mymeet />,
      },
      {
        path: "/Addmeet",
        element: <Addmeet />,
      },
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ways} />);
