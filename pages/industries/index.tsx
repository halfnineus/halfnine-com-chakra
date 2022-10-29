import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Divider,
    Flex,
    Icon,
    Stack,
    Text,
    useColorModeValue as mode,
    chakra,
    SimpleGrid,
    HStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import indexdat from "../../assets/services/index.json"
import router, { useRouter } from "next/router";
import { IoBulbOutline, IoPeopleOutline, IoGameControllerOutline } from "react-icons/io5";


import { AiOutlineShop, AiOutlineFileProtect } from "react-icons/ai";
import { BsController } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { MdOutlineHealing, MdOutlineMovie } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";


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
        <Box
            bg={mode('gray.50', 'gray.700')}
            rounded={'xl'}
            p={4}
            cursor={'pointer'}
            role={'group'}
            _hover={{ bg: mode('brand.50', 'brand.700'), shadow: 'sm' }}
            onClick={() => router.push(props.refx)}
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
        </Box >
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
                            title=' Services | Development Services, Digital Transformation, Project Consultation.'
                            description='We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                            canonical="https://ochoa.pro/industries"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://ochoa.pro/es/industries',
                                },
                                {
                                    hrefLang: 'en',
                                    href: 'https://ochoa.pro/en/industries',
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
                                icon={IoPeopleOutline}
                                refx={'/services/development'}
                            >
                                We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.
                            </Feature>

                            <Feature
                                title="Media & Entertainment"
                                icon={IoGameControllerOutline}
                                refx={'/services/digitalization'}
                            >
                                Take a digital approach while selling your products & services, managing your organization and much more!
                            </Feature>

                            <Feature
                                title="Security & Safety"
                                icon={IoBulbOutline}
                                refx={'/services/consultation'}
                            >
                                Find the right options for your project from discovery to deployment of your idea, satisfying your Requirements and your Customer&apos;s Needs.
                            </Feature>
                        </SimpleGrid>

                        <Box py={'3rem'} />

                        <Flex px={{ base: '6', lg: '10' }} w="auto" justifyContent="center" alignItems="center">
                            <Box shadow="md" py={8} bg={mode('gray.50', 'gray.700')} rounded="xl" maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                                <Box textAlign={{ lg: "center" }}>
                                    <Text fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                                        {"ochoa.pro"}
                                    </Text>
                                    <Text mt={2} fontSize={{ base: "3xl", sm: "4xl" }} lineHeight="8" fontWeight="extrabold" letterSpacing="tight">
                                        {"Technology transformation, migration, and implementation"}
                                    </Text>
                                    <Text mt={4} maxW="2xl" fontSize="xl" mx={{ lg: "auto" }} color="gray.500">
                                        {"We offer Industry solutions for companies who want to work with Technology that meets their specific needs, ideas, and goals."}
                                    </Text>
                                </Box>
                                <Box mt={10}>
                                    <Stack
                                        spacing={{ base: 10, lg: 0 }}
                                        display={{ sm: "row", lg: "grid" }}
                                        gridTemplateColumns={{ md: "repeat(4,1fr)" }}
                                        gridColumnGap={{ md: 8 }}
                                        gridRowGap={{ md: 10 }}
                                    >
                                        <Feature2 icon={<TbReportMoney />} title={"Financial services"}>{"Customize experiences and modernize systems."}</Feature2>
                                        <Feature2 icon={<RiGovernmentLine />} title={"Government"}>{"Implement remote access and cross-agency collaboration."}</Feature2>
                                        <Feature2 icon={<MdOutlineHealing />} title={"Healthcare"}>{"Enhance engagement and improve insights."}</Feature2>
                                        <Feature2 icon={<AiOutlineShop />} title={"Retail"}>{"Personalize experiences and optimize supply chains."}</Feature2>
                                        <Feature2 icon={<FaIndustry />} title={"Manufacturing"}>{"Improve operational efficiencies and reduce costs."}</Feature2>
                                        <Feature2 icon={<MdOutlineMovie />} title={"Media and entertainment"}>{"Create content faster and deliver anywhere."}</Feature2>
                                        <Feature2 icon={<BsController />} title={"Game development"}>{"Build, scale, and operate games with custom hardware."}</Feature2>
                                        <Feature2 icon={<AiOutlineFileProtect />} title={"Security and Safety"}>{"Build, Construct and Operate in safe environments."}</Feature2>
                                    </Stack>
                                </Box>
                                <Box textAlign={{ lg: "center" }}>
                                    <Text
                                        mt={4}
                                        maxW="28"
                                        fontSize="xl"
                                        mx={{ lg: "auto" }}
                                        color={mode("gray.700", "gray.300")}
                                        _hover={{ color: 'blue.500' }}
                                        cursor={'pointer'}
                                        onClick={() => router.push('/portfolio/')}
                                    >
                                        {"And more..."}
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>

                        <Divider mt={8} mb={8} />
                        <Text pl={10} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                            {"Page Is Still Under construction..."}
                        </Text>
                        <Divider mt={8} mb={8} />
                    </>
                )
            })}
        </>
    );
}

export default Index