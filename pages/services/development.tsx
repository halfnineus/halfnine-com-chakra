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



const Development = () => {
    return (
        <>
            <NextSeo
                title='Development Services - Automating all Things | Zedir'
                description='Following established methods for development allows us to deliver a valuable strategy for your objectives.'
                canonical="https://www.zedir.com/services/development"
            // languageAlternates={[
            //     {
            //         hrefLang: 'es',
            //         href: 'https://www.zedir.com/es/services/development',
            //     }
            // ]}
            />
            <Container maxW={'container.xl'} px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={{ base: 4, xl: 4 }}>

                <Box pb={6} alignSelf="start">
                    <Heading
                        mb={2}
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                    >
                        Development Services
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
                            <Feature icon={<SiLichess />} title="Strategy & Features">
                                Our team will help to outline the best strategies and features for your products and applications, identifying challenges and key leverage points.
                            </Feature>
                            <Feature icon={<BsVectorPen />} title="UX & Architecture">
                                Our team will help you chose the right technologies to create a technology stack that fits the desired User Experience.
                            </Feature>
                            <Feature icon={<BsTerminal />} title="Development & Testing">
                                With the right team of developers, managers, analysts, and testers
                                we are able to create functioning technology while enabling you to fully control this process through transparency and achieving a successful launch.
                            </Feature>
                            <Feature icon={<BsLifePreserver />} title="Support & Maintenance">
                                Providing a direct line to support requests and providing fast response to bugs and issues,
                                saves valuable time for any issues that may be presented.
                            </Feature>
                        </Stack>
                    </GridItem>
                </SimpleGrid>
                <Text textAlign={'center'} my={6} fontSize={{ base: "lg", md: "xl" }} color="gray.500">
                    {`With the use of these established methods we are able to create a valuable strategy that delivers consistent results on diferent projects.`}
                </Text>

                <Divider my={12} />

                <Box pb={6} textAlign="center">
                    <Heading size="lg" mb="4">
                        Our Technology Stack for a Long-Lasting IT Evolution
                    </Heading>
                    <Text maxW="3xl" mx="auto">
                        We are able to employ the latest or the always evolving, classic, and most trusted technologies having expertise in replicating proven strategies and methods.
                    </Text>
                </Box>
                <Tabs isFitted size={'lg'} orientation="horizontal">
                    <TabList>
                        <Tab>Cloud</Tab>
                        <Tab>Web Frameworks</Tab>
                        <Tab>Hardware/Firmware</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Center>
                                <Stack spacing={16} direction={'row'}>
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
                                        <Text fontWeight={'semibold'}>And more...</Text>
                                    </Box>
                                </Stack>
                            </Center>
                        </TabPanel>
                        <TabPanel>
                            <Center>
                                <Stack spacing={16} direction={'row'}>
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
                                </Stack>
                            </Center>
                        </TabPanel>
                        <TabPanel>
                            <Center>
                                <Stack spacing={16} direction={'row'}>
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
                                </Stack>
                            </Center>

                        </TabPanel>
                    </TabPanels>
                </Tabs>



                <Divider my={12} />

                <Values />

                <Box p={"2rem"} />

            </Container>
        </>
    );
};

export default Development;