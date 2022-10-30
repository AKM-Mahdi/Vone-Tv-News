import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Categories/Category.js/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LoginOrRegister/Login/Login";
import Register from "../../Pages/LoginOrRegister/Register/Register";
import News from "../../Pages/News/News";
import Terms from "../../Pages/TermsAndCondtion/Terms";
import PrivateRoutes from "../Private Routes/PrivateRoutes";
import MyAccount from "../../Pages/MyAccount/MyAccount";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <MyAccount></MyAccount>
          </PrivateRoutes>
        ),
      },
    ],
  },
  // end of main routes
]);
