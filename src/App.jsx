import { Outlet } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Flex } from "@chakra-ui/react";

function App() {
  const rootContainer = {
    position: "relative",
    flexDir: "column",
    overflowX: "hidden",
  };

  return (
    <Flex sx={rootContainer}>
      <Menu />
      <Outlet />
    </Flex>
  );
}

export default App;
