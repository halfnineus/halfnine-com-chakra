import {
    Box,
    Heading,
    Text,
    Button,
    Divider,
    VStack,
    Grid,
    GridItem,
    Flex,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link"

import indexdat from '../../assets/index.json'
import { useRouter } from "next/router";

const Sns = () => {
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title='Security and Safety Industries  - Automating all Things | Zedir'
                            description='Create and implement solutions to automate safety chores and tasks and focus on products & services.'
                            canonical="https://www.zedir.com/industries/security-and-safety"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/industries/security-and-safety',
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
                                    heading={'Prevention'}
                                    text={'IoT devices allow us to create a contact-less experience with our clients.'}
                                />
                                <Feature
                                    heading={'Monitoring'}
                                    text={'Artificial Intelligence improved the monitoring business by creating alerts based on behavior.'}
                                />
                                <Feature
                                    heading={'Reliability'}
                                    text={'Backup and disaster recovery helps critical services to always function in the times we need them the most.'}
                                />
                                <Feature
                                    heading={'Inspecting'}
                                    text={'Big Data allows us to predict and measure maintenance, making infrastructure more reliable.'}
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

export default Sns;


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
