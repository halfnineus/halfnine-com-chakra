import { Box, Button, chakra, Flex, HStack, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link'
import { HiChevronRight } from 'react-icons/hi';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Page not Found</title>
            </Head>
            <Flex
                direction={{ base: "column", md: "row" }}
                bg={useColorModeValue("brand.500", "brand.500")}
                px={8}
                py={24}
                mx="auto"
            >
                <Box
                    w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                    mx="auto"
                    pr={{ md: 20 }}
                >
                    <chakra.h2
                        pointerEvents={'none'}
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        fontWeight="extrabold"
                        lineHeight="shorter"
                        color={useColorModeValue("brand.600", "brand.500")}
                        mb={6}
                    >
                        <chakra.span
                            as={'h1'}
                            display="block"
                            color={useColorModeValue("brand.600", "brand.500")}
                        >
                            Page not found
                        </chakra.span>
                        {/* <Link color={'blue.600'} href={'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404'}>Error 404 What does this mean</Link> */}
                    </chakra.h2>
                    <chakra.a pointerEvents={'none'} fontSize={{ base: "xl", sm: "2xl" }}>
                        {/* Don't stress—you we can help you find what you are looking for. */}
                        The link you clicked may be broken or the page may have been removed.
                    </chakra.a>
                    <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
                        <Button
                            as="a"
                            href={'/'}
                            colorScheme="blue"
                            px="8"
                            size="lg"
                            fontSize="md"
                            rounded="full"
                            fontWeight="bold"
                        >
                            Go Back
                        </Button>
                        <HStack
                            as="a"
                            transition="background 0.2s"
                            justify={{ base: 'center', md: 'flex-start' }}
                            href="/contact"
                            rounded="full"
                            fontWeight="bold"
                            px="6"
                            py="3"
                            _hover={{ bg: 'whiteAlpha.300' }}
                        >
                            <Text>
                                Contact Us
                            </Text>
                            <HiChevronRight />
                        </HStack>
                    </Stack>
                </Box>
                <Box w={{ base: "full", md: 8 / 12 }} mx="auto" textAlign="center">
                </Box>
            </Flex>
        </>
    )
}