import { Box } from '@chakra-ui/react'
import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

function Content() {
    return (
        <Box>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Box>
    )
}

export default Content