import { ChevronRightIcon } from "@chakra-ui/icons";
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
    HStack,
    Link,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import indexdat from "../../assets/services/index.json"
import router, { useRouter } from "next/router";
import { IoBulbOutline, IoPeopleOutline, IoRocketOutline } from "react-icons/io5";
import { LvlUp } from "../../components";
import NextLink from "next/link";

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
                        <Icon
                            boxSize={12}
                            _light={{ color: "brand.700" }}
                            mb={4}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            as={props.icon}
                        />
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
                        mb={3}
                        fontSize="lg"
                        lineHeight="shorter"
                        fontWeight="bold"
                    // _groupHover={{ color: "brand.700" }}
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
                            description='!!'
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
                                icon={IoPeopleOutline}
                                refx={'/services/development'}
                            >
                                We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.
                            </Feature>

                            <Feature
                                title="Digital Transformation"
                                icon={IoRocketOutline}
                                refx={'/services/digitalization'}
                            >
                                Take a digital approach while selling your products & services, managing your organization and much more!
                            </Feature>

                            <Feature
                                title="Project Consultation"
                                icon={IoBulbOutline}
                                refx={'/services/consultation'}
                            >
                                Find the right options for your project from discovery to deployment of your idea, satisfying your Requirements and your Customer&apos;s Needs.
                            </Feature>
                        </SimpleGrid>

                        <Box py={'3rem'} />

                        <LvlUp />

                        <Box py={'3rem'} />

                        <Text pl={10} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                            {"Page Is Still Under construction..."}
                            {/* 
                               Service - Modernization
                               Modernize your legacy systems improving Preformance and Security, Aligned with your Business Goals
                             */}
                        </Text>
                    </>
                )
            })}
        </>
    );
}

export default Index;