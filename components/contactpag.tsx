import { useRouter } from 'next/router'
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
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export default function ContactPag() {
    const router = useRouter()
    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden" >
            <Flex>
                <Box
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    color="white"
                    borderRadius='2xl'
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                    boxShadow={'lg'}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem userSelect={'none'}>
                                <Box >
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
                                                leftIcon={<MdPhone color={useColorModeValue('black', 'white')} size="20px" />}>
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
                                                leftIcon={<MdEmail color={useColorModeValue('black', 'white')} size="20px" />}>
                                                support@ochoa.pro
                                            </Button>
                                            <Button
                                                // onClick={() => router.push('https://orlando.gov')}
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color={useColorModeValue('black', 'white')}
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdLocationOn color={useColorModeValue('black', 'white')} size="20px" />}>
                                                Orlando, Florida
                                            </Button>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg={useColorModeValue('gray.100', 'gray.600')} borderRadius="lg">
                                    <Box m={8} color={useColorModeValue('black', 'white')}>
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup >
                                                    <InputLeftElement pointerEvents="none">
                                                        <BsPerson color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input placeholder="John Doe" type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Mail</FormLabel>
                                                <InputGroup >
                                                    <InputLeftElement pointerEvents="none">
                                                        <MdOutlineEmail color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input placeholder="webmaster@ochoa.pro" type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Message</FormLabel>
                                                <Textarea
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="Message"
                                                />
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Button
                                                    isDisabled
                                                    variant="solid"
                                                    bg={'blue.400'}
                                                    color="white"
                                                    _hover={{}}>
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}