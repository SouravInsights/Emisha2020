import React from 'react';
import { Grid, Text, Box, Image, Heading, Button } from '@chakra-ui/core';
import { FaDiscord } from 'react-icons/fa';

const About = () => {
    return (
        <Grid templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(2,1fr)" }} justifyContent="space-between" py="50px">
            <Box w="100%"  >
                <Heading
                    fontSize={['5xl', '5xl', '5xl', '6xl']} lineHeight="none" fontWeight="bold" color="#000000" align="left" py="20px">
                    We never grow alone, but always with a
                    </Heading>
                <Heading
                    fontSize={['5xl', '5xl', '5xl', '6xl']}
                    fontWeight="bold"
                    color="blue"
                    as="u"
                /* pb="10px" */
                >
                    Community.
                    </Heading>
                <Text fontSize={["2xl", "2xl", "xl", "2xl"]} fontWeight="medium" color="#000000" pt="20px">
                    At Emisha, We thrive to create a true community where everyone can grow together.
                    </Text>
                <Button size="lg" color="#ffffff" _hover={{ bg: "blue" }} _active={{ borderColor: "" }} my="20px" backgroundColor="blue" rightIcon={<FaDiscord size="2rem" />}>Join us on Discord </Button>
            </Box>
            <Box w={["none", "none", "90%", "90%"]}>
                <Image src="MainBg.png" />
            </Box>
        </Grid>
    );
}
export default About;