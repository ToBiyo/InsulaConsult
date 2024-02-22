import { Flex } from "@chakra-ui/react";
import { BackgroundImage } from "./BackgroundImage";
import { SplitScreen } from "../layouts/SplitScreen";
import { TextContent } from "./TextContent";

export const TextSection = ({ src, h, heading, text, children, path }) => {
  
  const container = {
    w : "80%",
    margin : "0 auto"
  }
  return (
    <BackgroundImage src={src}>
      <Flex sx={container}>
      <SplitScreen>
        <TextContent h={h} heading={heading} text={text} path={path} />
        <></>
      </SplitScreen>
      </Flex>
    </BackgroundImage>
  );
};
