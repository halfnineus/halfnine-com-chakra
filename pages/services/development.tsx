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
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { SiLichess } from 'react-icons/si'
import { BsTerminal, BsVectorPen, BsLifePreserver } from 'react-icons/bs'

import { LvlUp } from "../../components";

const BuiltWith = (children: any) => {
    return (
        <Box
            maxW={{ lg: '220px', base: 'full' }}
            w={'auto'}
            bg={mode('gray.50', 'gray.50')}
            _hover={{ /*bg: mode("brand.50", "brand.800"),*/ transform: 'scale(1.02)', boxShadow: 'sm', borderColor: mode('gray.100', 'gray.600') }}
            // cursor={'pointer'}
            // boxShadow={'md'}
            border='1px'
            borderColor={mode('gray.50', 'gray.600')}
            rounded={'md'}
            // boxShadow={'md'}
            // cursor={'context-menu'}
            p={2}
            overflow={'hidden'}
            maxH={'auto'}
            role={'group'}
        >
            <Center>
                <Box alignContent={'center'} h={'auto'} m={-2} pos={'relative'}>
                    <Image opacity={{ md: 0.8, base: 1 }} _groupHover={{ opacity: '1' }} userSelect={'none'} pointerEvents={'none'} alt={'img'} src={children.img} />
                    <Text fontWeight={'bold'} color={mode('gray.700', "gray.700")} textAlign={'center'}>{children.txt}</Text>
                </Box>
            </Center>
        </Box>
    )
}


const Development = () => {
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
    return (
        <>
            <NextSeo
                title='Outsource Custom Development Services - Automating all Things | Ochoa'
                description='Following established methods for development allows us to deliver a valuable strategy for your objectives.'
                canonical="https://ochoa.pro/services/development"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/services/development',
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
                            Outsource
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
                            Custom Development Services
                        </chakra.h2>
                        <chakra.p
                            mb={6}
                            fontSize={{ base: "lg", md: "xl" }}
                            // textAlign={{ base: "center", sm: "left" }}
                            color="gray.600"
                            _dark={{ color: "gray.500" }}
                        >
                            Following established methods for development allows us to deliver a valuable strategy for your objectives.
                            {/* !!changeme Bring your software product idea to life, enhance existing product quality, reduce time-to-market, and decrease development costs with our turn-key software engineering services and outsourcing product development teams */}
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

                <Divider my={12} />

                <Box pb={8} textAlign="center">
                    <Heading size="lg" mb="4">
                        Our Capabilities and Beyond:
                    </Heading>
                    <Text maxW="2xl" mx="auto">
                        These technologies are industry standard when it comes to development capabilities.<br />
                        We Study these, their updates and research the market for more emerging technologies.
                    </Text>
                </Box>

                <Center>
                    <Stack direction={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }} spacing={{ base: '12', xl: '20' }}>
                        <Box maxW={'container.xl'}>
                            <Box textAlign="center">
                                <Heading fontSize={'2xl'} mb="4">
                                    Cloud:
                                </Heading>
                            </Box>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2, md: 2, lg: 2 }}
                                spacing={'6'}
                            >
                                <BuiltWith img={'/img/services/cloud1.png'} txt={'Amazon Web Services'} />
                                <BuiltWith img={'/img/services/cloud3.png'} txt={'Google Cloud'} />
                                <BuiltWith img={'/img/services/cloud2.png'} txt={'Azure'} />
                                <BuiltWith img={'/img/services/cloud4.png'} txt={'Vercel'} />
                            </SimpleGrid>
                        </Box>
                        <Box maxW={'container.xl'}>
                            <Box textAlign="center">
                                <Heading fontSize={'2xl'} mb="4">
                                    Web Frameworks:
                                </Heading>
                            </Box>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2, md: 2, lg: 2 }}
                                spacing={'6'}
                            >
                                <BuiltWith img={'/img/services/webframeworks1.png'} txt={"Microsoft ASP.NET"} />
                                <BuiltWith img={'/img/services/webframeworks2.png'} txt={"Express.js"} />
                                <BuiltWith img={'/img/services/webframeworks3.png'} txt={"Next.js"} />
                                <BuiltWith img={'/img/services/webframeworks4.png'} txt={"Nuxt.js"} />
                            </SimpleGrid>
                        </Box>
                        <Box maxW={'container.xl'}>
                            <Box textAlign="center">
                                <Heading fontSize={'2xl'} mb="4">
                                    Hardware Development:
                                </Heading>
                            </Box>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2, md: 2, lg: 2 }}
                                spacing={'6'}
                            >
                                <BuiltWith img={'/img/services/hardware1.png'} txt={'Raspberry Pi'} />
                                <BuiltWith img={'/img/services/hardware2.png'} txt={'Arduino'} />
                                <BuiltWith img={'/img/services/hardware3.png'} txt={'Odroid'} />
                                <BuiltWith img={'/img/services/hardware4.png'} txt={'Asus Tinker'} />
                            </SimpleGrid>
                        </Box>
                    </Stack >
                </Center>

                <Divider mt={"4rem"} />
            </Box>

            <LvlUp />

            <Box p={"2rem"} />
        </>
        // </Flex>
    );
};

export default Development;