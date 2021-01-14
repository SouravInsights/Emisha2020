import React, { useState } from 'react';
import { Box, Flex, Button, Icon, IconButton, Heading, Stack, Avatar, Divider } from '@chakra-ui/core'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GraphQLClient } from "graphql-request";
import Head from 'next/head'
import About from '../component/About/About'
import NavBar from '../component/Navbar/Header'
import Footer from '../component/Footer'
import Newsletter from '../component/Newslettersection'
import Card from '../component/Card/Card'
import CardHeader from '../component/Card/CardHeader';
import CardBody from '../component/Card/CardBody';
import CardFooter from '../component/Card/CardFooter';
import styles from '../styles/styles.module.css';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckh5adtt3ablq01z92dom8ylv/master"
  );

  const { events } = await graphcms.request(
    `
      {
        events {
          id
          title
          description
          start
          end
          coverImage {
            url
          }
        }
      }
    `
  );

  return {
    props: {
      events
    },
    revalidate: 1,
  };
}

export default function Home({ events }) {

  const [current, setCurrent] = useState(0);
  const length = events.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(events) || events.length <= 0) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Emisha</title>
      </Head>
      <NavBar />

      <Flex
        className={styles.bimage}
        direction="column"
        px={['30px', '30px', '80px', '120px']}
        justifyContent="space-between"
      >
        <About />

        {/* Card section */}
        <Heading zIndex="1" fontSize={["md", "lg", "2xl", "5xl"]} align="center" fontWeight="bold">Our Past Events</Heading>
        <Flex zIndex="1" direction="row" my="20px" justifyContent="center"
          alignItems="center" >
          <IconButton
            boxShadow="2xl"
            borderRadius="50px"
            color="black"
            colorScheme="white"
            size="lg"
            icon={<FaArrowLeft />}
            onClick={prevSlide}
          />
          {/* <Button _hover={{ bg: "#ffffff" }} backgroundColor="#ffffff" >
            <Icon as={FaArrowLeft} w={6} h={6} />
          </Button> */}
          <Flex
            direction="row"
            overflow="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: "none",
              }
            }}
          >
            {events.map((event, index) => (
              <div>
                {index === current && (
                  <Card
                    className={`${index === current ? 'styles.slide active' : 'styles.slide'} `}
                    key={event.id}
                    border="1px solid #DED9D9"
                    coverImage={event.coverImage.url}
                    header={
                      <CardHeader
                        title={event.title}
                        date={event.start}
                        mode="Online"
                      />
                    }
                    footer={
                      <CardFooter />
                    }
                  >
                    {console.log(event)}
                    <CardBody>
                      <Heading fontWeight="bold" fontSize="xs" lineHeight="widest" color="#000000" my="5px" >
                        Speakers
                  </Heading>
                      <Stack direction="row">
                        <Avatar size="md" />
                      </Stack>
                    </CardBody>
                  </Card>
                )}
              </div>
            )
            )}
          </Flex>
          <IconButton
            boxShadow="2xl"
            borderRadius="50px"
            color="black"
            colorScheme="gray.400"
            size="lg"
            icon={<FaArrowRight />}
            onClick={nextSlide}
          />
          {/* <Button _hover={{ bg: "#ffffff" }} backgroundColor="#ffffff" _active={{ backgroundColor: "#ffffff" }} >
            <Icon as={FaArrowRight} w={6} h={6} />
          </Button> */}
        </Flex>
        {/* Card section End */}

        <Newsletter />
        <Footer />
      </Flex>
    </>
  )
}
