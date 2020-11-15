import React, { useState } from 'react';
import {Text, Box, Heading,Image, Button,VStack,HStack,Stack,Avatar, Flex, position} from '@chakra-ui/core';
const eventdata=[
  {
          id:1,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online"
 },
  {
          id:1,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online"
 },
  {
          id:1,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online"
 },
  {
          id:1,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online"
 },
 
];

const Eventcard=({url,title,mode,date,})=>{
  return(
       <Box 
  w="332px"
  m="10px"
  background= "#FFFFFF" 
  border= "1px solid #DED9D9"
  boxShadow= "lg"
  borderRadius= "10px"
 >
   <Image w="100%" height="182px"  borderRadius= "10px"src={url} />
   <Box px="30px" py="15px">
    <VStack spacing="5px">
      <Text font-weight="500" font-size="8px">
        {date}
      </Text>
      <Heading font-weight="700" font-size="10px">
        {title}
      </Heading>
      <Text font-weight="500" font-size="8px">
        {mode}
      </Text>
      <Heading font-weight="700" font-size="12px">
        Speakers
      </Heading>
     </VStack>
      <HStack is-inline mt="10px">
        <Avatar name="Evan You" src="https://bit.ly/chakra-evan-you" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/chakra-segun-adebayo" />
        <Avatar name="Sarah Drasner" src="https://bit.ly/chakra-sarah-drasner" />
        <Avatar name="Kelvin Omereshone" src="https://bit.ly/chakra-kelvin-omereshone" />
        <Avatar name="Mesut Koca" src="https://bit.ly/chakra-mesut-koca" />
      </HStack>
      <HStack mt="10px" justify="space-between">
         <Button>
          Register
        </Button>
        <Button>
          Register
        </Button>
      </HStack>
   </Box>
 </Box>);
}


const Event = (props) => {
  const [currentCard, setCard ] = useState(0);
  const [position, setPosition]=useState(0);
  
  const handleclickprev = () => {
    if(currentCard === 0) {
      return console.log("No previous cards");
    } elseif(currentCard===position) {
       setCard = (setPosition(position-1));  
      
    }
  } 
  const handelclicknext = () => {
    setCard=(setPosition(position+1));
    position=setPosition;
  }
 
  return (
    <Flex direction="row" my="20px" alignItems="center"   justifyContent="space-between" >
          <Button onClick={handleclickprev()}>Prev</Button>
          <Flex direction="row" overflow="auto" mx="10px">
              {eventdata.map((data)=>(
                <Eventcard url={data.url} title={data.title} mode={data.mode} date={data.date}/>
              ))}
          </Flex>
          <Button onClick={handelclicknext()}>Next</Button>

    </Flex>
  );
}
export default Event;
