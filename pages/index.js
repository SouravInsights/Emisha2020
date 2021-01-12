import { Flex, Button, Icon, Heading, Stack, Avatar, Divider } from '@chakra-ui/core'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GraphQLClient } from "graphql-request";
import Head from 'next/head'
import About from '../component/About'
import Navbar from '../Component/Navbar'
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
  return (
    <>
      <Head>
        <title>Emisha</title>
      </Head>
      <Flex
        className={styles.bimage}
        direction="column"
        px={['30px', '30px', '80px', '120px']}
        justifyContent="space-between"
      >

        <Navbar />

        <About />

        {/* Event section */}
        <Heading fontSize={["md", "lg", "2xl", "5xl"]} align="center" fontWeight="bold">Our Past Events</Heading>
        <Flex zIndex="1" direction="row" my="20px" alignItems="center" justifyContent="space-around" >
          <Button _hover={{ bg: "#ffffff" }} backgroundColor="#ffffff" _active={{ backgroundColor: "#ffffff" }}  >
            <Icon as={FaArrowLeft} w={6} h={6} />
          </Button>
          <Flex direction="row" overflow="auto" mx="10px">
            {events.map((event) => (
              <Card
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
            )
            )}
          </Flex>
          <Button _hover={{ bg: "#ffffff" }} backgroundColor="#ffffff" _active={{ backgroundColor: "#ffffff" }} >
            <Icon as={FaArrowRight} w={6} h={6} />
          </Button>
        </Flex>
        {/* Event section End */}

        <Newsletter />
        <Footer />
      </Flex>
    </>
  )
}
