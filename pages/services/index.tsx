import {
    Box,
    Text,
    SimpleGrid,
    HStack,
    Heading,
    Divider,
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { IoBulbOutline, IoPeopleOutline, IoRocketOutline } from "react-icons/io5";

import indexdat from "../../assets/services/index.json"
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
                            canonical="https://www.zedir.com/services"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/services',
                                }
                            ]}
                        />
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto" my={8}>
                            <Contactimg label={indexData.img} pexelsrc={'9223158/pexels-photo-9223158.jpeg'} />
                            <Heading color={'gray.800'} as={'h1'} size={'lg'} pt={6} pb={2}>{indexData.block1.heading}</Heading>
                            <Text pb={2} color={'gray.700'}>
                                {indexData.block1.text1}
                            </Text>
                            <Text pb={12} color={'gray.700'}>
                                {indexData.block1.text2}
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
                                        icon={<IoPeopleOutline />}
                                        refx={'/services/development'}
                                    >
                                        {indexData.block2.item1d}
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title={indexData.block2.item2}
                                        icon={<IoRocketOutline />}
                                        refx={'/services/digitalization'}
                                    >
                                        {indexData.block2.item2d}
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title={indexData.block2.item3}
                                        icon={<IoBulbOutline />}
                                        refx={'/services/consultation'}
                                    >
                                        {indexData.block2.item3d}
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

export default Index;