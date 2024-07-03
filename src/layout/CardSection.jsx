import { Flex, Heading } from "@chakra-ui/react";
import Buttons from "../components/Buttons";

export function CardSection({ heading, children, path, blue }) {
  const container = {
    minHeight: "70vh",
    flexDir: "column",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 0",
    bg: "whitesmoke",
  };
  const title = {
    fontSize: "4rem",
    color: "primary",
    fontFamily: "title",
  };
  return (
    <Flex sx={container} as={"section"}>
      <Heading as={"h2"} sx={title}>
        {heading}
      </Heading>
      {children}
      <Buttons path={path} blue={blue} />
    </Flex>
  );
}
