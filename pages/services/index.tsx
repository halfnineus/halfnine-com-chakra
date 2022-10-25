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


import { AiOutlineShop, AiOutlineFileProtect } from "react-icons/ai";
import { BsController } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { MdOutlineHealing, MdOutlineMovie } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";

const Feature2 = (props: any) => {
    return (
        <Flex>
            <Icon boxSize={12} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" color={mode('blue.600', 'blue.200')}>{props.icon}</Icon>
            <Box ml={4}>
                <Text fontSize="lg" fontWeight="semibold" lineHeight="6">{props.title}</Text>
                <Text mt={2} color="gray.500">{props.children}</Text>
            </Box>
        </Flex>
    )
}

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
                    // shadow="xl"
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
                                Development Services
                            </chakra.h2>
                            <chakra.p
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                textAlign={{ base: "center", sm: "left" }}
                                color="gray.600"
                                _dark={{ color: "gray.500" }}
                            >
                                {`!!Let's put our heads together to build a successful partnership to benefit both your customers and your.`}
                            </chakra.p>
                            <Button
                                // as="a"
                                // variant="solid"
                                // w={{ base: "full", sm: "auto" }}
                                // size="lg"
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
                            <Feature>!!Email APIs, SMTP Relay, and Webhooks</Feature>
                            <Feature>!!Suppression Management</Feature>
                            <Feature>!!Email Tracking and Analytics</Feature>
                            {/* <Feature>!!99.99% Guaranteed Uptime SLA</Feature> */}
                            {/* <Feature>5 Days of Log Retention</Feature> */}
                            {/* <Feature>Limited 24/7 Ticket Support</Feature> */}
                            {/* <Feature>1 Dedicated IP (Foundation 100k and up)</Feature> */}
                            {/* <Feature>1,000 Email Address Validations</Feature> */}
                            {/* <Feature>Host events together or get your event sponsored</Feature> */}
                            {/* <Feature>Reach 90,000 customers via our integration page</Feature> */}
                        </VStack>
                    </SimpleGrid>
                </Box>

                <Divider mt={8} mb={8} />

                <Box
                    // shadow="xl"
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
                            <Feature>!!Email APIs, SMTP Relay, and Webhooks</Feature>
                            <Feature>!!Suppression Management</Feature>
                            <Feature>!!Email Tracking and Analytics</Feature>
                            {/* <Feature>!!99.99% Guaranteed Uptime SLA</Feature> */}
                            {/* <Feature>5 Days of Log Retention</Feature> */}
                            {/* <Feature>Limited 24/7 Ticket Support</Feature> */}
                            {/* <Feature>1 Dedicated IP (Foundation 100k and up)</Feature> */}
                            {/* <Feature>1,000 Email Address Validations</Feature> */}
                            {/* <Feature>Host events together or get your event sponsored</Feature> */}
                            {/* <Feature>Reach 90,000 customers via our integration page</Feature> */}
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
                                {`!!Let's put our heads together to build a successful partnership to benefit both your customers and your.`}
                            </chakra.p>
                            <Button
                                // as="a"
                                // variant="solid"
                                // w={{ base: "full", sm: "auto" }}
                                // size="lg"
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
                            <Feature>!!Email APIs, SMTP Relay, and Webhooks</Feature>
                            <Feature>!!Suppression Management</Feature>
                            <Feature>!!Email Tracking and Analytics</Feature>
                            {/* <Feature>!!99.99% Guaranteed Uptime SLA</Feature> */}
                            {/* <Feature>5 Days of Log Retention</Feature> */}
                            {/* <Feature>Limited 24/7 Ticket Support</Feature> */}
                            {/* <Feature>1 Dedicated IP (Foundation 100k and up)</Feature> */}
                            {/* <Feature>1,000 Email Address Validations</Feature> */}
                            {/* <Feature>Host events together or get your event sponsored</Feature> */}
                            {/* <Feature>Reach 90,000 customers via our integration page</Feature> */}
                        </VStack>
                    </SimpleGrid>
                </Box>

                <Divider mt={8} mb={8} />

                <Box
                    // shadow="xl"
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
                                {`!!Let's put our heads together to build a successful partnership to benefit both your customers and your.`}
                            </chakra.p>
                            <Button
                                // as="a"
                                // variant="solid"
                                // w={{ base: "full", sm: "auto" }}
                                // size="lg"
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
                            <Feature>!!Email APIs, SMTP Relay, and Webhooks</Feature>
                            <Feature>!!Suppression Management</Feature>
                            <Feature>!!Email Tracking and Analytics</Feature>
                            {/* <Feature>!!99.99% Guaranteed Uptime SLA</Feature> */}
                            {/* <Feature>5 Days of Log Retention</Feature> */}
                            {/* <Feature>Limited 24/7 Ticket Support</Feature> */}
                            {/* <Feature>1 Dedicated IP (Foundation 100k and up)</Feature> */}
                            {/* <Feature>1,000 Email Address Validations</Feature> */}
                            {/* <Feature>Host events together or get your event sponsored</Feature> */}
                            {/* <Feature>Reach 90,000 customers via our integration page</Feature> */}
                        </VStack>
                    </SimpleGrid>
                </Box>

                <Divider mt={8} mb={8} />

            </Container>


            <Flex px={{ base: '6', lg: '10' }} w="auto" justifyContent="center" alignItems="center">
                <Box shadow="md" py={8} bg={mode('gray.50', 'gray.700')} rounded="xl" maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                    <Box textAlign={{ lg: "center" }}>
                        <Text fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                            {"ochoa.pro"}
                        </Text>
                        <Text mt={2} fontSize={{ base: "3xl", sm: "4xl" }} lineHeight="8" fontWeight="extrabold" letterSpacing="tight">
                            {"Technology transformation, migration, and implementation"}
                        </Text>
                        <Text mt={4} maxW="2xl" fontSize="xl" mx={{ lg: "auto" }} color="gray.500">
                            {"We offer Industry solutions for companies who want to work with Technology that meets their specific needs, ideas, and goals."}
                        </Text>
                    </Box>
                    <Box mt={10}>
                        <Stack
                            spacing={{ base: 10, lg: 0 }}
                            display={{ sm: "row", lg: "grid" }}
                            gridTemplateColumns={{ md: "repeat(4,1fr)" }}
                            gridColumnGap={{ md: 8 }}
                            gridRowGap={{ md: 10 }}
                        >
                            <Feature2 icon={<TbReportMoney />} title={"Financial services"}>{"Customize experiences and modernize systems."}</Feature2>
                            <Feature2 icon={<RiGovernmentLine />} title={"Government"}>{"Implement remote access and cross-agency collaboration."}</Feature2>
                            <Feature2 icon={<MdOutlineHealing />} title={"Healthcare"}>{"Enhance engagement and improve insights."}</Feature2>
                            <Feature2 icon={<AiOutlineShop />} title={"Retail"}>{"Personalize experiences and optimize supply chains."}</Feature2>
                            <Feature2 icon={<FaIndustry />} title={"Manufacturing"}>{"Improve operational efficiencies and reduce costs."}</Feature2>
                            <Feature2 icon={<MdOutlineMovie />} title={"Media and entertainment"}>{"Create content faster and deliver anywhere."}</Feature2>
                            <Feature2 icon={<BsController />} title={"Game development"}>{"Build, scale, and operate games with custom hardware."}</Feature2>
                            <Feature2 icon={<AiOutlineFileProtect />} title={"Security and Safety"}>{"Build, Construct and Operate in safe environments."}</Feature2>
                        </Stack>
                    </Box>
                    <Box textAlign={{ lg: "center" }}>
                        <Text
                            mt={4}
                            maxW="28"
                            fontSize="xl"
                            mx={{ lg: "auto" }}
                            color={mode("gray.700", "gray.300")}
                            _hover={{ color: 'blue.500' }}
                            cursor={'pointer'}
                            onClick={() => router.push('/portfolio/')}
                        >
                            {"And more..."}
                        </Text>
                    </Box>
                </Box>
            </Flex>

            <Container maxW="container.xl">
                <Divider mt={8} mb={8} />
            </Container>

        </>
    );
}

export default Index;