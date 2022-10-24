import { Box, Flex, Icon, Stack, Text, useColorModeValue as mode, } from "@chakra-ui/react";
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
                            {"indexData.block5.h5"}
                        </Text>
                        <Text mt={4} maxW="2xl" fontSize="xl" mx={{ lg: "auto" }} color="gray.500">
                            {"indexData.block5.txt"}
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
                            <Feature2 icon={<TbReportMoney />} title={"indexData.block5.item1"}>{"indexData.block5.item1d"}</Feature2>
                            <Feature2 icon={<RiGovernmentLine />} title={"indexData.block5.item2"}>{"indexData.block5.item2d"}</Feature2>
                            <Feature2 icon={<MdOutlineHealing />} title={"indexData.block5.item3"}>{"indexData.block5.item3d"}</Feature2>
                            <Feature2 icon={<AiOutlineShop />} title={"indexData.block5.item4"}>{"indexData.block5.item4d"}</Feature2>
                            <Feature2 icon={<FaIndustry />} title={"indexData.block5.item5"}>{"indexData.block5.item5d"}</Feature2>
                            <Feature2 icon={<MdOutlineMovie />} title={"indexData.block5.item6"}>{"indexData.block5.item6d"}</Feature2>
                            <Feature2 icon={<BsController />} title={"indexData.block5.item7"}>{"indexData.block5.item7d"}</Feature2>
                            <Feature2 icon={<AiOutlineFileProtect />} title={"indexData.block5.item8"}>{"indexData.block5.item8d"}</Feature2>
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
                            {"indexData.block5.bot"}
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}

export default Index;