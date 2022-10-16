import { Box } from '@chakra-ui/react'
import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RouteNavigator from '../components/RouteNavigator'

function ProductPage() {
    return (
        <Box>
            <Header />
            <RouteNavigator />
            <Content />
            <Footer />
        </Box>
    )
}

export default ProductPage