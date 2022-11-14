import { ChevronRightIcon } from "@chakra-ui/icons";
import { chakra, Flex, HStack, Icon, SimpleGrid, Box, useColorModeValue as mode, Text, Link, Heading, Img, Stack, Center } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { IoCashOutline, IoTerminalOutline, IoTimerOutline } from "react-icons/io5";

{/* https://duckduckgo.com/?q=%22redefining+agile%22&ia=web */ }
{/* https://duckduckgo.com/?q=Agile+Automation&ia=places */ }
{/* https://learn.microsoft.com/en-us/devops/plan/what-is-agile-development */ }

{/* <Text>
    Based on: Agile Software Development<br />
    Agile Automation<br />
    Agile Architecture<br />
    Agile Application<br />
    Agile Business Intelligence<br />
    Agile Contracts<br />
    Agile Infrastructure<br />
    Agile Learning<br />
    Agile Leadership<br />
    Agile Modeling<br />
    Agile Management<br />
    Agile Marketing<br />
    Agile Manufacturing<br />
    Agile Project Management<br />
    Agile Retail<br />
    Agile Testing<br />
    Agile Tooling<br />
    Agile Usability Engineering<br />
    Agile Unified Process<br />
</Text> */}

{/* https://www.softwaretestinghelp.com/software-quality-assurance/ */ }

{/* https://roiinstitute.net/roi-methodology/ */ }



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
    return (
        <>
            <NextSeo
                title='!!changeme  - Automating all Things | Ochoa'
                description='!!changeme We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                canonical="https://ochoa.pro/our-approach"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/our-approach',
                    }
                ]}
            />
            <SimpleGrid
                maxW={'container.xl'}
                columns={{ base: 1 }}
                spacing={4}
                px={{ base: '4', xl: '10' }}
                pt={{ base: '6', xl: '10' }}
                mx="auto"
                bg="white"
                _dark={{ bg: "gray.800" }}
            >
                <Feature
                    title="Agile Development"
                    icon={<IoTimerOutline />}
                    refx={'/our-approach/agile'}
                >
                    Ability to change priorities, bring support, and test the applications. Brings teams to well rewarded milestones.
                </Feature>

                <Feature
                    title="Quality Assurance"
                    icon={<IoCashOutline />}
                    refx={'/our-approach/quality-assurance'}
                >
                    !!We understand the importance for a project to make sense financially, therefore create a carefully planned priority list to create solutions.
                </Feature>

                <Feature
                    title="Risk Control"
                    icon={<IoTerminalOutline />}
                    refx={'/our-approach/risk-control'}
                >
                    !!We love to make stuff, bringing challenges to our every day environments and solving problems is how we find meaning in improving our world.
                </Feature>
            </SimpleGrid>

            <Box py={'3rem'} />

            <Box maxW={{ base: 'xl', md: 'container.xl' }} mx="auto" px={{ base: '4', xl: '10' }}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
                    <Stack my={2}>
                        <Heading>Finding Big Solutions Together</Heading>
                        <Text maxW={'34rem'} pt={2} color={mode('gray.600', 'gray.400')} fontSize={'lg'}>
                            Our agile development strategies and solutions are focused on advancing innovation and driving powerful outcomes.
                            Focusing on clients and companies making a return on investment by mitigating risk and increasing client satisfaction,
                            developing products to help you focus on market research and other big picture strategies.
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
                        src={'/img/index/our-approach.jpg'}
                        alt="Analytics Inspecting"
                    />
                </SimpleGrid>
            </Box>

            <Box py={'3rem'} />
        </>
    );
}

export default Index;