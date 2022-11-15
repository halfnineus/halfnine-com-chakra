import { SimpleGrid, Box, useColorModeValue as mode, Text, Heading, Img, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

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


// Agile... Redefining Agile
// Ability to change priorities, bring support, and test the applications. Brings teams to well rewarded milestones.

// Quality Assurance

// Risk Control

// PDaaS

// Quality Assurance

// Risk Control

// ROI

// People Operations and Development Specialist People

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
            <Box py={'1rem'} />

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