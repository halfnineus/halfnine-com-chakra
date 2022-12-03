import {
    Box,
    Heading,
    Text,
    Button,
    Divider,
    VStack,
    Grid,
    GridItem,
    Flex,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link"

const Sns = () => {
    return (
        <>
            <NextSeo
                title='Security and Safety Industries  - Automating all Things | Zedir'
                description='Create and implement solutions to automate safety chores and tasks and focus on products & services.'
                // description='Create and implement solutions to ease safety chores and tasks and focus on products & services.'
                canonical="https://www.zedir.com/industries/security-and-safety"
                // languageAlternates={[
                //     {
                //         hrefLang: 'es',
                //         href: 'https://www.zedir.com/es/industries/security-and-safety',
                //     }
                // ]}
            />
            <Box maxW={'container.xl'} px={{ base: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                {/* <Box as={Container} maxW="7xl> */}
                {/* <Heading>
                {`Security & Safety - Get ready to ensure things differently`}
            </Heading> */}
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={4}>
                    <GridItem colSpan={1}>
                        <VStack alignItems="flex-start" spacing="20px">
                            <Heading as={'h2'} fontSize="3xl" fontWeight="700">
                                Security & Safety
                            </Heading>
                            <Link href={'/contact'}>
                                <Button colorScheme="blue" size="md">
                                    Let&apos;s Talk!
                                </Button>
                            </Link>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <Text>
                            Automation is allowing us to secure and create safer environments in a fast-paced,
                            changing and constantly evolving workplace while allowing us to reduce the costs
                            of operation and to create new never-before-possible sources of revenue.
                        </Text>
                    </GridItem>
                </Grid>
                <Divider my={12} />
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    How Industrial IoT and Control Systems Development Can Help Improve Security Monitoring and Food Safety Industries
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    In today&#39;s digital world, businesses are faced with the constant challenge of innovating and staying ahead of their competition. The industrial internet of things &#40;IIoT&#41; and control system development services are two new technologies that can help businesses meet this challenge. These strategies have been shown to have numerous benefits for businesses in a variety of industries, including security monitoring and food safety. Read on to learn more about these strategies and how they could help your business grow.
                </Text>
                <Flex
                    w={'full'}
                    h={48}
                    mb={10}
                    backgroundImage={'/img/industries/security-and-safety.jpg'}
                />
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    What is Industrial IoT?
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    Industrial IoT &#40;IIoT&#41; is the combination of wearable technology, machine-to-machine communication, and sensors to increase operational efficiency. It can also be known as the industrial internet or operational technology &#40;OT&#41;. The industrial internet of things is a network that links various physical devices together, enabling them to share data and This is done using Internet of Things &#40;IoT&#41; technology. The Industrial Internet of Things &#40;IIoT&#41; refers to a network that links various physical devices together, enabling them to share data and operate autonomously.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    What is Control System Development?
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    Control System Development, also known as control system architecture, is the process of designing and implementing the control system for a plant or manufacturing system. It involves determining the type of control system to use, selecting the control system vendor, and programming the control system to meet the requirements for the system to be monitored and controlled. Control systems are used on equipment like motors, pumps, valves, and other machinery. The computers and sensors on those machines collect data and let engineers know when the machines need maintenance or when they need to be controlled. Control system architecture is a method of designing and developing control systems by designing the system architecture, creating a control design, and developing a control program. Control system architecture is used in several industries, including food and beverage, oil and gas, chemicals, and power and utilities.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    IIoT and Food Safety
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    The industrial internet of things is a technology that makes it possible for machines, sensors and wearables to communicate data with one another, regardless of their location. It is used to gain remote access to data and to control equipment, including pumps, valves and even robots. Industrial internet of things technology can help to improve food safety because it can be used to monitor crucial asset data, like temperature, pressure and flow. Even if an outage occurs and the sensors fail, a centralized data management platform can provide a history of sensor data, which will be crucial to determining what caused the outage.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    IIoT and Security Monitoring
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    The industrial internet of things can be used to improve security monitoring. It can be used to collect data from a wide range of devices and sensors, such as security cameras, access control systems, and fire and gas detection systems. This data can be analyzed in real time and compared to predetermined events to help security personnel respond quickly during an emergency. In addition, industrial internet of things devices could be used to manage the flow of people and goods in and out of a facility. This could help to prevent fraud and theft. In most cases, industrial internet of things devices are connected to a centralized data management system. This system can also manage other devices, such as video surveillance, fire alarms and alarms from access control systems. When an alarm is triggered, the data management system can automatically send an alert to security personnel.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Summing up
                </Heading>
                <Text color={'gray.700'}>
                    The industrial internet of things is a network that links various physical devices together, enabling them to share data and operate autonomously. Industrial internet of things technology can help to improve food safety because it can be used to monitor crucial asset data. In addition, industrial internet of things devices could be used to manage the flow of people and goods in and out of a facility. In today&#39;s digital world, businesses are faced with the constant challenge of innovating and staying ahead of their competition. The industrial internet of things and control system development services are two new technologies that can help businesses meet this challenge.
                </Text>
                <Divider my={12} />
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }}
                    gap={{ base: '8', sm: '12', md: '16' }}>
                    <Feature
                        heading={'Prevention'}
                        text={'IoT devices allow us to create a contact-less experience with our clients.'}
                    />
                    <Feature
                        heading={'Monitoring'}
                        text={'Artificial Intelligence improved the monitoring business by creating alerts based on behavior.'}
                    />
                    <Feature
                        heading={'Reliability'}
                        text={'Backup and disaster recovery helps critical services to always function in the times we need them the most.'}
                    />
                    <Feature
                        heading={'Inspecting'}
                        text={'Big Data allows us to predict and measure maintenance, making infrastructure more reliable.'}
                    />
                </Grid>
                {/* </Box> */}

                <Box py={'3rem'} />
            </Box>
        </>
    );
}

export default Sns;


interface FeatureProps {
    heading: string;
    text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
    return (
        <GridItem>
            <Heading pb={1} as={'h3'} fontSize="xl" fontWeight="600">
                {heading}
            </Heading>
            <Text>{text}</Text>
        </GridItem>
    );
};
