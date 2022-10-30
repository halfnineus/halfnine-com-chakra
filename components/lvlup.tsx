import { Grid, GridItem, VStack, Heading, Button, Flex, Divider, Text, Box, Link } from "@chakra-ui/react";
import router from "next/router";
import NextLink from 'next/link'
interface FeatureProps3 {
    heading: string;
    text: string;
}

const Feature3 = ({ heading, text }: FeatureProps3) => {
    return (
        <GridItem>
            <Heading as={'h3'} pb={'1'} fontSize="xl" fontWeight="600">
                {heading}
            </Heading>
            <Text>{text}</Text>
        </GridItem>
    );
};

const Lvlup = () => {
    return (
        <>
            <Box px={{ base: '6', lg: '10' }}>
                {/* <Box as={Container} maxW="7xl" mt={14} p={4}> */}
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={4}>
                    <GridItem colSpan={1}>
                        <VStack alignItems="flex-start" spacing="24px">
                            <Heading as={'h2'} fontSize="3xl" fontWeight="700">
                                Are you ready to Level Up?
                            </Heading>
                            <NextLink href={'/contact'} passHref>
                                <Link>
                                    <Button w={{ base: 'full', sm: '120px' }} colorScheme="brand" >
                                        Contact Us
                                    </Button>
                                </Link>
                            </NextLink>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <Flex>
                            <Text>
                                {/*
                        !! If you have an idea you want to discuss, reach out!
                        !! From startups to enterprise level companies, we have helped organizations bring their digital goals to life.
                      */}
                                {`Taking your business to the Next Level takes a lot of resources combined with trial and error, 
                        Our experience in the field will take the risks to the minimun while maximizing the use of resources.`}
                            </Text>
                        </Flex>
                    </GridItem>
                </Grid>
                <Divider my={6} />
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    }}
                    gap={{ base: '8', sm: '12', md: '16' }}>
                    <Feature3
                        heading={'Teamwork'}
                        text={`Teamwork is the path to achieve creativity and collaboration, and also the path to achieve something great.`}
                    />
                    <Feature3
                        heading={'Innovation'}
                        text={'Connecting knowledge with imagination we create value for a better purpose.'}
                    />
                    <Feature3
                        heading={'Challenge'}
                        text={'By speaking up we push the boundries of what is possible in any enviroment.'}
                    />
                    <Feature3
                        heading={'Solutions'}
                        text={'Finding the solution to problems gives value to the people and communities around us.'}
                    />
                </Grid>
            </Box>
        </>
    );
}

export default Lvlup;