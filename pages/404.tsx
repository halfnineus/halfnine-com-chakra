import { Box, Button, chakra, Flex, Heading, HStack, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { HiChevronRight } from 'react-icons/hi';

export default function Custom404() {
    return (
        <>
            <NextSeo title={'404 Not Found'} description={'404 Not Found'} />
            <Flex direction={{ base: "column", md: "row" }} bg={mode("brand.500", "brand.500")} px={8} py={24} mx="auto">
                <Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" pr={{ md: 20 }}>
                    <Heading fontWeight="extrabold" mb={2} display="block">
                        {'Page not found'}
                    </Heading>
                    <Text pointerEvents={'none'} fontSize={'xl'}>
                        {'The link you clicked may be broken or the page may have been removed.'}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
                        <Button as="a" href={'/'} colorScheme="blue" px="8" size="lg" fontSize="md" rounded="full" fontWeight="bold">
                            {'Go Back'}
                        </Button>
                        <HStack as="a" href="/contact" fontWeight="bold" px="6">
                            <Text>{'Contact Us'}</Text>
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