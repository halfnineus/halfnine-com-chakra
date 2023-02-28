import {
    Box,
    Text,
    SimpleGrid,
    HStack,
    Heading,
    Button,
    Divider,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { useRouter } from "next/router";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

import indexdat from "../../assets/industries/index.json"
import { Contactimg } from "../../components";

const Feature = (props: any) => {
    return (
        <Box>
            <HStack>
                <Box color={'blue.600'} fontSize="3rem">
                    {props.icon}
                </Box>
                <Heading pl={3} as={'h3'} fontSize="xl">
                    {props.title}
                </Heading>
            </HStack>
            <Text pt={2} color="gray.600">
                {props.children}
            </Text>
            <Link href={props.refx}>
                <Button mt={4} colorScheme={'blue'}>
                    Learn More
                </Button>
            </Link>
        </Box>
    );
};

interface FeaturedeProps {
    heading: string;
    text: string;
}

const Featurede = ({ heading, text }: FeaturedeProps) => {
    return (
        <GridItem>
            <Heading pb={1} as={'h3'} fontSize="xl" fontWeight="600">
                {heading}
            </Heading>
            <Text>{text}</Text>
        </GridItem>
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
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" my={8}>
                            <Contactimg label={indexData.img} pexelsrc={'5532658/pexels-photo-5532658.jpeg'} />
                            <Text pt={6} px={2} color={'gray.700'}>
                                {indexData.block1.text1}
                            </Text>
                            <Divider my={20} maxW={"container.xl"} mx={'auto'} />
                            <Box>
                                <SimpleGrid
                                    columns={{ base: 1 }}
                                    spacing={4}
                                    mx="auto"
                                >
                                    <Feature
                                        title={indexData.block2.item1}
                                        icon={<MdOutlinePrecisionManufacturing />}
                                        refx={'/industries#manufacturing-and-production'}
                                    >
                                        {indexData.block2.item1d}
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title={indexData.block2.item2}
                                        icon={<IoShieldCheckmarkOutline />}
                                        refx={'/industries#security-and-safety'}
                                    >
                                        {indexData.block2.item2d}
                                    </Feature>
                                </SimpleGrid>
                            </Box>
                        </Box>

                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} py={20} mx="auto">
                            <Grid
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(2, 1fr)',
                                    lg: 'repeat(4, 1fr)',
                                }}
                                gap={{ base: '8', sm: '12', md: '16' }}
                            >
                                <Featurede
                                    heading={'Assembly lines'}
                                    text={'Robotics has made assembly lines work on a mass scale by automating repetitive tasks.'}
                                />
                                <Featurede
                                    heading={'Energy'}
                                    text={'Data Analytics prevents and predicts maintenance on energy production, making it more reliable.'}
                                />
                                <Featurede
                                    heading={'Farming'}
                                    text={'Technology has made Vertical Farming Possible by automating the farming process.'}
                                />
                                <Featurede
                                    heading={'This Site'}
                                    text={'Frameworks have made this site fast by automating the repetitive code used in production.'}
                                />
                                <Featurede
                                    heading={'Prevention'}
                                    text={'IoT devices allow us to create a contact-less experience with our clients.'}
                                />
                                <Featurede
                                    heading={'Monitoring'}
                                    text={'Artificial Intelligence improved the monitoring business by creating alerts based on behavior.'}
                                />
                                <Featurede
                                    heading={'Reliability'}
                                    text={'Backup and disaster recovery helps critical services to always function in the times we need them the most.'}
                                />
                                <Featurede
                                    heading={'Inspecting'}
                                    text={'Big Data allows us to predict and measure maintenance, making infrastructure more reliable.'}
                                />
                            </Grid>
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default Index