import React from 'react'
import { useRouter } from "next/router"

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
  Flex,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


import { AiOutlineShop, AiOutlineFileProtect } from 'react-icons/ai'
import { MdOutlineHealing, MdOutlineMovie } from 'react-icons/md'
import { RiGovernmentLine } from 'react-icons/ri'
import { TbReportMoney } from 'react-icons/tb'
import { BsController } from 'react-icons/bs'
import { FaIndustry } from 'react-icons/fa'
import { CheckIcon } from '@chakra-ui/icons'
import { FiMail, FiExternalLink } from 'react-icons/fi'

import ximg from '../public/img/index/x.jpg'
import diagimg from '../public/img/index/diagram.jpg'
import indexdat from '../assets/index.json'
import { NextSeo } from 'next-seo'

const IndexPage = () => {
  const { locale } = useRouter()
  const router = useRouter()
  const Feature = (props: any) => {
    return (
      <HStack align={'top'}>
        <Box color={'green.400'} px={2}><Icon as={CheckIcon} /></Box>
        <VStack align={'start'}>
          <Text fontWeight={600} onClick={() => router.push(props.href)} cursor={'pointer'} _hover={{ color: 'blue.500' }}>{props.title}</Text>
          <Text color={mode('gray.600', 'gray.400')}>{props.children}</Text>
        </VStack>
      </HStack>
    );
  }
  const Feature2 = (props: any) => {
    return (
      <Flex>
        <Icon boxSize={12} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" color={mode('blue.600', 'blue.200')}>{props.icon}</Icon>
        <Box ml={4}>
          <Text fontSize="lg" fontWeight="semibold" lineHeight="6">{props.title}</Text>
          <Text mt={2} color="gray.500">{props.children}</Text>
        </Box>
      </Flex>
    )
  }
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
        return (
          <>
            <NextSeo title={indexData.head.title} description={indexData.head.description} />

            {/* <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay backdropFilter='blur(1px)' />
              <ModalContent>
                <ModalHeader>External Application</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight={'semibold'} mb='1rem'>
                    You are about to email Dan Ochoa: dan@ochoa.pro
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button variant={'ghost'} mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button onClick={() => router.push("mailto:dan@ochoa.pro")} colorScheme='blue' variant='outline' rightIcon={<FiExternalLink />}>Send Mail</Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}

            <Box key={i} as="section" pb={{ base: "none", lg: "12" }} pos="relative" px={{ base: '6', lg: '10' }}>
              <Box maxW={"100%"} mx="auto">
                <Box maxW={{ lg: 'md', xl: 'xl' }} pt={{ base: '12', lg: '20' }} pb={{ base: '16', lg: '24' }}>
                  <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
                    {indexData.block1.h1_1}{' '}
                    <Box as="mark" color={mode('blue.600', 'blue.200')} bg="transparent">{indexData.block1.h1_2}</Box>
                  </Heading>
                  <Text mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
                    {indexData.block1.txt} <Button userSelect={'text'} onClick={() => router.push("/our-approach/agile")} fontSize="xl" fontWeight="medium" color={'blue.400'} variant={'link'}>{indexData.block1.txturl}</Button>.
                  </Text>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
                    <Button onClick={() => router.push('/contact')} size="md" colorScheme="blue" shadow="base" fontSize="md">
                      {indexData.block1.button}
                    </Button>
                  </Stack>
                </Box>
              </Box>
              <Box
                pos={{ lg: 'absolute' }}
                insetY={{ lg: '0' }}
                insetEnd={{ lg: '0' }}
                bg={"gray.50"}
                w={{ base: 'full', lg: '50%' }}
                height={{ base: '96', lg: 'full' }}
                sx={{ clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }, }}>
                <Image userSelect={'none'} pointerEvents={'none'} height="100%" width="100%" objectFit="cover" src={ximg.src} alt="Base" />
              </Box>
            </Box>

            <Box minH={'4rem'} />

            <Box px={{ base: '6', lg: '10' }} mx="auto">
              <Box w={{ base: "full", md: 11 / 12, xl: "full", }} mx="auto" textAlign={{ base: "left", md: "center", }}>
                <Heading
                  mb={{ base: 4, md: 6 }}
                  fontSize={{ base: "4xl", md: "6xl", }}
                  fontWeight="bold"
                  lineHeight="none"
                  letterSpacing={{ base: "normal", md: "tight", }}
                >
                  {indexData.block2.h2_1}{" "}
                  <Text display={{ base: "block", lg: "inline", }} pr={{ md: "none", lg: 1 }} pb={{ base: 2, md: 3, lg: "none" }} bgClip="text" bgGradient="linear(to-r, green.400,blue.600)" fontWeight="extrabold">
                    {indexData.block2.h2_2}
                  </Text>{" "}
                </Heading>
                <Text px={{ base: 0, lg: 24, }} mb={4} fontSize={{ base: "lg", md: "xl", }} color={mode("gray.600", "gray.300")}>
                  {indexData.block2.txt_1} <br />{indexData.block2.txt_2}
                </Text>
                {/* <Stack direction={{ base: "column", sm: "row", }} spacing={2} justifyContent={{ sm: "left", md: "center", }}>
                  <Button colorScheme="blue" rightIcon={<FiMail />} onClick={onOpen}>
                    {indexData.block2.button}
                  </Button>
                </Stack> */}
              </Box>
            </Box>

            <Box minH={'4rem'} />

            <Flex direction={{ base: "column", md: "row" }} px={{ base: '6', lg: '10' }}>
              <Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" pr={{ md: 20 }}>
                <Heading as={'h3'} fontSize={{ base: "3xl", sm: "4xl" }} fontWeight="extrabold" lineHeight="shorter" _dark={{ color: "gray.100" }} mb={6}>
                  <Text display="block">{indexData.block3.h3_1}</Text>
                  <Text display="block" color={mode("blue.600", "blue.200")}>
                    {indexData.block3.h3_2}
                  </Text>
                </Heading>
                <Text
                  mb={6}
                  fontSize={{ base: "md", md: "lg", lg: 'xl' }}
                  color={mode("gray.700", "gray.300")}
                >
                  {indexData.block3.item1}<br />
                  {indexData.block3.item2}<br />
                  {indexData.block3.item3}<br />
                  {indexData.block3.item4}<br />
                  {indexData.block3.item5}<br />
                </Text>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  mb={{ base: 4, md: 8 }}
                  spacing={2}
                >
                  <Button
                    colorScheme={'blue'}
                    rounded="md"
                    onClick={() => router.push('/services')}
                  >
                    {indexData.block3.options}
                  </Button>
                </Stack>
              </Box>
              <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
                <Image pointerEvents={'none'} userSelect={'none'} w="full" rounded="3xl" border={'1px'} shadow="lg" src={diagimg.src} alt="Ready to consider options" />
              </Box>
            </Flex>

            <Box minH={'4rem'} />

            {/* <Box px={{ base: '6', lg: '10' }}>
              <Stack spacing={5} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>{indexData.block4.h4}</Heading>
                <Text color={mode('gray.600', 'gray.400')} fontSize={'xl'}>{indexData.block4.txt}</Text>
              </Stack>
              <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={10}>
                  <Feature title={indexData.block4.item1} href={'/services/development'}>{indexData.block4.item1d}</Feature>
                  <Feature title={indexData.block4.item2} href={'/services/development'}>{indexData.block4.item2d}</Feature>
                  <Feature title={indexData.block4.item3} href={'/services/development'}>{indexData.block4.item3d}</Feature>
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} my={10} mx={{ md: 0, lg: 52 }} spacing={10}>
                  <Feature title={indexData.block4.item4} href={'/services/development'}>{indexData.block4.item4d}</Feature>
                  <Feature title={indexData.block4.item5} href={'/services/manufacturing/'}>{indexData.block4.item5d}</Feature>
                </SimpleGrid>
              </Container>
            </Box>

            <Box minH={'5rem'} /> */}


            {/* <Flex px={{ base: '6', lg: '10' }} w="auto" justifyContent="center" alignItems="center">
              <Box shadow="md" py={8} bg={mode('gray.50', 'gray.700')} rounded="xl" maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                <Box textAlign={{ lg: "center" }}>
                  <Text fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                    {indexData.block5.site}
                  </Text>
                  <Text mt={2} fontSize={{ base: "3xl", sm: "4xl" }} lineHeight="8" fontWeight="extrabold" letterSpacing="tight">
                    {indexData.block5.h5}
                  </Text>
                  <Text mt={4} maxW="2xl" fontSize="xl" mx={{ lg: "auto" }} color="gray.500">
                    {indexData.block5.txt}
                  </Text>
                </Box>
                <Box mt={10}>
                  <Stack
                    spacing={{ base: 10, lg: 0 }}
                    display={{ sm: "row", lg: "grid" }}
                    gridTemplateColumns={{ md: "repeat(4,1fr)" }}
                    gridColumnGap={{ md: 8 }}
                    gridRowGap={{ md: 10 }}
                  >
                    <Feature2 icon={<TbReportMoney />} title={indexData.block5.item1}>{indexData.block5.item1d}</Feature2>
                    <Feature2 icon={<RiGovernmentLine />} title={indexData.block5.item2}>{indexData.block5.item2d}</Feature2>
                    <Feature2 icon={<MdOutlineHealing />} title={indexData.block5.item3}>{indexData.block5.item3d}</Feature2>
                    <Feature2 icon={<AiOutlineShop />} title={indexData.block5.item4}>{indexData.block5.item4d}</Feature2>
                    <Feature2 icon={<FaIndustry />} title={indexData.block5.item5}>{indexData.block5.item5d}</Feature2>
                    <Feature2 icon={<MdOutlineMovie />} title={indexData.block5.item6}>{indexData.block5.item6d}</Feature2>
                    <Feature2 icon={<BsController />} title={indexData.block5.item7}>{indexData.block5.item7d}</Feature2>
                    <Feature2 icon={<AiOutlineFileProtect />} title={indexData.block5.item8}>{indexData.block5.item8d}</Feature2>
                  </Stack>
                </Box>
                <Box textAlign={{ lg: "center" }}>
                  <Text
                    mt={4}
                    maxW="28"
                    fontSize="xl"
                    mx={{ lg: "auto" }}
                    color={mode("gray.700", "gray.300")}
                    _hover={{ color: 'blue.500' }}
                    cursor={'pointer'}
                    onClick={() => router.push('/portfolio/')}
                  >
                    {indexData.block5.bot}
                  </Text>
                </Box>
              </Box>
            </Flex>

            <Box minH={'5rem'} /> */}

          </>
        )
      })}
    </>
  );
}

export default IndexPage;