import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { Navbar, SCFooter, Cookies } from '../index'

const MainLayout = ({ children }: any) => {
    const router = useRouter();
    return (
        <>
            <Navbar />
            <main>
                <Box minH={{ base: '60px', lg: '80px' }}></Box>
                {children}
            </main>
            <SCFooter />
            <Cookies />
        </>
    )
}

export default MainLayout
