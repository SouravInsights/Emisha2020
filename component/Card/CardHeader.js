import React from 'react'
import { Box, VStack, Text, Heading, Tag } from '@chakra-ui/core'

const CardHeader = ({ date, title, mode, }) => {
  return (
    <VStack align="normal" spacing="5px">
      <Text fontFamily="sans-serif" fontWeight="medium" fontSize="xs" lineHeight="normal" color="#6D6D6D" >
        {date}
      </Text>
      <Heading fontWeight="bold" fontSize="lg" lineHeight="base" color="#000000" >
        {title}
      </Heading>
      <Box>
        <Tag size="sm" fontFamily="sans-serif" fontWeight="medium" lineHeight="normal" fontSize="xs" colorScheme="teal">
          {mode}
        </Tag>
      </Box>
    </VStack>
  )
}
export default CardHeader;