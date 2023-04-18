import {createBrowserRouter} from "react-router-dom";
import Dashboard from '../page/dashboard_page'
import ErrorPage from "../error-page"


export default createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    
    
  ]);