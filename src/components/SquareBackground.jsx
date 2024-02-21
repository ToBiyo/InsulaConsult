import { Flex } from "@chakra-ui/react";

export const SquareBackground = ({ children, right, width, opacity }) => {
  
  const leftCilpPath = "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)";
  const rightClipPath ="polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"; 



  const container = {
    w: "100%",
    h: "100vh",
    position: "relative",
    justifyContent: "center",
    alignItems : "center",
    borderBottom :  "1px solid #fff"
  };
  const background = {
    flex: 1.2,
    h: "100%",
    clipPath: right ? leftCilpPath : rightClipPath,
    bg: "primary",
    order : right ? 1 : 2,
    opacity : opacity ? opacity : 1  
  };
  const bgNone_container = {
    flex : 0.8,
    order : right ? 2 : 1

  }
  const overlay = {
    position: "absolute",
    h: "100%",
    w: width ? width :"80%",
    zIndex: 1,
    display: "flex",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  };
  return (
    <Flex sx={container}>
      <Flex sx={overlay}>{children}</Flex>
      <Flex sx={bgNone_container}></Flex>
      <Flex sx={background}></Flex>
    </Flex>
  );
};
