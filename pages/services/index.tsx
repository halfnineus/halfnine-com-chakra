import {
    Box,
    Container,
    Divider,
    Flex,
    Icon,
    Stack,
    Text,
    useColorModeValue as mode,
    chakra,
    SimpleGrid,
    Button,
    VStack,
} from "@chakra-ui/react";

import router from "next/router";

const Feature = (props: any) => {
    return (
        <Flex>
            <Icon
                boxSize={5}
                mt={1}
                mr={2}
                color="brand.500"
                _dark={{ color: "brand.300" }}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                ></path>
            </Icon>
            <chakra.p
                fontSize="lg"
                color="gray.700"
                _dark={{ color: "gray.400" }}
                {...props}
            />
        </Flex>
    );
};

const Index = () => {
    return (
        <>
            <Container maxW="container.xl">
                <Box
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    px={8}
                    pt={4}
                    pb={2}
                    mx="auto"
                >
                    <SimpleGrid
                        // bg={'gray.50'}
                        alignItems="center"
                        columns={{ base: 1, lg: 2 }}
                        spacingY={{ base: 10, lg: 32 }}
                        spacingX={{ base: 10, lg: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                mb={3}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", sm: "left" }}
                                _light={{ color: "black" }}
                                lineHeight="shorter"
                                letterSpacing="tight"
                            >
                                {"Development Services"}
                            </chakra.h2>
                            <chakra.p
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                textAlign={{ base: "center", sm: "left" }}
                                color="gray.600"
                                _dark={{ color: "gray.500" }}
                            >
                                {`We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.`}
                            </chakra.p>
                            <Button
                                w={{ base: "full", sm: "auto" }}
                                colorScheme="blue"
                                onClick={() => router.push("/services/development")}
                            >
                                Learn More
                            </Button>
                        </Box>
                        <VStack
                            direction="column"
                            flexGrow={1}
                            spacing={5}
                            alignItems="start"
                        >
                            <Feature>!!Innovate</Feature>
                            <Feature>!!Accelerate</Feature>
                            <Feature>!!Differentiate</Feature>
                            <Feature>!!Cultivate</Feature>
                        </VStack>
                    </SimpleGrid>
                </Box>

                <Divider mt={8} mb={8} />

                <Box
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    px={8}
                    py={2}
                    mx="auto"
                >
                    <SimpleGrid
                        // bg={'gray.50'}
                        alignItems="center"
                        columns={{ base: 1, lg: 2 }}
                        spacingY={{ base: 10, lg: 32 }}
                        spacingX={{ base: 10, lg: 24 }}
                    >
                        <VStack
                            display={{ base: "none", lg: "block" }}
                            direction="column"
                            flexGrow={1}
                            spacing={5}
                            alignItems="start"
                        >
                            <Feature>!!Enable Innovation</Feature>
                            <Feature>!!Strengthen Consistency & Stability</Feature>
                            <Feature>!!Empower Decision Making</Feature>
                        </VStack>
                        <Box>
                            <chakra.h2
                                mb={3}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", sm: "left" }}
                                _light={{ color: "black" }}
                                lineHeight="shorter"
                                letterSpacing="tight"
                            >
                                Digital Transformation
                            </chakra.h2>
                            <chakra.p
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                textAlign={{ base: "center", sm: "left" }}
                                color="gray.600"
                                _dark={{ color: "gray.500" }}
                            >
                                {"Take a digital approach while selling your products & services, managing your organization and much more!"}
                            </chakra.p>
                            <Button
                                w={{ base: "full", sm: "auto" }}
                                colorScheme="blue"
                                onClick={() => router.push("/services/digitalization")}
                            >
                                Learn More
                            </Button>
                        </Box>
                        <VStack
                            display={{ lg: "none", base: "block" }}
                            direction="column"
                            flexGrow={1}
                            spacing={5}
                            alignItems="start"
                        >
                            <Feature></Feature>
                            <Feature></Feature>
                            <Feature></Feature>
                        </VStack>
                    </SimpleGrid>
                </Box>

                <Divider mt={8} mb={8} />

                <Box
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    px={8}
                    py={2}
                    mx="auto"
                >
                    <SimpleGrid
                        // bg={'gray.50'}
                        alignItems="center"
                        columns={{ base: 1, lg: 2 }}
                        spacingY={{ base: 10, lg: 32 }}
                        spacingX={{ base: 10, lg: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                mb={3}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", sm: "left" }}
                                _light={{ color: "black" }}
                                lineHeight="shorter"
                                letterSpacing="tight"
                            >
                                Project Consultation
                            </chakra.h2>
                            <chakra.p
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                textAlign={{ base: "center", sm: "left" }}
                                color="gray.600"
                                _dark={{ color: "gray.500" }}
                            >
                                {"Find the right options for your project from discovery to deployment of your idea, Satisfying your Requirements and your Customer's Needs."}
                            </chakra.p>
                            <Button
                                w={{ base: "full", sm: "auto" }}
                                colorScheme="blue"
                                onClick={() => router.push("/services/consultation")}
                            >
                                Learn More
                            </Button>
                        </Box>
                        <VStack
                            direction="column"
                            flexGrow={1}
                            spacing={5}
                            alignItems="start"
                        >
                            <Feature>!!Discover</Feature>
                            <Feature>!!Define</Feature>
                            <Feature>!!Design</Feature>
                            <Feature>!!Develop</Feature>
                            <Feature>!!Develop</Feature>
                        </VStack>
                    </SimpleGrid>
                </Box>

                <Divider mt={8} mb={8} />

                <Text pl={8} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                    {"Under construction..."}
                    {/* 
                        Service - Modernization
                        Modernize your legacy systems improving Preformance and Security, Aligned with your Business Goals
                    */}
                </Text>
            </Container>

            <Container maxW="container.xl">
                <Divider mt={8} mb={8} />
            </Container>

        </>
    );
}

export default Index;