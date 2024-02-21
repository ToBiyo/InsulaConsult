import { Flex } from "@chakra-ui/react"

export const CardsContainer = ({children}) => {
    
    const container = {
        w : '100%',
        h : "auto",
        alingItems : 'center',
        justifyContent : "space-between",
        margin : "120px 0"
    }
    return (
    <Flex sx={container}>
      {children}
    </Flex>
  )
}

