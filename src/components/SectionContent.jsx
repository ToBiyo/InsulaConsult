import { Flex } from "@chakra-ui/react";
import { SkewBackground } from "./SkewBackground";
import { SplitScreen } from "../layouts/SplitScreen";

export const SectionContent = ({data, inverted, Component}) => {
    const container = {
        minH : "100vh",
    }
    return (
    <Flex sx={container}>
        <SkewBackground inverted={inverted}  opacity={0.95}>
            <SplitScreen inverted={inverted}>
                <Component data={data}/>
                <Flex />
            </SplitScreen>
        </SkewBackground>
    </Flex>
  )
}

