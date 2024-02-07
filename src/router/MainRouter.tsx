import {createBrowserRouter} from "react-router-dom"
import Layout from "../Block/Layout"
import HomeScreen from "../Pages/HomeScreen";


export const mainApp = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen/>
      },
    ],
  },
]);