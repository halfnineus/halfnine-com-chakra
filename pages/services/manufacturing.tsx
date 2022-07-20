import {
    Flex,
    Button,
    Text,
    Box,
    SimpleGrid,
    Heading,
    useColorModeValue,
    Image,
    Divider,
} from '@chakra-ui/react';
import Head from 'next/head';

import img1 from '../../public/img/manufacturing/1.png'
import img2 from '../../public/img/manufacturing/2.png'
import img3 from '../../public/img/manufacturing/3.png'

import { useRouter } from 'next/router';


export default function WithBackgroundImage() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Manufacturing - Ochoa - International Product Development, Design and Production</title>
                <meta name="description" content="" />
            </Head>
            <Flex
                px={{ base: 4, lg: 24 }}
                pb={{ base: 4, lg: 24 }}
                pt={6}
                w="full"
                justifyContent="center"
                alignItems="center"
            >
                <Box rounded={'20'} bg={useColorModeValue('gray.50', 'gray.700')} shadow="xl" px={8} py={20} mx="auto">
                    <SimpleGrid alignItems="start" columns={{ base: 1, md: 2 }} spacingY={{ base: 10, md: 32 }} spacingX={{ base: 10, md: 24 }}>
                        <Box>
                            <Heading mb={4} textAlign={{ base: "center", sm: "left" }} lineHeight={{ md: "shorter" }} pointerEvents={'none'}>
                                Manufacturing provided by our partners in Hong Kong SAR.
                            </Heading>
                            <Text
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={useColorModeValue('gray.600', 'gray.400')}
                                fontSize={{ md: "lg" }}
                                pointerEvents={'none'}
                            >
                                Being able to manufacture at a lower cost is essential but being able to establish trust with a foreign business presents many challenges like language barriers. But not to worry! We already have done this step for you.
                            </Text>
                            <Button
                                bg={'blue.400'}
                                rounded={'lg'}
                                color={'white'}
                                _hover={{ bg: 'blue.500' }}
                                onClick={() => router.push('/contact')}
                            >
                                More Information
                            </Button>
                        </Box>
                        <Box w="auto" h="auto" bg={useColorModeValue("gray.200", "gray.600")}>
                            <Image alt={'img'} pointerEvents={'none'} src={img1.src} />
                        </Box>
                    </SimpleGrid>
                    <Divider my={12} />
                    <SimpleGrid
                        alignItems="start"
                        columns={{ base: 1, md: 2 }}
                        flexDirection="column-reverse"
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box order={{ base: "initial", md: 2 }}>
                            <Heading mb={4} textAlign={{ base: "center", sm: "left" }} lineHeight={{ md: "shorter" }} pointerEvents={'none'}>
                                Lorem ipsum dolor sit amet
                            </Heading>
                            <Text
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={useColorModeValue('gray.600', 'gray.400')}
                                fontSize={{ md: "lg" }}
                                pointerEvents={'none'}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </Text>
                        </Box>
                        <Box w="auto" h="auto" bg={useColorModeValue("gray.200", "gray.600")}>
                            <Image alt={'img'} pointerEvents={'none'} src={img2.src} />
                        </Box>
                    </SimpleGrid>
                    <Divider my={12} />
                    <SimpleGrid alignItems="start" columns={{ base: 1, md: 2 }} spacingY={{ base: 10, md: 32 }} spacingX={{ base: 10, md: 24 }}>
                        <Box>
                            <Heading mb={4} textAlign={{ base: "center", sm: "left" }} lineHeight={{ md: "shorter" }} pointerEvents={'none'}>
                                Lorem ipsum dolor sit amet
                            </Heading>
                            <Text
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color={useColorModeValue('gray.600', 'gray.400')}
                                fontSize={{ md: "lg" }}
                                pointerEvents={'none'}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </Text>
                        </Box>
                        <Box w="auto" h="auto" bg={useColorModeValue("gray.200", "gray.600")}>
                            <Image alt={'img'} pointerEvents={'none'} src={img3.src} />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex >
        </>
    );
}