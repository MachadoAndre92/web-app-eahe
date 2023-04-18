import {createBrowserRouter} from "react-router-dom";
import Dashboard from '../page/dashboard_page'
import ErrorPage from "../error-page"
import Register from '../page/register_page'


export default createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
    
    
  ]);