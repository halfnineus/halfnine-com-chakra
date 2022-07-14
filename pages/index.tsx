import React from 'react'

import { NextPage } from 'next'

import NextLink from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router"

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
  chakra,
  Flex,
  Image,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import { AiOutlineGlobal, AiFillBank, AiOutlineShop, AiOutlineCalendar, AiOutlineFileProtect } from 'react-icons/ai'
import { FaIndustry, FaShippingFast } from 'react-icons/fa'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { GiProtectionGlasses } from 'react-icons/gi'

import ximg from '../public/perma/x.jpg'
// import projekt from '../public/perma/Projekt-Landing-min.jpg'
import indexdat from "./assets/index.json"


interface Props {
}

const IndexPag: NextPage<Props> = () => {
  const { locale } = useRouter()
  const router = useRouter()
  return (
    <>
      {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
        return (
          <>
            <Head>
              <title>{indexData.head?.title}</title><meta name="description" content={indexData.head?.description} />
            </Head>
            <Box
              key={i}
              as="section"
              pb="24"
              pos="relative"
              px={{ base: '6', lg: '16' }}
            >
              <Box maxW={"100%"} mx="auto">
                <Box
                  maxW={{ lg: 'md', xl: 'xl' }}
                  pt={{ base: '20', lg: '40' }}
                  pb={{ base: '16', lg: '24' }}
                >
                  <Heading pointerEvents={'none'} as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
                    {indexData.block1.h1_1}{' '}
                    <Box as="mark" color={mode('blue.600', 'blue.300')} bg="transparent">
                      {indexData.block1.h1_2}
                    </Box>
                  </Heading>
                  <Text pointerEvents={'none'} mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
                    {indexData.block1.txt}
                  </Text>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
                    <Button
                      onClick={() => router.push('/contact/')}
                      size="lg"
                      colorScheme="blue"
                      height="14"
                      px="8"
                      shadow="base"
                      fontSize="md"
                    >
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
                sx={{
                  clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' },
                }}
              >
                <Image
                  pointerEvents={"none"}
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  src={ximg.src}
                  alt="Base" />
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
                  <HStack align={'top'}>
                    <Box color={'green.400'} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <NextLink href={'/services/development/electronic-engineering/'} passHref>
                        <Link _hover={{ color: 'blue.500' }}>
                          <Text fontWeight={600}>
                            {indexData.block2.item1}
                          </Text>
                        </Link>
                      </NextLink>
                      <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                        {indexData.block2.item1d}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack align={'top'}>
                    <Box color={'green.400'} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <NextLink href={'/services/development/software-engineering/'} passHref>
                        <Link _hover={{ color: 'blue.500' }}>
                          <Text fontWeight={600}>
                            {indexData.block2.item2}
                          </Text>
                        </Link>
                      </NextLink>
                      <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                        {indexData.block2.item2d}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack align={'top'}>
                    <Box color={'green.400'} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <NextLink href={'/services/development/mechanical-engineering/'} passHref>
                        <Link _hover={{ color: 'blue.500' }}>
                          <Text fontWeight={600}>
                            {indexData.block2.item3}
                          </Text>
                        </Link>
                      </NextLink>
                      <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                        {indexData.block2.item3d}
                      </Text>
                    </VStack>
                  </HStack>
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} my={10} mx={{ md: 0, lg: 52 }} spacing={10}>
                  <HStack align={'top'}>
                    <Box color={'green.400'} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <NextLink href={'/services/development/product-design/'} passHref>
                        <Link _hover={{ color: 'blue.500' }}>
                          <Text fontWeight={600}>
                            {indexData.block2.item4}
                          </Text>
                        </Link>
                      </NextLink>
                      <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                        {indexData.block2.item4d}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack align={'top'}>
                    <Box color={'green.400'} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={'start'}>
                      <NextLink href={'/services/manufacturing/'} passHref>
                        <Link _hover={{ color: 'blue.500' }}>
                          <Text fontWeight={600}>
                            {indexData.block2.item5}
                          </Text>
                        </Link>
                      </NextLink>
                      <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                        {indexData.block2.item5d}
                      </Text>
                    </VStack>
                  </HStack>
                </SimpleGrid>
              </Container>
            </Box>





            <Box px={8} pb={24} pt={14} mx="auto">
              <Box
                w={{
                  base: "full",
                  md: 11 / 12,
                  xl: 9 / 12,
                }}
                mx="auto"
                textAlign={{
                  base: "left",
                  md: "center",
                }}
              >
                <chakra.h1
                  mb={6}
                  fontSize={{
                    base: "4xl",
                    md: "6xl",
                  }}
                  fontWeight="bold"
                  lineHeight="none"
                  letterSpacing={{
                    base: "normal",
                    md: "tight",
                  }}
                  color={mode('gray.900', 'gray.100')}
                  pointerEvents={"none"}
                >
                  All your needs in a{" "}
                  <Text
                    display={{
                      base: "block",
                      lg: "inline",
                    }}
                    w="full"
                    bgClip="text"
                    bgGradient="linear(to-r, green.400,blue.600)"
                    fontWeight="extrabold"
                  >
                    customized application
                  </Text>{" "}
                </chakra.h1>
                <chakra.p
                  pointerEvents={"none"}
                  px={{
                    base: 0,
                    lg: 24,
                  }}
                  mb={6}
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                  color={mode("gray.600", "gray.300")}
                >
                  Don't know where to start? Companies often have small needs
                  in terms of their Technology and can use already-built applications.
                  But we are here for those who need more.
                </chakra.p>
                <Stack
                  direction={{
                    base: "column",
                    sm: "row",
                  }}
                  spacing={2}
                  justifyContent={{
                    sm: "left",
                    md: "center",
                  }}
                >
                  <Button
                    as="a"
                    colorScheme="blue"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w={{
                      base: "full",
                      sm: "auto",
                    }}
                    mb={{
                      base: 2,
                      sm: 0,
                    }}
                    size="lg"
                    cursor="pointer"
                    rightIcon={<AiOutlineCalendar />}
                    onClick={() => router.push('/contact/')}
                  >
                    Schedule a Meeting
                  </Button>
                </Stack>
              </Box>
              {/* <Box
                w={{
                  base: "full",
                  md: 4 / 6,
                }}
                mx="auto"
                mt={20}
                textAlign="center"
              >
                <Image
                  loading='lazy'
                  pointerEvents={'none'}
                  w="full"
                  // rounded="lg"
                  shadow="2xl"
                  src={projekt.src}
                  // src="https://kutty.netlify.app/hero.jpg"
                  // src="https://i.ibb.co/HqcYg7X/super-HERO-min.png"
                  alt="Aplication Layouts"
                />
              </Box> */}
            </Box>






            <Flex
              pb={8}
              px={6}
              w="auto"
              justifyContent="center"
              alignItems="center"
            >
              <Box py={8} px={6} bg={mode('gray.50', 'gray.700')} rounded="xl">
                <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                  <Box textAlign={{ lg: "center" }}>
                    <chakra.h2
                      fontWeight="semibold"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      userSelect={'none'}
                    >
                      ochoa.pro
                    </chakra.h2>
                    <chakra.p
                      mt={2}
                      fontSize={{ base: "3xl", sm: "4xl" }}
                      lineHeight="8"
                      fontWeight="extrabold"
                      letterSpacing="tight"
                      pointerEvents={'none'}
                    >
                      Technology transformation, migration and implementation
                    </chakra.p>
                    <chakra.p
                      mt={4}
                      maxW="2xl"
                      fontSize="xl"
                      mx={{ lg: "auto" }}
                      color="gray.500"
                      pointerEvents={'none'}
                    >

                      Our solutions help All industries and companies who want to work
                      with Technology that meets their specific needs, ideas and achieve goals.
                    </chakra.p>
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
                      <Flex>
                        <Icon
                          boxSize={12}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color={mode('blue.600', 'blue.400')}
                        >
                          {<FaIndustry />}
                        </Icon>
                        <Box ml={4}>
                          <chakra.dt
                            fontSize="lg"
                            fontWeight="semibold"
                            lineHeight="6"
                          >
                            {"Industrial Solutions"}
                          </chakra.dt>
                          <chakra.dd mt={2} color="gray.500"
                          >
                            {"Manufacturing and Processing becomes complex with scale."}
                          </chakra.dd>
                        </Box>
                      </Flex>

                      <Flex>
                        <Icon
                          boxSize={12}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color={mode('blue.600', 'blue.400')}
                        >
                          {<AiOutlineShop />}
                        </Icon>
                        <Box ml={4}>
                          <chakra.dt
                            fontSize="lg"
                            fontWeight="semibold"
                            lineHeight="6"
                          >
                            {"Retail Solutions"}
                          </chakra.dt>
                          <chakra.dd mt={2} color="gray.500"
                          >
                            {"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
                          </chakra.dd>
                        </Box>
                      </Flex>
                      <Flex>
                        <Icon
                          boxSize={12}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color={mode('blue.600', 'blue.400')}
                        >
                          {<AiFillBank />}
                        </Icon>
                        <Box ml={4}>
                          <chakra.dt
                            fontSize="lg"
                            fontWeight="semibold"
                            lineHeight="6"
                          >
                            {"Financial Solutions"}
                          </chakra.dt>
                          <chakra.dd mt={2} color="gray.500"
                          >
                            {"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
                          </chakra.dd>
                        </Box>
                      </Flex>
                      <Flex>
                        <Icon
                          boxSize={12}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color={mode('blue.600', 'blue.400')}
                        >
                          {<AiOutlineFileProtect />}
                        </Icon>
                        <Box ml={4}>
                          <chakra.dt
                            fontSize="lg"
                            fontWeight="semibold"
                            lineHeight="6"
                          >
                            {"Security Solutions"}
                          </chakra.dt>
                          <chakra.dd mt={2} color="gray.500"
                          >
                            {"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
                          </chakra.dd>
                        </Box>
                      </Flex>
                      <Flex>
                        <Icon
                          boxSize={12}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color={mode('blue.600', 'blue.400')}
                        >
                          {<FaShippingFast />}
                        </Icon>
                        <Box ml={4}>
                          <chakra.dt
                            fontSize="lg"
                            fontWeight="semibold"
                            lineHeight="6"
                          >
                            {"Logistics Solutions"}
                          </chakra.dt>
                          <chakra.dd mt={2} color="gray.500"
                          >
                            {"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
                          </chakra.dd>
                        </Box>
                      </Flex>
                      <Flex>
                        <Icon
                          boxSize={12}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color={mode('blue.600', 'blue.400')}
                        >
                          {<BsFileEarmarkPerson />}
                        </Icon>
                        <Box ml={4}>
                          <chakra.dt
                            fontSize="lg"
                            fontWeight="semibold"
                            lineHeight="6"
                          >
                            {"Management Solutions"}
                          </chakra.dt>
                          <chakra.dd mt={2} color="gray.500"
                          >
                            {"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
                          </chakra.dd>
                        </Box>
                      </Flex>
                      <Flex>
                        <Icon
                          boxSize={12}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color={mode('blue.600', 'blue.400')}
                        >
                          {<AiOutlineGlobal />}
                        </Icon>
                        <Box ml={4}>
                          <chakra.dt
                            fontSize="lg"
                            fontWeight="semibold"
                            lineHeight="6"
                          >
                            {"Franchise Solutions"}
                          </chakra.dt>
                          <chakra.dd mt={2} color="gray.500"
                          >
                            {"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
                          </chakra.dd>
                        </Box>
                      </Flex>
                      <Flex>
                        <Icon
                          boxSize={12}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          color={mode('blue.600', 'blue.400')}
                        >
                          {<GiProtectionGlasses />}
                        </Icon>
                        <Box ml={4}>
                          <chakra.dt
                            fontSize="lg"
                            fontWeight="semibold"
                            lineHeight="6"
                          >
                            {"Safety Solutions"}
                          </chakra.dt>
                          <chakra.dd mt={2} color="gray.500"
                          >
                            {"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
                          </chakra.dd>
                        </Box>
                      </Flex>
                    </Stack>
                  </Box>
                  <Box textAlign={{ lg: "center" }}>
                    <chakra.h2
                      pt={{ base: '2', lg: '4' }}
                      color="gray.500"
                      fontSize={'xl'}
                      letterSpacing="wide"
                      pointerEvents={'none'}
                    >
                      And more...
                    </chakra.h2>
                  </Box>
                </Box>
              </Box>
            </Flex>





            <Flex justify="center" w="full">
              <Box
                bg={mode('gray.50', 'gray.700')}
                w={{ base: "full", md: "75%", lg: "50%" }}
                rounded={20}
                px={6}
                pt={6}
                mt={4}
                pb={8}
                mb={12}
                textAlign={{ base: "left", md: "center" }}
              >
                <chakra.span
                  fontSize={{ base: "3xl", sm: "4xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  lineHeight="shorter"
                >
                  <chakra.span pointerEvents={'none'} display="block">Ready to dive in?</chakra.span>
                  <chakra.span
                    pointerEvents={'none'}
                    display="block"
                    pb={2}
                  >
                    Request a prototype today.
                  </chakra.span>
                </chakra.span>
                <Stack
                  justifyContent={{ base: "left", md: "center" }}
                  direction={{ base: "column", sm: "row" }}
                  spacing={2}
                  mt={2}
                >
                  <Box display="inline-flex" rounded="md" shadow="md">
                    <Button
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={5}
                      border="solid transparent"
                      fontWeight="bold"
                      rounded="md"
                      colorScheme={'blue'}
                      onClick={() => router.push('/contact/')}
                    >
                      Get started
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

export default IndexPag;