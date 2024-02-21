import { Flex } from '@chakra-ui/react'
import { SquareBackground } from './SquareBackground';
import { SplitScreen } from '../layouts/SplitScreen';
import {ServiceDetailsContent} from './ServiceDetailsContent';

export const ServiceDetailsContainer = ({data, right=null, opacity}) => {
    
  
    return (
    <Flex as={"section"}>
        <SquareBackground right={right} opacity={opacity} width={"100%"}>
            <SplitScreen right={right}>
                <Flex></Flex>
                <ServiceDetailsContent data={data}/>
            </SplitScreen> 
        </SquareBackground>
    </Flex>
    )
}

