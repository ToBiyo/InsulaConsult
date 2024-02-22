import { Flex } from "@chakra-ui/react";
import React from "react";
import { SectionContent } from "./SectionContent";
export const PageSectionsContainer = ({ data, Component }) => {
  const container = {
    width :  "100%",
    flexDir: "column",
    h: "auto",
  };
  return (
    <Flex sx={container}>
      {data.map((data, index) => {
        return(<SectionContent key={index} data={data} left={index % 2 ? true : false} Component={Component}/>);
      })}
    </Flex>
  );
};

