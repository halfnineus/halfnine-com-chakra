import { Heading, Flex, Text, Box, Spacer, Button, ListItem, UnorderedList, OrderedList } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { MdOutlineContacts } from 'react-icons/md'

// ??

const App = () => {
    return (
        <>
            <NextSeo
                title={"Industrial IoT: The Pillar of Smart Manufacturing and How It's Changing the Industry"}
                description={"Discover the four pillars of Industrial IoT and how it's changing the manufacturing industry for the better."}
                canonical="https://www.zedir.com/pages/blog/industrial-iot-the-pillar-of-smart-manufacturing"
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} py={6} mx="auto">
                <Heading color={'gray.800'} size={'lg'}>
                    Industrial IoT: The Pillar of Smart Manufacturing. An In-Depth Look and What It Means for the Industry
                </Heading>
                <Flex
                    w={'full'}
                    h={80}
                    my={8}
                    backgroundImage={'https://images.pexels.com/photos/9241758/pexels-photo-9241758.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=320&w=1300'}
                    border={'2px'}
                    rounded={'lg'}
                    // shadow={'md'}
                    overflow={'hidden'}
                    borderColor={'gray.600'}
                >
                    <Box placeSelf={'end'} alignItems={'center'} bg={'blackAlpha.600'} height={20} width={'full'} display={'inherit'} px={6}>
                        <Text fontWeight={'bold'} fontSize={'2xl'} color={'white'} opacity={'1'}>
                            Take your business to the Next Level with Us
                        </Text>
                        <Spacer />
                        <Link href={'/contact'}>
                            <Button rightIcon={<MdOutlineContacts size={20} />}>Talk with Us!</Button>
                        </Link>
                    </Box>
                </Flex>
                <Text pb={12} color={'gray.700'}>
                    The industrial sector is undergoing a profound transformation, with the emergence of the Internet of Things (IoT) providing unprecedented opportunities for smart manufacturing. IoT is a rapidly growing network of connected objects, embedded with electronics, sensors, and software that enable these objects to exchange data. Industrial IoT (IIoT) is the application of this technology to the industrial sector, and is playing a central role in the industry&#39;s shift to smart manufacturing. By providing real-time access to data and analytics, IIoT is enabling manufacturers to increase efficiency, reduce costs, and improve safety and quality. This technology is revolutionizing the way products are designed, manufactured, and maintained, and is quickly becoming the pillar of the future of industrial manufacturing.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Overview of the Internet of Things (IoT)
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The concept of IoT is based on the idea that all physical devices can be interlinked to form an Internet-like network. These physical devices include computers, machines, sensors, and other items that are capable of sending data over the network. The IoT network is made up of computers that collect data from connected devices and analyse it to provide business insights. The data can be used to optimize business operations, improve customer experience, and reduce operational costs. IoT networks can also be used to automate operations and enable self-controlled machines. The IoT network can be either centralized or decentralized. In a centralized network, all the connected devices are connected to a single computer, which is known as the gateway or data hub. In a decentralized network, each device is connected to a gateway in the same network and can communicate directly with other devices in the network and the outside world.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Industrial IoT (IIoT) and its impact on smart manufacturing
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The industrial sector generates more than $10 trillion in global revenue annually. Industries such as oil and gas, mining, aviation, automotive, healthcare, etc. can benefit from IIoT to improve efficiency, reduce costs, and enhance product quality. IIoT connects physical objects such as sensors, machines, and other industrial assets to enable them to send and receive data. The data is transmitted through wired or wireless networks, such as the Internet, cellular, or other networks. IIoT-enabled systems can monitor critical operations, manage assets, and analyse data to improve business outcomes. For example, an IIoT-enabled machine can send frequent updates on its performance to a central system, which can then analyse the data and suggest maintenance actions when the machine is due for service. Industrial IoT is expected to create $11 trillion in value by 2030. IIoT can have a significant impact on various areas of the industry, including design, procurement, operations, maintenance, and supply chain. By providing real-time visibility across the supply chain, IIoT can help manufacturers reduce the risk of delays, cancellations, and defects by identifying issues at the design stage itself. IIoT can also help manufacturers reduce operational costs and improve efficiency by enabling predictive maintenance, remote asset management, and automated scheduling.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Benefits of IIoT for the industrial sector
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    The benefits of Industrial IoT can include the following:
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    How IIoT is Transforming the Industrial Sector
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    These are some of the ways in which IIoT is transforming the industrial sector:
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Key technologies in IIoT
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The Industrial Internet of Things is enabled by a variety of technologies, including machine learning, artificial intelligence, and blockchain. Machine learning is a branch of artificial intelligence that uses mathematical models to analyse data and identify patterns and relationships. It is used in IIoT to analyse sensor data and identify abnormalities, predict failures, and detect potential improvements to operations. Machine learning has multiple applications in IIoT, such as inventory management, supply chain management, and demand forecasting. Artificial intelligence is another core technology of IIoT. It refers to computer systems that have the ability to learn and undertake tasks generally performed by humans. It is used in IIoT to identify patterns in large data sets, analyse unstructured data, and draw insights. IIoT is also increasingly being powered by blockchain, a decentralized and distributed ledger that helps to create tamper-proof logs. Blockchain can be used to create transparent and authentic supply chains and enable secure data transactions.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Challenges of IIoT implementation
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    The Industrial Internet of Things is still in its nascent stages, and its implementation requires companies to make significant investments and change their business models. Challenges of IIoT implementation include the following:
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Industry applications of IIoT in smart manufacturing
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    The Industrial Internet of Things is a network of connected devices that can improve operations across the supply chain, including sourcing, procurement, designing, and production. Sensors can be used to monitor the health of machines and identify potential issues before they result in downtime.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Use cases of IIoT in smart manufacturing
                </Heading>
                <Text color={'gray.700'}>
                    Industrial Internet of Things (IIoT) is leading the charge in revolutionizing the way business operate. IIoT can be used in a wide variety of sectors, including energy, oil and gas, mining, transportation, healthcare, aerospace, food and beverage, and water and waste water. In manufacturing, IIoT can be used to improve the efficiency and productivity of the process by connecting machines and enabling automation. This is especially useful for smart manufacturing, allowing for machines to be connected and monitored remotely, allowing for better monitoring and predictive maintenance. With IIoT, manufacturers can also track real-time data on the production process, allowing them to make quick, informed decisions to increase efficiency and productivity. This can also help reduce costs, as IIoT can be used to eliminate manual labor and improve the accuracy of the production process. IIoT can also be used to provide predictive analytics and enable operators to make better decisions in the production process. All of these use cases can help manufacturers better manage their production process and create a more efficient and productive environment.
                </Text>
                <Box py={'3rem'} />
            </Box>
        </>
    );
}

export default App;