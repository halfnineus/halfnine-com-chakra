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

const Index = () => {
    return (
        <>
            <NextSeo
                title='How we do Things - Automating all Things | Ochoa'
                description='Find our agile development strategies and ways to find solutions that focus on advancing innovation and driving powerful outcomes.'
                canonical="https://ochoa.pro/our-approach"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/our-approach',
                    }
                ]}
            />
            {/* <Box py={'1rem'} /> */}
            {/* <Container maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} pt={4}> */}
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} pt={4} mx="auto">
                {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}> */}
                {/* <Stack my={2}> */}
                <Heading>Redefining Agile</Heading>
                {/* Finding Big Solutions Together */}
                <Text letterSpacing={'tight'} pt={2} color={mode('gray.600', 'gray.400')} fontSize={'lg'}>
                    Our combined agile development strategies and solutions are focused on advancing innovation and driving powerful outcomes.
                    Focusing on clients and companies making a return on investment by mitigating risk,
                    and developing products that help you focus on other big picture strategies.
                </Text>
                {/* </Stack> */}
                {/*
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
                    /> */}
                {/* </SimpleGrid> */}

                <Box py={'3rem'} />

                <Heading color={'gray.800'}>
                    {`Finding big Solutions Together`}
                </Heading>
                <Text letterSpacing={'wide'} size={'md'} pb={8} >
                    {`These methodologies are used and implemented in more than half of the Fortune 500 company's projects, as well as several government organizations throughout the United States and other countries internationally.`}
                </Text>

                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'} pb={'4'}>
                    {`PDaaS (Product Development as a Service)`}
                </Heading>
                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'}>
                    {`Redefining Agile`}
                </Heading>
                <Text letterSpacing={'wide'} pb={'4'} color={'gray.700'}>
                    {`Ability to change priorities, bring support, and test the applications. Brings teams to well rewarded milestones.`}
                </Text>
                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'} pb={'4'}>
                    {`ROI (Return on Investment)`}
                </Heading>
                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'} pb={'4'}>
                    {`Risk Control`}
                </Heading>
                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'} pb={'4'}>
                    {`Quality Assurance`}
                </Heading>
                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'} pb={'4'}>
                    {`ROI Methodology`}
                </Heading>

                <Box py={'3rem'} />
            </Box>
        </>
    );
}

export default Index;