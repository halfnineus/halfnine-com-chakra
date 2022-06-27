import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Navbar, SCFooter } from './index'

interface Props {
    children: any,
    // title: any
}

const MainLayout: NextPage<Props> = ({ children /* , title */ }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Box  minH={{ base: '8rem', md: '4rem', lg: '4rem', }} />
            <SCFooter />
        </>
    )
}

export default MainLayout



