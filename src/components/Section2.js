import { Box, Heading, Text, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Table, TableContainer, Thead, Tr, Tbody, Th, Td, Tfoot } from '@chakra-ui/react'
import React from 'react'
import { CheckCircle, Star } from 'react-feather'

function Section2() {
    return (
        <Box w='90%' m='auto'>
            <Tabs>
                <TabList display='flex' justifyContent='center' gap={10}>
                    <Tab >Description</Tab>
                    <Tab>Specifications</Tab>
                    <Tab>Review</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex>
                            <Box flex='0.7'>
                                <Stack spacing={5}>
                                    <Heading>About this product</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                        voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                                        voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam
                                        voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                                        voluptatum quos quidem quas nesciunt. Quisquam, quae.
                                    </Text>
                                    <Heading>Product Description</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                        voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                                        voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam
                                        voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                                        voluptatum quos quidem quas nesciunt. Quisquam, quae.
                                    </Text>
                                    <Heading>Product Description</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                        voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                                        voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam
                                        voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                                        voluptatum quos quidem quas nesciunt. Quisquam, quae.
                                    </Text>
                                </Stack>
                            </Box>
                            <Box flex='0.3'>
                                <TableContainer>
                                    <Table variant='striped'>
                                        <Tbody>
                                            <Tr>
                                                <Td>Rating</Td>
                                                <Td>
                                                    <Flex alignItems='center' gap={2}>
                                                        <Flex>
                                                            <Star fill='#000000' />
                                                            <Star fill='#000000' />
                                                            <Star fill='#000000' />
                                                            <Star fill='#000000' />
                                                            <Star color='#000000' />
                                                        </Flex>
                                                        <Text>(1234)</Text>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>feet</Td>
                                                <Td>centimetres (cm)</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>yards</Td>
                                                <Td>metres (m)</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>inches</Td>
                                                <Td>millimetres (mm)</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>feet</Td>
                                                <Td>centimetres (cm)</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>yards</Td>
                                                <Td>metres (m)</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Flex>
                        <Flex my={5} justifyContent='space-evenly'>
                            <Stack>
                                <CheckCircle />
                                <Heading fontSize='sm'>Shipping Faster</Heading>
                                <Text>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</Text>
                            </Stack>
                            <Stack>
                                <CheckCircle />
                                <Heading fontSize='sm'>Cotton Material</Heading>
                                <Text>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</Text>
                            </Stack>
                            <Stack>
                                <CheckCircle />
                                <Heading fontSize='sm'>High Quality</Heading>
                                <Text>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</Text>
                            </Stack>
                            <Stack>
                                <CheckCircle />
                                <Heading fontSize='sm'>Highly Compatible</Heading>
                                <Text>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</Text>
                            </Stack>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Section2