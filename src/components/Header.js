import { Box, Button, Flex, Heading, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowDownRight, Heart, Search, ShoppingCart, User } from 'react-feather'

function Header() {
    return (
        <Box>
            <Flex>
                <Select ml={5} size='sm' w='56' defaultValue='french' >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="french">French</option>
                </Select>
                <Select ml={5} size='sm' w='56' defaultValue='USD'>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="EU">EU</option>
                </Select>
            </Flex>
            <Flex p={5} justifyContent='space-between'>
                <Flex alignItems='center' justifyContent='flex-start' gap={5} w='50%'>
                    <Box fontWeight='extrabold'>Logo</Box>
                    <Flex justifyContent='space-evenly' gap={10}>
                        <Heading
                            _hover={{ color: 'orange.500' }}
                            size='xs'
                        >
                            Home</Heading>
                        <Heading
                            _hover={{ color: 'orange.500' }}
                            size='xs'
                        >School Uniforms</Heading>
                        <Heading
                            _hover={{ color: 'orange.500' }}
                            size='xs'>Corporate</Heading>
                        <Heading
                            _hover={{ color: 'orange.500' }}
                            size='xs'
                        >Sports</Heading>
                        <Heading
                            size='xs'
                            _hover={{ color: 'orange.500' }}>
                            Blogs
                        </Heading>
                    </Flex>
                </Flex>
                <Flex>
                    <Search />
                    <Heart />
                    <ShoppingCart />
                    <User />
                </Flex>
            </Flex>
            <Flex bg='black' color='white' alignItems='center' justifyContent='center'>
                <Text>
                    Free Delivery on orders above Rs. 1000 DON'T MISS
                </Text>
                <Button display='flex' alignItems='center' color='F97E57' bg='transparent' variant='unstyled' border='none' outline='none'>
                    SHOP NOW <ArrowDownRight />
                </Button>
            </Flex>
        </Box>
    )
}

export default Header