import {
    Box,
    Text,
    SimpleGrid,
    HStack,
    Heading,
    Button,
    Divider,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { useRouter } from "next/router";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

import indexdat from "../../assets/industries/index.json"
import { Contactimg } from "../../components";

const Feature = (props: any) => {
    return (
        <Box>
            <HStack>
                <Box color={'blue.600'} fontSize="3rem">
                    {props.icon}
                </Box>
                <Heading pl={3} as={'h3'} fontSize="xl">
                    {props.title}
                </Heading>
            </HStack>
            <Text pt={2} color="gray.600">
                {props.children}
            </Text>
            <Link href={props.refx}>
                <Button mt={4} colorScheme={'blue'}>
                    Learn More
                </Button>
            </Link>
        </Box>
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
                            canonical="https://www.zedir.com/industries"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/industries',
                                }
                            ]}
                        />
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" my={8}>
                            <Contactimg label={indexData.img} pexelsrc={'236709/pexels-photo-236709.jpeg'} />
                            <Heading color={'gray.800'} as={'h1'} size={'lg'} pt={6} pb={2}>{indexData.block1.heading}</Heading>
                            <Text pb={12} color={'gray.700'}>
                                {indexData.block1.text1}
                            </Text>
                            <Box>
                                <Heading size={'lg'}>{indexData.block2.heading}</Heading>
                                <Divider mt={2} mb={3} />
                                <SimpleGrid
                                    columns={{ base: 1 }}
                                    spacing={4}
                                    mx="auto"
                                >
                                    <Feature
                                        title={indexData.block2.item1}
                                        icon={<MdOutlinePrecisionManufacturing />}
                                        refx={'/industries/manufacturing-and-production'}
                                    >
                                        {indexData.block2.item1d}
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title={indexData.block2.item2}
                                        icon={<IoShieldCheckmarkOutline />}
                                        refx={'/industries/security-and-safety'}
                                    >
                                        {indexData.block2.item2d}
                                    </Feature>
                                </SimpleGrid>
                            </Box>
                            <Box height={'3rem'} />
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default Index