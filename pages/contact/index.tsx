import Head from "next/head";
import NextLink from "next/link"

import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';

import {
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';

import { BsPerson } from 'react-icons/bs';
import { useState } from "react";

const INDEX = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [submitted, setSubmitted] = useState(false)
    const [submittedmsg, setSubmittedmsg] = useState(false)
    const [errormsg, setErrormsg] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        let data = {
            name,
            email,
            message
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
                setErrormsg(true)
            }
            setSubmittedmsg(true)
            setSubmitted(false)
        })
    }
    return (
        <>
            <Head>
                <title>Contact Us - ochoa.pro - International Product Development, Design and Production</title>
                <meta name="description" content="Contact Us about Product Development, Design and Production Related Inquiries." />
            </Head>
            <Container maxW="full" mt={0} centerContent overflow="hidden" py='8'>
                <Flex>
                    <Box
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        color="white"
                        borderRadius='2xl'
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}
                        boxShadow={'lg'}
                    >
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading pointerEvents={'none'} color={useColorModeValue('black', 'white')} fontSize={'4xl'}>Get In Touch</Heading>
                                        <Text pointerEvents={'none'} mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                            Fill up the form below to contact
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <VStack pl={0} spacing={3} alignItems="flex-start">
                                                {/* <NextLink href={'tel:+1-123-456-7890'} passHref>
                                                    <Link>
                                                        <Button
                                                            size="md"
                                                            height="48px"
                                                            width="200px"
                                                            variant="ghost"
                                                            color={useColorModeValue('black', 'white')}
                                                            _hover={{ border: '2px solid #1C6FEB' }}
                                                            leftIcon={<MdPhone color={useColorModeValue('black', 'white')} size="20px" />}
                                                        >
                                                            +1 (123) 456-7890
                                                        </Button>
                                                    </Link>
                                                </NextLink> */}
                                                <NextLink href={'mailto:rodolfo@ochoa.pro'} passHref>
                                                    <Link>
                                                        <Button
                                                            size="md"
                                                            height="48px"
                                                            width="200px"
                                                            variant="ghost"
                                                            color={useColorModeValue('black', 'white')}
                                                            _hover={{ border: '2px solid #1C6FEB' }}
                                                            leftIcon={<MdEmail color={useColorModeValue('black', 'white')} size="20px" />}
                                                        >
                                                            rodolfo@ochoa.pro
                                                        </Button>
                                                    </Link>
                                                </NextLink>
                                                <NextLink href={'mailto:dan@ochoa.pro'} passHref>
                                                    <Link>
                                                        <Button
                                                            size="md"
                                                            height="48px"
                                                            width="200px"
                                                            variant="ghost"
                                                            color={useColorModeValue('black', 'white')}
                                                            _hover={{ border: '2px solid #1C6FEB' }}
                                                            leftIcon={<MdEmail color={useColorModeValue('black', 'white')} size="20px" />}
                                                        >
                                                            dan@ochoa.pro
                                                        </Button>
                                                    </Link>
                                                </NextLink>
                                                <NextLink href={'https://duckduckgo.com/?q=Orlando%2C+Florida&iaxm=maps'} passHref>
                                                    <Link isExternal>
                                                        <Button
                                                            size="md"
                                                            height="48px"
                                                            width="200px"
                                                            variant="ghost"
                                                            color={useColorModeValue('black', 'white')}
                                                            _hover={{ border: '2px solid #1C6FEB' }}
                                                            leftIcon={<MdLocationOn color={useColorModeValue('black', 'white')} size="20px" />}
                                                        >
                                                            Orlando, Florida
                                                        </Button>
                                                    </Link>
                                                </NextLink>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box width="100%" bg={useColorModeValue('gray.100', 'gray.600')} borderRadius='2xl'>
                                        <Box w={{ sm: 'auto', md: 'auto', lg: '340px' }} m={8} color={useColorModeValue('black', 'white')}>
                                            <form /* action={'submit'} */ onSubmit={handleSubmit}>
                                                <VStack spacing={5}>
                                                    {submittedmsg === true && (
                                                        <FormControl isRequired >
                                                            <Text pointerEvents="none" colorScheme={'green'} >Message sent! We will contact you shortly.</Text>
                                                        </FormControl>
                                                    )}
                                                    {errormsg === true && (
                                                        <FormControl isRequired >
                                                            <Text pointerEvents="none" colorScheme={'red'} >Something went wrong while submitting the form, please try again later.</Text>
                                                        </FormControl>
                                                    )}
                                                    <FormControl isRequired >
                                                        <FormLabel>Your Name</FormLabel>
                                                        <InputGroup>
                                                            <InputLeftElement pointerEvents="none">
                                                                <BsPerson color="gray.800" />
                                                            </InputLeftElement>
                                                            <Input
                                                                value={name}
                                                                onChange={(e: any) => setName(e.target.value)}
                                                                type={'name'}
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
                                                                value={email}
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
                                                            value={message}
                                                            onChange={(e: any) => setMessage(e.target.value)}
                                                            placeholder="Message"
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
            </Container>
        </>
    );
}
export default INDEX;