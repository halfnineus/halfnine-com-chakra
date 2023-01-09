import {
    Box,
    Heading,
    Text,
    Button,
    Divider,
    VStack,
    Grid,
    GridItem,
    Image,
    UnorderedList,
    ListItem,
    Flex,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import indexdat from '../../assets/index.json'
import { useRouter } from "next/router";

const Mnp = () => {
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title='Manufacturing and Production Industries - Automating all Things | Zedir'
                            description='Increase your productivity, quality, efficiency, and profit by automating repetitive tasks.'
                            canonical="https://www.zedir.com/industries/manufacturing-and-production"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/industries/manufacturing-and-production',
                                }
                            ]}
                        />

                        <Box maxW={'container.xl'} px={{ base: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                            <Grid
                                templateColumns={{
                                    base: 'repeat(1, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(2, 1fr)',
                                    lg: 'repeat(4, 1fr)',
                                }}
                                gap={{ base: '8', sm: '12', md: '16' }}>
                                <Feature
                                    heading={'Assembly lines'}
                                    text={'Robotics has made assembly lines work on a mass scale by automating repetitive tasks.'}
                                />
                                <Feature
                                    heading={'Energy'}
                                    text={'Data Analytics prevents and predicts maintenance on energy production, making it more reliable.'}
                                />
                                <Feature
                                    heading={'Farming'}
                                    text={'Technology has made Vertical Farming Possible by automating the farming process.'}
                                />
                                <Feature
                                    heading={'This Site'}
                                    text={'Frameworks have made this site fast by automating the repetitive code used in production.'}
                                />
                            </Grid>
                            <Box py={'3rem'} />
                        </Box>

                    </>
                )
            })}
        </>
    );
}

export default Mnp


interface FeatureProps {
    heading: string;
    text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
    return (
        <GridItem>
            <Heading pb={1} as={'h3'} fontSize="xl" fontWeight="600">
                {heading}
            </Heading>
            <Text>{text}</Text>
        </GridItem>
    );
};
