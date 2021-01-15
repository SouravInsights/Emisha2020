import React from 'react'
import { Flex, Text, Heading, Input, Button, HStack, FormControl } from '@chakra-ui/core'

const Newsletter = () => {
    return (
        <Flex
            zIndex="1"
            px="50px"
            py="30px"
            m="10px"
            bg="blue.50"
            borderRadius="20px"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            align="center"
            flexDirection="column"
            boxShadow="2xl"
        >
            <Heading
                as="h1"
                fontWeight="extrabold"
                lineHeight={'normal'}
                fontSize={['2xl', '3xl', '42px', '42px']}
                textAlign={'center'}
                color="#ffffff"

            >
                Don’t miss out on new opportunities to learn and grow.
            </Heading>
            <Text
                fontWeight="normal"
                color="#ffffff"
                lineHeight="tall"
                fontSize={['sm', 'lg', 'xl', '2xl']}
                /* w={['100%', '80%', '80%', '80%']} */
                textAlign="center"

            >
                We want to enable everyone to come together and share experiences with a wider community. Let’s make an impact together.
           </Text>
            <HStack
                pt="10px"
                align="center"
                /* columns={{ sm: 2, md: 4 }} */
                spacing={4}
            >
                <FormControl id="email" size={["md", "xl", "xl", "xl"]} >
                    <Input
                        placeholder="example@gmail.com"
                        borderRadius="10px"
                        backgroundColor="#ffffff"
                    />
                </FormControl>
                <Button

                    color="black"
                    py="3"
                    px="6"
                    lineHeight="1"
                    borderRadius="10px"
                    bg="white"
                    outline="none"
                    fontSize={['xs', 'sm', 'sm', 'md']}
                >
                    Subscribe
                 </Button>
            </HStack>

        </Flex>
    );
}
export default Newsletter;
