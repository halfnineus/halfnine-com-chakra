import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Custom404() {
    return (
        <>
            <NextSeo title={'404 Not Found'} description={'404 Not Found'} />
            <Box textAlign="center" w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" pt={'1rem'} pb={'20rem'}>

                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, blue.400, blue.500)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Sorry about that
                </Text>
                <Text color={'gray.500'} mb={6}>
                    The page you&apos;re looking for does not seem to be available
                </Text>

                <Link href={'/'}>
                    <Button
                        colorScheme="blue"
                        variant="solid"
                    >
                        Go to Home
                    </Button>
                </Link>
            </Box>

        </>
    )
}