import { Flex } from "@chakra-ui/react";
import { GetInTouchBtn } from "./GetInTouchBtn";
import {RouterBtn} from './RouterBtn';


export const NavigationButtons = ({path}) => {
    const buttonsContainer = {
        
    }
  return(
    <Flex sx={buttonsContainer}>
        <GetInTouchBtn />
        {path && <RouterBtn path={path}/>}
    </Flex>
  )
};


