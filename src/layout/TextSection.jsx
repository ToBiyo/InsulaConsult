import { Flex } from "@chakra-ui/react";

export function TextSection({ img, inverted, children }) {
  const sectionContainer = {
    h: "100vh",
    w: "100%",
    bgImage: `url(${img})`,
    bgPosition: "bottom",
    bgSize: "cover",
    bgAttachment: "fixed",
    justifyContent: "space-between",
  };
  const backgroundCover = {
    w: "100%",
    h: "100%",
    bg: inverted
      ? "linear-gradient(to left, whitesmoke, whitesmoke, rgba(255, 255, 255, 0.9), rgba(0,0,0,0.1))"
      : "linear-gradient(to right, rgba(1, 45, 94, 1), rgba(1, 45, 94, 0.8), rgba(0,0,0,0.1))",
    display: "flex",
    alignItems: inverted ? "flex-end" : "flex-start",
    justifyContent: "center",
    flexDir: "column",
  };

  return (
    <Flex sx={sectionContainer} as={"section"}>
      <Flex sx={backgroundCover}>{children}</Flex>
    </Flex>
  );
}
