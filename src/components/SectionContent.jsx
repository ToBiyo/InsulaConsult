import { Flex } from "@chakra-ui/react";
import { SquareBackground } from "./SquareBackground";
import { SplitScreen } from "../layouts/SplitScreen";

export const SectionContent = ({data, left, Component}) => {
    const container = {
        h : "100vh",
        backgroudImage : data.background ? `url(${data.background})` : null,
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundAttachment : "fixed"
    }
    return (
    <Flex sx={container}>
        <SquareBackground left={left} /* width={"100%"} */ opacity={0.95}>
            <SplitScreen left={left}>
                <Flex />
                <Component data={data}/>
            </SplitScreen>
        </SquareBackground>
    </Flex>
  )
}

