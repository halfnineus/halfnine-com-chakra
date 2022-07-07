import React from "react";
import {
    chakra,
    Flex,
    HStack,
    Link,
    Button,
    useColorModeValue,
    Box,
    useDisclosure,
    Spacer,
    IconButton,
    SimpleGrid,
    VStack,
    useColorMode,
    Center,
    Text,
    BoxProps,
    Image,
} from "@chakra-ui/react";

import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoHardwareChipOutline } from 'react-icons/io5'
import router from "next/router";
import NextLink from 'next/link'
import { GiMechanicalArm } from "react-icons/gi";
import { VscTerminalCmd } from "react-icons/vsc";
import { MdDevicesOther } from 'react-icons/md'

import smlog from '../public/img/smlog.png'
import wsmlog from '../public/img/wsmlog.png'

import { HTMLMotionProps, motion } from 'framer-motion'

export type MotionBoxProps = BoxProps & HTMLMotionProps<'div'>
export const MotionBox = motion<BoxProps>(Box)


const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800");
    const cl = useColorModeValue("gray.800", "white");
    const mobileNav = useDisclosure();
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue("dark", "light");

    return (
        <>
            <Box
                as="header"
                bg={useColorModeValue('white', 'gray.800')}
                position="relative"
                zIndex="10"
                py={3}
            >
                <Box as="nav" aria-label="Main navigation" mx="auto" px={{ base: '6', md: '8' }}>
                    <Flex className="nav-content__desktop" align="center" justify="space-between" >
                        <NextLink href={'/'} passHref>
                            <Link display="flex" alignItems="center">
                                <Image pointerEvents={"none"} width={'100%'} height={'10'} src={useColorModeValue(smlog.src, wsmlog.src)} alt={'Ochoa'} />
                            </Link>
                        </NextLink>
                        <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
                            <Flex alignItems="center" justifyContent="space-between" mx="auto">
                                <Box display={{ base: 'none', lg: 'flex' }}>
                                    <HStack spacing={1}>
                                        <Button
                                            bg={bg}
                                            color="gray.500"
                                            display="inline-flex"
                                            alignItems="center"
                                            fontSize="md"
                                            _hover={{ color: cl }}
                                            _focus={{ boxShadow: "none" }}
                                            onClick={() => router.push('/portafolio')}
                                        >
                                            Our Portafolio
                                        </Button>
                                        <Box role="group">
                                            <Button
                                                bg={bg}
                                                cursor={'auto'}
                                                color="gray.500"
                                                alignItems="center"
                                                fontSize="md"
                                                _hover={{ color: cl }}
                                                _focus={{ boxShadow: "none" }}
                                                rightIcon={<IoIosArrowDown />}
                                            >
                                                Development
                                            </Button>
                                            <Box
                                                pos="absolute"
                                                left={0}
                                                w="full"
                                                display="none"
                                                _groupHover={{ display: "block" }}
                                            >
                                                <MotionBox
                                                    initial="init"
                                                    outline="0"
                                                    // opacity="0"
                                                    bg={useColorModeValue('white', 'gray.700')}
                                                    w="full"
                                                    shadow="lg"
                                                    px="4"
                                                    pos="absolute"
                                                    insetX="0"
                                                    pt="6"
                                                    pb="8"
                                                >
                                                    <Box maxW="7xl" mx="auto" px="8">
                                                        <SimpleGrid spacing="10" columns={2}>
                                                            <chakra.a
                                                                cursor={'pointer'}
                                                                onClick={() => router.push('/services/development/electronic-engineering')}
                                                                className="group"
                                                                m="-3"
                                                                p="3"
                                                                display="flex"
                                                                alignItems="flex-start"
                                                                transition="all 0.2s"
                                                                rounded="lg"
                                                                _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }}
                                                                _focus={{ shadow: 'outline' }}
                                                            >
                                                                <Center
                                                                    aria-hidden
                                                                    as="span"
                                                                    flexShrink={0}
                                                                    w="10"
                                                                    h="10"
                                                                    fontSize="3xl"
                                                                    color={useColorModeValue('blue.600', 'blue.400')}
                                                                >
                                                                    {<IoHardwareChipOutline />}
                                                                </Center>
                                                                <Box marginStart="3" as="dl">
                                                                    <HStack as="dt">
                                                                        <Text
                                                                            fontWeight="semibold"
                                                                            color={useColorModeValue('gray.900', 'white')}
                                                                            // _groupHover={{ color: useColorModeValue('blue.600', 'inherit') }}
                                                                            pointerEvents={'none'}
                                                                        >
                                                                            {'Electronic Engineering'}
                                                                        </Text>
                                                                        <Box
                                                                            fontSize="xs"
                                                                            transition="all 0.2s"
                                                                        // _groupHover={{ color: useColorModeValue('blue.600', 'inherit'), transform: 'translateX(2px)' }}
                                                                        />
                                                                    </HStack>
                                                                    <Text as="dd" color={useColorModeValue('gray.500', 'gray.400')} pointerEvents={'none'}>
                                                                        {'Highly reliable innovative solutions that enable a digital transformation.'}
                                                                    </Text>
                                                                </Box>
                                                            </chakra.a>
                                                            <chakra.a
                                                                onClick={() => router.push('/services/development/software-engineering')}
                                                                cursor={'pointer'}
                                                                className="group"
                                                                m="-3"
                                                                p="3"
                                                                display="flex"
                                                                alignItems="flex-start"
                                                                transition="all 0.2s"
                                                                rounded="lg"
                                                                _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }}
                                                                _focus={{ shadow: 'outline' }}
                                                            >
                                                                <Center
                                                                    aria-hidden
                                                                    as="span"
                                                                    flexShrink={0}
                                                                    w="10"
                                                                    h="10"
                                                                    fontSize="3xl"
                                                                    color={useColorModeValue('blue.600', 'blue.400')}
                                                                >
                                                                    {<VscTerminalCmd />}
                                                                </Center>
                                                                <Box marginStart="3" as="dl">
                                                                    <HStack as="dt">
                                                                        <Text
                                                                            fontWeight="semibold"
                                                                            color={useColorModeValue('gray.900', 'white')}
                                                                            // _groupHover={{ color: useColorModeValue('blue.600', 'inherit') }}
                                                                            pointerEvents={'none'}
                                                                        >
                                                                            {'Software Engineering'}
                                                                        </Text>
                                                                        <Box
                                                                            fontSize="xs"
                                                                            transition="all 0.2s"
                                                                        // _groupHover={{ color: useColorModeValue('blue.600', 'inherit'), transform: 'translateX(2px)' }}
                                                                        />
                                                                    </HStack>
                                                                    <Text as="dd" color={useColorModeValue('gray.500', 'gray.400')} pointerEvents={'none'}>
                                                                        {'Highly reliable product development and design on the latest technology.'}
                                                                    </Text>
                                                                </Box>
                                                            </chakra.a>
                                                            <chakra.a
                                                                onClick={() => router.push('/services/development/mechanical-engineering')}
                                                                cursor={'pointer'}
                                                                className="group"
                                                                m="-3"
                                                                p="3"
                                                                display="flex"
                                                                alignItems="flex-start"
                                                                transition="all 0.2s"
                                                                rounded="lg"
                                                                _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }}
                                                                _focus={{ shadow: 'outline' }}
                                                            >
                                                                <Center
                                                                    aria-hidden
                                                                    as="span"
                                                                    flexShrink={0}
                                                                    w="10"
                                                                    h="10"
                                                                    fontSize="3xl"
                                                                    color={useColorModeValue('blue.600', 'blue.400')}
                                                                >
                                                                    {<GiMechanicalArm />}
                                                                </Center>
                                                                <Box marginStart="3" as="dl">
                                                                    <HStack as="dt">
                                                                        <Text
                                                                            fontWeight="semibold"
                                                                            color={useColorModeValue('gray.900', 'white')}
                                                                            // _groupHover={{ color: useColorModeValue('blue.600', 'inherit') }}
                                                                            pointerEvents={'none'}
                                                                        >
                                                                            {'Mechanical Engineering'}
                                                                        </Text>
                                                                        <Box
                                                                            fontSize="xs"
                                                                            transition="all 0.2s"
                                                                        // _groupHover={{ color: useColorModeValue('blue.600', 'inherit'), transform: 'translateX(2px)' }}
                                                                        />
                                                                    </HStack>
                                                                    <Text as="dd" color={useColorModeValue('gray.500', 'gray.400')} pointerEvents={'none'}>
                                                                        {'Take product ideas from concepts to working prototypes.'}
                                                                    </Text>
                                                                </Box>
                                                            </chakra.a>
                                                            <chakra.a
                                                                onClick={() => router.push('/services/development/product-design')}
                                                                cursor={'pointer'}
                                                                className="group"
                                                                m="-3"
                                                                p="3"
                                                                display="flex"
                                                                alignItems="flex-start"
                                                                transition="all 0.2s"
                                                                rounded="lg"
                                                                _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }}
                                                                _focus={{ shadow: 'outline' }}
                                                            >
                                                                <Center
                                                                    aria-hidden
                                                                    as="span"
                                                                    flexShrink={0}
                                                                    w="10"
                                                                    h="10"
                                                                    fontSize="3xl"
                                                                    color={useColorModeValue('blue.600', 'blue.400')}
                                                                >
                                                                    {<MdDevicesOther />}
                                                                </Center>
                                                                <Box marginStart="3" as="dl">
                                                                    <HStack as="dt">
                                                                        <Text
                                                                            fontWeight="semibold"
                                                                            color={useColorModeValue('gray.900', 'white')}
                                                                            // _groupHover={{ color: useColorModeValue('blue.600', 'inherit') }}
                                                                            pointerEvents={'none'}
                                                                        >
                                                                            {'Product Design'}
                                                                        </Text>
                                                                        <Box
                                                                            fontSize="xs"
                                                                            transition="all 0.2s"
                                                                        // _groupHover={{ color: useColorModeValue('blue.600', 'inherit'), transform: 'translateX(2px)' }}
                                                                        />
                                                                    </HStack>
                                                                    <Text as="dd" color={useColorModeValue('gray.500', 'gray.400')} pointerEvents={'none'}>
                                                                        {'Innovative product design processes that bring ideas to life.'}
                                                                    </Text>
                                                                </Box>
                                                            </chakra.a>
                                                        </SimpleGrid>
                                                    </Box>
                                                </MotionBox>
                                            </Box>
                                        </Box>
                                        <Button
                                            bg={bg}
                                            color="gray.500"
                                            display="inline-flex"
                                            alignItems="center"
                                            fontSize="md"
                                            _hover={{ color: cl }}
                                            _focus={{ boxShadow: "none" }}
                                            onClick={() => router.push('/services/manufacturing')}
                                        >
                                            Manufacturing
                                        </Button>
                                        <Button
                                            bg={bg}
                                            color="gray.500"
                                            display="inline-flex"
                                            alignItems="center"
                                            fontSize="md"
                                            _hover={{ color: cl }}
                                            _focus={{ boxShadow: "none" }}
                                            onClick={() => router.push('/about')}
                                        >
                                            About Us
                                        </Button>
                                    </HStack>
                                </Box>
                                <Spacer />
                            </Flex>
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                // mt={1}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                {/* <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<AiOutlineClose />}
                                    onClick={() => { mobileNav.onClose(); }}
                                    aria-label="Close menu"
                                    justifySelf="self-start"

                                >
                                    About Us
                                </Button> */}
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<AiFillHome />}
                                    onClick={() => {
                                        mobileNav.onClose();
                                        router.push('/about');
                                    }}
                                >
                                    About Us
                                </Button>
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<AiFillHome />}
                                    onClick={() => {
                                        mobileNav.onClose();
                                        router.push('/services/development');
                                    }}
                                >
                                    Development
                                </Button>
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<BsFillCameraVideoFill />}
                                    onClick={() => {
                                        mobileNav.onClose();
                                        router.push('/services/manufacturing');
                                    }}
                                >
                                    Manufacturing
                                </Button>
                                <Button
                                    w="full"
                                    variant="solid"
                                    colorScheme="blue"
                                    leftIcon={<AiOutlineInbox />}
                                    onClick={() => {
                                        mobileNav.onClose();
                                        router.push('/contact');
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </VStack>
                        </HStack>
                        <HStack spacing="4" >
                            <NextLink href={'/contact'} passHref>
                                <Link>
                                    <Button display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }} colorScheme="blue" fontWeight="bold">
                                        {/* display={{ base: 'none', sm: 'flex', lg: 'flex', md: 'flex' }} */}
                                        Contact Us
                                    </Button>
                                </Link>
                            </NextLink>
                            <IconButton
                                size="md"
                                fontSize="lg"
                                aria-label={`Switch to ${text} mode`}
                                variant={"ghost"}
                                color="current"
                                ml={{ base: "0", md: "3" }}
                                onClick={toggleMode}
                                display={mobileNav.isOpen ? "none" : "flex"}
                                icon={useColorModeValue(<FaMoon />, <FaSun />)}
                            />
                            <IconButton
                                display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
                                aria-label="Open and Close menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={
                                    mobileNav.isOpen ? <AiOutlineClose /> : <AiOutlineMenu />
                                }
                                onClick={mobileNav.onToggle}
                            />
                        </HStack>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Navbar;




