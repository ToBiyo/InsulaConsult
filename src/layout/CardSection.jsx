import { Flex, Heading } from "@chakra-ui/react";
import Buttons from "../components/Buttons";

export function CardSection({ heading, children, path, contact, primary }) {
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
    fontSize: { base: "3.5rem", lg: "4.5rem" },
    color: primary ? "primary" : "secondary",
    fontFamily: "title",
    fontWeight: "400",
  };
  return (
    <Flex sx={container} as={"section"}>
      <Heading as={"h2"} sx={title}>
        {heading}
      </Heading>
      {children}
      <Buttons path={path} contact={contact} primary={primary} />
    </Flex>
  );
}
