import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Form from "../Pages/Home/Form/Form";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'/form',
          element:<Form></Form>
        },
        // {
        //   path:'#my_modal_8',
        //   element:<DownloadTicket></DownloadTicket>
        // }
      ]
    },
  ]);