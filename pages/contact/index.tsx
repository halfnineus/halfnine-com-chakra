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
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';

import { BsPerson } from 'react-icons/bs';


const INDEX = () => {
    return (
        <>
            <Head>
                <title>contact - ochoa.pro</title>
            </Head>
            <Container maxW="full" mt={0} centerContent overflow="hidden">
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
                                        <Heading pointerEvents={'none'} color={useColorModeValue('black', 'white')} fontSize={'4xl'}>Contact</Heading>
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
                                    <Box bg={useColorModeValue('gray.100', 'gray.600')} borderRadius="lg">
                                        <Box m={8} color={useColorModeValue('black', 'white')}>
                                            <form action={'submit'}>
                                                <VStack spacing={5}>
                                                    <FormControl isRequired id="name">
                                                        <FormLabel>Your Name</FormLabel>
                                                        <InputGroup>
                                                            <InputLeftElement pointerEvents="none">
                                                                <BsPerson color="gray.800" />
                                                            </InputLeftElement>
                                                            <Input type={'name'} placeholder={'John Doe'} aria-label={'Name'} size="md" />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl isRequired id="mail">
                                                        <FormLabel>Email</FormLabel>
                                                        <InputGroup>
                                                            <InputLeftElement pointerEvents="none">
                                                                <MdOutlineEmail color="gray.800" />
                                                            </InputLeftElement>
                                                            <Input type={'email'} placeholder={'Email'} aria-label={'Email'} size="md" />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl isRequired id="message">
                                                        <FormLabel>Message</FormLabel>
                                                        <Textarea placeholder="Message" aria-label={'Message'} />
                                                    </FormControl>
                                                    <FormControl>
                                                        <Button
                                                            loadingText='Submitting'
                                                            variant={"solid"}
                                                            bg={'blue.500'}
                                                            color="white"
                                                            _hover={{}}
                                                            type={'submit'}

                                                            isDisabled

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