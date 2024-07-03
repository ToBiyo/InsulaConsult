import { Flex } from "@chakra-ui/react";
import React from "react";

export function CardsContainer({ children }) {
  const cardsContainer = {
    w: "70%",
    margin: "0 auto",
    justifyContent: { base: "center", "2xl": "space-between" },
    flexWrap: "wrap",
  };

  return <Flex sx={cardsContainer}>{children}</Flex>;
}
