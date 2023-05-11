import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { Navbar, SCFooter, Cookies, Breadcrumb } from '../index'

const MainLayout = ({ children }: any) => {
    const router = useRouter();
    const isRootPage = router.pathname === '/' || router.pathname === '/contact';
    return (
        <>
            <Navbar />
            <main>
                <Box minH={{ base: '60px', md: '80px' }}></Box>
                {/* {!isRootPage && (
                    <Box py={4} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                        <Breadcrumb pathname={router.pathname} />
                    </Box>
                )} */}
                {children}
            </main>
            <SCFooter />
            <Cookies />
        </>
    )
}

export default MainLayout
