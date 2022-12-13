import {
    chakra,
    Box,
    Flex,
    SimpleGrid,
    Stack,
    GridItem,
    Divider,
    Text,
    useColorModeValue as mode,
    Heading,
    Center,
    Image,
    Container,
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

const Development = () => {
    return (
        <>
            <NextSeo
                title='Technology Consulting - Automating all Things | Zedir'
                description={`Find the leading practices in development, increase your organization's agility to achieve powerful outcomes.`}
                canonical="https://www.zedir.com/services/digitalization"
            // languageAlternates={[
            //     {
            //         hrefLang: 'es',
            //         href: 'https://www.zedir.com/es/services/digitalization',
            //     }
            // ]}
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} pt={4} mx="auto">
                <Box pb={6} alignSelf="start">
                    <Heading
                        mb={2}
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                    >
                        Technology Consulting Services
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
                        Our focus: Internet of Things and Control Systems for Industrial Applications
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
                            <Feature icon={<HiOutlineDocumentMagnifyingGlass />} title="Feasibility Study">
                                {`Is your project viable? Find out through our TELOS report, (Technical, Economic, Legal, Operational, Scheduling)`}
                            </Feature>
                            <Feature icon={<HiOutlineDocumentChartBar />} title="Performance Assessment">
                                Evaluate your organization employees and leaders on their Performance, Knowledge, and Skills
                            </Feature>
                            <Feature icon={<HiOutlineBeaker />} title="Research and Development">
                                Research through industry experts the capabilities of your projects and take them to the next level.
                            </Feature>
                            <Feature icon={<HiOutlineCheckBadge />} title="Validation">
                                Improve how reliable is your production and services with data gathered through information technology.
                            </Feature>
                        </Stack>
                    </GridItem>
                </SimpleGrid>
                <Text textAlign={'center'} my={6} fontSize={{ base: "lg", md: "xl" }} color="gray.500">
                    {`Find the leading practices in development, increase your organization's agility to achieve powerful outcomes.`}
                    {/* {`With the use of these established methods we are able to create a valuable strategy that delivers consistent results on diferent projects.`} */}
                </Text>

                <Divider my={12} />

                <Values />

                <Box p={"2rem"} />

            </Box>
        </>
    );
};

export default Development;