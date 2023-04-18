import {createBrowserRouter} from "react-router-dom";
import Login from "../page/login_page";
import ErrorPage from "../error-page";
import Register from '../page/register_page'

export default createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);