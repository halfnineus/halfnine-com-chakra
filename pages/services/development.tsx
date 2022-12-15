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
    Tab,
    TabList,
    Tabs,
    TabPanel,
    TabPanels,
    Icon,
    Grid,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { SiAmazonaws, SiArduino, SiDotnet, SiExpress, SiGooglecloud, SiLichess, SiMicrosoftazure, SiNextdotjs, SiNuxtdotjs, SiRaspberrypi, SiVercel } from 'react-icons/si'
import { BsTerminal, BsVectorPen, BsLifePreserver } from 'react-icons/bs'
import { MdOutlineMore } from 'react-icons/md'
import { Values } from "../../components";
import { BiCustomize } from "react-icons/bi";

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
                    <Box color={mode("blue.600", "white")} fontSize="1.5rem">
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

import indexdat from '../../assets/services/development.json'
import { useRouter } from "next/router";


const Development = () => {
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title={indexData.head.title}
                            description={indexData.head.description}
                            canonical="https://www.zedir.com/services/development"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/services/development',
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
                                        <Feature icon={<SiLichess />} title={indexData.Block1.t1}>
                                            {indexData.Block1.d1}
                                        </Feature>
                                        <Feature icon={<BsVectorPen />} title={indexData.Block1.t2}>
                                            {indexData.Block1.d2}
                                        </Feature>
                                        <Feature icon={<BsTerminal />} title={indexData.Block1.t3}>
                                            {indexData.Block1.d3}
                                        </Feature>
                                        <Feature icon={<BsLifePreserver />} title={indexData.Block1.t4}>
                                            {indexData.Block1.d4}
                                        </Feature>
                                    </Stack>
                                </GridItem>
                            </SimpleGrid>
                            <Text textAlign={'center'} my={6} fontSize={{ base: "lg", md: "xl" }} color="gray.500">
                                {indexData.Block1.SubText}
                            </Text>

                            <Divider my={12} />

                            <Box pb={6} textAlign="center">
                                <Heading size="lg" mb="4">
                                    {indexData.Block2.Heading}
                                </Heading>
                                <Text maxW="3xl" mx="auto">
                                    {indexData.Block2.Text}
                                </Text>
                            </Box>
                            {/* <Tabs isFitted size={'lg'} orientation={{ sm: "vertical", md: "horizontal" }}> */}
                            <Tabs isFitted size={'lg'} orientation={"horizontal"}>
                                <TabList>
                                    <Tab>{indexData.Block2.t1}</Tab>
                                    <Tab>{indexData.Block2.t2}</Tab>
                                    <Tab>{indexData.Block2.t3}</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Grid
                                            templateColumns={{
                                                md: 'repeat(5, 1fr)',
                                                sm: 'repeat(3, 2fr)',
                                                base: 'repeat(2, 2fr)',
                                            }}
                                        >
                                            <Box textAlign={'center'}>
                                                <Icon as={SiAmazonaws} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Amazon Web Services</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={SiMicrosoftazure} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Microsoft Azure</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={SiGooglecloud} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Google Cloud</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={SiVercel} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Vercel Cloud</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={MdOutlineMore} boxSize={24} />
                                                <Text fontWeight={'semibold'}>And more…</Text>
                                            </Box>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel>
                                        <Grid
                                            templateColumns={{
                                                md: 'repeat(5, 1fr)',
                                                sm: 'repeat(3, 2fr)',
                                                base: 'repeat(2, 2fr)',
                                            }}
                                        >
                                            <Box textAlign={'center'}>
                                                <Icon as={SiDotnet} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Microsoft .NET</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={SiNextdotjs} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Next.js</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={SiExpress} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Express.js</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={SiNuxtdotjs} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Nuxt.js</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={MdOutlineMore} boxSize={24} />
                                                <Text fontWeight={'semibold'}>And more...</Text>
                                            </Box>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel>
                                        <Grid
                                            templateColumns={{
                                                md: 'repeat(4, 1fr)',
                                                sm: 'repeat(2, 2fr)',
                                                base: 'repeat(2, 2fr)',
                                            }}
                                        >
                                            <Box textAlign={'center'}>
                                                <Icon as={SiRaspberrypi} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Raspberry PI</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={SiArduino} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Arduino</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={BiCustomize} boxSize={24} />
                                                <Text fontWeight={'semibold'}>Custom Hardware</Text>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Icon as={MdOutlineMore} boxSize={24} />
                                                <Text fontWeight={'semibold'}>And more...</Text>
                                            </Box>
                                        </Grid>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>



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

export default Development;