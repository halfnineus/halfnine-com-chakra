import {
    Box,
    Text,
    SimpleGrid,
    HStack,
    Heading,
} from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { useRouter } from "next/router"
import { IoTrainOutline } from "react-icons/io5"
import { MdOutlinePrecisionManufacturing } from "react-icons/md"
import { TbBuildingFactory, TbBuildingFactory2 } from "react-icons/tb"
import { GoLock } from "react-icons/go"
import { CiMedicalCross } from "react-icons/ci"

import indexdat from "../../assets/industries/index.json"
import { GiAntiAircraftGun, GiChemicalDrop, GiDefenseSatellite, GiFarmer, GiOilPump, GiPillDrop, GiRolledCloth, GiSodaCan } from "react-icons/gi"
import React from "react"

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
    const filteredData = indexdat.data.filter((p) => p.locale === locale);
    return (
        <>
            {filteredData.map((indexData, index) => (
                <React.Fragment key={index}>
                    <NextSeo
                        title={indexData.head.title}
                        description={indexData.head.description}
                        canonical="https://www.halfnine.com/industries"
                        languageAlternates={[
                            {
                                hrefLang: 'es',
                                href: 'https://www.halfnine.com/es/industries',
                            }
                        ]}
                        openGraph={{
                            url: `https://www.halfnine.com/industries`,
                            title: indexData.head.title,
                            description: indexData.head.description
                        }}
                    />

                    <Box py={{ base: 16, md: 24 }} bg={'blue.600'} textColor={'white'}>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                        </Box>
                    </Box>
                    <Box py={{ base: 16, md: 24 }} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
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
                </React.Fragment>
            ))
            }
        </>
    );
}

export default Index