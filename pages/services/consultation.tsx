import {
    chakra,
    Box,
    Flex,
    SimpleGrid,
    Stack,
    GridItem,
    Divider,
    Text,
    useColorModeValue as mode,
    Heading,
    Center,
    Image,
    Container,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { Values } from "../../components";
import { HiOutlineDocumentMagnifyingGlass, HiOutlineDocumentChartBar, HiOutlineBeaker, HiOutlineCheckBadge } from 'react-icons/hi2'

const Feature = (props: any) => {
    return (
        <Flex>
            <Flex shrink={0}>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    h={12}
                    w={12}
                    rounded="md"
                    color="white"
                    bg={mode("gray.100", "brand.700")}
                >
                    <Box color={mode("brand.600", "white")} fontSize="1.5rem">
                        {props.icon}
                    </Box>
                </Flex>
            </Flex>
            <Box ml={4}>
                <chakra.dt
                    fontSize="lg"
                    fontWeight="bold"
                    lineHeight="6"
                    color={'gray.900'}
                >
                    {props.title}
                </chakra.dt>
                <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
                    {props.children}
                </chakra.dd>
            </Box>
        </Flex>
    );
};

const BuiltWith = (children: any) => {
    return (

        <Box
            _hover={{ transform: 'scale(1)', }}
            transform={{ base: 'scale(1)', sm: 'scale(0.97)', md: 'scale(0.97)' }}
            alignContent={'center'}
            h={'auto'}
            role={'group'}
            overflow={'hidden'}
            rounded={'md'}
        >
            <Center>
                <Image opacity={{ md: 0.90, base: 1 }} _groupHover={{ opacity: '1' }} userSelect={'none'} pointerEvents={'none'} alt={'img'} src={children.img} />
            </Center>
        </Box >
    )
}


const Development = () => {
    return (
        <>
            <NextSeo
                title='Realize Ideas with Technology Consulting - Automating all Things | Ochoa'
                description={`Find the leading practices in development, increase your organization's agility to achieve powerful outcomes.`}
                canonical="https://ochoa.pro/services/digitalization"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/services/digitalization',
                    }
                ]}
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} pt={4} mx="auto">
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, lg: 2 }}
                    spacingY={{ base: 10, lg: 6 }}
                    spacingX={{ base: 10, lg: 12 }}
                >
                    <Box alignSelf="start">
                        <chakra.h2
                            color={'brand.500'}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Realize
                        </chakra.h2>
                        <chakra.h2
                            mb={3}
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="extrabold"
                            color={'black'}
                            lineHeight="shorter"
                            letterSpacing="tight"
                        >
                            Technology Consulting
                        </chakra.h2>
                        <chakra.p
                            mb={2}
                            fontSize={{ base: "lg", md: "xl" }}
                            color="gray.600"
                            _dark={{ color: "gray.500" }}
                        >
                            {`Find the leading practices in development, increase your organization's agility to achieve powerful outcomes.`}
                        </chakra.p>
                    </Box>
                    <GridItem colSpan={2}>
                        <Stack
                            spacing={{ base: 10, md: 0 }}
                            display={{ md: "grid" }}
                            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                            gridColumnGap={{ md: 8 }}
                            gridRowGap={{ md: 10 }}
                        >
                            <Feature icon={<HiOutlineDocumentMagnifyingGlass />} title="Feasibility Study">
                                {`Is your project viable? Find out through our TELOS report, (Technical, Economic, Legal, Operational, Scheduling)`}
                            </Feature>
                            <Feature icon={<HiOutlineDocumentChartBar />} title="Performance Assessment">
                                Evaluate your organization employees and leaders on their Performance, Knowledge, and Skills
                            </Feature>
                            <Feature icon={<HiOutlineBeaker />} title="Research and Development">
                                Research through industry experts the capabilities of your projects and take them to the next level.
                            </Feature>
                            <Feature icon={<HiOutlineCheckBadge />} title="Validation">
                                Improve how reliable is your production and services with data gathered through information technology.
                            </Feature>
                        </Stack>
                    </GridItem>
                </SimpleGrid>

                <Divider my={12} />

                <Heading color={'gray.800'} size={'lg'}>
                    {`Information Technology Consulting`}
                </Heading>
                <Text pb={'10'} color={'gray.700'}>
                    {`This service helps you improve the performance, scalability, and competitiveness of your products and services through the right implementation and usage of technology.`}
                </Text>
                {/* 
                <Heading pb={'4'} color={'gray.800'} size={'lg'}>
                    {`Why consulting works`}
                </Heading>
                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'}>
                    {`ROI Methodology`}
                </Heading>
                <Text pb={'4'} color={'gray.700'}>
                    {`This methodology is used and implemented in more than half of the Fortune 500 company's projects, as well as several government organizations throughout the United States and other countries internationally.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Decrease Costs`}
                </Heading>
                <Text pb={'4'} color={'gray.700'}>
                    {`Selecting a team of experts will significantly reduce trial and error, hiring, onboarding, and training in-house developers that will come at high cost.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`High Scalability`}
                </Heading>
                <Text pb={'10'} color={'gray.700'}>
                    {`The ability to upscale and downscale your development team given your specific needs and requirements will guarantee that you only pay for the resources you truly need.`}
                </Text>
                <Heading pb={'4'} color={'gray.800'} size={'lg'}>
                    {`How to Outsource IT Development in a Safe and Efficient way?`}
                </Heading>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Test our expertise in practice`}
                </Heading>
                <Text pb={'4'} color={'gray.700'}>
                    {`You can request a small project or proof of concept (PoC) to get an objective understanding of our competencies.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Establish a Control on outcomes`}
                </Heading>
                <Text pb={'1'} color={'gray.700'}>
                    {`Request a service level agreement (SLA) with your IT vendor that establishes the expected timelines, quality requirements, and risk responsibilities.`}
                </Text>
                <Text pb={'4'} color={'gray.700'}>
                    {`Choose a KPI system that allows you to monitor the health of the project without interrupting with the process.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Set communication structures`}
                </Heading>
                <Text pb={'4'} color={'gray.700'}>
                    {`Choose the communications platforms and formats that will provide clear communication with the development team that outlines every aspect of the project.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={'2'} color={'gray.800'} size={'md'}>
                    {`Ensure information security`}
                </Heading>
                <Text pb={'1'} color={'gray.700'}>
                    {`Reach a Non Disclosure Agreement with your vendor to be able to maintain your sensitive information and maintain property rights on your project.`}
                </Text>
                <Text color={'gray.700'}>
                    {`Revise your vendor's security measures for storing data. (such as IDS/IPS, DLP, SIEM, and others).`}
                </Text> */}


                <Divider my={12} />

                <Values />

                <Box p={"2rem"} />

            </Box>
        </>
    );
};

export default Development;