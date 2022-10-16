import { Box, Button, Divider, Flex, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Star } from 'react-feather'
import UserReview from './UserReview'
import rv1 from '../assets/rv1.jpg'
import rv2 from '../assets/rv2.jpg'
import rv3 from '../assets/rv3.jpg'

function Section3() {
    return (
        <Stack w='90%' m='auto'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Flex w='50%' alignItems='center' justifyContent='space-between'>
                    <Box>
                        <Text fontSize='5xl' fontWeight='bold'>4.8</Text>
                        <Flex>
                            <Star fill='#000000' />
                            <Star fill='#000000' />
                            <Star fill='#000000' />
                            <Star fill='#000000' />
                            <Star fill='#000000' />
                        </Flex>
                        <Text>
                            (1,987 Ratings)
                        </Text>
                    </Box>
                    <Stack spacing={5}>
                        <Flex gap={1} alignItems='center'>
                            <Text>5</Text>
                            <Star fill='#FFFF00' />
                            <Progress w='80' value={80} />
                            <Text>80%</Text>
                        </Flex>
                        <Flex gap={1}>
                            <Text>5</Text>
                            <Star fill='#FFFF00' />
                            <Progress w='80' value={80} />
                            <Text>80%</Text>
                        </Flex>
                        <Flex gap={1}>
                            <Text>5</Text>
                            <Star fill='#FFFF00' />
                            <Progress w='80' value={80} />
                            <Text>80%</Text>
                        </Flex>
                        <Flex gap={1}>
                            <Text>5</Text>
                            <Star fill='#FFFF00' />
                            <Progress w='80' value={80} />
                            <Text>80%</Text>
                        </Flex>
                        <Flex gap={1}>
                            <Text>5</Text>
                            <Star fill='#FFFF00' />
                            <Progress w='80' value={80} />
                            <Text>80%</Text>
                        </Flex>
                    </Stack>
                </Flex>
                <Box>
                    <Button variant='outline' bg='white' color='black' _hover={{ bg: 'black', color: 'white' }}>Write A Review</Button>
                </Box>
            </Flex>
            <Divider />
            <Stack align='center' spacing={10}>
                <UserReview name='Viola Lucas' imgUrl={rv1} content="It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time." />
                <UserReview name='Martin Lucas' imgUrl={rv2} content="It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time." />
                <UserReview name='Harry Potter' imgUrl={rv3} content="It's really easy to use and it is exactly what I am looking for. A lot of good looking templates & it's highly customizable. Live support is helpful, solved my issue in no time." />
            </Stack>
            <Box></Box>
        </Stack>
    )
}

export default Section3