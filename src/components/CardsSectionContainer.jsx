import { Flex, Heading } from '@chakra-ui/react';
import { CardsSection } from './CardsSection';
import { NavigationButtons } from './NavigationButtons';
export const CardsSectionContainer = ({heading, path, data, Component, emptyBg}) => {
    const container = {
        h : "100%",
        w : "100%",
        padding : "50px 0",
        flexDir : "column",
        justifyContent : "center",
        alignItems : "center", 
        minHeight : "80vh",
        bg :  emptyBg ? "none" : "primary",
        gap : "50px", 
        borderBottom : "1px solid #fff"
    }
    const title = {
        fontSize : "4rem",
        color : "orange.400"
    }
    return (
    <Flex sx={container}>
        <Heading sx={title}>{heading}</Heading>
        <CardsSection data={data} Component={Component}/>
        <NavigationButtons path={path}/>
    </Flex>
  )
}

