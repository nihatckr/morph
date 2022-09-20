import { Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'

const Layout = ({ children }) => {
    return (
        <Flex maxW={'1200px'} flexDir={'column'} margin={'auto'}>
            <Navigation />
            {children}
            <Footer />
        </Flex>
    )
}

export default Layout