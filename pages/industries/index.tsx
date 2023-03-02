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
                                    title={'Assembly lines'}
                                    text={'Robotics has revolutionized assembly line production by streamlining and automating repetitive tasks such as picking, placing, and packaging. This has led to increased productivity, improved accuracy, and reduced errors in mass production industries such as automotive, electronics, and food processing.'}
                                />
                                <Feature
                                    icon={<TbBuildingFactory />}
                                    title={'Energy production'}
                                    text={'With the help of Data Analytics, energy companies identify potential failures and predict maintenance needs to prevent costly downtime and enhance the reliability of energy production. For example, wind turbines equipped with sensors collect real-time data on wind speed and direction, allowing operators to adjust blade angles for optimal energy output.'}
                                />
                                <Feature
                                    icon={<GiFarmer />}
                                    title={'Farming'}
                                    text={'Technology has enabled Vertical Farming, a method of growing crops indoors using artificial lighting, automated irrigation systems, and controlled environments. This approach not only reduces the need for pesticides and herbicides but also eliminates the impact of weather conditions on crop yields. By automating the farming process, farmers optimize production, reduce waste, and deliver fresh produce year-round in urban areas.'}
                                />
                                <Feature
                                    icon={<GiPillDrop />}
                                    title={'Pharmaceuticals'}
                                    text={'Automation in pharmaceutical manufacturing leads to higher production capacity, improved quality control, and reduced costs. For example, robotic systems automate drug dispensing and packaging, ensuring accuracy and minimizing the risk of contamination.'}
                                />
                                <Feature
                                    icon={<GiDefenseSatellite />}
                                    title={'Aerospace'}
                                    text={'Industrial automation has revolutionized aerospace manufacturing by enabling precise, repeatable, and efficient assembly of complex parts and structures. For instance, robotic arms perform tasks such as drilling, riveting, and welding, reducing errors and improving safety in the assembly process.'}
                                />
                                <Feature
                                    icon={<GiRolledCloth />}
                                    title={'Textiles'}
                                    text={'Automation in textile manufacturing helps optimize production, reduce waste, and enhance product quality. For example, computer-controlled cutting machines precisely cut fabrics according to specific designs, while robotic sewing machines perform intricate stitching patterns with speed and accuracy.'}
                                />
                                <Feature
                                    icon={<GiChemicalDrop />}
                                    title={'Chemicals'}
                                    text={'Industrial automation helps chemical manufacturers reduce production costs, increase efficiency, and improve safety. For instance, automated mixing and blending systems ensure precise control of chemical composition, while robotic arms handle hazardous materials and perform repetitive tasks such as filling and packaging.'}
                                />
                                <Feature
                                    icon={<GiSodaCan />}
                                    title={'Food & Beverage'}
                                    text={'Automation in the food and beverage industry improves food safety, increase production efficiency, and enhance product quality. For example, automated filling and packaging systems improve accuracy and reduce waste in the production process, while robotic arms handle food ingredients and perform tasks such as slicing and packaging.'}
                                />
                                <Feature
                                    icon={<GoLock />}
                                    title={indexData.block2.item2}
                                    text={indexData.block2.item2d}
                                />
                                <Feature
                                    icon={<GiAntiAircraftGun />}
                                    title={'Defense'}
                                    text={'Advanced automation systems enhance the security and safety of military operations. For example, unmanned aerial vehicles (UAVs) equipped with cameras and sensors gather intelligence, perform surveillance, and detect threats in hostile environments, reducing the need for human intervention in dangerous situations.'}
                                />
                                <Feature
                                    icon={<CiMedicalCross />}
                                    title={'Healthcare'}
                                    text={'Automation in healthcare improves patient safety, reduce medical errors, and increase efficiency. For instance, automated medication dispensing systems ensure accurate dosages and reduce the risk of medication errors, while robotic surgery systems enable precise and minimally invasive surgeries.'}
                                />
                                <Feature
                                    icon={<GiOilPump />}
                                    title={'Oil and Gas'}
                                    text={'Industrial automation in the oil and gas industry helps reduce accidents and enhance operational safety. For example, remote monitoring systems detect potential equipment failures, leaks, and other safety hazards in real-time, enabling operators to take corrective actions before accidents occur.'}
                                />
                                <Feature
                                    icon={<IoTrainOutline />}
                                    title={'Transportation'}
                                    text={'Automation in the transportation industry improves safety, reduce traffic congestion, and enhance energy efficiency. For instance, automated traffic management systems optimize traffic flow and reduce the risk of accidents, while self-driving vehicles reduce human error and improve road safety.'}
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