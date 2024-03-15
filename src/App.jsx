import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Flex } from "@chakra-ui/react";
import { Footer } from "./components/Footer";

function App() {
  const rootContainer = {
    position: "relative",
    flexDir: "column",
    overflowX: "hidden",
  };

  return (
    <Flex sx={rootContainer}>
      <Navigation />
      <Outlet />
      <Footer />
    </Flex>
  );
}

export default App;
