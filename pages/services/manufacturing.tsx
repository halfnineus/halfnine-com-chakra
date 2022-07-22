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

import manudat from '../../assets/services/manufacturing.json'

export default function WithBackgroundImage() {
    const router = useRouter()
    const { locale } = useRouter()
    return (
        <>
            {manudat.data.filter(p => p.locale === locale).map((manuData, i) => {
                return (<>
                    <Head><title>{manuData.head.title}</title><meta name="description" content={manuData.head.description} /></Head>
                    <Flex
                        px={{ base: 4, lg: 24 }}
                        pb={{ base: 4, lg: 6 }}
                        pt={6}
                        w="full"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box rounded={'20'} bg={useColorModeValue('gray.50', 'gray.700')} shadow="lg" px={8} py={20} mx="auto">
                            <SimpleGrid alignItems="start" columns={{ base: 1, md: 2 }} spacingY={{ base: 10, md: 32 }} spacingX={{ base: 10, md: 24 }}>
                                <Box>
                                    <Heading mb={4} textAlign={{ base: "center", sm: "left" }} lineHeight={{ md: "shorter" }} pointerEvents={'none'}>
                                        {manuData.block1.header}
                                    </Heading>
                                    <Text
                                        mb={5}
                                        textAlign={{ base: "center", sm: "left" }}
                                        color={useColorModeValue('gray.600', 'gray.400')}
                                        fontSize={{ md: "lg" }}
                                        pointerEvents={'none'}
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
                                <Image shadow={'md'} rounded={20} alt={'img'} w={'full'} pointerEvents={'none'} src={img1.src} />
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
                                        {manuData.block2.header}
                                    </Heading>
                                    <Text
                                        mb={5}
                                        textAlign={{ base: "center", sm: "left" }}
                                        color={useColorModeValue('gray.600', 'gray.400')}
                                        fontSize={{ md: "lg" }}
                                        pointerEvents={'none'}
                                    >
                                        {manuData.block2.text}
                                    </Text>
                                    <Button
                                        colorScheme={'blue'}
                                        rounded={'lg'}
                                        onClick={() => router.push('/contact')}
                                    >
                                        {manuData.block1.button}
                                    </Button>
                                </Box>
                                <Image shadow={'md'} rounded={20} alt={'img'} w={'full'} pointerEvents={'none'} src={img2.src} />
                            </SimpleGrid>
                            <Divider my={12} />
                            <SimpleGrid alignItems="start" columns={{ base: 1, md: 2 }} spacingY={{ base: 10, md: 32 }} spacingX={{ base: 10, md: 24 }}>
                                <Box>
                                    <Heading mb={4} textAlign={{ base: "center", sm: "left" }} lineHeight={{ md: "shorter" }} pointerEvents={'none'}>
                                        {manuData.block3.header}
                                    </Heading>
                                    <Text
                                        mb={5}
                                        textAlign={{ base: "center", sm: "left" }}
                                        color={useColorModeValue('gray.600', 'gray.400')}
                                        fontSize={{ md: "lg" }}
                                        pointerEvents={'none'}
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
                                <Image shadow={'md'} rounded={20} alt={'img'} w={'full'} pointerEvents={'none'} src={img3.src} />
                            </SimpleGrid>
                        </Box>
                    </Flex >
                </>)
            })}
        </>
    );
}