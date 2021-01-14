import React from "react"
import { Box, Text, Image } from "@chakra-ui/core"

export default function Logo(props) {
    return (
        <Box {...props}>
            <Image
                w={['140px', '140px', '160px', '180px']}
                src="/Emisha.svg"
            />
        </Box>
    )
}