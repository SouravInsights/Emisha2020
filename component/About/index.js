import React from 'react';
import {Grid, Text, Box, Image, Heading} from '@chakra-ui/core';

const About = () =>{
    return(
            <Grid templateColumns="repeat(2,1fr)" justifyContent="space-between" py="50px">
                <Box>
                    <Image src="MainBg.png"/>
                </Box>
                <Box  px="50px" >
                    <Heading fontSize="4xl" fontWeight="bold" fontColor="cyan.100" align="center" py="20px">
                        Who We Are
                    </Heading>
                    <Text fontSize="xl" fontColor="gray.100">Emisha is a non-profit tech community, that runs Free workshops, Special events, Seminars, Hackathon, Coding competitions etc. It also offers valuable leadership experiences, connections to professional organizations, networking opportunities, and special events that mold a student’s perspective and power of virtualization– during the college years and beyond. Our comunity is open to everyone who has a williingness to learn and passionate about tech. We also welcome those students who don't even belong to computer science so that can be a part of diverse network. </Text>
                </Box>
            </Grid>
    );
}
export default About;