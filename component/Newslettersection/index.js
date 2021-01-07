import React from 'react'
import { Box, Flex, Text, Heading, Input, Button, HStack } from '@chakra-ui/core'

const Newsletter = () => {
    return (
        <Flex m={['30px', '30px', '50px', '100px']} h="250px" bg="blue" flexDirection="column" borderRadius="20px" justify="center" align="center">

            <Heading textAlign="center" fontWeight="extrabold" lineHeight={['shorter', 'short', 'normal', 'base']} fontSize={['lg', '3xl', '5x1']} color="#ffffff">Don’t miss out on new  opportunities to learn and grow.</Heading>
            <Text textAlign="center" fontSize={['sm', 'lg', 'xl', '2xl']} color="#ffffff">We want to enable everyone to come together and share experiences with a wider community. Let’s make an impact together. </Text>
            <HStack mt="30px" justify="space-between" >
                <Input placeholder="example@gmail.com" backgroundColor="#ffffff" />
                <Button backgroundColor="#ffffff" _hover={{ backgroundColor: "#ffffff" }} _active={{ backgroundColor: "#ffffff" }}>Subscribe</Button>
            </HStack>

        </Flex>
    );
}
export default Newsletter;
