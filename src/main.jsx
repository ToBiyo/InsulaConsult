import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "./i18n.js";
//routes
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Network } from "./pages/Network";


const colors = {
  primary : '#012d5e'


}

const theme = extendTheme({colors});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/InsulaConsult/" element={<App />}>
      <Route path="/InsulaConsult/" element={<Home />} />
      <Route path="/InsulaConsult/about" element={<About />} />
      <Route path="/InsulaConsult/services" element={<Services />} />
      <Route path="/InsulaConsult/projects" element={<Projects />} />
      <Route path="/InsulaConsult/network" element={<Network />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
