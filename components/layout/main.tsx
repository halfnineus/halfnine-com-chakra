import { Navbar, SCFooter, Cookies } from '../index'

const MainLayout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <SCFooter />
            <Cookies />
        </>
    )
}

export default MainLayout
