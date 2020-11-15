import React from "react";
import { Flex, Box, Text, Link, Icon,Image } from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaLinkedin, } from "react-icons/fa";

const FooterLink = ({icon, href, label})=>(
  
        <Link  mr="20px" href={href} aria-label={label} isexternal>
          <Icon as={icon} boxSize={8} />
        </Link>

)
const links=[
  {
    icon: FaTwitter,
    label:"Twitter",
    href : "https://twitter.com/howdyashis",
  },
  {
    icon : FaGithub,
    label : "Github",
    href : "https://github.com/ashiskumar-1999"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href : "https://www.linkedin.com/in/ashis-kumar-35385b160/",
  }

]

const Footer = (props) => {
  return (
       <Flex
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
        <Box  w="160px">
            <Image src="/logo.png"/>
        </Box>
      <Box align="center">
         {links.map((link) => (
          <FooterLink  key = {link.href} {...link}/>
        ))}
      <Text fontWeight="bold" fontSize="lg"my="10px">©2020 Emisha, all copyright reserved.</Text>
        </Box>
   </Flex>
  );
};

export default Footer;
