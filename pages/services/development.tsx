import {
    chakra,
    Box,
    Flex,
    Icon,
    SimpleGrid,
    Stack,
    GridItem,
    Divider,
    Container,
    Heading,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { CgCrown, CgTerminal, CgPen, CgSupport } from 'react-icons/cg'

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
                        _light={{ bg: "brand.500" }}
                        color="white"
                    >
                        <Icon
                            boxSize={6}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            as={props.icon}
                            color={'white'}
                        />
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
        // <Flex
        //     bg="#edf3f8"
        //     _dark={{ bg: "#3e3e3e" }}
        //     p={20}
        //     w="auto"
        //     justifyContent="center"
        //     alignItems="center"
        // >
        <>
            <NextSeo
                title='Outsource Custom Development Services - Automating all Things | Ochoa'
                description='!!'
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
                            The method of Outsourcing Development allows you and your business to free time and focus on the big picture strategies.
                            {/* !!Bring your software product idea to life, enhance existing product quality, reduce time-to-market, and decrease development costs with our turn-key software engineering services and outsourcing product development teams */}
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
                            <Feature icon={CgCrown} title="Strategy & Features">
                                Our team will help to outline the best strategies and features for your products and applications, Identifying challanges and key leverage points.
                            </Feature>
                            <Feature icon={CgPen} title="UX & Architecture">
                                Our team will help you chose the right technologies to create a technology stack that fits the desired User Experiencie.
                            </Feature>
                            <Feature icon={CgTerminal} title="Development & Testing">
                                !!A balanced team of app developers, project managers, business analysts, and software testers creates perfectly functioning bespoke apps and integrates them into your ecosystem quickly and transparently, equipping it with new functionality with each new iteration.
                                {/* Enabling you to fully control this process through transparency to achieve a succesful launch */}
                            </Feature>
                            <Feature icon={CgSupport} title="Support & Maintenance">
                                !!After the app goes live, we arrange live app introductions and support, create exhaustive to-dos, text and video manuals and guides for your new software. We also provide application support & maintenance and continue adding new features as necessary.
                                {/* By prioritizing collaboration and change we deliver the desired value. */}
                            </Feature>
                        </Stack>
                    </GridItem>
                </SimpleGrid>
                <Text py={8}>
                    Outsourcing can provide Strategic advantage and Cost Cutting but you also have to be be aware of the challenges that are presented by not having talent in-house or maybe even in the same country.<br />
                    How to mitigate risk? and, What is our approach to mitigating risk?<br />
                    We also believe that Communication is key to mitigating risk, Being able to solve issues<br />
                </Text>
                <Text>
                    Our Expertise: IoT, Cloud, Cross-platform, Native, Hybrid, Web.<br />
                </Text>

                <Divider my={8} />

                <Text fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                    {"Page Is Still Under construction..."}
                </Text>
                <Divider my={8} />

            </Box>


        </>
        // </Flex>
    );
};

export default Development;