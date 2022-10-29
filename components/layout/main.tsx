import { Navbar, SCFooter } from '../index'

const MainLayout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <SCFooter />
        </>
    )
}

export default MainLayout
