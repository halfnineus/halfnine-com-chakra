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
            <Box /* display={{ base: 'none', lg: 'flex' }} */ minH={"9rem"} /* bg={mode('gray.50', 'gray.700')} */ />
            <SCFooter />
        </>
    )
}

export default MainLayout



