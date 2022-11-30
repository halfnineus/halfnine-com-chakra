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

import { SiLichess, SiPinboard } from 'react-icons/si'
import { BsTerminal, BsVectorPen, BsLifePreserver, BsSignpostSplit } from 'react-icons/bs'
import { Values } from "../../components";
import { FaUserTag } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

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
                    bg={"gray.100"}
                >
                    <Box color={"blue.600"} fontSize="1.5rem">
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
                title='Organize Strategic Digital Transformation - Automating all Things | Ochoa'
                description='Transform your manually controlled systems and environments into digitally automated technology.'
                canonical="https://ochoa.pro/services/digitalization"
                // languageAlternates={[
                //     {
                //         hrefLang: 'es',
                //         href: 'https://ochoa.pro/es/services/digitalization',
                //     }
                // ]}
            />
            <Container maxW={'container.xl'} px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={{ base: 4, xl: 4 }}>
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, lg: 2 }}
                    spacingY={{ base: 10, lg: 6 }}
                    spacingX={{ base: 10, lg: 12 }}
                >
                    <Box alignSelf="start">
                        <chakra.h2
                            color={'blue.500'}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Strategize
                        </chakra.h2>
                        <chakra.h2
                            mb={3}
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="extrabold"
                            color={'black'}
                            lineHeight="shorter"
                            letterSpacing="tight"
                        >
                            Digital Transformation
                        </chakra.h2>
                        <chakra.p
                            mb={2}
                            fontSize={{ base: "lg", md: "xl" }}
                            color="gray.600"
                            _dark={{ color: "gray.500" }}
                        >
                            Transform your manually controlled systems and environments into digitally automated technology.
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
                            <Feature icon={<FaUserTag />} title="Workforce Capacity">
                                Increase the capabilities of your workforce by implementing a new strategy through organizational change.
                            </Feature>
                            <Feature icon={<GiSettingsKnobs />} title="Operations Realignment">
                                Find new leadership strategies and outgrow competitors through data and information technologies.
                            </Feature>
                            <Feature icon={<BsSignpostSplit />} title="Sustainable Change">
                                Focus on consistent results through investing in customer relationships and change.
                            </Feature>
                            <Feature icon={<SiPinboard />} title="Strategy Transformation">
                                Break barriers to change through new technology approaches to implement strategies.
                            </Feature>
                        </Stack>
                    </GridItem>
                </SimpleGrid>

                <Divider my={12} />

                {/* #url https://www.oracle.com/cloud/digital-transformation/ */}
                {/* https://www.accenture.com/us-en/insights/digital-transformation-index */}
                {/* https://emeritus.org/blog/what-is-digital-transformation-definition-examples-strategies/ */}
                {/* https://www2.deloitte.com/us/en/insights/topics/strategy/how-to-lead-digital-transformation.html */}
                {/* https://www.bakertilly.com/insights/the-key-to-digital-transformation-is-not-managing-change */}


                <Heading color={'gray.800'} size={'lg'}>
                    Digital Transformation
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    {`Is the process of adopting digital technology in your organization through planning and executing a digital-first & customer-driven approach. This is done to find improvement opportunities such as efficiency, value, and innovation.`}
                </Text>
                <Heading pb={4} color={'gray.800'} size={'lg'}>
                    {`Why a Digital Transformation works`}
                </Heading>
                <Heading fontWeight={'semibold'} color={'gray.800'} size={'md'}>
                    {`Lead change`}
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    {`Stop managing change and start leading change in your industry with proven Distributed Agile Frameworks that improve your business model and prepare you for a more competitive future.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    {`Accelerate Innovation`}
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    {`Start your innovation processes by saving valuable resources and time with digital and data solutions, helping you focus on your industry's goals.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    {`Outpace Demands`}
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    {`It's hard to keep up with all the new methods and technologies, With our passion for IT we research the markets and make sure you don't fall back and maintain a flexible and scalable environment for change.`}
                </Text>

                <Divider my={12} />

                <Values />

                <Box p={"2rem"} />

            </Container>
        </>
    );
};

export default Development;