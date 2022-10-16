import { Box, Flex, Heading, Input, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { Facebook, GitHub, Instagram, Mail, MapPin, PhoneCall, Twitter, Youtube } from 'react-feather'

function Footer() {
    return (
        <Stack bg='black' color='white' p={5} spacing={5}>
            <Flex
                gap={5}
                justifyContent='space-between'>
                <Stack spacing={5}>
                    <Heading size='sm'>Sign up Today And Get Rs. 200 Off on your First Order</Heading>
                    <Input p={5} placeholder='Enter your email' />
                    <Flex>
                        <Facebook />
                        <Instagram />
                        <Youtube />
                        <Twitter />
                        <GitHub />
                    </Flex>
                </Stack>
                <Box>
                    <Heading fontSize='sm'>Collection</Heading>
                    <Text>Clothing</Text>
                    <Text>Tops</Text>
                    <Text>Sweaters</Text>
                    <Text>Dresses</Text>
                    <Text>Shoes</Text>
                </Box>
                <Box>
                    <Heading fontSize='sm'>Company</Heading>
                    <Text>Carrer at Toppers</Text>
                    <Text>About Toppers</Text>
                    <Text>Contact Us</Text>
                    <Text>Gift Cards</Text>
                    <Text>Blog</Text>
                </Box>
                <Box>
                    <Heading fontSize='sm'>Need Help</Heading>
                    <Text>Order Status</Text>
                    <Text>Shipping and Delivery</Text>
                    <Text>FAQ & Helps</Text>
                    <Text>Terms & Conditions</Text>
                    <Text>Legal & Privacy</Text>
                </Box>
                <Box>
                    <Heading fontSize='sm'>Exclusive Services</Heading>
                    <Text display='flex'>
                        <PhoneCall /> Call us +1 5666 223222
                    </Text>
                    <Text display='flex'>
                        <Mail /> Send us an email
                    </Text>
                    <Text display='flex'>
                        <MapPin /> See our stores
                    </Text>
                </Box>
            </Flex>
            <StackDivider color='white' bg='white' h={0.3} />
            <Text> &copy; 2022 Company Name All Rights Reserved </Text>
        </Stack>
    )
}

export default Footer