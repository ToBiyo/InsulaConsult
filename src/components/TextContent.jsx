import { useTranslation } from 'react-i18next';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { NavigationButtons } from './NavigationButtons';

export const TextContent = ({heading, text, h, path, direction}) => {
    const{ t } = useTranslation("home");
    const textContainer = {
        h :  "100%",
        flexDir : 'column',
        gap : "20px",
        justifyContent : "center",
        padding : direction ? "0 0 0 50px" : "0 50px 0 0"
    }

    const title ={
        fontSize : "4rem",
        color :  "orange.400",
    }
    const txt = {
        fontSize : '1.1rem',
        color : "#fff",
        
        
    }
    return (
    <Flex sx={textContainer}>
       <Heading as={h} sx={title}>{t(heading)}</Heading>
       <Text sx={txt}>{t(text)}</Text>
       <NavigationButtons  path={path}/>
    </Flex>
  )
}

