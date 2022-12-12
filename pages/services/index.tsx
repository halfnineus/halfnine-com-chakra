import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Icon,
    Stack,
    Text,
    useColorModeValue as mode,
    SimpleGrid,
    HStack,
    Heading,
    Img,
    Center,
    ListItem,
    UnorderedList,
    Divider,
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { IoBulbOutline, IoPeopleOutline, IoRocketOutline } from "react-icons/io5";

import indexdat from "../../assets/services/index.json"
import { BottomFeature, Contactimg } from "../../components";

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
                            title='Industrial Automation Services with Guaranteed Excellence | Zedir.'
                            description='Providing Guaranteed Excellence in Industrial Automation Services. With extensive experience in industrial automation, our team of dedicated engineers is ready to replicate proven methods and solutions for your business.'
                            canonical="https://www.zedir.com/services"
                        // languageAlternates={[
                        //     {
                        //         hrefLang: 'es',
                        //         href: 'https://www.zedir.com/es/services',
                        //     }
                        // ]}
                        />
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto" my={8}>
                            <Contactimg label={'Industrial Automation Services | Excellence Guaranteed'} pexelsrc={'9223158/pexels-photo-9223158.jpeg'} />
                            <Heading color={'gray.800'} as={'h1'} size={'lg'} pt={6} pb={2}>Automating all industries together</Heading>
                            <Text pb={2} color={'gray.700'}>
                                Industrial Automation Services from the Zedir Company guarantee excellence. Industrial Automation has the goals of connecting equipment together, developing technology, maximizing production, assuring safety, maximize the use of resources, and assuring quality. Our team of dedicated engineers has extensive experience in these industrial sectors and is ready to replicate proven methods and solutions.
                            </Text>
                            <Text pb={12} color={'gray.700'}>
                                We strive to ensure that our solutions are cost-effective and tailored to the needs of our clients. We understand that each project is unique, so we take the time to understand the specific requirements of each customer. Furthermore, We then develop a solution that is tailored to their needs and guaranteed to provide the highest level of quality and reliability. Our team is available to provide ongoing support and maintenance, so you can have peace of mind knowing that your automation solution will be fully functional and reliable for years to come.
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
                                        title="Firmware, Hardware, and Software Development"
                                        icon={<IoPeopleOutline />}
                                        refx={'/services/development'}
                                    >
                                        Zedir is being built by engineers. We understand the need for transparency, efficiency and more importantly, delivery. We have been focused on putting together a delivery management practice that enables you monitor progress and take decisions based on this information in a way that is fast, transparent, and efficient. We offer the agile industrial automation services to complement and improve your specific systems.
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title="Industrial Digital Transformation"
                                        icon={<IoRocketOutline />}
                                        refx={'/services/digitalization'}
                                    >
                                        Improve your current processes and systems with a wide range of technologies, from providing Cloud Computing to process with efficiency changing levels of demand to providing a comprehensive set of data and information. With the goal to help transform your organization ability to maximize efficiency, increase production, and develop new techniques with technology.
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title="Industrial Project Consultation"
                                        icon={<IoBulbOutline />}
                                        refx={'/services/consultation'}
                                    >
                                        With the very high importance of high-quality industrial automation projects. We offer solutions to help you keep peace of mind on the excellence and quality of your proejcts. From feasibility study, system design review, project management, installation and commissioning, or maintenance. Our experienced team is committed to helping you get the most out of your industrial automation project.
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

export default Index;