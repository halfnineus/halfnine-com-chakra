import { Box, Button, Flex, Heading, HStack, Img, Stack, Text, useColorModeValue as mode, } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { HiChevronRight } from 'react-icons/hi'

import img from '../../../public/img-land/Mechanical-Engineering-Image.png'

interface Props {

}

const ME: NextPage<Props> = () => {
    return (
        <>
            <Head>
                <title>Mechanical Engineering - ochoa.pro</title>
            </Head>
            <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="24">
                <Box maxW={{ base: 'xl', md: '96%' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        spacing={{ base: '3rem', lg: '2rem' }}
                        mt="8"
                        align={{ lg: 'center' }}
                        justify="space-between"
                    >
                        <Box flex="1" maxW={{ lg: '520px' }}>
                            <Text
                                size="xs"
                                textTransform="uppercase"
                                fontWeight="semibold"
                                color={mode('blue.600', 'blue.300')}
                                letterSpacing="wide"
                            >
                                Hire Talents
                            </Text>
                            <Heading
                                as="h1"
                                size="3xl"
                                color={mode('blue.600', 'blue.300')}
                                mt="8"
                                fontWeight="extrabold"
                                letterSpacing="tight"
                            >
                                Get world class talents for your project
                            </Heading>
                            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
                                <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8">
                                    Contact Us
                                </Button>
                                {/* <Button
                                    size="lg"
                                    bg="white"
                                    color="gray.900"
                                    _hover={{ bg: 'gray.50' }}
                                    height="14"
                                    px="8"
                                    shadow="base"
                                    leftIcon={<Box as={HiPlay} fontSize="2xl" />}
                                >
                                    Watch Demo
                                </Button> */}
                            </Stack>
                            <Box minH={'40'} />
                            {/* <Text mt="8" color={mode('gray.600', 'gray.400')}>
                                Already have an account store?{' '}
                                <Link href="#" textDecoration="underline">
                                    Log in
                                </Link>
                            </Text> */}
                        </Box>
                        <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
                            <Img
                                w="full"
                                pos="relative"
                                zIndex="1"
                                h={{ lg: '100%' }}
                                objectFit="cover"
                                src={img.src}
                                alt="Screening talent"
                            />
                            <Box
                                pos="absolute"
                                w="100%"
                                h="100%"
                                top="-4"
                                left="-4"
                                bg={mode('gray.200', 'gray.700')}
                            />
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default ME
