import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MuiApp from "./MuiApp";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import AboutUsPage from "./pages/AboutUsPage";
import NewHomePage from "./NewHomepage";
import QuizStartPage from "./pages/QuizStartPage";
import HelpPage from "./pages/HelpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewHomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <NewHomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/home",
    element: <NewHomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/log-in",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/mui",
    element: <MuiApp />,
  },
  {
    path: "/new-homepage",
    element: <NewHomePage />,
  },
  {
    path: "/the-quiz",
    element: <QuizStartPage />, // replace with QuizBody page
  },
  {
    path: "/who-we-are",
    element: <AboutUsPage />, // replace with AboutUs page
  },
  {
    path: "/help",
    element: <HelpPage />, // replace with help page
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <NewHomePage />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
