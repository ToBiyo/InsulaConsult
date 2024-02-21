import { Flex } from "@chakra-ui/react"

export const AlignLeft = ({children, order}) => {

    const container = {
        margin :  "0 auto",
        w : "80%",
        height :  "100vh",
        
    }
    const childrenContainer = {
        height : "100%",
        flexDir : "column",
        justifyContent : 'center',
        flex : 0.45,
        gap : "20px",
        order : 1
    }
    
    return (
    <Flex sx={container}>
        <Flex sx={childrenContainer}>
            {children}
        </Flex>
    </Flex>
  )
}

