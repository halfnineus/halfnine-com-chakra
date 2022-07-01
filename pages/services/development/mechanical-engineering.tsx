import {
    Box,
    Button,
    Heading,
    Img,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import Head from 'next/head'

export default function ME() {
    return (
        <>
            <Head>
                <title>Mechanical Engineering - ochoa.pro  - International Product Development, Design and Production</title>
            </Head>
            <Box pt="16" pe={'4'}>
                <Box maxW={{ base: 'xl', md: '98%' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        spacing={{ base: '3rem', lg: '2rem' }}
                        mt="8"
                        align={{ lg: 'center' }}
                        justify="space-between"
                    >
                        <Box flex="1" maxW={{ lg: '520px' }}>
                            <Heading
                                as="h1"
                                size="3xl"
                                pointerEvents={'none'}
                                mt="8"
                                fontWeight="extrabold"
                                letterSpacing="tight"
                            >
                                Get world class talents for your project
                            </Heading>
                            <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
                                <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8">
                                    Contact Us
                                </Button>
                            </Stack>
                            <Box minH={'40'} />
                        </Box>
                        <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
                            <Img
                                w="full"
                                pos="relative"
                                zIndex="1"
                                h={{ lg: '100%' }}
                                objectFit="cover"
                                src={`https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/rZGJJWW/Mechanical-Engineering-Image.png`}
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
                    <Box padding={'4'} />
                </Box>
            </Box>
        </>
    )
}
