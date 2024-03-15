import { Flex } from "@chakra-ui/react";

export const SkewBackground = ({ children, inverted, width, color }) => {
  const leftCilpPath = "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)";
  const rightClipPath = "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)";

  //left prop allow us to switch wich side contains the skew squared background

  const container = {
    w: "100%",
    minHeight: "100vh",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #fff",
  };
  const background = {
    flex: { base: "100%", sm: "100%", md: "80%", lg: "65%", xl: "40%" },
    h: "100%",
    clipPath: inverted ? rightClipPath : leftCilpPath,
    bg: color ? color : "primary",
    order: inverted ? 2 : 1,
    opacity: 0.95,
    display: { base: "none", md: "flex" },
  };
  const bgNone_container = {
    flex: 1,
    order: inverted ? 1 : 2,
    display: { base: "none", md: "flex" },
  };
  const overlay = {
    position: { base: "relative", md: "absolute" },
    h: "100%",
    w: { base: "100%", md: "80%" },
    zIndex: 1,
    display: "flex",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    bg: {
      base: inverted
        ? "rgba(1, 45, 94, 1)"
        : "linear-gradient(to bottom, #012d5e, rgba(0, 0, 0, 0.65))",
      md: "none",
    },
    padding: { base: "30px 10%", md: "0" },
  };
  return (
    <Flex sx={container}>
      <Flex sx={overlay}>{children}</Flex>
      <Flex sx={bgNone_container}></Flex>
      <Flex sx={background}></Flex>
    </Flex>
  );
};
