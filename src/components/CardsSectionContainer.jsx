import { Flex, Heading } from '@chakra-ui/react';
import { CardsSection } from './CardsSection';
import { NavigationButtons } from './NavigationButtons';
export const CardsSectionContainer = ({heading, path, section}) => {
    const container = {
        w : "100%",
        flexDir : "column",
        justifyContent : "center",
        alignItems : "center", 
        minHeight : "80vh",
        bg : "primary",
        gap : "50px"
    }
    const title = {
        fontSize : "4rem",
        color : "orange.400"
    }
    return (
    <Flex sx={container}>
        <Heading sx={title}>{heading}</Heading>
        <CardsSection section={section}/>
        <NavigationButtons path={path}/>
    </Flex>
  )
}

