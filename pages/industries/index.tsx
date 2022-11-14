import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Divider,
    Flex,
    Icon,
    Text,
    useColorModeValue as mode,
    SimpleGrid,
    HStack,
    Link,
    Heading,
    Img,
    Stack,
    Center,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import indexdat from "../../assets/services/index.json"
import { useRouter } from "next/router";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

// !! Energy and Logistics?
const Feature = (props: any) => {
    return (
        <NextLink href={props.refx} passHref>
            <Link _hover={{ textDecorationLine: 'none' }}>
                <Box
                    bg={mode('white', 'gray.700')}
                    rounded={'xl'}
                    p={4}
                    role={'group'}
                    _hover={{ borderColor: 'gray.300' }}
                    border='1px'
                    borderColor={mode('gray.100', 'gray.600')}
                >
                    <HStack>
                        <Box
                            boxSize={12}
                            _light={{ color: "brand.900" }}
                            mb={4}
                            fill="none"
                            stroke="currentColor"
                            aria-hidden="true"
                            fontSize="3rem"
                        >
                            {props.icon}
                        </Box>
                        <Center>
                            <Heading
                                pl={2}
                                as={'h3'}
                                mb={3}
                                fontSize="lg"
                                lineHeight="shorter"
                                fontWeight="bold"
                            >
                                {props.title}
                            </Heading>
                        </Center>
                        <Flex
                            transition={'all .3s ease'}
                            transform={'translateX(-40px)'}
                            opacity={0}
                            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                            justify={'flex-end'}
                            align={'center'}
                            flex={1}>
                            <Icon color={mode('brand.900', 'white')} w={12} h={12} as={ChevronRightIcon} />
                        </Flex>
                    </HStack>
                    <Text
                        as={'p'}
                        lineHeight="tall"
                        color="gray.600"
                    >
                        {props.children}
                    </Text>
                </Box >
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
                            description={'Creating automated systems and products that comply or for compliance of any regulations and serve most industry sectors'}
                            canonical="https://ochoa.pro/industries"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://ochoa.pro/es/industries',
                                }
                            ]}
                        />
                        <SimpleGrid
                            maxW={'container.xl'}
                            columns={{ base: 1 }}
                            spacing={4}
                            px={{ base: '4', xl: '10' }}
                            pt={6}
                            mx="auto"
                            bg="white"
                            _dark={{ bg: "gray.800" }}
                        >
                            <Feature
                                title="Manufacturing & Production"
                                icon={<MdOutlinePrecisionManufacturing />}
                                refx={'/industries/manufacturing-and-production'}
                            >
                                Increase productivity, quality, efficiency, and profit by automating repetitive tasks.
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

                        <Box maxW={{ base: 'xl', md: 'container.xl' }} mx="auto" px={{ base: '4', xl: '10' }}>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
                                <Stack my={2}>
                                    <Heading>Revolutionizing Every Process Together</Heading>
                                    <Text maxW={'34rem'} pt={2} color={mode('gray.600', 'gray.400')} fontSize={'lg'}>
                                        {`With Experience Developing (Industrial Internet of Things), We are able to create automated systems and products that comply or for compliance of any regulations and `}
                                        serve the sectors of Manufacturing & Production, Media & Entertainment and Security & Safety,
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