import NextLink from "next/link"

import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Stack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue as mode,
    Link,
    useToast,
    useDisclosure,
    HStack,
} from '@chakra-ui/react';

import { MdEmail, MdLocationOn, MdOutlineEmail, MdPhone, } from 'react-icons/md';
import { BsPerson, BsBuilding } from 'react-icons/bs'

import diagimg from '../public/img/contact/bg.jpg'

import { useState } from "react"
import { NextSeo } from "next-seo";
import router from "next/router";


const INDEX = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');

    const [message, setMessage] = useState('');

    const [submitted, setSubmitted] = useState(false)

    const toast = useToast({
        position: 'bottom-right',
        containerStyle: { width: 'auto', maxWidth: '100%', paddingBottom: 'auto' },
    })

    const handleSubmit = (e: any) => {
        var regex = /^([a-z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*)@((?:[a-z0-9]+(?:[a-z-0-9-]*)\.)+[a-z]{2,})$/gi;

        if ((name === "") || (!regex.test(email)) /* || (message === "")*/) {
            toast.closeAll();
            toast({
                description: 'Something went wrong while submitting the form, Please try again later.',
                isClosable: true,
                status: 'error',
            })
        } else {
            e.preventDefault()
            let data = {
                name,
                email,
                message,
                phone,
                company,
            }
            setSubmitted(true)
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                } else {
                    toast.closeAll();
                    toast({
                        description: 'Something went wrong while submitting the form, Please try again later.',
                        isClosable: true,
                        status: 'error',
                    })
                }

                setSubmitted(false)
                toast.closeAll();
                toast({
                    description: 'Message sent! We will contact you shortly.',
                    isClosable: true,
                    status: 'success',
                    containerStyle: { width: 'auto', maxWidth: '100%', paddingBottom: 'auto' }
                })
            })
        }

    }
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <NextSeo
                title={`Contact Us - ochoa.pro - International Product Development, Design, and Production`}
                description={`Contact Us about Product Development, Design, and Production Related Inquiries.`}
            />

            <Flex
                w={'full'}
                h={48}
                backgroundImage={diagimg.src}
            >
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={{ base: 4, md: 8 }}
                    bgGradient={'linear(to-r, blackAlpha.700, blackAlpha.200)'}
                >
                    <Stack
                        maxW={'3xl'}
                        align={'flex-start'}
                    // spacing={6}
                    >
                        <Heading
                            color={'white'}
                            fontWeight={700}
                            // lineHeight={.6}
                            fontSize={{ base: '3xl', md: '4xl' }}
                        >
                            Interested? We want to hear from you!
                        </Heading>
                        <Text
                            color={'gray.100'}
                            // fontWeight={700}
                            // lineHeight={.6}
                            fontSize={{ base: 'xl', md: '2xl' }}
                        >
                            Take the first step and reach out to us today.
                        </Text>
                    </Stack>
                </VStack>
            </Flex>

            {/* <Container
                maxW="full"
                centerContent
                overflow="hidden"
                py='8'
            >
                <Flex>
                    <Box
                        bg={mode('gray.50', 'gray.700')}
                        color="white"
                        borderRadius='2xl'
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 10 }}
                        boxShadow={'lg'}
                    >
                        <Box p={5}>
                            <Wrap spacing={{ base: 3, sm: 3, md: 5, lg: 6 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading pt={5} pb={2} px={5} color={mode('black', 'white')} fontSize={'4xl'}>Get In Touch</Heading>
                                        <Text py={2} px={5} mt={'auto'} color="gray.500">
                                            Fill up the form below and<br />
                                            we will contact you shortly:
                                        </Text>
                                        <Box pr={5} pl={'1'} py={5}>
                                            <VStack pl={0} spacing={2} alignItems="flex-start"> */}
            {/* <NextLink href={'tel:+1-123-456-7890'} passHref>
                                                    <Link isExternal>
                                                        <Button
                                                            size="md"
                                                            height="auto"
                                                            width="auto"
                                                            minH={'10'}
                                                            variant="ghost"
                                                            color={mode('black', 'white')}
                                                            _hover={mode({ color: 'blue.500', bg: 'blackAlpha.100' }, { color: 'blue.200', bg: 'whiteAlpha.100' })}
                                                            leftIcon={<MdPhone color={mode('black', 'white')} size="20px" />}
                                                        >
                                                            +1 (123) 456-7890
                                                        </Button>
                                                    </Link>
                                                </NextLink> */}
            {/* <NextLink href={'mailto:rodolfo@ochoa.pro'} passHref>
                                                    <Link isExternal>
                                                        <Button
                                                            alignContent={'start'}
                                                            size="md"
                                                            height="auto"
                                                            width="auto"
                                                            minH={'10'}
                                                            variant="ghost"
                                                            color={mode('black', 'white')}
                                                            _hover={mode({ color: 'blue.500', bg: 'blackAlpha.100' }, { color: 'blue.200', bg: 'whiteAlpha.100' })}
                                                            leftIcon={<MdEmail color={mode('black', 'white')} size="20px" />}
                                                        >
                                                            rodolfo@ochoa.pro
                                                        </Button>
                                                    </Link>
                                                </NextLink> */}
            {/* <Button
                                                    onClick={onOpen}
                                                    size="md"
                                                    height="auto"
                                                    width="auto"
                                                    minH={'10'}
                                                    variant="ghost"
                                                    color={mode('black', 'white')}
                                                    _hover={mode({ color: 'blue.500', bg: 'blackAlpha.100' }, { color: 'blue.200', bg: 'whiteAlpha.100' })}
                                                    leftIcon={<MdEmail color={mode('black', 'white')} size="20px" />}
                                                >
                                                    Email: Dan Ochoa
                                                </Button>
                                                <NextLink href={'https://duckduckgo.com/?q=Orlando%2C+Florida&iaxm=maps'} passHref>
                                                    <Link isExternal>
                                                        <Button
                                                            size="md"
                                                            height="auto"
                                                            width="auto"
                                                            minH={'10'}
                                                            variant="ghost"
                                                            color={mode('black', 'white')}
                                                            _hover={mode({ color: 'blue.500', bg: 'blackAlpha.100' }, { color: 'blue.200', bg: 'whiteAlpha.100' })}
                                                            leftIcon={<MdLocationOn color={mode('black', 'white')} size="20px" />}
                                                        >
                                                            Orlando, Florida, USA
                                                        </Button>
                                                    </Link>
                                                </NextLink> */}
            {/* <NextLink href={'https://duckduckgo.com/?q=Hong+Kong+SAR+China&iaxm=maps'} passHref>
                                                    <Link isExternal>
                                                        <Button
                                                            size="md"
                                                            height="auto"
                                                            width="auto"
                                                            minH={'10'}
                                                            variant="ghost"
                                                            color={mode('black', 'white')}
                                                            _hover={mode({ color: 'blue.500', bg: 'blackAlpha.100' }, { color: 'blue.200', bg: 'whiteAlpha.100' })}
                                                            leftIcon={<MdLocationOn color={mode('black', 'white')} size="20px" />}
                                                        >
                                                            Hong Kong SAR, China
                                                        </Button>
                                                    </Link>
                                                </NextLink> */}
            {/* </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box width="100%" bg={mode('gray.100', 'gray.600')} borderRadius='2xl'>
                                        <Box w={{ base: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: '360px' }} m={8} color={mode('black', 'white')}>
                                            <form /* action={'submit'} */ /* onSubmit={handleSubmit}>
                                                <VStack spacing={5}>
                                                    <FormControl isRequired>
                                                        <FormLabel>Your Name</FormLabel>
                                                        <InputGroup>
                                                            <InputLeftElement pointerEvents="none">
                                                                <BsPerson color="gray.800" />
                                                            </InputLeftElement>
                                                            <Input
                                                                name="name"
                                                                onChange={(e: any) => setName(e.target.value)}
                                                                type={'text'}
                                                                placeholder={'John Doe'}
                                                                isRequired
                                                            />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl isRequired id="mail">
                                                        <FormLabel>Email</FormLabel>
                                                        <InputGroup>
                                                            <InputLeftElement pointerEvents="none">
                                                                <MdOutlineEmail color="gray.800" />
                                                            </InputLeftElement>
                                                            <Input
                                                                // defaultValue={email}
                                                                onChange={(e: any) => setEmail(e.target.value)}
                                                                placeholder={'Email'}
                                                                type={'email'}
                                                                isRequired
                                                            />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl isRequired id="message">
                                                        <FormLabel>Message</FormLabel>
                                                        <Textarea
                                                            // defaultValue={message}
                                                            onChange={(e: any) => setMessage(e.target.value)}
                                                            placeholder={
                                                                'Message'
                                                                // 'For long messages please use any E-Mail provided on the contact list.'
                                                            }
                                                            isRequired
                                                        />
                                                    </FormControl>
                                                    <FormControl>
                                                        <Button
                                                            bg={'blue.500'}
                                                            color='white'
                                                            type={'submit'}
                                                            isLoading={submitted}
                                                            loadingText={'Submitting'}
                                                            _hover={{}}
                                                            onClick={(e: any) => {
                                                                handleSubmit(e);
                                                                // if (inputEmail.isInvalid()) {
                                                                //     console.log("inputEmail is invalid")
                                                                //     //handleSubmit(e);
                                                                // }
                                                            }}
                                                        >
                                                            Send Message
                                                        </Button>
                                                    </FormControl>
                                                </VStack>
                                            </form>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container> */}
            <Container py={'6'} maxW={'container.lg'}>

                <form action={'submit'} onSubmit={handleSubmit}>
                    <VStack spacing={5}>
                        <HStack spacing={5} minW={'full'}>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <BsPerson color="gray.800" />
                                    </InputLeftElement>
                                    <Input
                                        name="name"
                                        onChange={(e: any) => setName(e.target.value)}
                                        type={'text'}
                                        placeholder={'John Doe'}
                                        isRequired
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired id="mail">
                                <FormLabel>Email</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <MdOutlineEmail color="gray.800" />
                                    </InputLeftElement>
                                    <Input
                                        defaultValue={email}
                                        onChange={(e: any) => setEmail(e.target.value)}
                                        placeholder={'Email'}
                                        type={'email'}
                                        isRequired
                                    />
                                </InputGroup>
                            </FormControl>
                        </HStack>
                        <HStack spacing={5} minW={'full'}>
                            <FormControl id="company">
                                <FormLabel>Company Name</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <BsBuilding color="gray.800" />
                                    </InputLeftElement>
                                    <Input
                                        name="company"
                                        onChange={(e: any) => setCompany(e.target.value)}
                                        type={'company'}
                                        placeholder={'Ochoa'}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="phone">
                                <FormLabel>Phone Number</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <MdPhone color="gray.800" />
                                    </InputLeftElement>
                                    <Input
                                        // defaultValue={email}
                                        name={"phone"}
                                        onChange={(e: any) => setPhone(e.target.value)}
                                        placeholder={'Phone Number'}
                                        type={'phone'}
                                    />
                                </InputGroup>
                            </FormControl>
                        </HStack>
                        <FormControl id="message">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                minH={32}
                                // defaultValue={message}
                                onChange={(e: any) => setMessage(e.target.value)}
                                placeholder={
                                    'Message'
                                    // 'For long messages please use any E-Mail provided on the contact list.'
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <Button
                                bg={'blue.500'}
                                color='white'
                                type={'submit'}
                                isLoading={submitted}
                                loadingText={'Submitting'}
                                _hover={{}}
                                onClick={(e: any) => {
                                    handleSubmit(e);
                                    // if (inputEmail.isInvalid()) {
                                    //     console.log("inputEmail is invalid")
                                    //     //handleSubmit(e);
                                    // }
                                }}
                            >
                                Send Message
                            </Button>
                        </FormControl>
                    </VStack>
                </form>

            </Container>

        </>
    );
}
export default INDEX;