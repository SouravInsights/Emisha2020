import React from 'react';
import {Flex, Heading, Box, Image} from '@chakra-ui/core';

const Diversity =()=> {
    return (
        <Flex direction="row" justifyContent="space-between">
            <Box  h="600px"  border="2px faded" boxShadow="dark-lg" >
                    <Image src="/MainBG.png" h="380px"/>
            </Box>
            <Heading fontWeight="bold" fontSize="4xl" >Why Diversity?</Heading>
        </Flex>
    )
}

export default Diversity;
