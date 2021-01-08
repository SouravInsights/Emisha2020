import React from 'react'
import { Box, Flex, Text, Heading, Input, Button, HStack, FormControl } from '@chakra-ui/core'

const Newsletter = () => {
    return (
        <Flex
            /* w={"60%"} */
            h="250px"
            m="auto"
            bg="blue"
            borderRadius="10px"
            justify="center"
            align="center"
            flexDirection="column"
        >

            <Heading
                fontWeight="extrabold"
                lineHeight={['shorter', 'short', 'normal', 'base']}
                fontSize={['lg', '3xl', '5x1']}
                textAlign="center"
                color="#ffffff"
                pb="10px"
            >
                Don’t miss out on new opportunities to learn and grow.
            </Heading>
            <Text
                fontWeight="normal"
                color="#ffffff"
                lineHeight="shorter"
                fontSize={['sm', 'lg', 'xl', '2xl']}
                w={['100%', '80%', '80%', '50%']}
                textAlign="center"
                pb="10px"
            >
                We want to enable everyone to come together and share experiences with a wider community. Let’s make an impact together.</Text>
            <HStack
                mt="10px"
                justify="space-between"
            >
                <FormControl id="email">
                    <Input placeholder="example@gmail.com" backgroundColor="#ffffff" />
                </FormControl>
                <Button
                    as="button"
                    w="180px"
                    py={2}
                    px={4}
                    ml={4}
                    alignItems="center"
                    borderRadius="12px"
                    fontWeight="semibold"
                    backgroundColor="#ffffff"
                    outline="none"
                    _hover={{ backgroundColor: "#63B3ED" }}
                    _active={{ backgroundColor: "#ffffff" }}
                >
                    Subscribe
                 </Button>
            </HStack>

        </Flex>
    );
}
export default Newsletter;
