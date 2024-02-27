import { Flex } from "@chakra-ui/react";

export const SplitScreen = ({ children, inverted }) => {
  let [leftSide, rightSide] = children;
  const container = {
    w: "100%",
    h: "100%",
    alignItems: "center",
    gap: "20px",
  };

  const leftPanel = {
    h: "100%",
    width: { base: "100%", md: "80%", lg: "70%", xl: "55%", "2xl" : "45%" },
    order: inverted ? 2 : 1,
    padding: "0 10px",
  };
  const rightPanel = {
    w: { base: "0px", md: "20%", lg: "30%", xl: "45%", "2xl" : "45%" },
    h: "100%",
    order: inverted ? 1 : 2,
    display: { base: "none", md: "flex" },
  };
  return (
    <Flex sx={container}>
      <Flex sx={leftPanel}>{leftSide}</Flex>
      <Flex sx={rightPanel}>{rightSide}</Flex>
    </Flex>
  );
};
