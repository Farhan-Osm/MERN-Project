import { createBrowserRouter} from "react-router-dom";
import Home from "../home/Home";
import App from "../App";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import LogOut from "../components/LogOut";
import PrivateRoute from "../privateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "shop",
            element: <Shop/>,
        },
        {
            path: "about",
            element: <About/>,
        },
        {
            path: "blog",
            element: <Blog/>,
        },
        {
            path: "/book/:id",
            element: <SingleBook/>,
            loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
        },
        
    ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>,
        },
        {
            path: "/admin/dashboard/upload",
            element: <UploadBook/>,
        },
        {
            path: "/admin/dashboard/manage",
            element: <ManageBook/>,
        },
        {
            path: "/admin/dashboard/edit-books/:id",
            element: <EditBook/>,
            loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
        }
      ]
    },
    {
      path: "sign-up",
      element: <SignUp/>
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "logout",
      element: <LogOut/>
    }
  ]);
 
  export default router