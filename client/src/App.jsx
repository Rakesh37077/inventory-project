import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootPage from "./pages/RootPage";
import EMICalculator from "./pages/EMICalculator/EMICalculator";
import VideoGallery from "./pages/VideoGallery/VideoGallery";
import Products from "./pages/Products/Products";
import ReactTable from "./pages/ReactTable/ReactTable";
import ErrorBoundary from "./components/ErrorBoundary";
import Kanban from "./pages/Kanban/Kanban";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "emicalculator",
          element: <EMICalculator />,
        },
        {
          path: "videogallery",
          element: <VideoGallery />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "filtertable",
          element: (
            <ErrorBoundary>
              <ReactTable />
            </ErrorBoundary>
          ),
        },
        ,
        {
          path: "kanban",
          element: <Kanban />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
