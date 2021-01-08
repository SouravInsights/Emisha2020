import React from 'react';
import {HStack, Link, Button} from '@chakra-ui/core'
const Cardfooter = () => {
    return(
         <HStack  justify="space-between">
          <Link>Event details</Link>
          <Button color="#ffffff" _hover={{ bg: "#4475F1" }} _active={{ backgroundColor: "blue" }} backgroundColor="#4475F1" >
            Register
        </Button>
        </HStack>
    )
}

export default Cardfooter;