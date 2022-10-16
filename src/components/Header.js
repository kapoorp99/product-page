import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowDownRight, Heart, Search, ShoppingCart, User } from 'react-feather'

function Header() {
    return (
        <Box>
            <Flex>
                <Select w='56' defaultValue='french' >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="french">French</option>
                </Select>
                <Select w='56' defaultValue='USD'>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="EU">EU</option>
                </Select>
            </Flex>
            <Box>
                <Box>
                    <Box>Logo</Box>
                    <Box></Box>
                </Box>
                <Box>
                    <Search />
                    <Heart />
                    <ShoppingCart />
                    <User />
                </Box>
            </Box>
            <Box bg='black' color='white' display='flex'>
                <Text>
                    Free Delivery on orders above Rs. 1000 DON'T MISS
                </Text>
                <Button color='F97E57'>SHOP NOW <ArrowDownRight /></Button>
            </Box>
        </Box>
    )
}

export default Header