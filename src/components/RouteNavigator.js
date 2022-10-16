import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function RouteNavigator() {
  return (
    <Box bg='gray.200'>
      <Flex px={5} py={2}>
        <Text color='gray'>Home / Category Sports / </Text><Text color='black' ml={1} fontWeight='bold'> Football Shirt</Text>
      </Flex>
    </Box>
  )
}

export default RouteNavigator