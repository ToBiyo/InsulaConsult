import { Flex } from "@chakra-ui/react";

export function TextSection({ img, inverted, children }) {
  const sectionContainer = {
    minH: "100vh",
    w: "100%",
    bgImage: `url(${img})`,
    bgPosition: "bottom",
    bgSize: "cover",
    bgRepeat: "none",
    bgAttachment: "fixed",
    justifyContent: "space-between",
  };
  const backgroundCover = {
    w: "100%",
    minH: "100vh",
    padding: { base: "40px 0px" },
    bg: inverted
      ? {
          base: "rgba(245,245,245,1)",
          lg: "linear-gradient(to left, rgba(245,245,245,1), rgba(255, 255, 255, 0.95), rgba(0,0,0,0.1))",
        }
      : {
          base: "rgba(1, 45, 94, 0.8)",
          lg: "linear-gradient(to right, rgba(1, 45, 94, 1), rgba(1, 45, 94, 0.8), rgba(0,0,0,0.1))",
        },
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
