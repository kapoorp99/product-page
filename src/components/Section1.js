import { Box, Button, Divider, Flex, Heading, Image, Progress, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { Heart, Minus, Plus, RefreshCw, Share, Shield, Star } from 'react-feather'
import im10 from '../assets/im10.jpg'
import im6 from '../assets/im6.jpeg'
import im7 from '../assets/im7.jpeg'
import im8 from '../assets/im8.jpeg'
import im9 from '../assets/im9.jpeg'

function Section1() {
    return (
        <Flex w='90%' p={10} m='auto' gap={10}>
            <Box flex='0.5'>
                <Image src={im10} />
                <Flex my={10} gap={5}>
                    <Image boxSize='32' src={im6} alt='' />
                    <Image boxSize='32' src={im7} alt='' />
                    <Image boxSize='32' src={im8} alt='' />
                    <Image boxSize='32' src={im9} alt='' />
                </Flex>
            </Box>
            <Stack spacing={5} flex='0.5'>
                <Box>
                    <Heading fontSize='xs' color='gray.400'>CLOTHING</Heading>
                </Box>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Heading>Leather Boots with tall leg</Heading>
                    <Share />
                </Flex>
                <Flex alignItems='center' gap={5}>
                    <Flex>
                        <Star color='#000000' fill='#000000' />
                        <Star color='#000000' fill='#000000' />
                        <Star color='#000000' fill='#000000' />
                        <Star color='#000000' fill='#000000' />
                        <Star color='#000000' />
                    </Flex>
                    <Text>
                        (1234 Reviews)
                    </Text>
                    <Text> | </Text>
                    <Flex>
                        <Text fontWeight='bold'>SKU:</Text>
                        <Text> A515-56-36Ut</Text>
                    </Flex>
                    <Text> | </Text>
                    <Text color='green'> In Stock </Text>
                </Flex>
                <Flex gap={5}>
                    <Text> $68.00 </Text>
                    <Text textDecorationLine='line-through'> $98.00</Text>
                    <Tag size={'sm'} variant='solid' bg='#fa6c58'>Save $12</Tag>
                </Flex>
                <Text>
                    The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.
                </Text>
                <Flex justifyContent='space-between'>
                    <Heading fontSize='xl' color='gray.400'>Sold It</Heading>
                    <Stack>
                        <Progress value='70' size='md' w='80' bgGradient={
                            'linear(to-r, green.200, green.500)'
                        } />
                        <Text fontSize='sm'>Available: 20</Text>
                    </Stack>
                </Flex>
                <Flex>
                    <Heading fontSize='xl'>Hurry Up! <br /> Offer Ends In:</Heading>
                    <Flex gap={10}>
                        <Stack align={'center'} p={3} borderRadius={'md'} h='80px' w='80px' bg='gray.300'>
                            <Heading fontSize='xl'>12</Heading>
                            <Text fontSize='xs'>Days</Text>
                        </Stack>
                        <Stack align={'center'} p={3} borderRadius={'md'} h='80px' w='80px' bg='gray.300'>
                            <Heading fontSize='xl'>12</Heading>
                            <Text>Hours</Text>
                        </Stack>
                        <Stack align={'center'} p={3} borderRadius={'md'} h='80px' w='80px' bg='gray.300'>
                            <Heading fontSize='xl'>12</Heading>
                            <Text>Minutes</Text>
                        </Stack>
                        <Stack align={'center'} p={3} borderRadius={'md'} h='80px' w='80px' bg='gray.300'>
                            <Heading fontSize='xl'>12</Heading>
                            <Text>Seconds</Text>
                        </Stack>
                    </Flex>
                </Flex>
                <Divider />
                <Box>
                    <Heading fontSize='md' my={4}>Size: M</Heading>
                    <Flex>
                        <Button variant={'outline'}>XS</Button>
                        <Button variant={'outline'}>S</Button>
                        <Button variant={'outline'}>M</Button>
                        <Button variant={'outline'}>L</Button>
                        <Button variant={'outline'}>XL</Button>
                        <Button variant={'outline'}>XXL</Button>
                    </Flex>
                    <Text>
                        <a href='#'>View Size Guide</a>
                    </Text>
                </Box>
                <Box>
                    <Heading fontSize='md'>Quantity</Heading>
                    <Flex my={5} gap={10} justifyContent='space-evenly'>
                        <Flex border='1px solid gray' borderRadius='md' alignItems='center'>
                            <Box
                                borderRight='1px'
                                _hover={{
                                    bgGradient: 'linear(to-r, #FA9158, #FA6C58)',
                                }}>
                                <Minus />
                            </Box>
                            <Box w='20'>
                                <Text textAlign='center'>1</Text>
                            </Box>
                            <Box
                                borderLeft='1px'
                                _hover={{
                                    bgGradient: 'linear(to-r, #FA9158, #FA6C58)',
                                }}>
                                <Plus />
                            </Box>
                        </Flex>
                        <Button
                            bgGradient={
                                'linear(to-r, #FA6C58, #FA9158)'
                            }
                            _hover={{
                                bgGradient: 'linear(to-r, #FA9158, #FA6C58)',
                            }}
                        >Add To</Button>
                        <RefreshCw />
                        <Heart />
                    </Flex>
                </Box>
                <Divider />
                <Box>
                    <Heading fontSize='md' my={4}>Get it Today</Heading>
                    <Stack spacing={5}>
                        <Stack direction='row'>
                            <Shield />
                            <Stack>
                                <Text fontSize='sm'>Fast Shipping</Text>
                                <Text fontSize='xs' color='gray.500'>Free delivery when order from $500</Text>
                            </Stack>
                        </Stack>
                        <Stack direction='row'>
                            <Shield />
                            <Stack>
                                <Text fontSize='sm'>100 - Days Returns</Text>
                                <Text fontSize='xs' color='gray.500'>Not impressed? Get a refund. You have 100 days to break our hearts</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Section1