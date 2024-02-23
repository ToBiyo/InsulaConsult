import { Flex } from "@chakra-ui/react";

export const SquareBackground = ({ children, left, width, opacity, color }) => {
  
  const leftCilpPath = "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)";
  const rightClipPath ="polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"; 

  //left prop allow us to switch wich side contains the skew squared background

  const container = {
    w: "100%",
    h: "100vh",
    position: "relative",
    justifyContent: "center",
    alignItems : "center",
    borderBottom :  "1px dotted #fff"
  };
  const background = {
    flex: 2,
    h: "100%",
    clipPath: left ? leftCilpPath : rightClipPath,
    bg: color ? color : "primary",
    order : left ? 1 : 2,
    opacity : 0.955
  };
  const bgNone_container = {
    flex : 1,
    order : left ? 2 : 1

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
