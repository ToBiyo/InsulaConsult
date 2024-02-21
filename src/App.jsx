import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Flex } from "@chakra-ui/react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [menuBg, setMenuBg] = useState(null);
  const rootContainer = {
    position: "relative",
    flexDir: "column",
    overflowX: "hidden",
  };

  return (
    <Flex sx={rootContainer} onScroll={() =>{
      console.log("scrolling");
    }}>
      <ThemeContext.Provider value={[menuBg,setMenuBg]}>
        <Menu bg={menuBg} />
        <Outlet />
      </ThemeContext.Provider>
    </Flex>
  );
}

export default App;
