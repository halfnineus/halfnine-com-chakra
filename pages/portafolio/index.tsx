import { Box, Link, Center, Heading, Image, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

import img1 from '../../public/perma/1.png'
import img2 from '../../public/perma/2.png'
import img3 from '../../public/perma/3.png'
import img4 from '../../public/perma/4.png'
import img5 from '../../public/perma/5.png'
import img6 from '../../public/perma/6.png'



const IndexPortafolio = () => {
    return (
        <>
            <Head>
                <title>Product Showcase - Ochoa - International Product Development, Design and Production</title>
                <meta name="description" content="" />
            </Head>
            <Box as="section" py={'16'}>
                <Box maxW={{ base: 'xl', md: '7xl' }} textAlign={'center'} mx={"auto"} px={{ base: '6', md: '8' }}>
                    <Heading pointerEvents={'none'} textAlign={'center'} fontWeight="extrabold" maxW="md" mx="auto">
                        {`Made For Industry's Leading Companies`}
                    </Heading>
                    <SimpleGrid
                        columns={{ base: 1, sm: 2, md: 3 }}
                        mt="8"
                        spacing={'6'}
                        color={useColorModeValue('inherit', 'white')}
                    >
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image pointerEvents={"none"} width={'100%'} height={'100%'} src={img1.src} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image pointerEvents={"none"} width={'100%'} height={'100%'} src={img2.src} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image pointerEvents={"none"} width={'100%'} height={'100%'} src={img3.src} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image pointerEvents={"none"} width={'100%'} height={'100%'} src={img4.src} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image pointerEvents={"none"} width={'100%'} height={'100%'} src={img5.src} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image pointerEvents={"none"} width={'100%'} height={'100%'} src={img6.src} alt={'component'} />
                        </Center>
                    </SimpleGrid>
                    <Box padding={'4'} />
                    <NextLink href={"/contact"} passHref>
                        <Link>
                            <Text align={'center'} fontSize={'2xl'} fontWeight={'bold'}>And More...</Text>
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </>
    );
}

export default IndexPortafolio;