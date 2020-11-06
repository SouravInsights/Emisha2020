import { Flex, Box, Heading } from '@chakra-ui/core'
import Head from 'next/head'
import About from '../component/About'
import Diversity from '../component/Diversity'
import Navbar from '../Component/Navbar'
import Event from '../component/Event'

export default function Home() {
  return (
    <>
      <Head>
        <title>Emisha</title>
      </Head>
      <Flex direction="column" px={['30px', '30px', '80px', '120px']}>
        <Navbar/>
        <About/>
      <Heading fontSize={["md","lg","2xl","5xl"]} align="center" fontWeight="bold">Our Past Events</Heading>
        <Event/>
      </Flex>
      </>
  )
}
