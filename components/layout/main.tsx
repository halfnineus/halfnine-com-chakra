import { Box } from '@chakra-ui/react'
import { Navbar, SCFooter, Cookies } from '../index'

const MainLayout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <main>
                <Box minH={{ base: '60px', md: '80px' }}></Box>
                {children}
            </main>
            <SCFooter />
            <Cookies />
        </>
    )
}

export default MainLayout
