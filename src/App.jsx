import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootPage from "./pages/RootPage";
import EMICalculator from "./pages/EMICalculator/EMICalculator";
import VideoGallery from "./pages/VideoGallery/VideoGallery";
import Products from "./pages/Products/Products";
import ReactTable from "./pages/ReactTable/ReactTable";
import ErrorBoundary from "./components/ErrorBoundary";

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
