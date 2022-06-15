import { NextPage } from 'next'
import Head from "next/head"
import { Navbar, SCFooter } from './index'

interface Props {
    children: any,
    title: any
}

const MainLayout: NextPage<Props> = ({ children, title }) => {
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



