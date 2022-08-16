import {
    Flex,
    Button,
    Text,
    Box,
    SimpleGrid,
    Heading,
    useColorModeValue as mode,
    Image,
    Divider,
} from '@chakra-ui/react';
import Head from 'next/head';

import img1 from '../../public/img/manufacturing/3.png'
import img2 from '../../public/img/manufacturing/1.png'
import img3 from '../../public/img/manufacturing/2.png'

import { useRouter } from 'next/router';

import manudat from '../../assets/services/manufacturing.json'
import { NextSeo } from 'next-seo';

export default function WithBackgroundImage() {
    const router = useRouter()
    const { locale } = useRouter()
    return (
        <>
            {manudat.data.filter(p => p.locale === locale).map((manuData, i) => {
                return (
                    <>
                        <NextSeo title={manuData.head.title} description={manuData.head.description} />
                        <Flex
                            px={{ base: 4, lg: 10}}
                            pb={{ base: 4, lg: 6 }}
                            pt={6}
                            w="full"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box rounded={'20'} bg={mode('gray.50', 'gray.700')} shadow="lg" px={8} py={10} mx="auto">
                                <SimpleGrid alignItems="start" columns={{ base: 1, md: 2 }} spacingY={{ base: 10, md: 32 }} spacingX={{ base: 10, md: 24 }}>
                                    <Box>
                                        <Heading mb={4} textAlign={{ base: "center", sm: "left" }} lineHeight={{ md: "shorter" }}>
                                            {manuData.block1.header}
                                        </Heading>
                                        <Text
                                            mb={5}
                                            textAlign={{ base: "center", sm: "left" }}
                                            color={mode('gray.600', 'gray.400')}
                                            fontSize={{ md: "lg" }}
                                        >
                                            {manuData.block1.text}
                                        </Text>
                                        <Button
                                            colorScheme={'blue'}
                                            rounded={'lg'}
                                            onClick={() => router.push('/contact')}
                                        >
                                            {manuData.block1.button}
                                        </Button>
                                    </Box>
                                    <Image pointerEvents={'none'} shadow={'md'} rounded={20} alt={'img'} w={'full'} src={img1.src} />
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
                                        <Heading mb={4} textAlign={{ base: "center", sm: "left" }} lineHeight={{ md: "shorter" }}>
                                            {manuData.block2.header}
                                        </Heading>
                                        <Text
                                            mb={5}
                                            textAlign={{ base: "center", sm: "left" }}
                                            color={mode('gray.600', 'gray.400')}
                                            fontSize={{ md: "lg" }}
                                        >
                                            {manuData.block2.text}
                                        </Text>
                                        <Button
                                            colorScheme={'blue'}
                                            rounded={'lg'}
                                            onClick={() => router.push('/contact')}
                                        >
                                            {manuData.block2.button}
                                        </Button>
                                    </Box>
                                    <Image pointerEvents={'none'} shadow={'md'} rounded={20} alt={'img'} w={'full'} src={img2.src} />
                                </SimpleGrid>
                                <Divider my={12} />
                                <SimpleGrid alignItems="start" columns={{ base: 1, md: 2 }} spacingY={{ base: 10, md: 32 }} spacingX={{ base: 10, md: 24 }}>
                                    <Box>
                                        <Heading mb={4} textAlign={{ base: "center", sm: "left" }} lineHeight={{ md: "shorter" }}>
                                            {manuData.block3.header}
                                        </Heading>
                                        <Text
                                            mb={5}
                                            textAlign={{ base: "center", sm: "left" }}
                                            color={mode('gray.600', 'gray.400')}
                                            fontSize={{ md: "lg" }}
                                        >
                                            {manuData.block3.text}
                                        </Text>
                                        <Button
                                            colorScheme={'blue'}
                                            rounded={'lg'}
                                            onClick={() => router.push('/contact')}
                                        >
                                            {manuData.block3.button}
                                        </Button>
                                    </Box>
                                    <Image pointerEvents={'none'} shadow={'md'} rounded={20} alt={'img'} w={'full'} src={img3.src} />
                                </SimpleGrid>
                            </Box>
                        </Flex>
                    </>)
            })}
        </>
    );
}