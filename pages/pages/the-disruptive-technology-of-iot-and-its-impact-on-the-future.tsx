import { Heading, Flex, Text, Box, Spacer, Button } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { MdOutlineContacts } from 'react-icons/md'

const App = () => {
    return (
        <>
            <NextSeo
                title={"The Disruptive Technology of IoT and Its Impact on the Future"}
                description={"Internet of Things (IoT) is a network of devices that can exchange data through the internet. It is an ecosystem where everyday objects such as home appliances, car, and industrial machines are connected with sensors"}
                canonical="https://ochoa.pro/pages/the-disruptive-technology-of-iot-and-its-impact-on-the-future"
            //   languageAlternates={[
            //     {
            //       hrefLang: 'es',
            //       href: 'https://ochoa.pro/es',
            //     }
            //   ]}
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} py={6} mx="auto">
                <Heading color={'gray.800'} size={'lg'}>
                    IoT: Why It Is Considered A Disruptive Technology and Its Impact on The Future
                </Heading>
                <Flex
                    w={'full'}
                    h={80}
                    my={8}
                    backgroundImage={'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=320&w=1300'}
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
                    Internet of Things (IoT) is a network of devices that can exchange data through internet. It is an ecosystem where everyday objects such as home appliances, car, and industrial machines are connected with sensors and software so that they can exchange data by the internet. IoT has wide-ranging applications in almost all industries. From healthcare to real estate, businesses of all sizes are finding ways to leverage IoT to improve their services or cut costs. The scope of IoT is vast and its impact on the future will be tremendous. In this blog post, we&#39;ll explain why IoT is considered a Disruptive Technology and its potential benefits and risks for businesses.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Why It Is Considered A Disruptive Technology?
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The definition of disruptive technology, as coined by Harvard Business School professor Clay Christensen, is “a process or product that people initially don&#39;t want but once they experience it, they can&#39;t live without.” IoT is such a technology because it had been overshadowed for years by its Wi-Fi connection. Even though there were devices like smartphones, tablets and smartwatches that could make use of this technology, IoT remained an unfulfilled promise. But now, with the advent of 5G Cellular technology, which will provide the bandwidth needed to support IoT devices, the technology is expected to go mainstream by 2020. Internet of Things will become even more mainstream when the cost of implementing it decreases substantially.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Benefits of IoT for Businesses
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    Businesses that adopt IoT will experience several benefits. Some of them are as follows: The first thing that IoT does is to improve operational efficiency. As every asset used by a company will be connected to the internet, operational efficiencies will go up as the data can be analyzed to make better business decisions. The second advantage is that IoT can help a business to reduce costs. This happens because IoT sensors allow a company to implement preventive maintenance, which will eliminate unplanned downtime and reduce the cost of maintenance. The third advantage that a company can get is increased customer satisfaction. IoT sensors can be programmed to send automatic alerts when an asset fails. The fourth advantage is that IoT can help a company to reduce risk. This happens because the sensors capture data that can be used to identify risks. The fifth advantage is that IoT will help a company to increase the top line. This happens because IoT devices can help create new services. The last advantage that a company can gain from IoT is a growth in market share. This happens because IoT can help to create a unique niche for a company.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Risks of IoT for Businesses
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    Although there are several advantages of IoT for businesses, there are also some risks associated with it. Some of them are as follows: The first risk of IoT is that customers may hesitate to share their data with companies for fear of privacy and security issues. If a business implements IoT in the wrong way, it can breach the trust of customers and be penalized for it. The second risk is that businesses may find it challenging to create a reliable network to support IoT devices. The third risk is that companies will find it difficult to process the data generated by IoT devices as they cannot be processed manually. The last risk is that implementing IoT will be expensive for businesses.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    How to Adopt IoT in Business?
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    To adopt IoT technology in a business, one must first understand what it is and how it can be beneficial to their business. Internet of Things is nothing but the interconnection of devices with the Internet via sensors and actuators. It is not just one device but a system of devices that can be controlled remotely through the internet. Today, IoT devices are being used in almost every industry. Building a connective IoT ecosystem for your business will take time and effort. It will require you to first identify the problem areas that your business needs to focus on. Once you have identified the problems, you can then choose the IoT solution that will help solve those problems.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Conclusion
                </Heading>
                <Text color={'gray.700'}>
                    Internet of Things has been around for a few years now, but it is poised to go mainstream in the near future, thanks to the advent of 5G cellular technology. IoT is considered a disruptive technology because it has the potential to change the way businesses operate.
                </Text>
                <Box minH={'3rem'} />
            </Box>
        </>
    );
}

export default App;