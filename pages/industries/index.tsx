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
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import indexdat from "../../assets/services/index.json"
import { useRouter } from "next/router";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

// #url https://incorporated.zone/type-of-industries/
// ??Energy and Logistics  

const Feature = (props: any) => {
    return (
        <Link href={props.refx}>
            <Box
                _hover={{ boxShadow: 'md' }}
                rounded={'xl'}
                boxShadow={'sm'}
                p={4}
                role={'group'}
                border='1px'
                borderColor={'gray.100'}
                transition={'all 0.1s ease-in-out'}
            >
                <HStack>
                    <Box
                        boxSize={12}
                        color={'blue.600'}
                        mb={4}
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                        fontSize="3rem"
                    >
                        {props.icon}
                    </Box>
                    <Center>
                        <Heading
                            pl={2}
                            as={'h3'}
                            mb={3}
                            fontSize="lg"
                            lineHeight="shorter"
                            fontWeight="bold"
                            _groupHover={{ color: 'blue.600' }}
                        >
                            {props.title}
                        </Heading>
                    </Center>
                    <Flex
                        transition={'all .3s ease'}
                        transform={{ base: 'translateX(0)', sm: 'translateX(-40px)' }}
                        opacity={{ base: '100%', sm: 0 }}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}>
                        <Icon color={'blue.600'} mb={2} w={12} h={12} as={ChevronRightIcon} />
                    </Flex>
                </HStack>
                <Text
                    as={'p'}
                    lineHeight="tall"
                    color="gray.600"
                >
                    {props.children}
                </Text>
            </Box >
        </Link>
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
                            canonical="https://ochoa.pro/industries"
                            // languageAlternates={[
                            //     {
                            //         hrefLang: 'es',
                            //         href: 'https://ochoa.pro/es/industries',
                            //     }
                            // ]}
                        />
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} pt={6} mx="auto">
                            <SimpleGrid
                                columns={{ base: 1 }}
                                spacing={4}
                                mx="auto"
                            >
                                <Feature
                                    title="Manufacturing & Production"
                                    icon={<MdOutlinePrecisionManufacturing />}
                                    refx={'/industries/manufacturing-and-production'}
                                >
                                    Increase productivity, quality, efficiency, and profit by automating repetitive tasks.
                                </Feature>
                                <Feature
                                    title="Security & Safety"
                                    icon={<IoShieldCheckmarkOutline />}
                                    refx={'/industries/security-and-safety'}
                                >
                                    Create and implement solutions to ease safety chores and tasks and focus on products & services.
                                </Feature>
                            </SimpleGrid>

                            <Box py={'2rem'} />

                            <Heading pb={2}>Revolutionizing every Process Together</Heading>
                            <Text pb={12} color={'gray.700'}>
                                We create automated Industrial Internet of Things systems and products that comply or for compliance of any regulations and serve the sectors of Manufacturing & Production, and Security & Safety.
                                {/* With our Experience Developing (Industrial Internet of Things), We create automated systems and products that comply or for compliance of any regulations and serve the sectors of Manufacturing & Production, and Security & Safety, */}
                                {/* With Experience Developing (Industrial Internet of Things), We are able to create automated systems and products that comply or for compliance of any regulations and
                                serve the sectors of Manufacturing & Production, and Security & Safety, */}
                            </Text>
                            <Heading fontWeight={'semibold'} color={'gray.800'} pb={2} size={'md'}>
                                Automated Industrial Internet of Things: Compliance, Regulations, and Solutions for Manufacturing & Production and Security & Safety Sectors
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                Manufacturing has come a long way, but with new challenges. Industrial IoT is poised to revolutionize the manufacturing industry once again by introducing automated industrial processes. Even though this is an area of rapid growth and development, many manufacturers are still struggling to implement effective IoT solutions. There are multiple challenges that manufacturers need to address in order to take full advantage of IoT: regulations, security, and costs. This article explains how you can leverage automation for increased visibility and efficiency in your industrial environment. We explore the benefits of an automated IoT solution for your production facility, as well as practical steps you can take right now to realize the benefits of an automated manufacturing environment sooner rather than later. Read on to learn more.
                            </Text>
                            <Flex
                                w={'full'}
                                h={48}
                                mb={12}
                                backgroundImage={'/img/industries/index.jpg'}
                            />
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                What is an Automated Industrial Internet of Things (AIoT) environment?
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                An AIoT environment is one where machines are able to interact with each other and make decisions autonomously, without the need for human intervention. It is an Industrial Internet of Things (IIoT) solution that enables the real-time exchange of data between sensors, control systems, and devices. This data is then analyzed to take informed decisions, such as triggering events or sending instructions to other devices based on predefined rules and conditions. This type of integration between devices allows you to create a closed-loop system that is highly efficient and adaptive.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                The benefits of an automated IoT solution
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                An automated Industrial Internet of Things (IIoT) solution delivers tangible benefits across the board, from compliance to productivity. Let&#39;s take a look at the main ones.
                            </Text>
                            <UnorderedList pb={12} spacing={2}>
                                <ListItem>
                                    <Text fontWeight={'semibold'} display={'inline-block'}>
                                        Visibility and Compliance:
                                    </Text>{" "}
                                    <Text pb={4} color={'gray.700'} display={'inline'}>
                                        Industrial IoT solutions enable you to see your entire operation in real-time and from a single dashboard. You will be able to gain a 360-degree view of your process and be able to identify where and why you have issues. This will allow you to be more proactive and improve your compliance. This type of solution is great for organizations that need to meet strict regulatory requirements, such as Food and Drug Administration (FDA) or Health and Safety Executive (HSE).
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight={'semibold'} display={'inline-block'}>
                                        Productivity and Operational Excellence:
                                    </Text>{" "}
                                    <Text pb={4} color={'gray.700'} display={'inline'}>
                                        A robust IIoT solution enables you to have greater visibility into your operations and enables you to reduce variability in your process. This will allow you to reduce waste and boost productivity in your operation, which will also help you to reduce costs. Moreover, you will be able to add more value to your products and provide a better service to your customers.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight={'semibold'} display={'inline-block'}>
                                        Security and Visibility
                                    </Text>{" "}
                                    <Text pb={4} color={'gray.700'} display={'inline'}>
                                        Industrial IoT solutions will allow you to monitor and manage devices remotely, providing you visibility into your devices and operations. It will also allow you to manage security, prevent unauthorized access, and ensure compliance. When integrated with an Industrial Data Platform (IDP), the solution can provide end-to-end protection and security, which will prevent tampering and data loss.
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                3 ways to bring automated manufacturing
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                If you want to bring automated manufacturing to your production line, you need to invest in the right technologies and processes. An Industrial Internet of Things (IIoT) solution will provide you with the tools needed to automate your production process and achieve the benefits listed above. Let&#39;s take a look at some ways you can bring automated manufacturing to your production line:
                            </Text>
                            <UnorderedList pb={12} spacing={2}>
                                <ListItem>
                                    <Text fontWeight={'semibold'} display={'inline-block'}>
                                        Connect Machines and Devices:
                                    </Text>{" "}
                                    <Text pb={4} color={'gray.700'} display={'inline'}>
                                        Connect sensors and devices to your Industrial Internet of Things (IIoT) solution to collect, store, and analyze data to trigger actions and events. Connect your machines and devices to your Industrial Internet of Things (IIoT) solution using an Industrial Data Platform (IDP) to exchange data. Connect devices that are not industrial devices, such as sensors and sensors for monitoring, controlling, and managing devices.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight={'semibold'} display={'inline-block'}>
                                        Automate Processes:
                                    </Text>{" "}
                                    <Text pb={4} color={'gray.700'} display={'inline'}>
                                        Automate processes such as quality control, production, supply chain, and other business functions.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight={'semibold'} display={'inline-block'}>
                                        Focus on the Bottom Line:
                                    </Text>{" "}
                                    <Text pb={4} color={'gray.700'} display={'inline'}>
                                        Use your Industrial Internet of Things (IIoT) solution to reduce cost, increase revenue, and improve customer experience.
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Implement an Industrial Data Platform
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                An Industrial Data Platform (IDP) is a central platform for collecting, storing, and analyzing data from multiple sources. It acts as a single source of truth by integrating different systems and devices, allowing you to collect data from all your industrial assets, sensors, and devices. A robust Industrial Data Platform (IDP) will allow you to automate your operations and provide you with insights on your production process. It will help you collect, store, and analyze real-time data, which will allow you to make better decisions and provide a better customer experience. It will also enable you to prioritize resources based on insights and provide a consistent experience to your customers. You can implement an Industrial Data Platform (IDP) by adopting a hardware-based approach or a software-based approach. A hardware-based approach offers the ultimate flexibility and security, but it is more expensive to implement. A software-based approach offers you more scalability, but it is less secure.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Utilize Machine Learning and AI for Real-Time Decision Making
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                Now that your Industrial Internet of Things (IIoT) solution is collecting, storing, and analyzing data, you can use machine learning and AI for real-time decision making. You can use the data to optimize and automate your production process. You can also use it to provide a better customer experience, by predicting and resolving issues before they become significant problems. You can analyze your production data and use machine learning and AI algorithms to create predictive models. This will allow you to identify trends and patterns in your production and use that information to predict future events with more accuracy.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Implement Smart Robots and Automation for Increased Productivity
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                Now that you&#39;ve implemented machine learning and AI algorithms for predictive modeling, you can implement smart robots for increased productivity. Smart robots will be able to make better decisions and take action based on the predictive models that you developed earlier. Manage your smart robots and Industrial Internet of Things (IIoT) solution via a centralized platform, such as an Industrial Data Platform (IDP).
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Conclusion
                            </Heading>
                            <Text color={'gray.700'}>
                                As you can see, the automated industrial Internet of Things (AIoT) solution provides many benefits for manufacturers. But it is important to note that this will not be an easy transition. It will require significant investment and a strategic approach to reap the benefits. This article explained how you can leverage automation for increased visibility and efficiency in your industrial environment. We explored the benefits of an automated manufacturing environment, as well as practical steps you can take right now to realize the benefits of an automated production environment sooner rather than later.
                            </Text>
                        </Box>
                        <Box py={'3rem'} />
                    </>
                )
            })}
        </>
    );
}

export default Index