import { Flex } from "@chakra-ui/react";
import React from "react";

export function CardsContainer({ children }) {
  const cardsContainer = {
    w: "70%",
    margin: "0 auto",
    justifyContent: "space-between",
  };

  return <Flex sx={cardsContainer}>{children}</Flex>;
}
