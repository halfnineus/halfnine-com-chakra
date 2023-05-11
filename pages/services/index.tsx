import {
    Box,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Link from "next/link"

import indexdat from "../../assets/services/index.json"
import React from "react"


const Index = () => {
    const { locale } = useRouter();
    const filteredData = indexdat.data.filter((p) => p.locale === locale);
    const filteredDatax = datax.filter((p) => p.locale === locale);
    return (
        <>
            {filteredData.map((indexData, index) => (
                <React.Fragment key={index}>
                    <NextSeo
                        title={indexData.head.title}
                        description={indexData.head.description}
                        canonical="https://www.halfnine.com/services"
                        languageAlternates={[
                            {
                                hrefLang: 'es',
                                href: 'https://www.halfnine.com/es/services',
                            }
                        ]}
                        openGraph={{
                            url: `https://www.halfnine.com/services`,
                            title: indexData.head.title,
                            description: indexData.head.description
                        }}
                    />
                    <Box bg={'blue.600'} textColor={'white'}>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                            <Heading py={2}>
                            </Heading>
                        </Box>
                    </Box>
                    <Box py={{ base: 16, md: 24 }} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                        <SimpleGrid columns={[1, null, 2, null, 3]} spacing='40px'>
                            {filteredDatax.map((tabx, index) => (
                                <Box overflow={'hidden'} key={index} rounded={"2xl"}>
                                    <Link href={tabx.url}>
                                        <Box bg={'blue.100'} h={'24'}>
                                            {tabx.title}
                                        </Box>
                                    </Link>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </React.Fragment>
            ))
            }
        </>
    );
}

export default Index;


const datax = [
    {
        locale: "en",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "en",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "en",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "en",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "en",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "en",
        title: "",
        description: "",
        url: "",
    },



    {
        locale: "es",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "es",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "es",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "es",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "es",
        title: "",
        description: "",
        url: "",
    },
    {
        locale: "es",
        title: "",
        description: "",
        url: "",
    },
];