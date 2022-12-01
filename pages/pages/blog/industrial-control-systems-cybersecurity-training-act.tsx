import { Heading, Flex, Text, Box, Spacer, Button, ListItem, UnorderedList, OrderedList } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { MdOutlineContacts } from 'react-icons/md'

const App = () => {
    return (
        <>
            <NextSeo
                title={"The Industrial Control Systems Cybersecurity Training Act: What You Need To Know"}
                description={"This article provides an overview of the Industrial Control Systems Cybersecurity Training Act and explains what it means for businesses and individuals responsible for managing and operating ICS."}
                canonical="https://ochoa.pro/pages/blog/industrial-control-systems-cybersecurity-training-act"
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} py={6} mx="auto">
                <Heading color={'gray.800'} size={'lg'}>
                    An Overview of The Industrial Control Systems Cybersecurity Training Act: What You Need To Know
                </Heading>
                <Flex
                    w={'full'}
                    h={80}
                    my={8}
                    backgroundImage={'https://images.pexels.com/photos/39584/censorship-limitations-freedom-of-expression-restricted-39584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=320&w=1300'}
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
                    Industrial Control Systems (ICS) are vital to the infrastructure of many industries, from power production to transportation to communication. With the increasing reliance on ICS for critical operations, cybersecurity is an essential element of their maintenance and protection. The Industrial Control Systems Cybersecurity Training Act is a crucial step in the effort to defend against cyber threats to these systems. This Act is designed to promote and facilitate the training of personnel responsible for managing and operating ICS. It is intended to provide the necessary guidance and resources to ensure the safety and security of ICS so that the industries they support can continue to run smoothly and securely. This article will provide an overview of the Industrial Control Systems Cybersecurity Training Act, what it does, and what you need to know about it.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Overview of the Industrial Control Systems Cybersecurity Training Act
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    This Congressional bill was introduced in the House of Representatives by Rep. Ted S. Yoho (R-FL) on December 14, 2017. It was referred to the Committee on Energy and Commerce, the Committee on Homeland Security, the Committee on Agriculture, the Committee on Transportation and Infrastructure, the Committee on Science, Space, and Technology, the Committee on Natural Resources, and the Committee on the Judiciary. It is currently in the process of being reviewed and amended. The Industrial Control Systems Cybersecurity Training Act is a crucial step in the effort to defend against cyber threats to ICS. It is designed to promote and facilitate the training of personnel responsible for managing and operating ICS. It is intended to provide the necessary guidance and resources to ensure the safety and security of ICS so that the industries they support can continue to run smoothly and securely.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    What the Act Does
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    This Act will require the Department of Homeland Security (DHS) to publish guidelines for cybersecurity training tailored to the needs of ICS operators and owners. It will also require them to provide best practices for ICS cybersecurity training programs and make resources available to help operators meet this standard. It will also require the DHS to develop a model curriculum for ICS cybersecurity training. This Act will also establish the ICS Cybersecurity Training Grant Program. It will aim to provide funding for training programs that help operators and owners meet the requirements of the Act. The Advanced Research Projects Agency–Energy (ARPA-E) will be tasked with administering the ICS Cybersecurity Training Grant Program.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Who is Eligible for the Act?
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    This Act will provide federal assistance to public and private organizations dedicated training to all ICS owners and operators.  This can include state, local, and tribal governments, as well as private entities like ICS vendors.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Benefits of the Act
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The Act will help improve the security of ICS by providing the operators and owners of these systems with the necessary training. It will also allow them to better recognize and respond to threats.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Requirements of the Act
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The Act will require the DHS to establish best practices for ICS cybersecurity training programs. It will also require them to develop model curricula for ICS cybersecurity training. The Act also requires the DHS to publish cybersecurity training guidelines tailored to the needs of ICS operators and owners.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Challenges Faced in Implementing the Act
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The challenges faced in implementing this Act primarily focus on the dissemination of information. Getting the word out about the Act, its guidelines, and its funding opportunities will be key. Furthermore, many operators and owners may not be aware that they need to improve their training. They may not currently be meeting the standard of excellence set out by the Act. These challenges can be overcome with time and effort.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Impact of the Act
                </Heading>
                <Text pb={12} color={'gray.700'}>
                    The Industrial Control Systems Cybersecurity Training Act will undoubtedly have a significant impact on the cybersecurity of ICS. It will provide an important framework for improving the training of those responsible for operating and maintaining ICS. It will help to improve their ability to recognize and respond to cyber threats. This will allow them to operate more securely and efficiently. It will also help to protect the industries that rely on ICS. These include transportation, energy, healthcare, and communications.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Conclusion
                </Heading>
                <Text color={'gray.700'}>
                    The Industrial Control Systems Cybersecurity Training Act is a crucial step in the effort to defend against cyber threats to ICS. It will provide the necessary guidance and resources to ensure the safety and security of ICS so that the industries that rely on them can continue to run smoothly and securely.
                </Text>
                <Box py={'3rem'} />
            </Box>
        </>
    );
}

export default App;