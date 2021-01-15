import React from 'react';
import { Image, Box, Divider } from '@chakra-ui/core'

const Card = ({ children, header, body, footer, coverImage, ...props }) => {
  return (
    <Box
      zIndex="2"
      maxH="600px"
      maxW="280px"
      m="10px"
      background="#FFFFFF"
      boxShadow="lg"
      borderRadius="10px"
      {...props}
    >
      <Image w="100%" maxH="140px" borderTopRadius="10px" /* borderRadius="10px" */ src={coverImage} />
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