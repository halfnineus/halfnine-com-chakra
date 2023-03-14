import {
    Box,
    Text,
    SimpleGrid,
    HStack,
    Heading,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { useRouter } from "next/router";
import { IoTrainOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { TbBuildingFactory, TbBuildingFactory2 } from "react-icons/tb";
import { GoLock } from "react-icons/go";
import { CiMedicalCross } from "react-icons/ci";

import indexdat from "../../assets/industries/index.json"
import { Contactimg } from "../../components";
import { GiAntiAircraftGun, GiChemicalDrop, GiDefenseSatellite, GiFarmer, GiOilPump, GiPillDrop, GiRolledCloth, GiSodaCan } from "react-icons/gi";

const Feature = (props: any) => {
    return (
        <Box>
            <HStack>
                <Box color={'blue.600'} fontSize="3rem">
                    {props?.icon}
                </Box>
                <Heading pl={2} as={'h3'} fontSize="xl">
                    {props.title}
                </Heading>
            </HStack>
            <Text textAlign={'justify'} ml={16} pb={2} color="gray.600">
                {props.text}
            </Text>
        </Box>
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
                            title={indexData.head.title}
                            description={indexData.head.description}
                            canonical="https://www.zedir.com/industries"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/industries',
                                }
                            ]}
                            openGraph={{
                                url: `https://www.zedir.com/industries`,
                                title: indexData.head.title,
                                description: indexData.head.description
                            }}
                        />
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                            <Contactimg label={indexData.img} pexelsrc={'/img/xtra/pexels-photo-5532658.jpg'} />
                            <Text textAlign={'justify'} pt={6} color={'gray.700'} px={1}>
                                {indexData.block1.text1}
                                {/* Case Studies */}
                            </Text>
                            <SimpleGrid
                                columns={{ base: 1 }}
                                spacing={12}
                                mx="auto"
                                my={20}
                            >
                                <Feature
                                    icon={<TbBuildingFactory2 />}
                                    title={indexData.block2.item1}
                                    text={indexData.block2.item1d}
                                />
                                <Feature
                                    icon={<MdOutlinePrecisionManufacturing />}
                                    title={indexData.block2.item2}
                                    text={indexData.block2.item2d}
                                    />
                                <Feature
                                    icon={<TbBuildingFactory />}
                                    title={indexData.block2.item3}
                                    text={indexData.block2.item3d}
                                />
                                <Feature
                                    icon={<GiFarmer />}
                                    title={indexData.block2.item4}
                                    text={indexData.block2.item4d}
                                    />
                                <Feature
                                    icon={<GiPillDrop />}
                                    title={indexData.block2.item5}
                                    text={indexData.block2.item5d}
                                    />
                                <Feature
                                    icon={<GiDefenseSatellite />}
                                    title={indexData.block2.item6}
                                    text={indexData.block2.item6d}
                                    />
                                <Feature
                                    icon={<GiRolledCloth />}
                                    title={indexData.block2.item7}
                                    text={indexData.block2.item7d}
                                    />
                                <Feature
                                    icon={<GiChemicalDrop />}
                                    title={indexData.block2.item8}
                                    text={indexData.block2.item8d}
                                    />
                                <Feature
                                    icon={<GiSodaCan />}
                                    title={indexData.block2.item9}
                                    text={indexData.block2.item9d}
                                />
                                <Feature
                                    icon={<GoLock />}
                                    title={indexData.block2.item10}
                                    text={indexData.block2.item10d}
                                    />
                                <Feature
                                    icon={<GiAntiAircraftGun />}
                                    title={indexData.block2.item11}
                                    text={indexData.block2.item11d}
                                    />
                                <Feature
                                    icon={<CiMedicalCross />}
                                    title={indexData.block2.item12}
                                    text={indexData.block2.item12d}
                                    />
                                <Feature
                                    icon={<GiOilPump />}
                                    title={indexData.block2.item13}
                                    text={indexData.block2.item13d}
                                    />
                                <Feature
                                    icon={<IoTrainOutline />}
                                    title={indexData.block2.item14}
                                    text={indexData.block2.item14d}
                                />

                            </SimpleGrid>
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default Index