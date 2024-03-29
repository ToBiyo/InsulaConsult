import { Flex } from "@chakra-ui/react";

export const BgImageContainer = ({ src, children, inverted }) => {
  const container = {
    w: "100vw",
    position: "relative",
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  const gradientOverlay = {
    w: "100%",
    minH: "100vh",
    position: "relative",
    zIndex: 1,
    background: {
      base: inverted
        ? `linear-gradient(to top, #012d5e, rgba(0, 0, 0, 0.5))`
        : `linear-gradient(to bottom, #012d5e, rgba(0, 0, 0, 0.5))`,
      md: inverted
        ? `linear-gradient(to left, #012d5e, rgba(0, 0, 0, 0.5))`
        : `linear-gradient(to right, #012d5e, rgba(0, 0, 0, 0))`,
    },
    backgroundAttachment: "fixed",
    borderBottom: "1px solid #fff",
  };
  return (
    <Flex sx={container}>
      <Flex sx={gradientOverlay}>{children}</Flex>
    </Flex>
  );
};
