import React from "react";
import { Flex, Box, Text, Link, Icon, Image } from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaLinkedin, } from "react-icons/fa";

const FooterLink = ({ icon, href, label }) => (

  <Link mr="20px" href={href} aria-label={label} isexternal>
    <Icon as={icon} boxSize={8} />
  </Link>

)
const links = [
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/howdyashis",
  },
  {
    icon: FaGithub,
    label: "Github",
    href: "https://github.com/ashiskumar-1999"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashis-kumar-35385b160/",
  }

]

const Footer = (props) => {
  return (
    <Flex
      w="90%"
      height={['auto', 'auto', '80px', '80px']}
      mx="auto"
      my="60px"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      top="0"
      zIndex="1"
      {...props}
    >
      <Box w="160px">
        <Image src="/Emisha.svg" />
      </Box>
      <Box
        zIndex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box w={['300px', '350px', '400px', '500px']} align="center">
          {links.map((link) => (
            <FooterLink key={link.href} {...link} />
          ))}
        </Box>
        <Text
          fontWeight="bold"
          fontSize={['sm', 'sm', 'lg', 'lg']}
          my="10px"
          textAlign="center"
        >
          Copyright ©2020 Emisha, all copyright reserved.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
