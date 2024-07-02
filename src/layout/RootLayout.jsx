import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";
import { Flex } from "@chakra-ui/react";
export default function Root() {
  return (
    <>
      <Flex as={"header"} justifyContent={"center"}>
        <Navigation />
      </Flex>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
