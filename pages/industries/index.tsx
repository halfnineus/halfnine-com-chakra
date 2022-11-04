import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Divider,
    Flex,
    Icon,
    Text,
    useColorModeValue as mode,
    chakra,
    SimpleGrid,
    HStack,
    Link,
    Heading,
    Img,
    Stack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import indexdat from "../../assets/services/index.json"
import { useRouter } from "next/router";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";

const Feature = (props: any) => {
    return (
        <NextLink href={props.refx} passHref>
            <Link _hover={{ textDecorationLine: 'none' }}>
                <Box
                    bg={mode('gray.50', 'gray.700')}
                    rounded={'xl'}
                    p={4}
                    role={'group'}
                    _hover={{ bg: mode('brand.50', 'brand.700'), shadow: 'sm' }}
                    border='1px'
                    borderColor={mode('gray.300', 'gray.600')}
                >
                    <HStack>
                        <Box
                            boxSize={12}
                            _light={{ color: "brand.700" }}
                            mb={4}
                            fill="none"
                            // viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            fontSize="3rem"
                        >
                            {props.icon}
                        </Box>
                        <Flex
                            transition={'all .3s ease'}
                            transform={'translateX(-10px)'}
                            opacity={0}
                            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                            justify={'flex-end'}
                            align={'center'}
                            flex={1}>
                            <Icon color={mode('brand.700', 'white')} w={12} h={12} as={ChevronRightIcon} />
                        </Flex>
                    </HStack>
                    <chakra.h3
                        // _groupHover={{ color: "brand.700" }}
                        mb={3}
                        fontSize="lg"
                        lineHeight="shorter"
                        fontWeight="bold"
                    >
                        {props.title}
                    </chakra.h3>
                    <chakra.p
                        lineHeight="tall"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                    >
                        {props.children}
                    </chakra.p>
                </Box>
            </Link>
        </NextLink>
    );
};

const Index = () => {

    const { locale } = useRouter()

    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title='Industries We Serve - Automating all Things | Ochoa'
                            description='!!changeme We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                            canonical="https://ochoa.pro/industries"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://ochoa.pro/es/industries',
                                }
                            ]}
                        />
                        <SimpleGrid
                            columns={{ base: 1, /* md: 2,*/ lg: 3 }}
                            spacing={8}
                            px={{ base: '6', lg: '10' }}
                            pt={{ base: '6', lg: '10' }}
                            mx="auto"
                            bg="white"
                            _dark={{ bg: "gray.800" }}
                        >
                            <Feature
                                title="Manufacturing & Production"
                                icon={<MdOutlinePrecisionManufacturing />}
                                refx={'/industries/manufacturing-and-production'}
                            >
                                Increase productivity, quality, efficiency and profit by Automating repetitive tasks.
                            </Feature>

                            <Feature
                                title="Media & Entertainment"
                                icon={<BsCameraVideo />}
                                refx={'/industries/media-and-entertainment'}
                            >
                                Change experiences forever by implementing and delivering a more immersive environment.
                            </Feature>

                            <Feature
                                title="Security & Safety"
                                icon={<IoShieldCheckmarkOutline />}
                                refx={'/industries/security-and-safety'}
                            >
                                Create and implement solutions to ease safety chores and tasks and focus on products & services.
                            </Feature>
                        </SimpleGrid>

                        <Box py={'3rem'} />

                        <Box maxW={{ base: 'xl', md: 'container.xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
                                <Stack my={2}>
                                    <Heading>Revolutionizing Every Process Together</Heading>
                                    <Text maxW={'34rem'} pt={2} color={mode('gray.600', 'gray.400')} fontSize={'lg'}>
                                        {`With Experience Developing (Industrial Internet of Things), We are able to create automated systems and products that comply or for compliance of any regulations and `}
                                        serve the sectors of Manufacturing & Production, Media & Entretainment and Security & Safety,
                                    </Text>
                                </Stack>
                                <Img
                                    border={'1px'}
                                    borderColor={mode('gray.400', 'gray.600')}
                                    rounded="2xl"
                                    objectFit="cover"
                                    userSelect={'none'}
                                    pointerEvents={'none'}
                                    w="full"
                                    h={{ sm: "64", md: "96", lg: "72", xl: "64" }}
                                    src={'/img/index/industries.jpg'}
                                    alt="Farm Management Checklist"
                                />
                            </SimpleGrid>
                        </Box>

                        <Box py={'3rem'} />
                    </>
                )
            })}
        </>
    );
}

export default Index