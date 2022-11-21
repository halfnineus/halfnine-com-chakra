import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Icon,
    Text,
    useColorModeValue as mode,
    SimpleGrid,
    HStack,
    Heading,
    Img,
    Stack,
    Center,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import indexdat from "../../assets/services/index.json"
import { useRouter } from "next/router";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

// #url https://incorporated.zone/type-of-industries/
// ??Energy and Logistics  

const Feature = (props: any) => {
    return (
        <Link href={props.refx}>
            <Box
                _hover={{ borderColor: 'gray.200', shadow: 'md' }}
                shadow={'sm'}
                rounded={'xl'}
                p={4}
                role={'group'}
                border='1px'
                borderColor={'gray.100'}
            >
                <HStack>
                    <Box
                        boxSize={12}
                        color={'blue.600'}
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
                            _groupHover={{ color: 'blue.600' }}
                        >
                            {props.title}
                        </Heading>
                    </Center>
                    <Flex
                        transition={'all .3s ease'}
                        transform={{ base: 'translateX(0)', sm: 'translateX(-40px)' }}
                        opacity={{ base: '100%', sm: 0 }}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}>
                        <Icon color={'blue.600'} mb={2} w={12} h={12} as={ChevronRightIcon} />
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
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} pt={6} mx="auto">
                            <SimpleGrid
                                // maxW={'container.xl'}
                                columns={{ base: 1 }}
                                spacing={4}
                                // px={{ base: '4', xl: '10' }}
                                // pt={6}
                                // mx="auto"
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

                            <Heading>Revolutionizing every Process Together</Heading>
                            <Text letterSpacing={'tight'} pt={2} color={mode('gray.600', 'gray.400')} fontSize={'lg'}>
                                With Experience Developing (Industrial Internet of Things), We are able to create automated systems and products that comply or for compliance of any regulations and
                                serve the sectors of Manufacturing & Production, Media & Entertainment and Security & Safety,
                            </Text>
                            {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
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
                            </SimpleGrid> */}
                        </Box>

                        <Box py={'3rem'} />
                    </>
                )
            })}
        </>
    );
}

export default Index