import router, { useRouter } from 'next/router'
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
    InputLeftAddon,
    Divider,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { EmailIcon, InfoIcon, LockIcon } from '@chakra-ui/icons';
import Link from 'next/link';


const INDEX = () => {
    return (
        <>
            <title>contact - ochoa.pro</title>
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
                                        <Heading color={useColorModeValue('black', 'white')} fontSize={'4xl'}>Contact</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                            Fill up the form below to contact
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <VStack pl={0} spacing={3} alignItems="flex-start">
                                                <Button
                                                    onClick={() => router.push('tel:+1-123-456-7890')}
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
                                                <Button
                                                    onClick={() => router.push('mailto:dan@ochoa.pro')}
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
                                                <Button
                                                    // onClick={() => router.push('map')}
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
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg={useColorModeValue('gray.100', 'gray.600')} borderRadius="lg">
                                        <Box m={8} color={useColorModeValue('black', 'white')}>
                                            <form action={'submit'}>

                                                <VStack spacing={5}>

                                                    {/* <FormControl isRequired>
                                                        <InputGroup>
                                                            <InputLeftAddon children={<InfoIcon name='info' />} />
                                                            <Input type={'name'} placeholder={'First Name'} aria-label={'Name'} />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl isRequired>
                                                        <InputGroup>
                                                            <InputLeftAddon children={<InfoIcon name='info' />} />
                                                            <Input type={'name'} placeholder={'Last Name'} aria-label={'Last Name'} />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <Divider />
                                                    <FormControl isRequired>
                                                        <InputGroup>
                                                            <InputLeftAddon children={<EmailIcon name='email' />} />
                                                            <Input type={'email'} placeholder={'Email'} aria-label={'Email'} />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl isRequired>
                                                        <InputGroup>
                                                            <InputLeftAddon children={<LockIcon name='lock' />} />
                                                            <Input type={'password'} placeholder={'Password'} aria-label={'Password'} />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <Divider />
                                                    <Button children={'Sign up'} type='submit' _hover={{ boxShadow: "md" }} /> */}

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
                                                        <Textarea
                                                            // type={'email'}
                                                            // _hover={{ borderRadius: 'gray.300', }}
                                                            placeholder="Message"
                                                            aria-label={'Message'}
                                                        />
                                                    </FormControl>
                                                    <FormControl>
                                                        <Button
                                                            loadingText='Submitting'
                                                            variant={"solid"}
                                                            bg={'blue.500'}
                                                            color="white"
                                                            _hover={{}}
                                                            type={'submit'}
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