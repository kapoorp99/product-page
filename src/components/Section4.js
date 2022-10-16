import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import im3 from '../assets/im3.jpeg'
import im2 from '../assets/im2.jpeg'
import im5 from '../assets/im5.jpeg'
import im4 from '../assets/im4.jpeg'

function Section4() {
    return (
        <Stack spacing={10} textAlign='center' p={10}>
            <Heading>Related Products</Heading>
            <Flex gap={10} justifyContent='center'>
                <Stack>
                    <Image w='300px' h='400px' src={im3} alt='' />
                    <Flex flexDirection='column' w='max-content' alignItems='flex-start'>
                        <Text>Embroidered Baguette Bag</Text>
                        <Flex gap={5}>
                            <Text color='pink'>$68.00</Text>
                            <Text>
                                <del>$ 98.00</del>
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex gap={2}>
                        <Box w='20px' h='20px' borderRadius='md' bg='gray.300' />
                        <Box w='20px' h='20px' borderRadius='md' bg='pink.300' />
                    </Flex>
                </Stack>
                <Stack>
                    <Image w='300px' h='400px' src={im2} alt='' />
                    <Flex flexDirection='column' w='max-content' alignItems='flex-start'>
                        <Text>Lace-Up Leather Boots</Text>
                        <Flex gap={5}>
                            <Text color='pink'>$68.00</Text>
                            <Text>
                                <del>$ 98.00</del>
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex gap={2}>
                        <Box w='20px' h='20px' borderRadius='md' bg='gray.300' />
                        <Box w='20px' h='20px' borderRadius='md' bg='yellow.300' />
                    </Flex>
                </Stack>
                <Stack>
                    <Image w='300px' h='400px' src={im5} alt='' />
                    <Flex flexDirection='column' w='max-content' alignItems='flex-start'>
                    <Text>Link Chain Necklace</Text>
                    <Flex gap={5}>
                        <Text color='pink'>$68.00</Text>
                        <Text>
                            <del>$ 98.00</del>
                        </Text>
                    </Flex>
                    </Flex>
                    <Flex gap={2}>
                        <Box w='20px' h='20px' borderRadius='md' bg='gray.300' />
                        <Box w='20px' h='20px' borderRadius='md' bg='red.300' />
                        <Box w='20px' h='20px' borderRadius='md' bg='yellow.300' />
                    </Flex>
                </Stack>
                <Stack>
                    <Image w='300px' h='400px' src={im4} alt='' />
                    <Flex flexDirection='column' w='max-content' alignItems='flex-start'>
                    <Text>Long Sleeve Lyocell T-Shirt</Text>
                    <Flex gap={5}>
                        <Text color='pink'>$68.00</Text>
                        <Text>
                            <del>$ 98.00</del>
                        </Text>
                    </Flex>
                    </Flex>
                    <Flex gap={2}>
                        <Box w='20px' h='20px' borderRadius='md' bg='gray.300' />
                        <Box w='20px' h='20px' borderRadius='md' bg='green.300' />
                    </Flex>
                </Stack>
            </Flex>
        </Stack>
    )
}

export default Section4