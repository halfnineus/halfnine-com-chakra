import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Icon,
    Stack,
    Text,
    useColorModeValue as mode,
    chakra,
    SimpleGrid,
    HStack,
    Link,
    Heading,
    Img,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { IoBulbOutline, IoPeopleOutline, IoRocketOutline } from "react-icons/io5";

import indexdat from "../../assets/services/index.json"
import { LvlUp } from "../../components";

import srvcimg from '../../public/img/index/services.jpg'

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
                        _dark={{ color: "gray.300" }}
                    >
                        {props.children}
                    </chakra.p>
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
                            title='Our Services - Custom Development, Digital Transformation, Project Consultation.'
                            description='!!changeme '
                            canonical="https://ochoa.pro/services"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://ochoa.pro/es/services',
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
                                title="Development Services"
                                icon={<IoPeopleOutline />}
                                refx={'/services/development'}
                            >
                                We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.
                            </Feature>

                            <Feature
                                title="Digital Transformation"
                                icon={<IoRocketOutline />}
                                refx={'/services/digitalization'}
                            >
                                Take a digital approach while selling your products & services, managing your organization and much more!
                            </Feature>

                            <Feature
                                title="Project Consultation"
                                icon={<IoBulbOutline />}
                                refx={'/services/consultation'}
                            >
                                Find the right options for your project from discovery to deployment of your idea, satisfying your Requirements and your Customer&apos;s Needs.
                            </Feature>
                        </SimpleGrid>

                        <Box py={'3rem'} />

                        <Box maxW={{ base: 'xl', md: 'container.xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
                                <Stack my={2}>
                                    <Heading>Automating All Things Together</Heading>
                                    <Text maxW={'34rem'} pt={2} color={mode('gray.600', 'gray.400')} fontSize={'lg'}>
                                        Outsourcing reduces costs by helping you avoid the industry&apos;s most common problems and
                                        freeing your time to focus on big picture strategies.
                                        Improve your consistency and reliability, allow faster delivery and infrastructure changes.
                                        Not having talent in-house or maybe even in the same country presents challenges, We believe that great communication is key to mitigating risk.
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
                                    src={srvcimg.src}
                                    alt="Automation Support Center"
                                />
                            </SimpleGrid>
                        </Box>

                        <Box py={'3rem'} />

                        <LvlUp />

                        <Box py={'3rem'} />
                    </>
                )
            })}
        </>
    );
}

export default Index;