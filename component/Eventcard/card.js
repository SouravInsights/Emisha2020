import React from 'react';
import {Image,Box, VStack, Text, Heading} from '@chakra-ui/core'
import Cardheader from './cardHeader';
import Cardbody from './cardBody';
import Cardfooter from './cardfooter';

const Cardlayout=({url, ...props })=>{
    return(
          <Box
      maxW="332px"
      m="10px"
      background="#FFFFFF"
      boxShadow="lg"
      borderRadius="10px"
      {...props}
    >
      <Image w="100%" /* borderRadius="10px" */ src={url} />
        <Cardheader
           title="Going Serverless with Azure"
           date="22nd november"
           mode="Online"
        />
        <Cardbody
        url="https://bit.ly/chakra-segun-adebayo"
        />
        <Cardfooter/>
        </Box>
    )
}
export default Cardlayout;