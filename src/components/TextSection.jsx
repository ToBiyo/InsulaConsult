import { Flex } from "@chakra-ui/react";
import { BgImageContainer } from "./BgImageContainer";
import { JustifyContent } from "../layouts/JustifyContent";
import { TextContent } from "./TextContent";

export const TextSection = ({ src, h, heading, text, children, path }) => {
  const container = {
    w: "80%",
    margin: "0 auto",
  };
  return (
    <BgImageContainer src={src}>
      <Flex sx={container}>
        <JustifyContent>
          <TextContent h={h} heading={heading} text={text} path={path} />
        </JustifyContent>
      </Flex>
    </BgImageContainer>
  );
};
