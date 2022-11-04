import {
    chakra,
    Box,
    Flex,
    SimpleGrid,
    Stack,
    GridItem,
    Divider,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
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
                    bg={mode("gray.100", "brand.700")}
                >
                    <Box color={mode("brand.600", "white")} fontSize="1.5rem">
                        {props.icon}
                    </Box>
                </Flex>
            </Flex>
            <Box ml={4}>
                <chakra.dt
                    fontSize="lg"
                    fontWeight="bold"
                    lineHeight="6"
                    _light={{ color: "gray.900" }}
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

const Consultation = () => {
    return (
        <>
            <NextSeo
                title=' Optimize Applicable Technology Consulting - Automating all Things | Ochoa'
                description={`Find the leading practices in development, increase your organization's agility to achieve powerful outcomes.`}
                canonical="https://ochoa.pro/services/consultation"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/services/consultation',
                    }
                ]}
            />
            <Box
                // shadow="xl"
                // bg="white"
                // _dark={{ bg: "gray.800" }}
                px={{ base: '6', lg: '10' }}
                py={8}
                mx="auto"
            >
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, lg: 3 }}
                    spacingY={{ base: 10, lg: 32 }}
                    spacingX={{ base: 10, lg: 12 }}
                >
                    <Box alignSelf="start">
                        <chakra.h2
                            _light={{ color: "brand.500" }}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Optimize
                        </chakra.h2>
                        <chakra.h2
                            mb={3}
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="extrabold"
                            // textAlign={{ base: "center", sm: "left" }}
                            _light={{ color: "black" }}
                            lineHeight="shorter"
                            letterSpacing="tight"
                        >
                            Applicable Technology Consulting
                        </chakra.h2>
                        <chakra.p
                            mb={6}
                            fontSize={{ base: "lg", md: "xl" }}
                            // textAlign={{ base: "center", sm: "left" }}
                            color="gray.600"
                            _dark={{ color: "gray.500" }}
                        >
                            {`Find the leading practices in development, increase your organization's agility to achieve powerful outcomes.`}
                        </chakra.p>
                    </Box>
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
                                Improve the reliably of your production and services with data gathered through information technology.
                            </Feature>
                        </Stack>
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Box p={"2rem"} />
        </>
    );
}

export default Consultation;