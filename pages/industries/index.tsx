import { Flex, Stack, Text, Box, useColorModeValue as mode, Icon, Divider, } from "@chakra-ui/react";
import router from "next/router";
import { AiOutlineShop, AiOutlineFileProtect } from "react-icons/ai";
import { BsController } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { MdOutlineHealing, MdOutlineMovie } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";

const Feature2 = (props: any) => {
    return (
        <Flex>
            <Icon boxSize={12} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" color={mode('blue.600', 'blue.200')}>{props.icon}</Icon>
            <Box ml={4}>
                <Text fontSize="lg" fontWeight="semibold" lineHeight="6">{props.title}</Text>
                <Text mt={2} color="gray.500">{props.children}</Text>
            </Box>
        </Flex>
    )
}

const Index = () => {
    return (
        <>
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
            <Text pl={8} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                {"Under construction..."}
            </Text>
            <Divider mt={8} mb={8} />
        </>
    );
}

export default Index;