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
    Container,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { FaUserTag } from 'react-icons/fa'
import { GiSettingsKnobs } from 'react-icons/gi'
import { SiPinboard } from 'react-icons/si'
import { BsSignpostSplit } from 'react-icons/bs'
import { Values } from "../../components";

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
                    _light={{ color: "gray.900" }}
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

const Digitalization = () => {
    return (
        <>
            <NextSeo
                title='Organize Strategic Digital Transformation - Automating all Things | Ochoa'
                description='Transform your manually controlled systems and enviroments into digitally automated technology.'
                canonical="https://ochoa.pro/services/digitalization"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/services/digitalization',
                    }
                ]}
            />
            <Box
                // shadow="xl"
                // bg="white"
                // _dark={{ bg: "gray.800" }}
                px={{ base: '4', xl: '10' }}
                pt={{ base: '4', xl: '8' }}
                mx="auto"
            >
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, lg: 3 }}
                    spacingY={{ base: 10, lg: 32 }}
                    spacingX={{ base: 10, lg: 12 }}
                >
                    <Box alignSelf="start">
                        <chakra.h2
                            _light={{ color: "brand.500" }}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Organize
                        </chakra.h2>
                        <chakra.h2
                            mb={3}
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="extrabold"
                            // textAlign={{ base: "center", sm: "left" }}
                            _light={{ color: "black" }}
                            lineHeight="shorter"
                            letterSpacing="tight"
                        >
                            Strategic Digital Transformation
                        </chakra.h2>
                        <chakra.p
                            mb={6}
                            fontSize={{ base: "lg", md: "xl" }}
                            // textAlign={{ base: "center", sm: "left" }}
                            color="gray.600"
                            _dark={{ color: "gray.500" }}
                        >
                            Transform your manually controlled systems and enviroments into digitally automated technology.
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
                                Focus on consisten results through invesiting in customer relationships and change.
                            </Feature>
                            <Feature icon={<SiPinboard />} title="Strategy Transformation">
                                Break barriers to change through new technology approaches to implement strategies.
                            </Feature>
                        </Stack>
                    </GridItem>
                </SimpleGrid>


                <Divider my={12} />
                <Text color={'gray.700'}>
                    Digital transformation is a set of such measures taken to go in step with the times and connect with customers, partners, and employees on the level comfortable for them. After undergoing the digital transformation, businesses become more sophisticated, extending their reach to a multitude of new customers. Consequently, the business obtains a big push to grow and earn.

                    <br /><br />We can help companies undergo digital transformation by developing custom software solutions as well as re-engineering and refactoring their existing products to better fit the current level of tech on the market.

                    <br /><br />By implementing innovative digital solutions and employing data to make better decisions, our clients are able to reach more customers, increase their satisfaction with products and services, and help alleviate employee pains.
                </Text>

                <Divider my={12} />

                <Container maxW={'container.xl'} px={0}>
                    <Values />
                </Container>
            </Box>

            <Box p={"2rem"} />
        </>
    );
}

export default Digitalization;