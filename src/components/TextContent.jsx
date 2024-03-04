import { useTranslation } from 'react-i18next';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { NavigationButtons } from './NavigationButtons';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({
    disable : 'mobile'
});

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
        fontSize : {base : "2.5rem", md : "4rem"},
        color :  "orange.400",
    }
    const txt = {
        fontSize : {base : "0.95rem", md : "1.1rem"},
        color : "#fff",
        
        
    }
    return (
    <Flex sx={textContainer} data-aos="fade-right" data-aos-delay="400" data-aos-duration="500">
       <Heading as={h} sx={title}  data-aos="fade-left" data-aos-delay="400" data-aos-duration="500">{t(heading)}</Heading>
       <Text sx={txt}>{t(text)}</Text>
       <NavigationButtons  path={path}/>
    </Flex>
  )
}

