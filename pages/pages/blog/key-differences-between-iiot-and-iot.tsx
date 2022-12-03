import { Heading, Flex, Text, Box, Spacer, Button, ListItem, UnorderedList, OrderedList } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { MdOutlineContacts } from 'react-icons/md'

// ??

const App = () => {
    return (
        <>
            <NextSeo
                title={"Exploring the Key Differences Between Internet of Things and Industrial Internet of Things"}
                description={"In this article, we'll explore the key differences between IoT and IIoT, and how these differences impact the way we use them."}
                canonical="https://www.zedir.com/pages/blog/key-differences-between-iiot-and-iot"
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} py={6} mx="auto">
                <Heading color={'gray.800'} size={'lg'}>
                    Exploring the Key Differences Between Internet of Things (IoT) and Industrial Internet of Things (IIoT)
                </Heading>
                <Flex
                    w={'full'}
                    h={80}
                    my={8}
                    backgroundImage={'https://images.pexels.com/photos/4107051/pexels-photo-4107051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=320&w=1300'}
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
                    The Internet of Things (IoT) and Industrial Internet of Things (IIoT) are two of the most popular buzzwords in the world of technology today. But what exactly is the difference between them? IoT and IIoT are both connected networks of physical devices, but they have some key differences in terms of the type of data they collect, the type of networks they utilize, and the purpose they serve. In this article, we’ll explore the key differences between IoT and IIoT, and how these differences impact the way we use them. We’ll also look at some of the advantages and disadvantages of both technologies, and discuss some of the potential applications for each. By the end, you’ll have a better understanding of the differences between IoT and IIoT, and how they can be used in different situations.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    What is the Internet of Things (IoT)?
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The Internet of Things (IoT) refers to a global network of devices that are connected through communication protocols. These devices can transmit data, send commands, and collect information to be analyzed and/or stored. There are many types of devices used in an IoT network, but they primarily consist of sensors and actuators. Sensors monitor changes in the surrounding environment, while actuators control and regulate the surrounding environment. Together, these devices create a global network that allows data to be collected, processed, and transmitted between devices at the same time. The IoT network is controlled by a centralized system known as the “hub”. The hub manages communication and data flow between devices, and performs any necessary analysis or data processing. The hub typically runs on a host computer or server, but can also be installed on a smaller device, such as a router, smartphone, or computer chip. The hub can be accessed by a variety of means, such as web browsers, mobile apps, or specialized software. A hub can also be integrated into other systems, like a computer network, industrial control systems, or a machine controller. The Internet of Things can be used in a variety of fields, but it is especially useful for collecting data for analysis.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    What is the Industrial Internet of Things (IIoT)?
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The Industrial Internet of Things (IIoT) refers to the Internet of Things network used within the industrial sector. This includes a broad range of industries, such as manufacturing, energy, transportation, healthcare, and others. Unlike the IoT network, which is designed for collecting data and performing analysis, the IIoT network is designed for control and regulation. This is because the IIoT network uses different communication protocols, hosts different types of devices, and is installed on a different type of network. The IIoT network primarily consists of sensors, controllers, and actuators that are installed on machines and equipment. Controllers and actuators are used to regulate and control the operation of these machines. Sensors monitor changes in the environment surrounding the machine, like temperature, pressure, and level of chemicals. Data collected from these sensors can be transmitted to other devices, other sensors, or a centralized host computer via a communication network. The Industrial Internet of Things can be used to perform a variety of tasks, such as controlling the operation of machinery, tracking the location of assets, monitoring the environment, or improving the use of energy. It can also be used to operate equipment remotely and drive more efficient operations. The Industrial Internet of Things can be used in a variety of industries and sectors, but it is especially useful for manufacturing and operations.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Key differences between IoT and IIoT
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    There are several key differences between the Internet of Things (IoT) and Industrial Internet of Things (IIoT). These include the type of data collected, type of network used, and purpose of the technology. The biggest difference between IoT and IIoT is the type of data they collect. IoT sensors collect data related to the environment, such as temperature, humidity, and air quality. IIoT sensors collect data related to the operation of machines, such as pressure, level of chemicals, or flow of materials. Both networks use sensors to collect data, but sensors used in the IIoT network tend to be more sophisticated. They may use technologies like image processing, pattern recognition, or artificial intelligence. This allows them to collect data more accurately, and in some cases, with more precision. These networks also use different communication networks. The IoT network uses wired and wireless networks, including Ethernet, Wi-Fi, Bluetooth, ZigBee, and others. IIoT networks, on the other hand, use wired communication networks, like Ethernet and fiber optic cables. Both networks host different types of devices and have different purposes. IoT devices are used for collecting data and performing analysis, while IIoT devices are used for controlling the operation of equipment.
                </Text>
                <OrderedList pb={12}>
                    <ListItem pb={2}>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Type of data:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            The first major difference between IoT and IIoT is in the type of data they collect. IoT sensors collect data related to the environment, like temperature, humidity, or air quality. Data collected by IoT sensors can help determine the best time to plant crops, predict weather patterns, regulate indoor climate, and monitor pollution. IIoT sensors collect data related to the operation of machines, like pressure, flow of materials, or level of chemicals. This data can be used to determine if a machine is operating at the proper level, detect a leak or malfunction, or shut down an operation if needed.
                        </Text>
                    </ListItem>
                    <ListItem pb={2}>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Type of network:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Another key difference between IoT and IIoT is the type of network used. IoT networks use wired and wireless networks, including Ethernet, Wi-Fi, Bluetooth, ZigBee, and others. The sensors and devices used in the IoT network are connected through a centralized hub. IIoT networks use wired communication networks, like Ethernet and fiber optic cables. The sensors and devices used in the IIoT network are connected to one another through a centralized controller.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Purpose:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            The last difference we’ll discuss is the purpose of each technology. IoT devices are used for collecting data and performing analysis, while IIoT devices are used for controlling the operation of equipment. IIoT devices can also perform some data analysis, but this is not their primary purpose.
                        </Text>
                    </ListItem>
                </OrderedList>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Advantages and disadvantages of IoT and IIoT
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    There are many advantages and disadvantages to using both the Internet of Things (IoT) and Industrial Internet of Things (IIoT). One of the biggest advantages of using the IoT network is that it can be used to collect data from a variety of sources. Sensors used in the IoT network can be installed in anything that changes with the environment, including machines, vehicles, livestock, fields, and even plants. This lets users collect data from a diverse array of sources. IoT networks can also collect data in areas that are difficult to access, like the ocean floor or deep inside a mountain. This makes it easier to collect data during research missions. One of the advantages of the Industrial Internet of Things is that it can be used to control the operation of machinery. When installed on machines, sensors can detect when something is wrong and either shut down the machine or send a signal to the operators. This can help prevent accidents and increase safety. There are also disadvantages to both technologies. One of the biggest disadvantages of the IoT network is that it can be vulnerable to cyber attacks. The network is designed to be accessible to a variety of devices and sensors, some of which may be unsecured. The IoT network can also be prone to network congestion, which can slow down data collection. These weaknesses can be reduced by using cybersecurity systems, keeping sensors secure, and designing the network to handle data efficiently.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Potential applications of IoT and IIoT
                </Heading>
                <Text color={'gray.700'}>
                    The Internet of Things (IoT) and Industrial Internet of Things (IIoT) can be used in a variety of ways, but they are especially useful for collecting data for analysis. The IoT network can be used to monitor crop growth and predict weather patterns, track the location of vehicles, determine the best time to harvest crops, and regulate indoor climate. The IIoT network can be used to monitor the operation of machinery, detect if a machine is broken, or shut down an operation if needed. Now that you know the differences between IoT and IIoT, you may be wondering how they can be used in your daily life. IIoT is used to create smart systems that automate entire factories, allowing for greater efficiency and accuracy. This technology has the potential to transform the way products are manufactured.
                </Text>
                <Box minH={'3rem'} />
            </Box>
        </>
    );
}

export default App;