import {
    Box,
    Heading,
    Text,
    Button,
    Divider,
    VStack,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Mnp = () => {
    return (
        <>
            <NextSeo
                title='Manufacturing and Production Industries - Automating all Things | Ochoa'
                description='Increase your productivity, quality, efficiency, and profit by automating repetitive tasks.'
                canonical="https://ochoa.pro/industries/manufacturing-and-production"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/industries/manufacturing-and-production',
                    }
                ]}
            />

            <Box maxW={'container.xl'} px={{ base: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={4}>
                    <GridItem colSpan={1}>
                        <VStack alignItems="flex-start" spacing="20px">
                            <Heading as={'h2'} fontSize="3xl" fontWeight="700">
                                Manufacturing & Production
                            </Heading>
                            <Link href={'/contact'}>
                                <Button colorScheme="blue" size="md">
                                    Let&apos;s Talk!
                                </Button>
                            </Link>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <Text>
                            {`Automation is allowing us to Manufacture and Produce "create" things in a much
                            faster environment while reducing the costs of operation and to create new
                            never-before-possible sources of revenue.`}
                        </Text>
                    </GridItem>
                </Grid>
                <Divider my={12} />
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
                {/* </Box> */}

                <Box py={'3rem'} />
            </Box>

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
