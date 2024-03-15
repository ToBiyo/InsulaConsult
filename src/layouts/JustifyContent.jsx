import { Flex } from "@chakra-ui/react";

export const JustifyContent = ({ children, inverted }) => {
 
  const container = {
    w: "100%",
    h: "100%",
    alignItems: "center",
    gap: "20px",
    justifyContent : inverted ? "flex-end" : "flex-start"
  };

  const leftPanel = {
    h: "100%",
    width: { base: "100%", md: "80%", lg: "70%", xl: "55%" },
    order: inverted ? 2 : 1,
    padding: "0 10px",
  };
  
  return (
    <Flex sx={container}>
      <Flex sx={leftPanel}>{children}</Flex>
      
    </Flex>
  );
};
