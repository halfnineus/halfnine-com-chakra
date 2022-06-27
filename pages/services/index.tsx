import { GetStaticProps } from "next";

function Page(_props: any) {
    return <p>hello world</p>
}

export default Page

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        redirect: {
            destination: '/',
            permanent: true, // triggers 308
        },
    };
}
