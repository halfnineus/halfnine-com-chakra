import {
    Box,
    BreadcrumbItem,
    Heading,
    SimpleGrid,
    Breadcrumb,
    Text,
    Flex,
} from "@chakra-ui/react"
import router, { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Link from "next/link"

import indexdat from "../../assets/quote/index.json"
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
                        canonical="https://www.halfnine.com/quote"
                        languageAlternates={[
                            {
                                hrefLang: 'es',
                                href: 'https://www.halfnine.com/es/quote',
                            }
                        ]}
                        openGraph={{
                            url: `https://www.halfnine.com/quote`,
                            title: indexData.head.title,
                            description: indexData.head.description
                        }}
                    />
                    <Box py={4} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                        <Breadcrumb fontSize={'sm'} textColor="blackAlpha.700" letterSpacing={'tighter'}>
                            <BreadcrumbItem>
                                <Link href="/" passHref>
                                    <Text _hover={{ color: 'blue.400' }}>{"Home"}</Text>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Text pointerEvents={'none'}>{"Quote"}</Text>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                    <Box bg={'blue.500'} textColor={'white'}>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" py={1}>
                        </Box>
                    </Box>
                    <Box py={{ base: 8, md: 12 }} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                        <Flex pb={2} direction="column-reverse">
                            <Box
                                as="hr"
                                bg="blue.500"
                                h="3px"
                                w="64px"
                                my={1}
                            />
                            <Heading>{"Find the estimated cost of your project"}</Heading>
                        </Flex>
                        <Text fontSize={'lg'}>
                            Please select one of the options below:
                        </Text>
                    </Box>
                    <Box bg={'#fbfbfb'} py={{ base: 16, md: 24 }}>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
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
                    </Box>
                    <Box py={{ base: 16, md: 24 }} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                        The scope of the project<br />
                        The complexity of the project<br />
                        The time required to complete the project<br />
                        The resources that will be needed to complete the project<br />
                        The risks associated with the project<br />
                        {/* The size and complexity of the project
                        The type of project
                        The location of the project
                        The availability of resources
                        The time frame for the project
                        The risks associated with the project */}
                    </Box>

                </React.Fragment>
            ))}
        </>
    );
}

export default Index;

const datax = [
    {
        locale: "en",
        title: "Development",
        description: "Development",
        url: "/quote/development",
    },
    {
        locale: "en",
        title: "Staff",
        description: "staff",
        url: "/quote/staffing",
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