import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Check, Star, ThumbsUp } from 'react-feather'

function UserReview(props) {
    return (
        <Flex>
            <Box>
                <Image rounded='full' boxSize='10' objectFit='contain' src={props.imgUrl} alt='' />
            </Box>
            <Stack>
                <Flex justifyContent='space-between'>
                    <Stack>
                        <Flex>
                            <Text>{props.name}</Text>
                            <Text color={'Gray'}>Aug 13, 2022</Text>
                            <Check color='#00ff00' />
                        </Flex>
                        <Text></Text>
                        <Flex>
                            <Star fill='#000000' />
                            <Star fill='#000000' />
                            <Star fill='#000000' />
                            <Star fill='#000000' />
                            <Star fill='#000000' />
                        </Flex>
                    </Stack>
                    <Button variant='outline' colorScheme='gray'>
                        Was this helpful? <ThumbsUp />
                    </Button>
                </Flex>
                <Text>
                    {props.content}
                </Text>
            </Stack>
        </Flex>
    )
}

export default UserReview