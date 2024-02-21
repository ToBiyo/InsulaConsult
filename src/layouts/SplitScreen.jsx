import { Flex } from "@chakra-ui/react";

export const SplitScreen = ({ children, right }) => {
  let [leftSide, rightSide] = children;
  const container = {
    w: "100%",
    h: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  const leftPanel = {
    h : "100%",
    flex: 1,
    order : right ? 2 : 1
  };
  const rightPanel = {
    h : "100%",
    flex: 1,
    order : right ? 1 : 2
  };
  return (
    <Flex sx={container}>
      <Flex sx={leftPanel}>{leftSide}</Flex>
      <Flex sx={rightPanel}>{rightSide}</Flex>
    </Flex>
  );
};
