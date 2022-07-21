import {
    Box,
    Button,
    chakra,
    Flex,
    GridItem,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import DevTerms from '../../../components/dev/terms';

const ElectronicEngineering = () => {
    const Feature = (props: any) => {
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
                <title>Mechanical Engineering - Ochoa - International Product Development, Design and Production</title>
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
                                <Feature title="Invite team members">
                                    Improve your conversion rates by monitoring exactly what's going
                                    on while your customers are in trial.{" "}
                                </Feature>
                                <Feature title="Unify your payments stack">
                                    Manage all your online and offline sales in one place with a
                                    single integration, simplifying reporting and reconciliation.
                                </Feature>
                                <Feature title="Own your in-store experience">
                                    {" "}
                                    Provide a seamless customer experience across channels, like
                                    reserving online and picking up in store.
                                </Feature>
                                <Feature title="Grow your platform's revenue">
                                    {" "}
                                    Add in-person payments to your platform or marketplace. Using
                                    Terminal with Connect.{" "}
                                </Feature>
                                <Feature title="Clear overview for efficient tracking">
                                    {" "}
                                    Handle your subscriptions and transactions efficiently with the
                                    clear overview in Dashboard. Fea
                                </Feature>
                                <Feature title="Decide how you integrate Payments">
                                    {" "}
                                    Love to code? Decide how you integrate Payments and build
                                    advanced and reliable products yourself from scratch.{" "}
                                </Feature>
                            </Stack>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Flex>
            <Box
                maxW={{ base: 'xl', md: '100%' }}
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
                            <Button size="lg" minW="140px" colorScheme="blue" height="14" px="8">
                                Contact Us
                            </Button>
                        </Stack>
                        <Box minH={'40'} />
                    </Box>
                    <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
                        {/* <Img
                            w="full"
                            pos="relative"
                            zIndex="1"
                            h={{ lg: '100%' }}
                            objectFit="cover"
                            // src={devsrc.src}
                            alt="Screening talent"
                            pointerEvents={"none"}
                        /> */}
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
            <DevTerms />
        </>
    );
};
export default ElectronicEngineering;