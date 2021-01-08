import React from 'react';
import { HStack, Link, Button, Box, } from '@chakra-ui/core'

const CardFooter = () => {
    return (
        <Box my="5px" justifyItems="flex-end">
            <HStack justify="space-between">
                <Link as="u" >Event details</Link>
                <Button color="#ffffff" _hover={{ bg: "#4475F1" }} _active={{ backgroundColor: "blue" }} borderRadius="10px" bg="#4475F1" >
                    Register
                </Button>
            </HStack>
        </Box>
    )
}

export default CardFooter;