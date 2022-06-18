import { Box, Button, chakra, Flex, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link'

export default function Custom404() {
    return (
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
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    fontWeight="extrabold"
                    lineHeight="shorter"
                    color={useColorModeValue("brand.600", "brand.500")}
                    mb={6}
                >
                    <chakra.span
                        display="block"
                        color={useColorModeValue("brand.600", "brand.500")}
                    >
                        An error 404 occurred
                    </chakra.span>
                    <Link color={'blue.600'} href={'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404'}>What does this mean</Link>

                </chakra.h2>

                <Stack
                    direction={{ base: "column", sm: "row" }}
                    mb={{ base: 4, md: 8 }}
                    spacing={2}
                >
                    <Box display="inline-flex" rounded="md" shadow="md">
                        <NextLink href={'/auth/sign-up'} passHref>
                            <Link>
                                <Button
                                    display="inline-flex"
                                    px={5}
                                    py={3}
                                    border="solid transparent"
                                    fontWeight="bold"
                                    w="full"
                                    rounded="md"
                                    color={useColorModeValue("brand.600", "brand.500")}
                                    bg={useColorModeValue("#80808044", "#80808044")}
                                    _hover={{ bg: 'useColorModeValue("brand.700", "brand.600")' }}
                                >
                                    Contact
                                </Button>
                            </Link>
                        </NextLink>
                    </Box>
                </Stack>
            </Box>
            <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
            </Box>
        </Flex>
    )
}