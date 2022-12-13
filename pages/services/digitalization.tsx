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
                title='Digital Transformation - Automating all Things | Zedir'
                description='Transform your manually controlled systems and environments into digitally automated technology.'
                canonical="https://www.zedir.com/services/digitalization"
            // languageAlternates={[
            //     {
            //         hrefLang: 'es',
            //         href: 'https://www.zedir.com/es/services/digitalization',
            //     }
            // ]}
            />
            <Container maxW={'container.xl'} px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={{ base: 4, xl: 4 }}>
                <Box pb={6} alignSelf="start">
                    <Heading
                        mb={2}
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                    >
                        Digital Transformation Services
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
                        Our focus: Internet of Things and Control Systems for Industrial Applications
                    </Text>
                </Box>
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, lg: 2 }}
                    spacingY={{ base: 10, lg: 6 }}
                    spacingX={{ base: 10, lg: 12 }}
                >
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
                <Text textAlign={'center'} my={6} fontSize={{ base: "lg", md: "xl" }} color="gray.500">
                    Transform your manually controlled systems and environments into digitally automated technology.
                    {/* {`With the use of these established methods we are able to create a valuable strategy that delivers consistent results on diferent projects.`} */}
                </Text>

                <Divider my={12} />

                <Values />

                <Box p={"2rem"} />

            </Container>
        </>
    );
};

export default Development;