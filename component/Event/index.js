import React from 'react';
import {SimpleGrid, Box, Heading,Text,Image,} from '@chakra-ui/core';

const eventdata=[
  {
          id:1,
          url:"/Blogbanner1.png",
          title:"UtkalHacks2.0"
 },
  {
          id:2,
          url:"/Blogbanner1.png",
          title:"Introduction to Frontend Development"
 },
  {
          id:3,
          url:"/Blogbanner1.png",
 },
  {
          id:4,
          url:"/Blogbanner1.png",
 },
];

const EventCard=({id,url,title,})=>{
  return(
        <Box h="300px" border="3px faded" boxShadow="2xl" borderRadius="10px">
          <Image src={url} size="100px" borderTopRadius="10px"/>
          <Box m="10px" alignItems="center">
            <Heading fontWeight="bold" fontSize="xl">{title}</Heading>
          </Box>
        </Box>
        );
}

const Event= () => {
  return(
    <SimpleGrid columns={[1,null,2, null,4]} spacing="60px" my="60px" backgroundColor="blue.100" wrap="wrap">
            {eventdata.map((data)=>(
              <EventCard key={data.id} url={data.url} title={data.title} intro={data.intro} href={data.href}/>))}
    </SimpleGrid>        
  );
}

export default Event;
