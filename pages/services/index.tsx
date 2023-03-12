import {
    Box,
    Text,
    SimpleGrid,
    HStack,
    Heading,
    Divider,
    Button,
    GridItem,
    TabList,
    Tabs,
    Tab,
    Grid,
    Icon,
    Stack,
    TabPanel,
    TabPanels,
    Flex,
    chakra
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { IoBulbOutline, IoRocketOutline } from "react-icons/io5";

import indexdat from "../../assets/services/index.json"
import { Contactimg, Values } from "../../components";

import { BiCustomize } from "react-icons/bi";
import { BsVectorPen, BsTerminal, BsLifePreserver, BsSignpostSplit, BsPinAngle } from "react-icons/bs";
import { MdOutlineMore, MdOutlineTransform } from "react-icons/md";
import { SiLichess, SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiVercel, SiDotnet, SiNextdotjs, SiExpress, SiNuxtdotjs, SiRaspberrypi, SiArduino, SiPinboard } from "react-icons/si";
import { HiOutlineDocumentMagnifyingGlass, HiOutlineDocumentChartBar, HiOutlineBeaker, HiOutlineCheckBadge } from "react-icons/hi2";
import { FaUserTag } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";


const Feature = (props: any) => {
    const { locale } = useRouter();
    const filteredData = indexdat.data.filter((p) => p.locale === locale);
    return (
        <>
            {filteredData.map((indexData) => (
                <Box key={props.title}>
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
                            {indexData.lm}
                        </Button>
                    </Link>
                </Box>
            ))}
        </>
    );
};

const Feature2 = (props: any) => {
    return (
        <Flex>
            <Flex shrink={0}>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    h={12}
                    w={12}
                    rounded="xl"
                    color="white"
                    bg={"gray.100"}
                >
                    <Box color={"blue.600"} fontSize="1.5rem">
                        {props.icon}
                    </Box>
                </Flex>
            </Flex>
            <Box ml={4}>
                <Text
                    fontSize="lg"
                    fontWeight="bold"
                    lineHeight="6"
                >
                    {props.title}
                </Text>
                <Text mt={2} color="gray.500">
                    {props.children}
                </Text>
            </Box>
        </Flex>
    );
};

const Index = () => {
    const { locale } = useRouter();
    const filteredData = indexdat.data.filter((p) => p.locale === locale);
    return (
        <>
            {filteredData.map((indexData) => (
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
                    <Box textAlign={'justify'} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto">
                        <Contactimg label={indexData.img} pexelsrc={'/img/xtra/pexels-photo-8439083.jpg'} />
                        {/* <Heading color={'gray.800'} as={'h1'} size={'lg'} pt={6} pb={2}>{indexData.block1.heading}</Heading> */}
                        <Text pt={6} px={1} color={'gray.700'}>
                            {indexData.block1.text1}
                        </Text>
                        {/* <Text pb={12} color={'gray.700'}>
                                {indexData.block1.text2}
                            </Text> */}
                        <Box py={20}>
                            <SimpleGrid
                                columns={{ base: 1 }}
                                spacing={4}
                                mx="auto"
                            >
                                <Feature
                                    title={indexData.block2.item1}
                                    icon={<BsTerminal />}
                                    refx={'/services#development'}
                                >
                                    {indexData.block2.item1d}
                                </Feature>
                                <Divider pt={2} />
                                <Feature
                                    title={indexData.block2.item2}
                                    icon={<MdOutlineTransform />}
                                    refx={'/services#digitalization'}
                                >
                                    {indexData.block2.item2d}
                                </Feature>
                                <Divider pt={2} />
                                <Feature
                                    title={indexData.block2.item3}
                                    icon={<HiOutlineDocumentMagnifyingGlass />}
                                    refx={'/services#consultation'}
                                >
                                    {indexData.block2.item3d}
                                </Feature>
                            </SimpleGrid>
                        </Box>
                        <Box height={'3rem'} />
                    </Box>

                    <Box bg={"gray.50"}>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} py={20} mx="auto" id="development">
                            <Box pb={6} alignSelf="start">
                                <Heading
                                    mb={2}
                                    fontSize={{ base: "3xl", md: "4xl" }}
                                    fontWeight="extrabold"
                                    letterSpacing="tight"
                                >
                                    {indexData.block3.Heading}
                                </Heading>
                            </Box>
                            <SimpleGrid
                                alignItems="center"
                                columns={{ base: 1, lg: 2 }}
                                spacingY={{ base: 10, lg: 6 }}
                                spacingX={{ base: 10, lg: 12 }}
                            >
                                <GridItem colSpan={2}>
                                    <Stack
                                        spacing={{ base: 10, md: 0 }}
                                        display={{ md: "grid" }}
                                        gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                                        gridColumnGap={{ md: 8 }}
                                        gridRowGap={{ md: 10 }}
                                    >
                                        <Feature2 icon={<SiLichess />} title={indexData.block3.t1}>
                                            {indexData.block3.d1}
                                        </Feature2>
                                        <Feature2 icon={<BsVectorPen />} title={indexData.block3.t2}>
                                            {indexData.block3.d2}
                                        </Feature2>
                                        <Feature2 icon={<BsTerminal />} title={indexData.block3.t3}>
                                            {indexData.block3.d3}
                                        </Feature2>
                                        <Feature2 icon={<BsLifePreserver />} title={indexData.block3.t4}>
                                            {indexData.block3.d4}
                                        </Feature2>
                                    </Stack>
                                </GridItem>
                            </SimpleGrid>
                            <Box
                                textAlign="center"
                                border={'2px'}
                                borderColor={'gray.200'}
                                // boxShadow={'md'}
                                rounded={'xl'}
                                bg={'white'}
                                mt={12}
                                pt={4}
                            >
                                <Heading size="lg" mb="4">
                                    {indexData.block4.Heading}
                                </Heading>
                                <Text pb={8} maxW="3xl" mx="auto">
                                    {indexData.block4.Text}
                                </Text>
                                <Tabs px={4} py={2} isFitted size={'lg'} orientation={"horizontal"}>
                                    <TabList>
                                        <Tab>{indexData.block4.t1}</Tab>
                                        <Tab>{indexData.block4.t2}</Tab>
                                        <Tab>{indexData.block4.t3}</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Grid
                                                templateColumns={{
                                                    md: 'repeat(5, 1fr)',
                                                    sm: 'repeat(3, 2fr)',
                                                    base: 'repeat(2, 2fr)',
                                                }}
                                            >
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiAmazonaws} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Amazon Web Services</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiMicrosoftazure} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Microsoft Azure</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiGooglecloud} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Google Cloud</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiVercel} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Vercel Cloud</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={MdOutlineMore} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>And more…</Text>
                                                </Box>
                                            </Grid>
                                        </TabPanel>
                                        <TabPanel>
                                            <Grid
                                                templateColumns={{
                                                    md: 'repeat(5, 1fr)',
                                                    sm: 'repeat(3, 2fr)',
                                                    base: 'repeat(2, 2fr)',
                                                }}
                                            >
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiDotnet} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Microsoft .NET</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiNextdotjs} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Next.js</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiExpress} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Express.js</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiNuxtdotjs} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Nuxt.js</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={MdOutlineMore} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>And more...</Text>
                                                </Box>
                                            </Grid>
                                        </TabPanel>
                                        <TabPanel>
                                            <Grid
                                                templateColumns={{
                                                    md: 'repeat(4, 1fr)',
                                                    sm: 'repeat(2, 2fr)',
                                                    base: 'repeat(2, 2fr)',
                                                }}
                                            >
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiRaspberrypi} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Raspberry PI</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={SiArduino} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Arduino</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={BiCustomize} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>Custom Hardware</Text>
                                                </Box>
                                                <Box textAlign={'center'}>
                                                    <Icon as={MdOutlineMore} boxSize={24} />
                                                    <Text fontWeight={'semibold'}>And more...</Text>
                                                </Box>
                                            </Grid>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </Box>
                        </Box>
                    </Box >

                    <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} py={20} mx="auto" id={"digitalization"}>
                        <Box pb={6} alignSelf="start">
                            <Heading
                                mb={2}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                letterSpacing="tight"
                            >
                                {indexData.block5.Heading}
                            </Heading>
                        </Box>
                        <SimpleGrid
                            alignItems="center"
                            columns={{ base: 1, lg: 2 }}
                            spacingY={{ base: 10, lg: 6 }}
                            spacingX={{ base: 10, lg: 12 }}
                        >
                            <GridItem colSpan={2}>
                                <Stack
                                    spacing={{ base: 10, md: 0 }}
                                    display={{ md: "grid" }}
                                    gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                                    gridColumnGap={{ md: 8 }}
                                    gridRowGap={{ md: 10 }}
                                >
                                    <Feature2 icon={<FaUserTag />} title={indexData.block5.t1}>
                                        {indexData.block5.d1}
                                    </Feature2>
                                    <Feature2 icon={<GiSettingsKnobs />} title={indexData.block5.t2}>
                                        {indexData.block5.d2}
                                    </Feature2>
                                    <Feature2 icon={<BsSignpostSplit />} title={indexData.block5.t3}>
                                        {indexData.block5.d3}
                                    </Feature2>
                                    <Feature2 icon={<BsPinAngle />} title={indexData.block5.t4}>
                                        {indexData.block5.d4}
                                    </Feature2>
                                </Stack>
                            </GridItem>
                        </SimpleGrid>
                    </Box>

                    <Box bg={'gray.50'}>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} py={20} mx="auto" id="consultation">
                            <Box pb={6} alignSelf="start">
                                <Heading
                                    mb={2}
                                    fontSize={{ base: "3xl", md: "4xl" }}
                                    fontWeight="extrabold"
                                    letterSpacing="tight"
                                >
                                    {indexData.block6.Heading}
                                </Heading>
                            </Box>
                            <SimpleGrid
                                alignItems="center"
                                columns={{ base: 1, lg: 2 }}
                                spacingY={{ base: 10, lg: 6 }}
                                spacingX={{ base: 10, lg: 12 }}
                            >
                                <GridItem colSpan={2}>
                                    <Stack
                                        spacing={{ base: 10, md: 0 }}
                                        display={{ md: "grid" }}
                                        gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                                        gridColumnGap={{ md: 8 }}
                                        gridRowGap={{ md: 10 }}
                                    >
                                        <Feature2 icon={<HiOutlineDocumentMagnifyingGlass />} title={indexData.block6.t1}>
                                            {indexData.block6.d1}
                                        </Feature2>
                                        <Feature2 icon={<HiOutlineDocumentChartBar />} title={indexData.block6.t2}>
                                            {indexData.block6.d2}
                                        </Feature2>
                                        <Feature2 icon={<HiOutlineBeaker />} title={indexData.block6.t3}>
                                            {indexData.block6.d3}
                                        </Feature2>
                                        <Feature2 icon={<HiOutlineCheckBadge />} title={indexData.block6.t4}>
                                            {indexData.block6.d4}
                                        </Feature2>
                                    </Stack>
                                </GridItem>
                            </SimpleGrid>
                        </Box>
                    </Box>

                    <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} py={20} mx="auto">
                        <Values />
                    </Box>

                    <Box p={"rem"} />
                </>
            ))
            }
        </>
    );
}

export default Index;