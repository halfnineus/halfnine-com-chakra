import React from 'react'
import Head from 'next/head'
import { useRouter } from "next/router"

import { Box, Button, Container, Heading, HStack, Icon, SimpleGrid, Stack, Text, useColorModeValue as mode, VStack, Flex, Image, } from '@chakra-ui/react'

import { CheckIcon } from '@chakra-ui/icons'
import { AiOutlineGlobal, AiFillBank, AiOutlineShop, AiOutlineCalendar, AiOutlineFileProtect } from 'react-icons/ai'
import { FaIndustry, FaShippingFast } from 'react-icons/fa'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { GiProtectionGlasses } from 'react-icons/gi'

import ximg from '../public/img/index/x.jpg'
import indexdat from '../assets/index.json'

const IndexPage = () => {
  const { locale } = useRouter()
  const router = useRouter()
  const Feature = (props: any) => {
    return (
      <HStack align={'top'}>
        <Box color={'green.400'} px={2}><Icon as={CheckIcon} /></Box>
        <VStack align={'start'}>
          <Text fontWeight={600} onClick={() => router.push(props.href)} cursor={'pointer'} _hover={{ color: 'blue.500' }}>{props.title}</Text>
          <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>{props.children}</Text>
        </VStack>
      </HStack>
    );
  }
  const Feature2 = (props: any) => {
    return (
      <Flex>
        <Icon boxSize={12} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" color={mode('blue.600', 'blue.400')} >{props.icon}</Icon>
        <Box ml={4}>
          <Text fontSize="lg" fontWeight="semibold" lineHeight="6">{props.title}</Text>
          <Text mt={2} color="gray.500">{props.children}</Text>
        </Box>
      </Flex>
    )
  }
  return (
    <>
      {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
        return (
          <>
            <Head><title>{indexData.head.title}</title><meta name="description" content={indexData.head.description} /></Head>
            <Box key={i} as="section" pb="24" pos="relative" px={{ base: '6', lg: '16' }}>
              <Box maxW={"100%"} mx="auto">
                <Box maxW={{ lg: 'md', xl: 'xl' }} pt={{ base: '20', lg: '40' }} pb={{ base: '16', lg: '24' }}>
                  <Heading pointerEvents={'none'} as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
                    {indexData.block1.h1_1}{' '}
                    <Box as="mark" color={mode('blue.600', 'blue.300')} bg="transparent">{indexData.block1.h1_2}</Box>
                  </Heading>
                  <Text pointerEvents={'none'} mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
                    {indexData.block1.txt}
                  </Text>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
                    <Button onClick={() => router.push('/contact/')} size="lg" colorScheme="blue" height="14" px="8" shadow="base" fontSize="md">
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
                <Image pointerEvents={"none"} height="100%" width="100%" objectFit="cover" src={ximg.src} alt="Base" />
              </Box>
            </Box>
            <Box minH={{ base: 'none', md: 'none', lg: '4rem', }} />
            <Box p={4}>
              <Stack spacing={5} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading pointerEvents={'none'} fontSize={'3xl'}>
                  {indexData.block2.h2}
                </Heading>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')} fontSize={'xl'}>
                  {indexData.block2.txt}
                </Text>
              </Stack>
              <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={10}>
                  <Feature title={indexData.block2.item1} href={'/services/development/electronic-engineering/'}>{indexData.block2.item1d}</Feature>
                  <Feature title={indexData.block2.item2} href={'/services/development/software-engineering/'}>{indexData.block2.item2d}</Feature>
                  <Feature title={indexData.block2.item3} href={'/services/development/mechanical-engineering/'}>{indexData.block2.item3d}</Feature>
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} my={10} mx={{ md: 0, lg: 52 }} spacing={10}>
                  <Feature title={indexData.block2.item4} href={'/services/development/product-design/'}>{indexData.block2.item4d}</Feature>
                  <Feature title={indexData.block2.item5} href={'/services/manufacturing/'}>{indexData.block2.item5d}</Feature>
                </SimpleGrid>
              </Container>
            </Box>
            <Box px={8} pb={20} pt={10} mx="auto">
              <Box w={{ base: "full", md: 11 / 12, xl: "full", }} mx="auto" textAlign={{ base: "left", md: "center", }}>
                <Heading
                  mb={{ base: 4, md: 6 }}
                  fontSize={{ base: "4xl", md: "6xl", }}
                  fontWeight="bold"
                  lineHeight="none"
                  letterSpacing={{ base: "normal", md: "tight", }}
                  pointerEvents={"none"}
                >
                  {indexData.block3.h3_1}{" "}
                  <Text display={{ base: "block", lg: "inline", }} pr={{ md: "none", lg: 1 }} pb={{ base: 2, md: 3, lg: "none" }} bgClip="text" bgGradient="linear(to-r, green.400,blue.600)" fontWeight="extrabold">
                    {indexData.block3.h3_2}
                  </Text>{" "}
                </Heading>
                <Text pointerEvents={"none"} px={{ base: 0, lg: 24, }} mb={6} fontSize={{ base: "lg", md: "xl", }} color={mode("gray.600", "gray.300")}>
                  {indexData.block3.txt_1} <br />{indexData.block3.txt_2}
                </Text>
                <Stack direction={{ base: "column", sm: "row", }} spacing={2} justifyContent={{ sm: "left", md: "center", }}>
                  <Button colorScheme="blue" size="lg" rightIcon={<AiOutlineCalendar />} onClick={() => router.push('/contact/')}>
                    {indexData.block3.button}
                  </Button>
                </Stack>
              </Box>
            </Box>
            <Flex pb={8} px={6} w="auto" justifyContent="center" alignItems="center">
              <Box shadow="md" py={8} px={6} bg={mode('gray.50', 'gray.700')} rounded="xl">
                <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                  <Box textAlign={{ lg: "center" }}>
                    <Text fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                      {indexData.block4.site}
                    </Text>
                    <Text mt={2} fontSize={{ base: "3xl", sm: "4xl" }} lineHeight="8" fontWeight="extrabold" letterSpacing="tight" pointerEvents={'none'}>
                      {indexData.block4.h4}
                    </Text>
                    <Text mt={4} maxW="2xl" fontSize="xl" mx={{ lg: "auto" }} color="gray.500" pointerEvents={'none'}>
                      {indexData.block4.txt}
                    </Text>
                  </Box>
                  <Box mt={10}>
                    <Stack
                      spacing={{ base: 10, md: 0 }}
                      display={{ md: "grid" }}
                      gridTemplateColumns={{ md: "repeat(4,1fr)" }}
                      gridColumnGap={{ md: 8 }}
                      gridRowGap={{ md: 10 }}
                      pointerEvents={'none'}
                    >
                      <Feature2 icon={<FaIndustry />} title={indexData.block4.item1}>{indexData.block4.item1d}</Feature2>
                      <Feature2 icon={<AiOutlineShop />} title={indexData.block4.item2}>{indexData.block4.item2d}</Feature2>
                      <Feature2 icon={<AiFillBank />} title={indexData.block4.item3}>{indexData.block4.item3d}</Feature2>
                      <Feature2 icon={<AiOutlineFileProtect />} title={indexData.block4.item4}>{indexData.block4.item4d}</Feature2>
                      <Feature2 icon={<FaShippingFast />} title={indexData.block4.item5}>{indexData.block4.item5d}</Feature2>
                      <Feature2 icon={<BsFileEarmarkPerson />} title={indexData.block4.item6}>{indexData.block4.item6d}</Feature2>
                      <Feature2 icon={<AiOutlineGlobal />} title={indexData.block4.item7}>{indexData.block4.item7d}</Feature2>
                      <Feature2 icon={<GiProtectionGlasses />} title={indexData.block4.item8}>{indexData.block4.item8d}</Feature2>
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
                      userSelect={'none'}
                      onClick={() => router.push('/portfolio/')}
                    >
                      {indexData.block4.bot}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
            <Flex justify="center" w="full" px={6}>
              <Box
                shadow="md"
                bg={mode('gray.50', 'gray.700')}
                w={{ base: "full", md: "75%", lg: "50%" }}
                rounded={20} px={6} pt={6} mt={4} pb={8} mb={12}
                textAlign={{ base: "left", md: "center" }}
              >
                <Text
                  fontSize={{ base: "3xl", sm: "4xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  lineHeight="shorter"
                  pointerEvents={'none'}
                  display="block"
                  pb={2}
                >
                  {indexData.block5.h5_1}<br />{indexData.block5.h5_2}
                </Text>
                <Stack justifyContent={{ base: "left", md: "center" }} direction={{ base: "column", sm: "row" }} spacing={2} mt={2}>
                  <Box display="inline-flex">
                    <Button size={'lg'} w={'full'} fontWeight="bold" colorScheme={'blue'} onClick={() => router.push('/contact/')}>
                      {indexData.block5.button}
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Flex>
          </>
        )
      })}
    </>
  );
}

export default IndexPage;