import React, { useState } from 'react';
import { Text, Box, Heading, Image, Button, VStack, HStack, Stack, Avatar, Flex, Link, Icon } from '@chakra-ui/core';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Cardlayout from './card'
import Cardheader from './cardHeader';
const eventdata = [
  {
    id: 1,
    url: "/Event1.png",
  },
  {
    id: 2,
    url: "/Event2.png",
    
  },
   {
    id: 3,
    url: "/Event2.png",
    
  },
];




const Event = () => {

  return (
    <Flex direction="row" my="20px" alignItems="center" justifyContent="space-around" >
      <Button _hover={{ bg: "#ffffff" }} backgroundColor="#ffffff" _active={{ backgroundColor: "#ffffff" }}  >
        <Icon as={FaArrowLeft} w={6} h={6} />
      </Button>
      <Flex direction="row" overflow="auto" mx="10px">
        {eventdata.map((data) => (
          <Cardlayout url={data.url} date={data.date} title={data.title} mode={data.mode} border="1px solid #DED9D9"/>
          
        )
        )}
      </Flex>
      <Button _hover={{ bg: "#ffffff" }} backgroundColor="#ffffff" _active={{ backgroundColor: "#ffffff" }} >
        <Icon as={FaArrowRight} w={6} h={6} />
      </Button>
    </Flex>
  );
}
export default Event;
