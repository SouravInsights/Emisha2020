import React, {  useState } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Button, Image, Heading, Link } from '@chakra-ui/core';
import {GiHamburgerMenu} from 'react-icons/gi';

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
      top="0"
      height={['auto', 'auto', '80px', '80px']}
      zIndex="1"
      {...props}
    >
      <Flex mr={5} align="center">
        <Image
          w={['200px', '160px', '160px', '180px']}
          src="/logo.png"
        />
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
       <GiHamburgerMenu size="1.5rem"/>
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
          <NavLink>Group of Communities</NavLink>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default NavBar;