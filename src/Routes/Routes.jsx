import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Planets from "../components/Planets";
import Stars from "../components/Stars";
import APOD from "../components/APOD";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apod",
        element: <APOD />,
      },
      {
        path: "/planet-details",
        element: <Planets />,
      },
      {
        path: "/star-details",
        element: <Stars />,
      },
    ],
  },
]);

export default router;
