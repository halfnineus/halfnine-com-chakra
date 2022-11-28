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
import Link from "next/link"

const Sns = () => {
    return (
        <>
            <NextSeo
                title='Security and Safety Industries  - Automating all Things | Ochoa'
                description='Create and implement solutions to automate safety chores and tasks and focus on products & services.'
                // description='Create and implement solutions to ease safety chores and tasks and focus on products & services.'
                canonical="https://ochoa.pro/industries/security-and-safety"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/industries/security-and-safety',
                    }
                ]}
            />
            <Box maxW={'container.xl'} px={{ base: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                {/* <Box as={Container} maxW="7xl> */}
                {/* <Heading>
                {`Security & Safety - Get ready to ensure things differently`}
            </Heading> */}
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
                                Security & Safety
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
                            Automation is allowing us to secure and create safer environments in a fast-paced,
                            changing and constantly evolving workplace while allowing us to reduce the costs
                            of operation and to create new never-before-possible sources of revenue.
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
                {/* </Box> */}

                <Box py={'3rem'} />
            </Box>
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
