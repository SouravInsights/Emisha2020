import React from 'react';
import { Image, Box, Divider, Text, Heading } from '@chakra-ui/core'
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = ({ header, body, footer, url, ...props }) => {
  return (
    <Box
      maxW="332px"
      m="10px"
      background="#FFFFFF"
      boxShadow="lg"
      borderRadius="10px"
      {...props}
    >
      <Image w="100%" /* borderRadius="10px" */ src={url} />
      <Box px="20px" pt="10px" pb="10px" >
        <Box>
          {header}
        </Box>
        <Box>
          {body}
        </Box>
      </Box>
      <Divider orientation="horizontal" />
      <Box px="20px" py="10px">
        {footer}
      </Box>
    </Box>
  )
}
export default Card;