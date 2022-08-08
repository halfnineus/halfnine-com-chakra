import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { DevTerms } from "../../components/dev";

const Development = () => {
    return (
        <>
            <NextSeo title={'protafolioData.head.title'} description={'protafolioData.head.description'} />
            <Box minH={'2rem'} />
            <DevTerms />
            <Box minH={'5rem'} />
        </>

    );
}

export default Development;