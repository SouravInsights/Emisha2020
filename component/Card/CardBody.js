import React from 'react'
import { Box } from '@chakra-ui/core'

const CardBody = ({ children }) => {
  return (
    <Box maxH="260px">
      {children}
    </Box>
  )
}
export default CardBody;
