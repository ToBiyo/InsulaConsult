import { Flex } from "@chakra-ui/react";
import { SkewBackground } from "./SkewBackground";
import { JustifyContent } from "../layouts/JustifyContent";



export const SectionContent = ({data, inverted, Component}) => {
    const container = {
        minH : "100vh",
    }
    

    return (
    <Flex sx={container}>
        <SkewBackground inverted={inverted}  opacity={0.95}>
            <JustifyContent inverted={inverted}>
                <Component data={data} inverted={inverted}/>
            </JustifyContent>
        </SkewBackground>
    </Flex>
  )
}

