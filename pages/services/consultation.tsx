import {
    chakra,
    Box,
    Flex,
    SimpleGrid,
    Stack,
    GridItem,
    Divider,
    Text,
    Heading,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { Values } from "../../components";
import { HiOutlineDocumentMagnifyingGlass, HiOutlineDocumentChartBar, HiOutlineBeaker, HiOutlineCheckBadge } from 'react-icons/hi2'

const Feature = (props: any) => {
    return (
        <Flex>
            <Flex shrink={0}>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    h={12}
                    w={12}
                    rounded="md"
                    color="white"
                    bg={"gray.100"}
                >
                    <Box color={"blue.600"} fontSize="1.5rem">
                        {props.icon}
                    </Box>
                </Flex>
            </Flex>
            <Box ml={4}>
                <chakra.dt
                    fontSize="lg"
                    fontWeight="bold"
                    lineHeight="6"
                    color={'gray.900'}
                >
                    {props.title}
                </chakra.dt>
                <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
                    {props.children}
                </chakra.dd>
            </Box>
        </Flex>
    );
};

import indexdat from '../../assets/services/consultation.json'
import { useRouter } from "next/router";

const Consultation = () => {
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title={indexData.head.title}
                            description={indexData.head.description}
                            canonical="https://www.zedir.com/services/consultation"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/services/consultation',
                                }
                            ]}
                        />
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} pt={4} mx="auto">
                            <Box pb={6} alignSelf="start">
                                <Heading
                                    mb={2}
                                    fontSize={{ base: "3xl", md: "4xl" }}
                                    fontWeight="extrabold"
                                    letterSpacing="tight"
                                >
                                    {indexData.Block1.Heading}
                                </Heading>
                                <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
                                    {indexData.Block1.Text}
                                </Text>
                            </Box>
                            <SimpleGrid
                                alignItems="center"
                                columns={{ base: 1, lg: 2 }}
                                spacingY={{ base: 10, lg: 6 }}
                                spacingX={{ base: 10, lg: 12 }}
                            >
                                <GridItem colSpan={2}>
                                    <Stack
                                        spacing={{ base: 10, md: 0 }}
                                        display={{ md: "grid" }}
                                        gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                                        gridColumnGap={{ md: 8 }}
                                        gridRowGap={{ md: 10 }}
                                    >
                                        <Feature icon={<HiOutlineDocumentMagnifyingGlass />} title={indexData.Block1.t1}>
                                            {indexData.Block1.d1}
                                        </Feature>
                                        <Feature icon={<HiOutlineDocumentChartBar />} title={indexData.Block1.t2}>
                                            {indexData.Block1.d2}
                                        </Feature>
                                        <Feature icon={<HiOutlineBeaker />} title={indexData.Block1.t3}>
                                            {indexData.Block1.d3}
                                        </Feature>
                                        <Feature icon={<HiOutlineCheckBadge />} title={indexData.Block1.t4}>
                                            {indexData.Block1.d4}
                                        </Feature>
                                    </Stack>
                                </GridItem>
                            </SimpleGrid>
                            <Text textAlign={'center'} my={6} fontSize={{ base: "lg", md: "xl" }} color="gray.500">
                                {indexData.Block1.SubText}
                            </Text>

                            <Divider my={12} />

                            <Values />

                            <Box p={"2rem"} />

                        </Box>
                    </>
                )
            })}
        </>
    );
};

export default Consultation;