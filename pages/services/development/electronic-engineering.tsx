import {
    Box,
    Button,
    chakra,
    Flex,
    GridItem,
    Heading,
    Icon,
    Img,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import devsrc from '../../../public/perma/Electronic-Engineering-Image-min.png'

const Choc = () => {
    const Feature = (props: any) => {
        return (
            <Box>
                <Icon
                    boxSize={12}
                    _light={{ color: "brand.700" }}
                    mb={4}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    {props.icon}
                </Icon>
                <chakra.h3
                    mb={3}
                    fontSize="lg"
                    lineHeight="shorter"
                    fontWeight="bold"
                    _light={{ color: "gray.900" }}
                >
                    {props.title}
                </chakra.h3>
                <chakra.p
                    lineHeight="tall"
                    color={useColorModeValue("gray.600", "gray.400")}
                >
                    {props.children}
                </chakra.p>
            </Box>
        );
    };
    const Feature2 = (props: any) => {
        return (
            <Flex>
                <Flex shrink={0}>
                    <Icon
                        boxSize={5}
                        mt={1}
                        mr={2}
                        color={useColorModeValue("brand.500", "brand.300")}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </Icon>
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
                    <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}          >
                        {props.children}
                    </chakra.dd>
                </Box>
            </Flex>
        );
    };

    return (
        <>
            <Head>
                <title>Electronic Engineering - Ochoa - International Product Development, Design and Production</title>
                <meta name="description" content="" />
            </Head>
            <Flex
                px={{ base: '6', md: '20' }}
                pb={{ base: '6', md: '8' }}
                pt={{ base: '6', md: '10' }}
                w="auto"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    shadow="xl"
                    px={8}
                    py={20}
                    mx="auto"
                    bg={useColorModeValue("gray.50", "gray.700")}
                    rounded={24}
                >
                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, lg: 3 }}
                        spacingY={{ base: 10, lg: 32 }}
                        spacingX={{ base: 10, lg: 24 }}
                    >
                        <Box alignSelf="start">
                            <chakra.h2
                                _light={{ color: "brand.500" }}
                                fontWeight="semibold"
                                textTransform="uppercase"
                                letterSpacing="wide"
                            >
                                Everything you need
                            </chakra.h2>
                            <chakra.h2
                                mb={3}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "center", sm: "left" }}
                                _light={{ color: "black" }}
                                lineHeight="shorter"
                                letterSpacing="tight"
                            >
                                All-in-one platform
                            </chakra.h2>
                            <chakra.p
                                mb={6}
                                fontSize={{ base: "lg", md: "xl" }}
                                textAlign={{ base: "center", sm: "left" }}
                                color={useColorModeValue("gray.600", "gray.500")}
                            >
                                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                                magnam voluptatum cupiditate veritatis in accusamus quisquam.
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
                                <Feature2 title="Invite team members">
                                    Improve your conversion rates by monitoring exactly what’s going
                                    on while your customers are in trial.{" "}
                                </Feature2>
                                <Feature2 title="Unify your payments stack">
                                    Manage all your online and offline sales in one place with a
                                    single integration, simplifying reporting and reconciliation.
                                </Feature2>
                                <Feature2 title="Own your in-store experience">
                                    {" "}
                                    Provide a seamless customer experience across channels, like
                                    reserving online and picking up in store.
                                </Feature2>
                                <Feature2 title="Grow your platform’s revenue">
                                    {" "}
                                    Add in-person payments to your platform or marketplace. Using
                                    Terminal with Connect.{" "}
                                </Feature2>
                                <Feature2 title="Clear overview for efficient tracking">
                                    {" "}
                                    Handle your subscriptions and transactions efficiently with the
                                    clear overview in Dashboard. Fea
                                </Feature2>
                                <Feature2 title="Decide how you integrate Payments">
                                    {" "}
                                    Love to code? Decide how you integrate Payments and build
                                    advanced and reliable products yourself from scratch.{" "}
                                </Feature2>
                            </Stack>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Flex>






            <Box
                maxW={{ base: 'xl', md: '98%' }}
                mx="auto"
                px={{ base: '6', md: '20' }}
                py={{ base: '6', md: '8' }}
            >
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: '3rem', lg: '2rem' }}
                    mt="8"
                    align={{ lg: 'center' }}
                    justify="space-between"
                >
                    <Box flex="1" maxW={{ lg: '520px' }}>
                        <Heading
                            as="h1"
                            size="3xl"
                            pointerEvents={'none'}
                            mt="8"
                            fontWeight="extrabold"
                            letterSpacing="tight"
                        >
                            Get world class talents for your project
                        </Heading>
                        <Text pointerEvents={'none'} color={useColorModeValue('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
                            <Button size="lg" minW="140px" colorScheme="blue" height="14" px="8">
                                Contact Us
                            </Button>
                        </Stack>
                        <Box minH={'40'} />
                    </Box>
                    <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
                        <Img
                            w="full"
                            pos="relative"
                            zIndex="1"
                            h={{ lg: '100%' }}
                            objectFit="cover"
                            src={devsrc.src}
                            alt="Screening talent"
                            pointerEvents={"none"}
                        />
                        <Box
                            pos="absolute"
                            w="100%"
                            h="100%"
                            top="-4"
                            left="-4"
                            bg={useColorModeValue('gray.200', 'gray.700')}
                        />
                    </Box>
                </Stack>
                <Box padding={'4'} />
            </Box>






            <Flex
                px={{ base: '6', md: '20' }}
                pt={{ base: '6', md: '8' }}
                pb={{ base: '6', md: '20' }}
                w="auto"
                justifyContent="center"
                alignItems="center"
            >
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={20}
                    px={{ base: 4, lg: 16, xl: 24 }}
                    py={20}
                    mx="auto"
                    bg={useColorModeValue("gray.50", "gray.700")}
                    rounded={24}
                    shadow="xl"
                >
                    <Feature
                        title="Unify your payments stack"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        }
                    >
                        Manage all your online and offline sales in one place with a single
                        integration, simplifying reporting and reconciliation. Terminal works
                        seamlessly with Payments, Connect, and Billing.
                    </Feature>

                    <Feature
                        title="Own your in-store experience"
                        icon={
                            <path
                                fillRule="evenodd"
                                d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                                clipRule="evenodd"
                            />
                        }
                    >
                        Provide a seamless customer experience across channels, like reserving
                        online and picking up in store. Our SDKs make it easy to integrate
                        into your own mobile and web applications to accept in-store payments.
                    </Feature>

                    <Feature
                        title="Grow your platform’s revenue"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                            />
                        }
                    >
                        Add in-person payments to your platform or marketplace. Using Terminal
                        with Connect, you can onboard users for online and in-person payments,
                        and unify their payouts across channels.
                    </Feature>
                </SimpleGrid>
            </Flex>
        </>
    );
};
export default Choc;