import React from 'react';
import { Grid, Text, Box, Image, Heading, Button } from '@chakra-ui/core';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/styles.module.css';

const About = () => {
    return (

        <Grid className={styles.bimageleft} zIndex="1" templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(2,1fr)" }} justifyContent="space-between" py="50px">
            <Box w="100%"  >
                <Heading
                    fontSize={['5xl', '5xl', '5xl', '6xl']}
                    lineHeight="none"
                    fontWeight="bold"
                    color="#000000"
                    align="left"
                    py="20px"
                >
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
                <Button
                    size="lg"
                    borderRadius="20px"
                    color="#ffffff"
                    _hover={{ bg: "blue" }}
                    _active={{ borderColor: "" }}
                    my="20px"
                    boxShadow="2xl"
                    backgroundColor="blue"
                    rightIcon={<FaArrowRight />}
                >
                    Join Our Community
                </Button>
            </Box>
            <Box w={["none", "none", "90%", "90%"]}>
                <Image src="MainBg.png" />
            </Box>
        </Grid>
    );
}
export default About;