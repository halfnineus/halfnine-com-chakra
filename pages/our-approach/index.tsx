import { ChevronRightIcon } from "@chakra-ui/icons";
import { chakra, Flex, HStack, Icon, SimpleGrid, Box, useColorModeValue as mode, Text, Link, } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { IoStopwatchOutline, IoCashOutline, IoTerminalOutline } from "react-icons/io5";

import { LvlUp } from "../../components";

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
    return (
        <>
            <NextSeo
                title=' Services | Development Services, Digital Transformation, Project Consultation.'
                description='We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                canonical="https://ochoa.pro/our-approach"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/our-approach',
                    },
                    {
                        hrefLang: 'en',
                        href: 'https://ochoa.pro/en/our-approach',
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
                    title="Agile Development"
                    icon={IoStopwatchOutline}
                    refx={'/services/development'}
                >
                    Ability to change priorities, bring support, and test the applications. Brings teams to well rewarded milestones.
                </Feature>

                <Feature
                    title="Return on Investment"
                    icon={IoCashOutline}
                    refx={'/services/digitalization'}
                >
                    We understand the importance for a project to make sense financially, therefore create a carefully planned priority list to create solutions.
                </Feature>

                <Feature
                    title="Product Development as a Service"
                    icon={IoTerminalOutline}
                    refx={'/services/consultation'}
                >
                    We love to make stuff, bringing challenges to our every day environments and solving problems is how we find meaning in improving our world.
                </Feature>
            </SimpleGrid>

            <Box py={'3rem'} />

            <LvlUp />

            <Box py={'3rem'} />

            <Text pl={10} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                {"Page Is Still Under construction..."}
            </Text>
        </>
    );
}

export default Index;