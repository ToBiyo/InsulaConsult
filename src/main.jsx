import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "./utilities/chakraTheme.js";
import "./i18n.js";

//routes
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Services } from "./pages/Services.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Network } from "./pages/Network.jsx";
import RootLayout from "./layout/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/InsulaConsult/",
    element: <RootLayout />,
    children: [
      {
        path: "/InsulaConsult/",
        element: <Home />,
      },
      {
        path: "/InsulaConsult/about",
        element: <About />,
      },
      {
        path: "/InsulaConsult/services",
        element: <Services />,
      },
      {
        path: "/InsulaConsult/projects",
        element: <Projects />,
      },
      {
        path: "/InsulaConsult/network",
        element: <Network />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
