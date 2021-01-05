import React, { useState } from 'react';
import {Text, Box, Heading,Image, Button,VStack,HStack,Stack,Avatar, Flex,Link, Icon } from '@chakra-ui/core';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
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

  {
          id:5,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0",
           date: "22nd november",
          mode:"online"
 },
 
];

const Eventcard=({url,title,mode,date})=>{
  return(
       <Box 
  w="400px"
  m="10px"
  background= "#FFFFFF" 
  border= "1px solid #DED9D9"
  boxShadow= "lg"
  borderRadius= "10px"
 >
   <Image w="100%"  borderRadius= "10px"src={url} />
   <Box px="20px" py="15px">
    <VStack align="normal">
      <Text fontWeight="normal" fontSize="lg">
        {date}
      </Text>
      <Heading fontWeight="bold" fontSize="4xl">
        {title}
      </Heading>
      <Text fontWeight="normal" fontSize="lg">
        {mode}
      </Text>
      <Heading fontWeight="bold" fontSize="2xl">
        Speakers
      </Heading>
     </VStack>
      <HStack isInline>
        <Avatar size="md" name="Evan You" src="https://bit.ly/chakra-evan-you" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/chakra-segun-adebayo" />
        <Avatar name="Sarah Drasner" src="https://bit.ly/chakra-sarah-drasner" />
        <Avatar name="Kelvin Omereshone" src="https://bit.ly/chakra-kelvin-omereshone" />
      </HStack>
      <HStack mt="10px" justify="space-between">
         <Link>Event details</Link>
        <Button color="#ffffff" _hover={{ bg: "#4475F1" }} _active={{backgroundColor: "blue"}} backgroundColor="#4475F1" >
          Register
        </Button>
      </HStack>
   </Box>
 </Box>);
}


const Event = () => {
 
  return (
    <Flex direction="row" my="20px" alignItems="center"   justifyContent="space-around" >
      <Button _hover={{bg:"#ffffff"}} backgroundColor="#ffffff" _active={{backgroundColor: "#ffffff"}}  >
            <Icon as={FaArrowLeft} boxSize="50px" />
      </Button>
          <Flex direction="row" overflow="auto" mx="10px">
              {eventdata.map((data)=>(
                <Eventcard url={data.url} title={data.title} mode={data.mode} date={data.date}/>
              ))}
          </Flex>
          <Button _hover={{bg:"#ffffff"}} backgroundColor="#ffffff" _active={{backgroundColor: "#ffffff"}} >
            <Icon as={FaArrowRight} boxSize="50px" />
      </Button>
    </Flex>
  );
}
export default Event;
