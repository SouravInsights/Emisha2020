import React from 'react'
import {Box,Flex, Text,Heading,Input,Button, HStack} from '@chakra-ui/core'

const Newsletter= () => {
    return(
        <Flex w={"60%"} h="250px" mx="auto" backgroundColor="blue"  borderRadius="10px" justifyContent="center" align="center">
            <Box >
            <Heading textAlign="center" color="#ffffff">Join Us</Heading>
            <Text fontSize="lg" fontWeight="normal" color="#ffffff">To get a Newsletter to get engaged with this technological World</Text>
            <HStack mt="30px" justify="space-between" >
                <Input  placeholder="example@gmail.com" backgroundColor="#ffffff" />
                <Button backgroundColor="#ffffff" _hover={{backgroundColor:"#ffffff"}} _active={{backgroundColor:"#ffffff"}}>Subscribe</Button>
            </HStack>
            </Box>
        </Flex>
    );
}
export default Newsletter;
