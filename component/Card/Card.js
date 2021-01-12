import React, { Children } from 'react';
import { Image, Box, Divider } from '@chakra-ui/core'
/* import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter'; */

const Card = ({ children, header, body, footer, coverImage, ...props }) => {
  return (
    <Box
      zIndex="1"
      maxW="332px"
      m="10px"
      background="#FFFFFF"
      boxShadow="lg"
      borderRadius="10px"
      {...props}
    >
      <Image w="100%" /* borderRadius="10px" */ src={coverImage} />
      <Box px="20px" pt="10px" pb="10px" >
        <Box>
          {header}
        </Box>
        <Box>
          {children}
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