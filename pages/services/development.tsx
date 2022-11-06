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

import { SiLichess } from 'react-icons/si'
import { BsTerminal, BsVectorPen, BsLifePreserver } from 'react-icons/bs'
import { Values } from "../../components";

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

const BuiltWith = (children: any) => {
    return (

        <Box
            _hover={{ transform: 'scale(1)', }}
            transform={{ base: 'scale(1)', sm: 'scale(0.97)', md: 'scale(0.97)' }}
            alignContent={'center'}
            h={'auto'}
            role={'group'}
            overflow={'hidden'}
            rounded={'md'}
        >
            <Center>
                <Image opacity={{ md: 0.90, base: 1 }} _groupHover={{ opacity: '1' }} userSelect={'none'} pointerEvents={'none'} alt={'img'} src={children.img} />
            </Center>
        </Box >
    )
}


const Development = () => {
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
            <Container maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} pt={{ base: '4', xl: '4' }}>
                {/* 
                <Box
                    // shadow="xl"
                    // bg="white"
                    // _dark={{ bg: "gray.800" }}
                    px={{ base: '4', xl: '10' }}
                    pt={{ base: '4', xl: '8' }}
                    mx="auto"
                > */}
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, lg: 2 }}
                    spacingY={{ base: 10, lg: 6 }}
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
                            IT Development Services
                        </chakra.h2>
                        <chakra.p
                            mb={2}
                            fontSize={{ base: "lg", md: "xl" }}
                            // textAlign={{ base: "center", sm: "left" }}
                            color="gray.600"
                            _dark={{ color: "gray.500" }}
                        >
                            {/* {`With the use of our private templates we are able to deliver consistent results through stablished methods on diferent projects.`} */}
                            Following established methods for development allows us to deliver a valuable strategy with consistent results.
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

                <Heading color={'gray.800'} size={'lg'}>
                    IT Development Outsourcing
                </Heading>
                <Text pb={'10'} color={'gray.700'}>
                    {`Means giving some or all the development processes to a third party while maintaining control over the project. This allows companies to overcome the lack of in-house IT resources and talent, while reducing development costs.`}
                </Text>
                <Heading pb={'4'} color={'gray.800'} size={'lg'}>
                    Why outsourcing works
                </Heading>
                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'}>
                    {`Increase IT Quality`}
                </Heading>
                <Text pb={'4'} color={'gray.700'}>
                    {`Choose IT professionals with thorough experience on your specific industry, and gain quick and easy access to expertise and the best practices, making sure the delivery is done in a timely manner with the best quality.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Decrease Costs`}
                </Heading>
                <Text pb={'4'} color={'gray.700'}>
                    {`Selecting a team of experts will significantly reduce trial and error, hiring, onboarding, and training in-house developers that will come at high cost.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`High Scalability`}
                </Heading>
                <Text pb={'10'} color={'gray.700'}>
                    {`The ability to upscale and downscale your development team given your specific needs and requirements will guarantee that you only pay for the resources you truly need.`}
                </Text>
                <Heading pb={'4'} color={'gray.800'} size={'lg'}>
                    {`How to Outsource IT Development in a Safe and Efficient way?`}
                </Heading>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Test our expertise in practice`}
                </Heading>
                <Text pb={'4'} color={'gray.700'}>
                    {`You can request a small project or proof of concept (PoC) to get an objective understanding of our competencies.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Establish a Control on outcomes`}
                </Heading>
                <Text pb={'1'} color={'gray.700'}>
                    {`Request a service level agreement (SLA) with your IT vendor that establishes the expected timelines, quality requirements, and risk responsibilities.`}
                </Text>
                <Text pb={'4'} color={'gray.700'}>
                    {`Choose a KPI system that allows you to monitor the health of the project without interrupting with the process.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Set communication structures`}
                </Heading>
                <Text pb={'4'} color={'gray.700'}>
                    {`Choose the communications platforms and formats that will provide clear communication with the development team that outlines every aspect of the project.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Ensure information security`}
                </Heading>
                <Text pb={'1'} color={'gray.700'}>
                    {`Choose the communications platforms and formats that will provide clear communication with the development team that outlines every aspect of the project.`}
                </Text>
                <Text pb={'1'} color={'gray.700'}>
                    {`Reach a Non Disclosure Agreement with your vendor to be able to mantain your sensitive information and mantain property rights on your project.`}
                </Text>
                <Text color={'gray.700'}>
                    {`Revise your vendor's security measures for storing data. (such as IDS/IPS, DLP, SIEM, and others).`}
                </Text>
                {/* {`Being ISO 27001-certified, we ensure the security of the data entrusted to us by our customers..`} */}



                <Divider my={12} />

                <Box pb={12} textAlign="center">
                    <Heading size="lg" mb="4">
                        Our Capabilities and Beyond:
                    </Heading>
                    <Text maxW="3xl" mx="auto">
                        These are some of the technologies that are industry standard when it comes to development capabilities.<br />
                        We study these, their updates and research the market for more emerging technologies.
                    </Text>
                </Box>

                <Center>
                    <Stack px={{ base: '0', lg: '4' }} direction={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }} spacing={{ base: 12, sm: 12, md: 12, lg: 12, xl: 32 }}>
                        <Box textAlign="center">
                            <Heading fontSize={'2xl'} mb="4">
                                Cloud:
                            </Heading>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 1 }}
                                spacing={{ base: '6', md: '8' }}
                            >
                                <BuiltWith img={'/img/services/cloud2.png'} />
                                <BuiltWith img={'/img/services/cloud3.png'} />
                                <BuiltWith img={'/img/services/cloud1.png'} />
                                <BuiltWith img={'/img/services/cloud4.png'} />
                            </SimpleGrid>
                        </Box>
                        <Box textAlign="center">
                            <Heading fontSize={'2xl'} mb="4">
                                Web Frameworks:
                            </Heading>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 1 }}
                                spacing={{ base: '6', md: '8' }}
                            >
                                <BuiltWith img={'/img/services/webframeworks1.png'} />
                                <BuiltWith img={'/img/services/webframeworks2.png'} />
                                <BuiltWith img={'/img/services/webframeworks3.png'} />
                                <BuiltWith img={'/img/services/webframeworks4.png'} />
                            </SimpleGrid>
                        </Box>
                        <Box textAlign="center">
                            <Heading fontSize={'2xl'} mb="4">
                                Hardware Development:
                            </Heading>
                            <SimpleGrid
                                columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 1 }}
                                spacing={{ base: '6', md: '8' }}
                            >
                                <BuiltWith img={'/img/services/hardware1.png'} />
                                <BuiltWith img={'/img/services/hardware2.png'} />
                                <BuiltWith img={'/img/services/hardware3.png'} />
                                <BuiltWith img={'/img/services/hardware4.png'} />
                            </SimpleGrid>
                        </Box>
                    </Stack >
                </Center>

                <Divider my={12} />

                {/* <Container maxW={'container.xl'} px={{ base: 0, xl: 0 }}> */}
                <Values />

                <Box p={"2rem"} />

            </Container>
            {/* </Box> */}
        </>
        // </Flex>
    );
};

export default Development;