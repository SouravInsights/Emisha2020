import React, { useState } from 'react';
import { Text, Box, Heading, Image, Button, VStack, HStack, Stack, Avatar, Flex, Link, Icon } from '@chakra-ui/core';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const eventdata = [
  {
    id: 1,
    url: "/Event1.png",
    title: "Hacktoberfest Extended",
    date: "Fri AUG 2, 9:00 PM IST",
    mode: "Online",
  },
  {
    id: 2,
    url: "/Event2.png",
    title: "Going Serverless with Azure",
    date: "22nd november",
    mode: "Online"
  },
  {
    id: 3,
    url: "/Blogbanner1.png",
    title: "UtkalHacks2.0",
    date: "22nd november",
    mode: "Online"
  },
  {
    id: 4,
    url: "/Blogbanner1.png",
    title: "UtkalHacks2.0",
    date: "22nd november",
    mode: "Online"
  },

  {
    id: 5,
    url: "/Blogbanner1.png",
    title: "UtkalHacks2.0",
    date: "22nd november",
    mode: "Online"
  },

];

const Eventcard = ({ url, title, mode, date }) => {
  return (
    <Box
      maxW="sm"
      m="10px"
      background="#FFFFFF"
      border="1px solid #DED9D9"
      boxShadow="lg"
      borderRadius="10px"
    >
      <Image w="100%" /* borderRadius="10px" */ src={url} />
      <Box px="20px" py="15px">
        <VStack align="normal">
          <Text fontFamily="sans-serif" fontWeight="medium" fontSize="xs" lineHeight="normal" color="#6D6D6D" >
            {date}
          </Text>
          <Heading fontWeight="bold" fontSize="lg" lineHeight="base" color="#000000" >
            {title}
          </Heading>
          <Text fontFamily="sans-serif" fontWeight="medium" lineHeight="normal" fontSize="xs" color="#6D6D6D">
            {mode}
          </Text>
          <Heading fontWeight="bold" fontSize="xs" lineHeight="widest" color="#000000"  >
            Speakers
          </Heading>
        </VStack>
        <Stack direction="row">
          <Avatar size="md" name="Evan You" src="https://bit.ly/chakra-evan-you" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/chakra-segun-adebayo" />
          <Avatar name="Sarah Drasner" src="https://bit.ly/chakra-sarah-drasner" />
          <Avatar name="Kelvin Omereshone" src="https://bit.ly/chakra-kelvin-omereshone" />
        </Stack>
        <HStack mt="10px" justify="space-between">
          <Link>Event details</Link>
          <Button color="#ffffff" _hover={{ bg: "#4475F1" }} _active={{ backgroundColor: "blue" }} backgroundColor="#4475F1" >
            Register
        </Button>
        </HStack>
      </Box>
    </Box>);
}


const Event = () => {

  return (
    <Flex direction="row" my="20px" alignItems="center" justifyContent="space-around" >
      <Button _hover={{ bg: "#ffffff" }} backgroundColor="#ffffff" _active={{ backgroundColor: "#ffffff" }}  >
        <Icon as={FaArrowLeft} w={6} h={6} />
      </Button>
      <Flex direction="row" overflow="auto" mx="10px">
        {eventdata.map((data) => (
          <Eventcard url={data.url} title={data.title} mode={data.mode} date={data.date} />
        ))}
      </Flex>
      <Button _hover={{ bg: "#ffffff" }} backgroundColor="#ffffff" _active={{ backgroundColor: "#ffffff" }} >
        <Icon as={FaArrowRight} w={6} h={6} />
      </Button>
    </Flex>
  );
}
export default Event;
