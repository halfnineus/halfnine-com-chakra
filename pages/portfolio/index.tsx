import { Box, Heading, Image, SimpleGrid, useColorModeValue as mode, Text, Flex, Button, Stack } from "@chakra-ui/react"
import router, { useRouter } from "next/router"

import img1 from '../../public/img/portfolio/1.png'
import img2 from '../../public/img/portfolio/2.png'
import img3 from '../../public/img/portfolio/3.png'
import img4 from '../../public/img/portfolio/4.png'
import img5 from '../../public/img/portfolio/5.png'
import img6 from '../../public/img/portfolio/6.png'

import portafoliodat from '../../assets/portfolio.json'
import { NextSeo } from "next-seo"
const IndexPortfolio = () => {
    const Feature = (props: any) => {
        return (
            <Box w={'full'} bg={mode('gray.50', 'gray.700')} boxShadow={'md'} rounded={'md'} p={6} overflow={'hidden'}>
                <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                    <Image userSelect={'none'} pointerEvents={'none'} alt={'img'} src={props.img} />
                </Box>
                {/* <Stack> */}
                <Heading color={mode('gray.700', 'white')} fontSize={'2xl'}>
                    {props.title}
                </Heading>
                {/* <Text color={'gray.500'}>
                    {props.children}
                </Text> */}
                {/* </Stack> */}
            </Box>
        );
    }

    const { locale } = useRouter()

    return (
        <>{portafoliodat.data.filter(p => p.locale === locale).map((protafolioData, i) => {
            return (
                <>
                    <NextSeo title={protafolioData.head.title} description={protafolioData.head.description} />
                    <Box pt={4} key={i} as="section" maxW={{ base: 'xl', md: '7xl' }} textAlign={'center'} mx={"auto"} px={{ base: '6', md: '8' }}>
                        <Heading textAlign={'center'} fontWeight="extrabold" maxW="xlg" mx="auto">
                            {protafolioData.block.h1}
                        </Heading>
                        <Text pt={2} fontSize={'lg'} color={'gray.500'}>{protafolioData.block.h2}</Text>
                        <SimpleGrid pt={6} columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={'6'}>
                            <Feature img={img1.src} title={protafolioData.components.itemTitle1} />
                            <Feature img={img2.src} title={protafolioData.components.itemTitle2} />
                            <Feature img={img3.src} title={protafolioData.components.itemTitle3} />
                            <Feature img={img4.src} title={protafolioData.components.itemTitle4} />
                            <Feature img={img5.src} title={protafolioData.components.itemTitle5} />
                            <Feature img={img6.src} title={protafolioData.components.itemTitle6} />
                        </SimpleGrid>
                        {/* <Heading textAlign={'center'} fontWeight="bold" maxW="xlg" pt={''} mx="auto">
                            {protafolioData.block.h3}
                        </Heading> */}
                    </Box>

                    <Box minH={'5rem'} />

                    <Flex px={{ base: '6', lg: '10' }} justify="center" w="full" textAlign={{ base: "left", md: "center" }} >
                        <Box>
                            <Text
                                fontSize={{ base: "3xl", sm: "4xl" }}
                                fontWeight="semibold"
                                letterSpacing="tight"
                                lineHeight="shorter"
                                display="block"
                            >
                                {`Ready to dive in?`}<br />{`Request a prototype today.`}
                            </Text>
                            <Stack justifyContent={{ base: "left", md: "center" }} direction={{ base: "column", sm: "row" }} spacing={2} mt={2}>
                                <Box display="inline-flex">
                                    <Button size={'lg'} w={'full'} fontWeight="bold" colorScheme={'blue'} onClick={() => router.push('/contact/')}>
                                        {`Get started`}
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Flex>

                    <Box minH={'5rem'} />
                </>

            )
        })}</>

    );
}

export default IndexPortfolio;