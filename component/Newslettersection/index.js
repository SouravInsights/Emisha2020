import React from 'react'
import { Flex, Text, Heading, Input, Button, HStack, FormControl } from '@chakra-ui/core'

const Newsletter = () => {
    return (
        <Flex
            zIndex="1"
            px="80px"
            py="30px"
            m="20px"
            bg="blue"
            borderRadius="20px"
            justify="center"
            align="center"
            flexDirection="column"
            boxShadow="2xl"
        >

            <Heading
                fontWeight="extrabold"
                lineHeight={['normal', 'normal', 'normal', 'normal']}
                fontSize={['2xl', '3xl', '42px', '42px']}
                textAlign="center"
                color="#ffffff"
                pb="10px"
            >
                Don’t miss out on new opportunities to learn and grow.
            </Heading>
            <Text
                fontWeight="normal"
                color="#ffffff"
                lineHeight="tall"
                fontSize={['sm', 'lg', 'xl', '2xl']}
                w={['100%', '80%', '80%', '80%']}
                textAlign="center"
                pb="10px"
            >
                We want to enable everyone to come together and share experiences with a wider community. Let’s make an impact together.
           </Text>
            <HStack
                pt="10px"
                align="center"
                spacing={4}
            >
                <FormControl id="email" >
                    <Input placeholder="example@gmail.com" borderRadius="10px" backgroundColor="#ffffff" />
                </FormControl>
                <Button
                    size="lg"
                    colorScheme="gray"
                    outline="none"
                    borderRadius="10px"
                >
                    Subscribe
                 </Button>
            </HStack>

        </Flex>
    );
}
export default Newsletter;
