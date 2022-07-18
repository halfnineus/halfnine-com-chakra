import { Box, Heading, Image, SimpleGrid, useColorModeValue, Text, Stack } from "@chakra-ui/react"
import Head from "next/head"

import img1 from '../../public/perma/1.png'
import img2 from '../../public/perma/2.png'
import img3 from '../../public/perma/3.png'
import img4 from '../../public/perma/4.png'
import img5 from '../../public/perma/5.png'
import img6 from '../../public/perma/6.png'



const IndexPortfolio = () => {
    return (
        <>
            <Head>
                <title>Product Showcase - Ochoa - International Product Development, Design and Production</title>
                <meta name="description" content="" />
            </Head>
            <Box as="section" py={'6'} maxW={{ base: 'xl', md: '7xl' }} textAlign={'center'} mx={"auto"} px={{ base: '6', md: '8' }}>
                <Heading pointerEvents={'none'} textAlign={'center'} fontWeight="extrabold" maxW="xlg" mx="auto">
                    {`Made for and Used by Industry Leading Companies`}
                </Heading>
                <Text pointerEvents={'none'} pt={2} fontSize={'lg'} color={'gray.500'}>
                    Developed by us in Orlando and Manufactured by our partners in Hong Kong SAR.
                </Text>
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3 }}
                    mt="8"
                    spacing={'6'}
                    color={useColorModeValue('inherit', 'white')}
                >
                    <Box
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        boxShadow={'md'}
                        rounded={'md'}
                        p={'6'}
                        overflow={'hidden'}
                    >
                        <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image alt={'img'} pointerEvents={'none'} src={img1.src} />
                        </Box>
                        <Stack>
                            <Heading pointerEvents={'none'} color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                                Production Automation Board
                            </Heading>
                            {/* <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text> */}
                        </Stack>
                    </Box>
                    <Box
                        maxW={'450px'}
                        w={'full'}
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        boxShadow={'md'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image alt={'img'} pointerEvents={'none'} src={img2.src} />
                        </Box>
                        <Stack>
                            <Heading pointerEvents={'none'} color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                                Production Automation Board
                            </Heading>
                            {/* <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text> */}
                        </Stack>
                    </Box>
                    <Box
                        maxW={'450px'}
                        w={'full'}
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        boxShadow={'md'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image alt={'img'} pointerEvents={'none'} src={img3.src} />
                        </Box>
                        <Stack>
                            <Heading pointerEvents={'none'} color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                                Production Automation Board
                            </Heading>
                            {/* <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text> */}
                        </Stack>
                    </Box>
                    <Box
                        maxW={'450px'}
                        w={'full'}
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        boxShadow={'md'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image alt={'img'} pointerEvents={'none'} src={img4.src} />
                        </Box>
                        <Stack>
                            <Heading pointerEvents={'none'} color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                                Production Automation Board
                            </Heading>
                            {/* <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text> */}
                        </Stack>
                    </Box>
                    <Box
                        maxW={'450px'}
                        w={'full'}
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        boxShadow={'md'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image alt={'img'} pointerEvents={'none'} src={img5.src} />
                        </Box>
                        <Stack>
                            <Heading pointerEvents={'none'} color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                                Production Automation Board
                            </Heading>
                            {/* <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text> */}
                        </Stack>
                    </Box>
                    <Box
                        maxW={'450px'}
                        w={'full'}
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        boxShadow={'md'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image alt={'img'} pointerEvents={'none'} src={img6.src} />
                        </Box>
                        <Stack>
                            <Heading pointerEvents={'none'} color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                                Production Automation Board
                            </Heading>
                            {/* <Text color={'gray.500'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text> */}
                        </Stack>
                    </Box>
                </SimpleGrid>
                <Box padding={'4'} />
                <Heading pointerEvents={'none'} textAlign={'center'} fontWeight="bold" maxW="xlg" pt={''} pb={'4'} mx="auto">
                    {`Software, And more...`}
                </Heading>
            </Box>
        </>
    );
}

export default IndexPortfolio;