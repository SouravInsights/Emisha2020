import { Flex } from '@chakra-ui/core'
import Head from 'next/head'
import About from '../component/About'
import Navbar from '../Component/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Emisha</title>
      </Head>
      <Flex direction="column" px="120px">
        <Navbar/>
        <About/>
      </Flex>
      

      </>
  )
}
