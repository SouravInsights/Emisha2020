import React from 'react'
import {Box, VStack, Text, Heading} from '@chakra-ui/core'

const Cardheader= ({ date, title, mode,}) => {
    return(
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
        </VStack>
        </Box>
    )
}
export default Cardheader;