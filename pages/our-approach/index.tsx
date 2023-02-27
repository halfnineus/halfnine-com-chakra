import { Box, Text, Heading, SimpleGrid, Image, Divider, Center, Img, Stack, List, ListItem } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Values } from "../../components";
import indexdat from '../../assets/index.json'
import { useRouter } from "next/router";


const Index = () => {
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title='How we do Things - Automating all Things | Zedir'
                            description='Find our agile development strategies and ways to find solutions that focus on advancing innovation and driving powerful outcomes.'
                            canonical="https://www.zedir.com/our-approach"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/our-approach',
                                }
                            ]}
                        />
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" py={12}>
                            <Box
                                // borderWidth="1px"
                                borderRadius="lg"
                                // boxShadow="lg"
                                p={4}
                                bg={"gray.50"}
                            >
                                <Heading as="h1" mb={4}>
                                    Discover
                                </Heading>
                                <List spacing={3} mb={6}>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Market Research"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves gathering and analyzing information about the market and industry trends to identify potential opportunities and challenges for implementing a customized automation solution."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"User Needs Assessment"}{`: `}</Text>
                                        <Text display={'inline'}>{"This process involves gathering input from stakeholders to identify their needs and requirements for the automation solution."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Competitive Analysis"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves analyzing the competition to identify their strengths and weaknesses and determine how the customized automation solution can differentiate from others."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Technology Assessment"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves evaluating various technologies and tools that can be used to develop the customized automation solution."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Feasibility Study"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves assessing the feasibility of implementing the customized automation solution, including factors such as costs, timelines, and resource availability."}</Text>
                                    </ListItem>
                                </List>

                                <Heading as="h1" mb={4}>
                                    Define
                                </Heading>
                                <List spacing={3} mb={6}>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"System Architecture"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves designing the overall system structure and components that will be used to develop the automation solution."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Functional Requirements"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves identifying the specific features and functions that the automation solution should provide to meet the user needs."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Non-Functional Requirements"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves identifying the system requirements related to factors such as performance, security, reliability, and usability."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Performance Metrics"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves defining the key performance indicators that will be used to measure the effectiveness of the automation solution."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Technical Standards"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves establishing the technical standards and protocols that will be used to develop and integrate the automation solution."}</Text>
                                    </ListItem>
                                </List>

                                <Heading as="h1" mb={4}>
                                    Develop
                                </Heading>
                                <List spacing={3} mb={6}>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Hardware Design"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves designing the hardware components that will be used to implement the automation solution, such as sensors, controllers, and actuators."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Software Development"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves developing the software components that will be used to implement the automation solution, such as programming logic and user interfaces."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Testing & Validation"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves testing and validating the automation solution to ensure that it meets the defined requirements and performance metrics."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Integration & Interoperability"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves integrating the automation solution with existing systems and ensuring that it can communicate and work effectively with other systems."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Security & Compliance"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves implementing security measures and ensuring that the automation solution complies with relevant regulations and standards."}</Text>
                                    </ListItem>
                                </List>

                                <Heading as="h1" mb={4}>
                                    Deliver
                                </Heading>
                                <List spacing={3} mb={6}>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Deployment & Installation"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves deploying and installing the automation solution in the target environment."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Maintenance & Support"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves providing ongoing maintenance and support for the automation solution to ensure that it continues to operate effectively."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Training & Documentation"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves providing training and documentation to users and stakeholders to ensure that they can effectively use and maintain the automation solution."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Continuous Improvement"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves continuously monitoring and improving the automation solution to optimize its performance and effectiveness."}</Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text fontWeight="bold" display={'inline'}>{"Scalability & Future-proofing"}{`: `}</Text>
                                        <Text display={'inline'}>{"This involves designing the automation solution to be scalable and adaptable to changing needs and technologies in the future."}</Text>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default Index;