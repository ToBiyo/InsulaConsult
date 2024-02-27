import { Flex } from "@chakra-ui/react";
import React from "react";
import { SectionContent } from "./SectionContent";

export const DetailsPageContainer = ({ data, Component }) => {
  const container = {
    width: "100%",
    flexDir: "column",
    h: "auto",
    
  };
  return (
    <Flex sx={container}>
      {data.map((data, index) => {
        return (
          <SectionContent
            key={index}
            data={data}
            inverted={index % 2 === 0 ? true : false}
            Component={Component}
          />
        );
      })}
    </Flex>
  );
};
