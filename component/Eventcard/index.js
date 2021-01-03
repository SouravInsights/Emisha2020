import React, { useState } from 'react';
import {Text, Box, Heading,Image, Button,VStack,HStack,Stack,Avatar, Flex, } from '@chakra-ui/core';
const eventdata=[
  {
          id:1,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online",
 },
  {
          id:2,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online"
 },
  {
          id:3,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online"
 },
  {
          id:4,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online"
 },
 
];

const Eventcard=({url,title,mode,date,})=>{
  return(
       <Box 
  w="300px"
  m="10px"
  background= "#FFFFFF" 
  border= "1px solid #DED9D9"
  boxShadow= "lg"
  borderRadius= "10px"
 >
   <Image w="100%" height="152px"  borderRadius= "10px"src={url} />
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


const Event = () => {
 
  return (
    <Flex direction="row" my="20px" alignItems="center"   justifyContent="space-between" >
          <Button>Prev</Button>
          <Flex direction="row" overflow="auto" mx="10px">
              {eventdata.map((data)=>(
                <Eventcard url={data.url} title={data.title} mode={data.mode} date={data.date}/>
              ))}
          </Flex>
          <Button >Next</Button>

    </Flex>
  );
}
export default Event;
