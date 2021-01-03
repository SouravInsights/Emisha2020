import React from 'react'
import {Grid, Box,Heading, Text} from '@chakra-ui/core'
import { render } from 'react-dom';


const Venue=()=>{
      return(
             <Grid templateColumns={{sm:"repeat(1,1fr)", md:"repeat(2,1fr)"}} justifyContent="space-between" py="50px">
                 <Box>
                     <initMap/>
                 </Box>
             </Grid>
        )
}
export default Venue;