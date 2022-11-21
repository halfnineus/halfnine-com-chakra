import { Box, Text, Heading, SimpleGrid, Image, Divider, Center } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

// #url
{/* https://duckduckgo.com/?q=%22redefining+agile%22&ia=web */ }
{/* https://duckduckgo.com/?q=Agile+Automation&ia=places */ }
{/* https://learn.microsoft.com/en-us/devops/plan/what-is-agile-development */ }

{/* <Text>
    smd on: Agile Software Development<br />
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
            {/* <Container maxW={'container.xl'} px={{ sm: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={4}> */}
            <Box maxW={'container.xl'} px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                {/* <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ sm: '16', md: '8' }}> */}
                {/* <Stack my={2}> */}
                {/* <Heading>Redefining Agile</Heading> */}
                {/* Finding Big Solutions Together */}
                {/* <Text letterSpacing={'medium'} pt={2} color={'gray.800'} fontSize={'md'}>
                    Our combined agile development strategies and solutions are focused on advancing innovation and driving powerful outcomes.
                    Focusing on clients and companies making a return on investment by mitigating risk,
                    and developing products that help you focus on other big picture strategies.
                </Text> */}
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

                <Heading textAlign={{ sm: "center", md: "left" }} color={'black'}>
                    {`Finding big Solutions Together`}
                </Heading>
                <Text textAlign={{ sm: "center", md: "left" }} pt={2} color="gray.700" fontSize={'lg'}>
                    {`These methodologies are used and implemented in more than half of the Fortune 500 company's projects, as well as several government organizations throughout the United States and other countries internationally.`}
                </Text>

                <Divider my={12} />

                <SimpleGrid
                    columns={{ sm: 1, md: 2 }}
                    spacingY={{ sm: 10, md: 32 }}
                    spacingX={{ sm: 10, md: 24 }}
                >
                    <Box>
                        <Heading
                            mt={4}
                            mb={4}
                            as={'h2'}
                            fontWeight="bold"
                            textAlign={{ sm: "center", md: "left" }}
                            color={"gray.800"}
                        >
                            Redefining Agile
                        </Heading>
                        <Text
                            mb={5}
                            textAlign={{ sm: "center", md: "left" }}
                            color="gray.600"
                            fontSize={'lg'}
                        >
                            Our combined Agile Development Strategies and Solutions are focused on driving powerful outcomes by providing the ability to change priorities bring support and test the applications. Helping you advance innovation in your industry and focus on other big picture strategies
                        </Text>
                    </Box>
                    <Center>
                        <Box
                            w="full"
                            overflow={'hidden'}
                            rounded={'2xl'}
                            border={'1px'}
                            borderColor={'gray.100'}
                        >
                            <Image userSelect={'none'} pointerEvents={'none'} width={'full'} src={'/img/our-approach/redefining-agile.jpg'} />
                        </Box>
                    </Center>
                </SimpleGrid>

                <Divider my={12} />

                <SimpleGrid
                    columns={{ sm: 1, md: 2 }}
                    spacingY={{ sm: 10, md: 32 }}
                    spacingX={{ sm: 10, md: 24 }}
                >
                    <Box order={{ sm: "initial", md: 2 }}>
                        <Heading
                            mt={4}
                            mb={4}
                            as={'h2'}
                            fontWeight="bold"
                            textAlign={{ sm: "center", md: "left" }}
                            color={"gray.800"}
                        >
                            {`Quality Assurance`}
                        </Heading>
                        <Text
                            letterSpacing={1}
                            mb={5}
                            textAlign={{ sm: "center", md: "left" }}
                            color="gray.600"
                            fontSize={{ md: "lg" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Sit amet porttitor eget dolor morbi non arcu risus quis. Laoreet sit amet cursus sit amet.
                        </Text>
                    </Box>
                    <Center>
                        <Box
                            w="full"
                            overflow={'hidden'}
                            rounded={'2xl'}
                            border={'1px'}
                            borderColor={'gray.100'}
                        >
                            <Image userSelect={'none'} pointerEvents={'none'} width={'full'} src={'/img/our-approach/costumer-satisfaction.jpg'} />
                        </Box>
                    </Center>
                </SimpleGrid>

                <Divider my={12} />

                <SimpleGrid
                    columns={{ sm: 1, md: 2 }}
                    spacingY={{ sm: 10, md: 32 }}
                    spacingX={{ sm: 10, md: 24 }}
                >
                    <Box>
                        <Heading
                            mt={4}
                            mb={4}
                            as={'h2'}
                            fontWeight="bold"
                            textAlign={{ sm: "center", md: "left" }}
                        >
                            {`Risk Control`}
                        </Heading>
                        <Text
                            letterSpacing={1}
                            mb={5}
                            textAlign={{ sm: "center", md: "left" }}
                            color="gray.600"
                            fontSize={{ md: "lg" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Sit amet porttitor eget dolor morbi non arcu risus quis. Laoreet sit amet cursus sit amet.                         </Text>
                    </Box>
                    <Center>
                        <Box
                            w="full"
                            overflow={'hidden'}
                            rounded={'2xl'}
                            border={'1px'}
                            borderColor={'gray.100'}
                        >
                            <Image userSelect={'none'} pointerEvents={'none'} width={'full'} src={'/img/our-approach/risk-control.jpg'} />
                        </Box>
                    </Center>
                </SimpleGrid>

                <Divider my={12} />

                <SimpleGrid
                    columns={{ sm: 1, md: 2 }}
                    spacingY={{ sm: 10, md: 32 }}
                    spacingX={{ sm: 10, md: 24 }}
                >
                    <Box order={{ sm: "initial", md: 2 }}>
                        <Heading
                            mt={4}
                            mb={4}
                            as={'h2'}
                            fontWeight="bold"
                            textAlign={{ sm: "center", md: "left" }}
                        >
                            {`ROI (Return on Investment)`}
                        </Heading>
                        <Text
                            letterSpacing={1}
                            mb={5}
                            textAlign={{ sm: "center", md: "left" }}
                            color="gray.600"
                            fontSize={{ md: "lg" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Sit amet porttitor eget dolor morbi non arcu risus quis. Laoreet sit amet cursus sit amet.                         </Text>
                    </Box>
                    <Center>
                        <Box
                            w="full"
                            overflow={'hidden'}
                            rounded={'2xl'}
                            border={'1px'}
                            borderColor={'gray.100'}
                        >
                            <Image userSelect={'none'} pointerEvents={'none'} width={'full'} src={'/img/our-approach/return-on-investment.jpg'} />
                        </Box>
                    </Center>
                </SimpleGrid>

                <Divider my={12} />

                <SimpleGrid
                    columns={{ sm: 1, md: 2 }}
                    spacingY={{ sm: 10, md: 32 }}
                    spacingX={{ sm: 10, md: 24 }}
                >
                    <Box>
                        <Heading
                            mt={4}
                            mb={4}
                            as={'h2'}
                            fontWeight="bold"
                            textAlign={{ sm: "center", md: "left" }}
                        >
                            {`PDaaS (Product Development as a Service)`}
                        </Heading>
                        <Text
                            letterSpacing={1}
                            mb={5}
                            textAlign={{ sm: "center", md: "left" }}
                            color="gray.600"
                            fontSize={{ md: "lg" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Sit amet porttitor eget dolor morbi non arcu risus quis. Laoreet sit amet cursus sit amet.                         </Text>
                    </Box>
                    <Center>
                        <Box
                            w="full"
                            overflow={'hidden'}
                            rounded={'2xl'}
                            border={'1px'}
                            borderColor={'gray.100'}
                        >
                            <Image userSelect={'none'} pointerEvents={'none'} width={'full'} src={'/img/our-approach/product-development.jpg'} />
                        </Box>
                    </Center>
                </SimpleGrid>

                <Divider my={12} />

                <SimpleGrid
                    columns={{ sm: 1, md: 2 }}
                    spacingY={{ sm: 10, md: 32 }}
                    spacingX={{ sm: 10, md: 24 }}
                >
                    <Box order={{ sm: "initial", md: 2 }}>
                        <Heading
                            mt={4}
                            mb={4}
                            as={'h2'}
                            fontWeight="bold"
                            textAlign={{ sm: "center", md: "left" }}
                        >
                            {`CaaS (Consulting as a Service)`}
                        </Heading>
                        <Text
                            letterSpacing={1}
                            mb={5}
                            textAlign={{ sm: "center", md: "left" }}
                            color="gray.600"
                            fontSize={{ md: "lg" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Sit amet porttitor eget dolor morbi non arcu risus quis. Laoreet sit amet cursus sit amet.                         </Text>
                    </Box>
                    <Center>
                        <Box
                            w="full"
                            overflow={'hidden'}
                            rounded={'2xl'}
                            border={'1px'}
                            borderColor={'gray.100'}
                        >
                            <Image userSelect={'none'} pointerEvents={'none'} width={'full'} src={'/img/our-approach/consulting.jpg'} />
                        </Box>
                    </Center>
                </SimpleGrid>

                <Divider my={12} />

                <SimpleGrid
                    columns={{ sm: 1, md: 2 }}
                    spacingY={{ sm: 10, md: 32 }}
                    spacingX={{ sm: 10, md: 24 }}
                >
                    <Box>
                        <Heading
                            mt={4}
                            mb={4}
                            as={'h2'}
                            fontWeight="bold"
                            textAlign={{ sm: "center", md: "left" }}
                        >
                            {`DTaaS (Digital Transformation as a Service)`}
                        </Heading>
                        <Text
                            letterSpacing={1}
                            mb={5}
                            textAlign={{ sm: "center", md: "left" }}
                            color="gray.600"
                            fontSize={{ md: "lg" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Sit amet porttitor eget dolor morbi non arcu risus quis. Laoreet sit amet cursus sit amet.                         </Text>
                    </Box>
                    <Center>
                        <Box
                            w="full"
                            overflow={'hidden'}
                            rounded={'2xl'}
                            border={'1px'}
                            borderColor={'gray.100'}
                        >
                            <Image userSelect={'none'} pointerEvents={'none'} width={'full'} src={'/img/our-approach/digital-transformation.jpg'} />
                        </Box>
                    </Center>
                </SimpleGrid>
            </Box>

            <Box py={'3rem'} />

        </>
    );
}

export default Index;