import {
    chakra,
    Box,
    Flex,
    SimpleGrid,
    Stack,
    GridItem,
    Divider,
    Text,
    useColorModeValue as mode,
    Heading,
    Center,
    Image,
    Container,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { Values } from "../../components";
import { HiOutlineDocumentMagnifyingGlass, HiOutlineDocumentChartBar, HiOutlineBeaker, HiOutlineCheckBadge } from 'react-icons/hi2'

const Feature = (props: any) => {
    return (
        <Flex>
            <Flex shrink={0}>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    h={12}
                    w={12}
                    rounded="md"
                    color="white"
                    bg={"gray.100"}
                >
                    <Box color={"blue.600"} fontSize="1.5rem">
                        {props.icon}
                    </Box>
                </Flex>
            </Flex>
            <Box ml={4}>
                <chakra.dt
                    fontSize="lg"
                    fontWeight="bold"
                    lineHeight="6"
                    color={'gray.900'}
                >
                    {props.title}
                </chakra.dt>
                <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
                    {props.children}
                </chakra.dd>
            </Box>
        </Flex>
    );
};

const BuiltWith = (children: any) => {
    return (

        <Box
            _hover={{ transform: 'scale(1)', }}
            transform={{ base: 'scale(1)', sm: 'scale(0.97)', md: 'scale(0.97)' }}
            alignContent={'center'}
            h={'auto'}
            role={'group'}
            overflow={'hidden'}
            rounded={'md'}
        >
            <Center>
                <Image opacity={{ md: 0.90, base: 1 }} _groupHover={{ opacity: '1' }} userSelect={'none'} pointerEvents={'none'} alt={'img'} src={children.img} />
            </Center>
        </Box >
    )
}


const Development = () => {
    return (
        <>
            <NextSeo
                title='Realize Ideas with Technology Consulting - Automating all Things | Ochoa'
                description={`Find the leading practices in development, increase your organization's agility to achieve powerful outcomes.`}
                canonical="https://ochoa.pro/services/digitalization"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/services/digitalization',
                    }
                ]}
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} pt={4} mx="auto">
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, lg: 2 }}
                    spacingY={{ base: 10, lg: 6 }}
                    spacingX={{ base: 10, lg: 12 }}
                >
                    <Box alignSelf="start">
                        <chakra.h2
                            color={'blue.500'}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            Realize
                        </chakra.h2>
                        <chakra.h2
                            mb={3}
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="extrabold"
                            color={'black'}
                            lineHeight="shorter"
                            letterSpacing="tight"
                        >
                            Technology Consulting
                        </chakra.h2>
                        <chakra.p
                            mb={2}
                            fontSize={{ base: "lg", md: "xl" }}
                            color="gray.600"
                            _dark={{ color: "gray.500" }}
                        >
                            {`Find the leading practices in development, increase your organization's agility to achieve powerful outcomes.`}
                        </chakra.p>
                    </Box>
                    <GridItem colSpan={2}>
                        <Stack
                            spacing={{ base: 10, md: 0 }}
                            display={{ md: "grid" }}
                            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                            gridColumnGap={{ md: 8 }}
                            gridRowGap={{ md: 10 }}
                        >
                            <Feature icon={<HiOutlineDocumentMagnifyingGlass />} title="Feasibility Study">
                                {`Is your project viable? Find out through our TELOS report, (Technical, Economic, Legal, Operational, Scheduling)`}
                            </Feature>
                            <Feature icon={<HiOutlineDocumentChartBar />} title="Performance Assessment">
                                Evaluate your organization employees and leaders on their Performance, Knowledge, and Skills
                            </Feature>
                            <Feature icon={<HiOutlineBeaker />} title="Research and Development">
                                Research through industry experts the capabilities of your projects and take them to the next level.
                            </Feature>
                            <Feature icon={<HiOutlineCheckBadge />} title="Validation">
                                Improve how reliable is your production and services with data gathered through information technology.
                            </Feature>
                        </Stack>
                    </GridItem>
                </SimpleGrid>

                <Divider my={12} />

                <Heading color={'gray.800'} size={'lg'}>
                    {`Information Technology Consulting`}
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    {`This service helps you improve the performance, scalability, and competitiveness of your products and services through the right implementation and usage of technology.`}
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    The Benefits of Industrial IoT & Control Systems Consulting Services
                </Heading>
                <Flex
                    w={'full'}
                    h={48}
                    mb={4}
                    backgroundImage={'/img/services/index.jpg'}
                />
                <Text pb={6} color={'gray.700'}>
                    The industrial Internet of Things (IIoT) and Industrial Control Systems (ICS) are quickly becoming the backbone of manufacturing. With the adoption of wireless sensors, networks, and cloud services growing rapidly, manufacturers are streamlining production processes to drive efficiency and profitability. At the same time, cybersecurity risks continue to grow for organizations that operate highly sensitive systems like manufacturing plants. So how do you know what you need when it comes to IoT or control systems consulting services? This blog post will answer that question and more. Let&#39;s dive in...
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    What is IoT?
                </Heading>
                <Text pb={6} color={'gray.700'}>
                    The Internet of Things (IoT) is an interconnection of different devices including sensors, machines, devices, etc. that share data over the internet. Today&#39;s industrial Internet of Things (IIoT) technologies allow companies to monitor, collect, and analyze data from a range of sensors used in manufacturing, logistics, maintenance, and other operations. These sensors can be installed anywhere from the manufacturing floor to supply chain transportation vehicles. The data collected from these sensors can be relayed over a wired or wireless network and stored in a cloud-based platform. Data from these sensors is used for process optimization and predictive maintenance. IIoT and connected devices can be programmed to send alerts about potential issues such as an impending equipment failure or low inventory levels. This allows businesses to fix problems before they become serious, saving time and money.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    How does IIoT benefit operations?
                </Heading>
                <Text pb={6} color={'gray.700'}>
                    The industrial Internet of Things (IIoT) is revolutionizing how organizations operate. The adoption of IIoT technologies is making it easier for manufacturers to embed operational excellence across their organizations. Here are a few ways IIoT can drive operational excellence: The Industrial Internet of Things (IIoT) is driving operational excellence across industries by enhancing operational visibility and operational control. IIoT technologies enable organizations to collect and analyze data from sensors, machines, and devices. This data is then stored in a cloud-based platform where it can be accessed through a dashboard. This data can be used for process optimization, predictive maintenance, and improving supply chain collaboration.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    When you might need control systems consulting services
                </Heading>
                <Text pb={6} color={'gray.700'}>
                    Depending on your current state and the goal of your operation, industrial control systems and/or IIoT consulting services may be necessary. If you operate a manufacturing plant and are looking to improve operational excellence, you may want to consider industrial control systems consulting services. Industries like food and beverage, oil and gas, mining, and others that have a need for highly sensitive operations may require additional security measures. For example, if your company operates a manufacturing or processing plant, you might want to consider industrial control systems to monitor and control production processes. This technology can help you optimize and control your entire production line. Moreover, it can improve collaboration between different departments within your organization. For example, engineers can use industrial control systems to remotely monitor and control equipment, such as HVAC systems, chillers, boilers, and other production line equipment. This can help reduce maintenance costs and downtime while increasing employee efficiency.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    IIoT and SCADA cybersecurity risks
                </Heading>
                <Text pb={6} color={'gray.700'}>
                    The industrial Internet of Things (IIoT) and industrial control systems (ICS) are quickly becoming the backbone of manufacturing. With the adoption of wireless sensors, networks, and cloud services growing rapidly, manufacturers are streamlining production processes to drive efficiency and profitability. At the same time, cybersecurity risks continue to grow for organizations that operate highly sensitive systems like manufacturing plants. The potential for cyber attacks is particularly high when systems use supervisory control and data acquisition (SCADA) systems. The risk of a cyber attack is especially high if the system is not properly secured. The control systems used in SCADA systems were designed decades ago and are not designed to protect against modern cyber attacks. These systems are often not connected to the internet, which provides a bit of protection. However, the systems that have been wired to the internet have proved to be extremely vulnerable to cyber attacks.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Conclusion
                </Heading>
                <Text pb={6} color={'gray.700'}>
                    The industrial Internet of Things (IIoT) is revolutionizing how organizations operate. The adoption of IIoT technologies is making it easier for manufacturers to embed operational excellence across their organizations. Industrial control systems are one way manufacturers can improve operational excellence. However, the systems used in industrial control systems are not designed to protect against modern cyber attacks.
                </Text>
                <Divider my={12} />

                <Values />

                <Box p={"2rem"} />

            </Box>
        </>
    );
};

export default Development;