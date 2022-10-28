import { Box, Button, Flex, Heading, HStack, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { HiChevronRight } from 'react-icons/hi';

export default function Custom404() {
    return (
        <>
            <NextSeo title={'404 Not Found'} description={'404 Not Found'} />
            <Flex direction={{ base: "column", md: "row" }} bg={mode("white", "gray.800")} p={8} mx="auto">
                <Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" pr={{ md: 20 }}>
                    <Heading fontWeight="bold" mb={2} display="block">
                        {'404: Page not found'}
                    </Heading>
                    <Text pointerEvents={'none'} fontSize={'xl'}>
                        {'The link you clicked may be broken or the page may have been removed.'}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
                        <Button as="a" href={'/'} colorScheme={'brand'} px="8" size="lg" fontSize="md" rounded="8" fontWeight="bold">
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