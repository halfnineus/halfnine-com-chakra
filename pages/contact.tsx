import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Stack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue as mode,
    useToast,
    useDisclosure,
    HStack,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

import { MdCall, MdEmail, MdLocationOn, MdOutlineEmail, MdPhone, } from 'react-icons/md';
import { BsPerson, BsBuilding } from 'react-icons/bs'

import router from 'next/router'
import { useState } from "react"
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FiExternalLink } from "react-icons/fi";

import indexdat from "../assets/contact.json"

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

    const { locale } = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((/* indexData, i*/) => {
                return (
                    <>
                        <NextSeo
                            title={"Contact Us - Automating all Things | Ochoa"}
                            description={`Contact Us about developing technology solutions, IT consulting & Digital transformation Related Inquiries.`}
                            canonical="https://ochoa.pro/contact"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://ochoa.pro/es/contact',
                                }
                            ]}
                        />
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay backdropFilter='blur(1px)' />
                            <ModalContent>
                                <ModalHeader>External Application</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text fontWeight={'semibold'} mb='1rem'>
                                        {/* <Lorem count={2} /> */}
                                        {`You are about to email Dan Ochoa: `}
                                        <Button colorScheme={'brand'} variant={'link'} userSelect={'text'} fontWeight={'semibold'} mb='1rem' display={'inline'} onClick={() => router.push("mailto:dan@ochoa.pro")}>
                                            {`dan@ochoa.pro`}
                                        </Button>
                                    </Text>
                                </ModalBody>
                                <ModalFooter>
                                    <Button variant={'ghost'} mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                    <Button onClick={/* onClose, */ () => router.push("mailto:dan@ochoa.pro")} colorScheme={'brand'} variant='outline' rightIcon={<FiExternalLink />}>Send Mail</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                        <Flex
                            w={'full'}
                            h={48}
                            backgroundImage={'/img/contact/bg.jpg'}
                        >
                            <VStack
                                w={'full'}
                                justify={'center'}
                                px={{ base: 4, md: 8 }}
                                bgGradient={'linear(to-r, blackAlpha.700, blackAlpha.400)'}
                                textAlign='center'
                            >
                                <Stack
                                    maxW={'3xl'}
                                // align={'flex-start'}
                                >
                                    <Heading
                                        color={'white'}
                                        fontWeight={700}
                                        fontSize={{ base: '3xl', md: '4xl' }}
                                    >
                                        Interested? We want to hear from you!
                                    </Heading>
                                    <Text
                                        color={'gray.100'}
                                        fontSize={{ base: 'xl', md: '2xl' }}
                                    >
                                        Take the first step and reach out to us today.
                                    </Text>
                                </Stack>
                            </VStack>
                        </Flex>
                        <Container pt={'5'} maxW={'container.lg'}>

                            <Heading pl={4} fontSize={{ base: '2xl', md: '3xl' }}>
                                Lets make something awesome together.
                            </Heading>
                            <Text pl={4} fontSize={{ base: 'md', md: 'lg' }}>
                                Develop technology solutions, IT consulting & Digital transformation services.
                            </Text>

                            <Divider mt={5} mb={5} />

                            <Box
                                bg={mode('gray.50', 'gray.700')}
                                // color="white"
                                borderRadius='xl'
                                // m={{ sm: 4, md: 16, lg: 10 }}
                                px={{ base: 5, sm: 5, md: 5, lg: 10 }}
                                pb={{ base: 5, sm: 5, md: 5, lg: 10 }}
                                pt={{ base: 4, sm: 4, md: 4, lg: 8 }}
                                boxShadow={'md'}
                            >
                                <Heading pb={2} fontSize={{ base: '2xl', md: '3xl' }}>
                                    Contact Us
                                </Heading>
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
                                                minH={36}
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
                                                colorScheme={"brand"}
                                                type={'submit'}
                                                isLoading={submitted}
                                                loadingText={'Submitting'}
                                                _hover={{}}
                                                onClick={(e: any) => { handleSubmit(e); }}
                                            >
                                                Send Message
                                            </Button>
                                        </FormControl>
                                    </VStack>
                                </form>
                            </Box>

                            <Flex pt={5} pb={2} align="center">
                                <Divider />
                                <Heading fontSize={{ base: 'xl', md: '2xl' }} px="4">Or</Heading>
                                <Divider />
                            </Flex>

                            <HStack>
                                <Button
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
                                    Email Us
                                </Button>
                                <Button
                                    isDisabled
                                    size="md"
                                    height="auto"
                                    width="auto"
                                    minH={'10'}
                                    variant="ghost"
                                    color={mode('black', 'white')}
                                    _hover={mode({ color: 'blue.500', bg: 'blackAlpha.100' }, { color: 'blue.200', bg: 'whiteAlpha.100' })}
                                    leftIcon={<MdCall />}
                                >
                                    Call Us
                                </Button>
                                <Button
                                    onClick={() => window.open('https://duckduckgo.com/?q=Orlando%2C+Florida&iaxm=maps')}
                                    isDisabled
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
                            </HStack>

                            <Divider mt={5} mb={5} />

                        </Container>
                    </>
                )
            })}
        </>
    );
}
export default INDEX;