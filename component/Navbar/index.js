import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Flex, Button, Heading, Link, Image, List } from '@chakra-ui/core';

const NavLink = ({ children, ...props }) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block" fontSize={"xl"} fontWeight="medium" lineHeight="xl" color="gray.600" {...props}>
    {children}
  </Link>
);

const NavBar = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex
      as="nav"
      my="60px"
      align="center"
      justifyContent="space-between"
      top="0"
      {...props}
    >
      <Flex mr={5} align="center">
        <Heading as="h1" size="lg">
          <Image
            position="relative"
            src="/logo.png"
            w="120px"
            h="40px"
            margin="auto"
          />
        </Heading>
      </Flex>
      

      <Box
        display="flex"
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
      >
        <NavLink href="">About</NavLink>
        <NavLink href="about">Diversity</NavLink>
        <NavLink href="about">Event</NavLink>
        <NavLink href="about">ContactUs</NavLink>
      </Box>
    </Flex>
  );
};

export default NavBar;
