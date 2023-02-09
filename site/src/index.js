import "./index.css";
import '@fontsource/roboto/700.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MuiApp from "./MuiApp";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import AboutUsPage from "./pages/AboutUsPage";
import NewHomePage from "./NewHomepage";
import QuizStartPage from "./pages/QuizStartPage";
import HelpPage from "./pages/HelpPage";
import QuizPage1 from "./pages/quiz/QuizPage1";
import QuizPage2 from "./pages/quiz/QuizPage2";
import QuizPage3 from "./pages/quiz/QuizPage3";
import QuizPage4 from "./pages/quiz/QuizPage4";
import QuizPage5 from "./pages/quiz/QuizPage5";
import QuizPage6 from "./pages/quiz/QuizPage6";
import QuizPage7 from "./pages/quiz/QuizPage7";
import QuizResults from "./pages/quiz/QuizResults";

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
  {
    path: "/the-quiz/q1",
    element: <QuizPage1/>,
  },
  {
    path: "/the-quiz/q2",
    element: <QuizPage2/>,
  },
  {
    path: "/the-quiz/q3",
    element: <QuizPage3/>,
  },
  {
    path: "/the-quiz/q4",
    element: <QuizPage4/>,
  },
  {
    path: "/the-quiz/q5",
    element: <QuizPage5/>,
  },
  {
    path: "/the-quiz/q6",
    element: <QuizPage6/>,
  },
  {
    path: "/the-quiz/q7",
    element: <QuizPage7/>,
  },
  {
    path: "/the-quiz/results",
    element: <QuizResults/>
  }
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
