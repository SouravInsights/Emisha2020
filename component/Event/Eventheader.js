import React from 'react'
import {Box,Heading, Text,Stack,Button,Tag } from '@chakra-ui/core'

const Eventheader= ({dateTime,title,about,item}) =>{
    return (
        <Box mx="0px" my="30px">
    <Stack justify="start" align="start" spacing="30px">
      <Text font-size="16px" font-weight="500" line-height="1" text-transform="uppercase">{ dateTime }</Text>
      <Heading font-size="45px" font-weight="extrabold" line-height="1" color="#232020">{title }</Heading>
      <Stack direction="row">
        <Tag rounded="full" v-for="item in tags" key="item">{ {item }}</Tag>
      </Stack>
    <Stack mt="30px" direction="row" spacing="30px">
      <Button w="180px" h="55px" border-radius="16px" bg="#1B51F2" color="#ffffff" box-shadow="0px 20px 40px rgba(139, 142, 149, 0.1)" left-icon="email"  variant="solid">Get Tickets</Button>
      <Button w="180px" h="55px" border-radius="16px" bg="#ECEDF0" color="#343131" box-shadow="0px 20px 40px rgba(184, 187, 193, 0.1)" left-icon="email"  variant="solid">Add to Calendar</Button>
    </Stack>
    <Stack mt="30px" align="start" spacing="20px">
      <Heading font-weight="bold" font-size="30px" line-height="1" color="#232020">
        About
      </Heading>
      <Text align="left" font-weight="normal" font-size="16px" color= "#232020">
        {about}
        </Text>
    </Stack>
    </Stack>
    
  </Box>
    )
}

export default Eventheader;
