import React from 'react'
import {Heading, Stack, Avatar} from '@chakra-ui/core'

const Cardbody = ({name,url}) => { 
    return(
        <>
        <Heading fontWeight="bold" fontSize="xs" lineHeight="widest" color="#000000"  >
            Speakers
          </Heading>
        <Stack direction="row">
          <Avatar size="md" name={name} src={url} />
        </Stack>
        </>
    )
}
export default Cardbody;