import { Flex, Heading, Text } from '@chakra-ui/react'
import { NavigationButtons } from './NavigationButtons';

export const ServiceDetailsContent = ({data}) => {
    const {title, subservices} = data;
  const container = {
    h : "100%",
    flexDir : "column",
    justifyContent : 'center',
    padding : "0 50px",
    gap : "50px"
  }
  const heading = {
    fontSize : "3rem", 
    color : "orange.400",
  }
  const subserviceContainer = {
    flexDir : "column",
    padding :  "10px 0",
    gap : "20px", borderBottom : "1px dotted orange"
  }
  const subHeading = {
    fontSize : "1.6rem",
    color : "orange.300"
  }
  const subText = {
    color : "#fff",
    fontSize : "1.1rem"
  }
  return (
    <Flex sx={container}>
        <Heading as={"h3"} sx={heading}>{title}</Heading>
        {subservices.map((subservice) =>(
          <Flex sx={subserviceContainer}>
            <Heading as={"h3"} sx={subHeading}>{subservice.heading}</Heading>
            <Text sx={subText}>{subservice.description}</Text>
          </Flex>
        ))}
        <NavigationButtons />
    </Flex>
  )
}

