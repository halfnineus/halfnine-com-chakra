import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Navbar, SCFooter } from './index'

const MainLayout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Box minH={{ base: '8rem', md: '4rem', lg: '4rem', }} />
            <SCFooter />
        </>
    )
}

export default MainLayout
