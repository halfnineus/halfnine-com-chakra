import { Box, Text, List, ListItem, Image, SimpleGrid, Heading, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import Link from "next/link";
import { useRouter } from "next/router"
import indexdat from '../assets/our-approach/index.json'


const MyBox = (props: any) => {
    return (
        <Box background={'#fbfbfb'} borderRadius="xl" overflow="hidden">
            <Box pos="relative">
                <Image minH={'150px'} objectFit="cover" src={props.pexelimg} alt="image description" />
                <Box pos="absolute" bottom={0} w="100%" bg="blackAlpha.500">
                    <Text fontSize={'2xl'} color="white" fontWeight="bold" px={6} py={1}>
                        {props.mainTitle}
                    </Text>
                </Box>
            </Box>
            <Box p={6}>
                {props.children}
            </Box>
        </Box>
    );
};

const MyFeature = (props: any) => {
    return (
        <ListItem>
            <Text fontWeight="bold" display={'inline'}>{props.txt}{`: `}</Text>
            <Text display={'inline'}>{props.txtd}</Text>
        </ListItem>
    );
};

const Index = () => {
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title={indexData.head.title}
                            description={indexData.head.description}
                            canonical="https://www.halfnine.com/our-approach"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.halfnine.com/es/our-approach',
                                }
                            ]}
                            openGraph={{
                                url: `https://www.halfnine.com/our-approach`,
                                title: indexData.head.title,
                                description: indexData.head.description
                            }}
                        />
                        <Box py={4} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                            <Breadcrumb fontSize={'sm'} textColor="blackAlpha.700" letterSpacing={'tighter'}>
                                <BreadcrumbItem>
                                    <Link href="/">
                                        <Text _hover={{ color: 'blue.400' }}>{"Home"}</Text>
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Text pointerEvents={'none'}>{"Our Approach"}</Text>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                        <Box bg={'blue.600'} textColor={'white'}>
                            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                                <Heading py={2}>
                                </Heading>
                            </Box>
                        </Box>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto">
                            <Box pt={4} pb={12}>
                                <Heading as={"h1"} letterSpacing="tight" fontWeight="bold" pb={2}>{indexData.title.h1}</Heading>
                                <Text textAlign={'justify'}>{indexData.title.desc}</Text>
                            </Box>
                        </Box>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" mt={6} mb={20}>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <MyBox pexelimg={"/img/xtra/pexels-photo-4800260.jpg"} mainTitle={indexData.block1.heading}>
                                    <List spacing={3}>
                                        <MyFeature txt={indexData.block1.text1} txtd={indexData.block1.text1d} />
                                        <MyFeature txt={indexData.block1.text2} txtd={indexData.block1.text2d} />
                                        <MyFeature txt={indexData.block1.text3} txtd={indexData.block1.text3d} />
                                        <MyFeature txt={indexData.block1.text4} txtd={indexData.block1.text4d} />
                                        <MyFeature txt={indexData.block1.text5} txtd={indexData.block1.text5d} />
                                    </List>
                                </MyBox>
                                <MyBox pexelimg={"/img/xtra/pexels-photo-4174745.jpg"} mainTitle={indexData.block2.heading}>
                                    <List spacing={3}>
                                        <MyFeature txt={indexData.block2.text1} txtd={indexData.block2.text1d} />
                                        <MyFeature txt={indexData.block2.text2} txtd={indexData.block2.text2d} />
                                        <MyFeature txt={indexData.block2.text3} txtd={indexData.block2.text3d} />
                                        <MyFeature txt={indexData.block2.text4} txtd={indexData.block2.text4d} />
                                        <MyFeature txt={indexData.block2.text5} txtd={indexData.block2.text5d} />
                                    </List>
                                </MyBox>
                                <MyBox pexelimg={"/img/xtra/pexels-photo-3760529.jpg"} mainTitle={indexData.block3.heading}>
                                    <List spacing={3}>
                                        <MyFeature txt={indexData.block3.text1} txtd={indexData.block3.text1d} />
                                        <MyFeature txt={indexData.block3.text2} txtd={indexData.block3.text2d} />
                                        <MyFeature txt={indexData.block3.text3} txtd={indexData.block3.text3d} />
                                        <MyFeature txt={indexData.block3.text4} txtd={indexData.block3.text4d} />
                                        <MyFeature txt={indexData.block3.text5} txtd={indexData.block3.text5d} />
                                    </List>
                                </MyBox>
                                <MyBox pexelimg={"/img/xtra/pexels-kampus-production-7844012.jpg"} mainTitle={indexData.block4.heading}>
                                    <List spacing={3}>
                                        <MyFeature txt={indexData.block4.text1} txtd={indexData.block4.text1d} />
                                        <MyFeature txt={indexData.block4.text2} txtd={indexData.block4.text2d} />
                                        <MyFeature txt={indexData.block4.text3} txtd={indexData.block4.text3d} />
                                        <MyFeature txt={indexData.block4.text4} txtd={indexData.block4.text4d} />
                                        <MyFeature txt={indexData.block4.text5} txtd={indexData.block4.text5d} />
                                    </List>
                                </MyBox>
                            </SimpleGrid>
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default Index;