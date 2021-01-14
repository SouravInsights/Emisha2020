import React from "react";
import PropTypes from "prop-types";
import {
    Box,
    Button,
    Flex,
    Image,
    Heading,
    Stack,
    Text,
    Link
} from "@chakra-ui/core";
import { FaDiscord } from 'react-icons/fa';

export default function Hero({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    rightIcon,
    ...rest
}) {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
            {...rest}
        >
            <Stack
                spacing={4}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h1"
                    fontSize={['4xl', '4xl', '4xl', '5xl']}
                    lineHeight="1"
                    fontWeight="extrabold"
                    color="gray.250"
                    textAlign={["center", "center", "left", "left"]}
                    zIndex="2"
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    fontSize={["xl", "xl", "xl", "xl"]}
                    fontWeight="normal"
                    color="#000000"
                    opacity="0.8"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    {subtitle}
                </Heading>
                <Link to={ctaLink}>
                    <Button
                        size={["md", "md", "md", "lg"]}
                        color="#ffffff"
                        _hover={{ bg: "blue.50" }}
                        _active={{ borderColor: "" }}
                        py="3"
                        px="6"
                        lineHeight="1"
                        boxShadow="2xl"
                        backgroundColor="blue.50"
                        rightIcon={rightIcon}
                    >
                        {ctaText}
                    </Button>
                </Link>
            </Stack>
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <Image src={image} size="100%" />
            </Box>
        </Flex>
    );
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    rightIcon: PropTypes.element
};