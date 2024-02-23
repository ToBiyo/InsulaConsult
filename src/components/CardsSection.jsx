import { Flex} from "@chakra-ui/react";




export const CardsSection = ({ data, Component }) => {
  
  //data




  const container = {
    w: "80%",
    h: "100%",
    justifyContent : "space-around"
  };
  return (
    <Flex sx={container}>
        {data.map(data => (<Component data = {data}/>))}
    </Flex>
  );
};
