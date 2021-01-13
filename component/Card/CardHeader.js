import React from 'react'
import { Box, VStack, Text, Heading, Tag } from '@chakra-ui/core'

const CardHeader = ({ date, title, mode, }) => {
  return (
    <VStack maxH="180px" align="normal" spacing="3px">
      <Text fontFamily="sans-serif" fontWeight="medium" fontSize="xs" lineHeight="normal" color="#6D6D6D" >
        {date}
      </Text>
      <Heading
        maxH="180px"
        w="180px"
        isTruncated
        fontWeight="bold"
        fontSize="md"
        lineHeight="base"
        color="#000000"
      >
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