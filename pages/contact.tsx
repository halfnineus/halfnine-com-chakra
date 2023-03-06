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
    useToast,
    useDisclosure,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Center,
    SimpleGrid,
} from '@chakra-ui/react';

import { MdCall, MdEmail, MdLocationOn, MdOutlineEmail, MdPhone, } from 'react-icons/md';
import { BsPerson, BsBuilding } from 'react-icons/bs'

import { useState } from "react"
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FiExternalLink } from "react-icons/fi";

import indexdat from "../assets/contact.json"
import Link from 'next/link';

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


    const [refECV, setrefECV] = useState('');
    const [prettierECV, setprettierECV] = useState('');
    const [ecvReq, setecvReq] = useState('');
    const [ecvTarget, setecvTarget] = useState('');
    const { locale } = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title={indexData.head.title}
                            description={`Contact Us about developing technology solutions, IT consulting & Digital transformation Related Inquiries.`}
                            canonical="https://www.zedir.com/contact"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/contact',
                                }
                            ]}
                        />
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay backdropFilter='blur(1px)' />
                            <ModalContent>
                                <ModalHeader>{indexData.modal.modaltitle}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text fontWeight={'semibold'} mb='1rem'>
                                        {ecvReq}
                                        <Link href={refECV} target={ecvTarget}>
                                            <Button colorScheme={'blue'} variant={'link'} userSelect={'text'} fontWeight={'semibold'} mb='1rem' display={'inline'}>
                                                {prettierECV}
                                            </Button>
                                        </Link>
                                    </Text>
                                </ModalBody>
                                <ModalFooter>
                                    <Button variant={'ghost'} mr={3} onClick={onClose}>
                                        {indexData.modal.close}
                                    </Button>
                                    <Link href={refECV} target={ecvTarget}>
                                        <Button colorScheme={'blue'} variant='outline' rightIcon={<FiExternalLink />}>{indexData.modal.open}</Button>
                                    </Link>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" pt={6}>
                            <Flex
                                w={'full'}
                                h={48}
                                rounded={'xl'}
                                backgroundImage={'/img/contact/bg.jpg'}
                                overflow={'hidden'}
                            >
                                <VStack
                                    w={'full'}
                                    justify={'center'}
                                    px={{ base: 4, md: 8 }}
                                    bgGradient={{ base: 'linear(to-r, blackAlpha.700, blackAlpha.500)', md: 'linear(to-r, blackAlpha.700, blackAlpha.300)' }}
                                    textAlign='center'
                                >
                                    <Stack maxW={'3xl'}>
                                        <Heading
                                            color={'white'}
                                            fontWeight={700}
                                            fontSize={{ base: '3xl', md: '4xl' }}
                                        >
                                            {indexData.block1.heading}
                                        </Heading>
                                        <Text
                                            color={'gray.100'}
                                            fontSize={{ base: 'xl', md: '2xl' }}
                                        >
                                            {indexData.block1.text}
                                        </Text>
                                    </Stack>
                                </VStack>
                            </Flex>

                            {/* <Heading pt={'5'} fontSize={{ base: '2xl', md: '3xl' }}>
                            {indexData.block2.heading}
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }}>
                            {indexData.block2.text}
                        </Text> */}

                            <Divider mt={5} mb={5} />

                            <Box
                                bg={'gray.50'}
                                borderRadius='xl'
                                px={{ base: 5, sm: 5, md: 5, lg: 10 }}
                                pb={{ base: 5, sm: 5, md: 5, lg: 10 }}
                                pt={{ base: 4, sm: 4, md: 4, lg: 8 }}
                                boxShadow={'md'}
                            >
                                <Heading pb={2} fontSize={{ base: '2xl', md: '3xl' }}>
                                    {indexData.form.heading}
                                </Heading>
                                <form action={'submit'} onSubmit={handleSubmit}>
                                    <VStack spacing={5}>
                                        {/* <HStack spacing={5} minW={'full'}> */}
                                        <SimpleGrid
                                            w="full"
                                            // maxW={{ base: 'unset', lg: '4xl' }}
                                            columns={{ base: 1, sm: 2 }}
                                            // columns={2}
                                            spacing={5}
                                        // fontSize="sm"
                                        >

                                            <FormControl isRequired>
                                                <FormLabel>{indexData.form.name}</FormLabel>
                                                <InputGroup>
                                                    <InputLeftElement pointerEvents="none">
                                                        <BsPerson color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input
                                                        type={'text'}
                                                        name={"name"}
                                                        onChange={(e: any) => setName(e.target.value)}
                                                        placeholder={'John Doe'}
                                                        isRequired
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl isRequired id="mail">
                                                <FormLabel>{indexData.form.email}</FormLabel>
                                                <InputGroup>
                                                    <InputLeftElement pointerEvents="none">
                                                        <MdOutlineEmail color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input
                                                        type={'email'}
                                                        defaultValue={email}
                                                        onChange={(e: any) => setEmail(e.target.value)}
                                                        placeholder={'Email'}
                                                        isRequired
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            {/* </HStack> */}
                                            {/* <HStack spacing={5} minW={'full'}> */}
                                            <FormControl id="company">
                                                <FormLabel>{indexData.form.companyname}</FormLabel>
                                                <InputGroup>
                                                    <InputLeftElement pointerEvents="none">
                                                        <BsBuilding color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input
                                                        type={'company'}
                                                        name={"company"}
                                                        onChange={(e: any) => setCompany(e.target.value)}
                                                        placeholder={'Zedir'}
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="phone">
                                                <FormLabel>{indexData.form.number}</FormLabel>
                                                <InputGroup>
                                                    <InputLeftElement pointerEvents="none">
                                                        <MdPhone color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input
                                                        maxLength={20}
                                                        type={'tel'}
                                                        name={"phone"}
                                                        onChange={(e: any) => setPhone(e.target.value)}
                                                        placeholder={'Phone Number'}
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                        </SimpleGrid>
                                        {/* </HStack> */}
                                        <FormControl id="message">
                                            <FormLabel>{indexData.form.message}</FormLabel>
                                            <Textarea
                                                minH={{ base: 48, sm: 36, md: 36 }}
                                                onChange={(e: any) => setMessage(e.target.value)}
                                                placeholder={indexData.form.message}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <Button
                                                colorScheme={"blue"}
                                                type={'submit'}
                                                isLoading={submitted}
                                                loadingText={'Submitting'}
                                                _hover={{}}
                                                onClick={(e: any) => { handleSubmit(e); }}
                                            >
                                                {indexData.form.submit}
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

                            <Center mb={6}>
                                <Button
                                    onClick={(e: any) => {
                                        setrefECV(indexData.mailblock.mref);
                                        setprettierECV(indexData.mailblock.visiblemref);
                                        setecvReq(indexData.mailblock.req);
                                        setecvTarget(`_self`);
                                        onOpen()
                                    }}
                                    size="lg"
                                    height="auto"
                                    width="auto"
                                    minH={'10'}
                                    variant="ghost"
                                    _hover={{ color: 'blue.500', bg: 'blackAlpha.100' }}
                                    leftIcon={<MdEmail color={'black'} size="24px" />}
                                >
                                    {indexData.mailblock.title}
                                </Button>
                                <Button
                                    onClick={(e: any) => {
                                        setrefECV("tel:+13213120362");
                                        setprettierECV("+1 (321) 312-0362");
                                        setecvReq(indexData.callblock.req);
                                        setecvTarget(`_self`);
                                        onOpen()
                                    }}
                                    size="lg"
                                    height="auto"
                                    width="auto"
                                    minH={'10'}
                                    variant="ghost"
                                    _hover={{ color: 'blue.500', bg: 'blackAlpha.100' }}
                                    leftIcon={<MdCall color={'black'} size="24px" />}
                                >
                                    {indexData.callblock.title}
                                </Button>
                                <Button
                                    onClick={(e: any) => {
                                        setrefECV("https://duckduckgo.com/?q=Orlando%2C+FL&iaxm=maps");
                                        setprettierECV("duckduckgo.com");
                                        setecvReq(indexData.mapblock.req);
                                        setecvTarget(`_blank`);
                                        onOpen()
                                    }}
                                    size="lg"
                                    height="auto"
                                    width="auto"
                                    minH={'10'}
                                    variant="ghost"
                                    _hover={{ color: 'blue.500', bg: 'blackAlpha.100' }}
                                    leftIcon={<MdLocationOn color={'black'} size="24px" />}
                                >
                                    {indexData.mapblock.title}
                                </Button>
                            </Center>
                        </Box>
                    </>
                )
            })}
        </>
    );
}
export default INDEX;