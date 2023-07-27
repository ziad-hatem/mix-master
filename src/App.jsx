import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";

// import all Pages
import {
  NewsLetter,
  About,
  HomeLayout,
  Error,
  Landing,
  SinglePageError,
} from "./Pages";
import { SearchFrom } from "./compononts";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singlePageLoader } from "./pages/compononts/Coctail";
import Coctail from "./pages/compononts/Coctail";
import { action as newsletterAction } from "./pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <Landing />,
        loader: landingLoader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: "coctail/:id",
        element: <Coctail />,
        loader: singlePageLoader(queryClient),
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
