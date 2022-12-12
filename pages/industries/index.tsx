import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Icon,
    Text,
    useColorModeValue as mode,
    SimpleGrid,
    HStack,
    Heading,
    Img,
    Stack,
    Center,
    ListItem,
    UnorderedList,
    Button,
    Divider,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import indexdat from "../../assets/services/index.json"
import { useRouter } from "next/router";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
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
                            title=' Industrial IoT and Control Systems | How can my Industry benefit?'
                            description={`If you're not sure if you need Industrial IoT and Control Systems, we can help you figure that out. We create automated Industrial Internet of Things and Control Systems that comply or for compliance of any regulations.`}
                            canonical="https://www.zedir.com/industries"
                        // languageAlternates={[
                        //     {
                        //         hrefLang: 'es',
                        //         href: 'https://www.zedir.com/es/industries',
                        //     }
                        // ]}
                        />
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" my={8}>
                            <Contactimg label={'Proven Replicable And Scalable Solutions'} pexelsrc={'236709/pexels-photo-236709.jpeg'} />
                            <Heading color={'gray.800'} as={'h1'} size={'lg'} pt={6} pb={2}>Automating every process together</Heading>
                            <Text pb={12} color={'gray.700'}>
                                Industrial Automation Services from the Zedir Company guarantee excellence. Industrial Automation has the goals of connecting equipment together, developing technology, maximizing production, assuring safety, maximize the use of resources, and assuring quality. Our team of dedicated engineers has extensive experience in these industrial sectors and is ready to replicate proven methods and solutions.
                            </Text>
                            <Box>
                                <Heading size={'lg'}>Our Industry Expertise</Heading>
                                <Divider mt={2} mb={3} />
                                <SimpleGrid
                                    columns={{ base: 1 }}
                                    spacing={4}
                                    mx="auto"
                                >
                                    <Feature
                                        title="Manufacturing and Production"
                                        icon={<MdOutlinePrecisionManufacturing />}
                                        refx={'/industries/manufacturing-and-production'}
                                    >
                                        By using technology to automate repetitive tasks in the production process you are able to provide the highest level of quality without sacrificing efficiency, This meanins less time wasted in production and more time for quality control. Resulting on better products, faster production times, and lower costs. Industrial Automation can be used to optimize any process.
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title="Security and Safety"
                                        icon={<IoShieldCheckmarkOutline />}
                                        refx={'/industries/security-and-safety'}
                                    >
                                        Its advanced technology that helps streamline processes, reduce wasteful residue, recycle valuable resources, and improve safety. While enabling organizations to comply with regulations in their processes and systems. With easy-to-use tools and intuitive user interfaces, Industrial Automation helps manufacturers implement solutions that ease safety chores producers to focus in products and services.
                                    </Feature>
                                    {/* <Divider mt={6} mb={8} /> */}
                                </SimpleGrid>
                            </Box>
                            {/* <BottomFeature /> */}
                            <Box height={'3rem'} />
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default Index