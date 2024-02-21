import { Flex } from "@chakra-ui/react";

export const BackgroundImage = ({ src, children }) => {
  const container = {
    w: "100vw",
    h: "100vh",
    position: "realtive",
    backgroundImage: `url(${src})`,
    backgroundSize : 'cover',
    backgroundPosition : 'center',
    backgroundAttachment : "fixed"
  };
  const gradientOverlay = {
    w: "100%",
    h: "100vh",
    position: "absolute",
    zIndex: 1,
    background: `linear-gradient(to right, #012d5e, rgba(255, 255, 255, 0))`,
    backgroundAttachment : "fixed", 
    borderBottom :  "1px solid #fff"
  };
  return (
    <Flex sx={container}>
      <Flex sx={gradientOverlay}>{children}</Flex>
    </Flex>
  );
};

