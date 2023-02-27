import { Box } from '@chakra-ui/react'
import { Navbar, SCFooter, Cookies } from '../index'

const MainLayout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <main>
                {/* <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} pt={4} mx="auto"> */}
                    {children}
                {/* </Box> */}
            </main>
            <SCFooter />
            <Cookies />
        </>
    )
}

export default MainLayout
