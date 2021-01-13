import React, { useState } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Image, Link } from '@chakra-ui/core';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavLink = ({ children, ...props }) => (
  <Link
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    fontSize={'xl'}
    fontWeight="medium"
    lineHeight="xl"
    {...props}
  >
    {children}
  </Link>
);

const NavBar = (props) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      w="90%"
      mx="auto"
      my="60px"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="white"
      position="sticky"
      top="0"
      border="1px solid"
      borderColor="#313131"
      borderRadius="20px"
      boxShadow="2xl"
      height={['auto', 'auto', '80px', '80px']}
      zIndex="2"
      {...props}
    >
      <Flex mr={5} align="center">
        <Image
          w={['140px', '140px', '160px', '160px']}
          src="/Emisha.svg"
        />
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <GiHamburgerMenu size="1.5rem" />
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
      >
        <NextLink href="/">
          <NavLink>About</NavLink>
        </NextLink>
        <NextLink href="">
          <NavLink>Event</NavLink>
        </NextLink>
        <NextLink href="">
          <NavLink>Blogs</NavLink>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default NavBar;