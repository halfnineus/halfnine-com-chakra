import { Box, Center, Heading, Image, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

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
                            <Image width={'100%'} height={'100%'} src={'https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/wNp0pqR/1.png'} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image width={'100%'} height={'100%'} src={'https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/rbnsps6/2.png'} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image width={'100%'} height={'100%'} src={'https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/B2PyXRt/3.png'} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image width={'100%'} height={'100%'} src={'https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/D91tBgS/4.png'} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image width={'100%'} height={'100%'} src={'https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/WsYsjCV/5.png'} alt={'component'} />
                        </Center>
                        <Center py={'4'} px={'4'} bg={useColorModeValue('gray.100', 'gray.700')} rounded={{ md: 'lg' }}>
                            <Image width={'100%'} height={'100%'} src={'https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/pJ5tnQS/6.png'} alt={'component'} />
                        </Center>
                    </SimpleGrid>
                    <Box padding={'4'} />
                    <Text pointerEvents={'none'} align={'center'} fontSize={'2xl'} fontWeight={'bold'}>And More...</Text>
                </Box>
            </Box>
        </>
    );
}

export default IndexPortafolio;