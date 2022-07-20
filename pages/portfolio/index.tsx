import { Box, Heading, Image, SimpleGrid, useColorModeValue, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"

import img1 from '../../public/img/portfolio/1.png'
import img2 from '../../public/img/portfolio/2.png'
import img3 from '../../public/img/portfolio/3.png'
import img4 from '../../public/img/portfolio/4.png'
import img5 from '../../public/img/portfolio/5.png'
import img6 from '../../public/img/portfolio/6.png'

import portafoliodat from '../../assets/portfolio.json'
const IndexPortfolio = () => {
    const Feature = (props: any) => {
        return (
            <Box w={'full'} bg={useColorModeValue('gray.50', 'gray.700')} boxShadow={'md'} rounded={'md'} p={6} overflow={'hidden'}>
                <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                    <Image alt={'img'} pointerEvents={'none'} src={props.img} />
                </Box>
                {/* <Stack> */}
                <Heading pointerEvents={'none'} color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
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
                    <Head><title>{protafolioData.head.title}</title><meta name="description" content={protafolioData.head.description} /></Head>
                    <Box key={i} as="section" py={'6'} maxW={{ base: 'xl', md: '7xl' }} textAlign={'center'} mx={"auto"} px={{ base: '6', md: '8' }}>
                        <Heading pointerEvents={'none'} textAlign={'center'} fontWeight="extrabold" maxW="xlg" mx="auto">
                            {protafolioData.block.h1}
                        </Heading>
                        <Text pointerEvents={'none'} pt={2} fontSize={'lg'} color={'gray.500'}>
                            {protafolioData.block.h2}
                        </Text>
                        <SimpleGrid
                            pb={8}
                            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
                            mt="8"
                            spacing={'6'}
                            color={useColorModeValue('inherit', 'white')}
                        >
                            <Feature img={img1.src} title={protafolioData.components.itemTitle1} />
                            <Feature img={img2.src} title={protafolioData.components.itemTitle2} />
                            <Feature img={img3.src} title={protafolioData.components.itemTitle3} />
                            <Feature img={img4.src} title={protafolioData.components.itemTitle4} />
                            <Feature img={img5.src} title={protafolioData.components.itemTitle5} />
                            <Feature img={img6.src} title={protafolioData.components.itemTitle6} />
                        </SimpleGrid>
                        <Heading pointerEvents={'none'} textAlign={'center'} fontWeight="bold" maxW="xlg" pt={''} pb={'4'} mx="auto">
                            {protafolioData.block.h3}
                        </Heading>
                    </Box>
                </>
            )
        })}</>

    );
}

export default IndexPortfolio;