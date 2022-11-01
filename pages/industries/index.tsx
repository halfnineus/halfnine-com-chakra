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
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import indexdat from "../../assets/services/index.json"
import { useRouter } from "next/router";
import { IoHammerOutline, IoVideocamOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

import { LvlUp } from "../../components";


const Feature2 = (props: any) => {
    return (
        <Flex>
            <Icon boxSize={12} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" color={mode('blue.600', 'blue.300')}>{props.icon}</Icon>
            <Box ml={4}>
                <Text fontSize="lg" fontWeight="semibold" lineHeight="6">{props.title}</Text>
                <Text mt={2} color="gray.500">{props.children}</Text>
            </Box>
        </Flex>
    )
}

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
                            title='!! - Automating all Things | Ochoa'
                            description='!!We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
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
                                icon={IoHammerOutline}
                                refx={'/industries/mnp'}
                            >
                                Increase productivity, quality, efficiency and profit by Automating repetitive tasks.
                            </Feature>

                            <Feature
                                title="Media & Entertainment"
                                icon={IoVideocamOutline}
                                refx={'/industries/mne'}
                            >
                                Change experiences forever by implementing and delivering a more immersive environment.
                            </Feature>

                            <Feature
                                title="Security & Safety"
                                icon={IoShieldCheckmarkOutline}
                                refx={'/industries/sns'}
                            >
                                Create and implement solutions to ease safety chores and tasks and focus on products & services.
                            </Feature>
                        </SimpleGrid>

                        <Box py={'3rem'} />

                        <LvlUp />

                        <Box py={'3rem'} />

                        <Text pl={10} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                            {"Page Is Still Under construction..."}
                        </Text>
                    </>
                )
            })}
        </>
    );
}

export default Index