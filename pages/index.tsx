import NextLink from 'next/link'
import Head from 'next/head'
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react'

import { CheckIcon } from '@chakra-ui/icons'

import ximg from '../public/perma/x.jpg'


import { useRouter } from "next/router"
import indexdat from "./assets/index.json"

import { NextPage } from 'next'
import React from 'react';

interface Props {
}

const BlogCard: NextPage<Props> = () => {
  const { locale, locales, asPath } = useRouter()
  return (
    <>{indexdat.head.filter(p => p.locale === locale).map((indexProps, i) => {
      return (
        <>
          <Head>
            <title key={i}>{indexProps.intitle}</title><meta name="description" content={indexProps.description} />
          </Head>
          <Box
            as="section"
            pb="24"
            pos="relative"
            px={{ base: '6', lg: '12' }}
          >
            <Box maxW={"100%"} mx="auto">
              <Box
                maxW={{ lg: 'md', xl: 'xl' }}
                pt={{ base: '20', lg: '40' }}
                pb={{ base: '16', lg: '24' }}
              >
                <Heading pointerEvents={'none'} as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
                  {indexProps.b1}{' '}
                  <Box as="mark" color={mode('blue.600', 'blue.300')} bg="transparent">
                    {indexProps.b1p}
                  </Box>
                </Heading>
                <Text pointerEvents={'none'} mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
                  {indexProps.b1txt}
                </Text>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
                  <NextLink href={'/contact'} passHref>
                    <Link>
                      <Button
                        size="lg"
                        colorScheme="blue"
                        height="14"
                        px="8"
                        shadow="base"
                        fontSize="md"
                      >
                        {indexProps.b1button}
                      </Button>
                    </Link>
                  </NextLink>
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
              <Img
                pointerEvents={"none"}
                height="100%"
                width="100%"
                objectFit="cover"
                src={ximg.src}
                alt="Base" />
            </Box>
          </Box><Box minH={{ base: 'none', md: 'none', lg: '4rem', }} /><Box p={4}>
            <Stack spacing={5} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Heading pointerEvents={'none'} fontSize={'3xl'}>{indexProps.b2h}</Heading>
              <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')} fontSize={'xl'}>
                {indexProps.b2txt}
              </Text>
            </Stack>
            <Container maxW={'6xl'} mt={10}>
              <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={10}>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <NextLink href={'/services/development/electronic-engineering'} passHref>
                      <Link _hover={{ color: 'blue.500' }}>
                        <Text fontWeight={600}>
                          {indexProps.b2i1}
                        </Text>
                      </Link>
                    </NextLink>
                    <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                      {indexProps.b2i1d}
                    </Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <NextLink href={'/services/development/software-engineering'} passHref>
                      <Link _hover={{ color: 'blue.500' }}>
                        <Text fontWeight={600}>
                          {indexProps.b2i2}
                        </Text>
                      </Link>
                    </NextLink>
                    <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                      {indexProps.b2i2d}
                    </Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <NextLink href={'/services/development/mechanical-engineering'} passHref>
                      <Link _hover={{ color: 'blue.500' }}>
                        <Text fontWeight={600}>
                          {indexProps.b2i3}
                        </Text>
                      </Link>
                    </NextLink>
                    <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                      {indexProps.b2i3d}
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
                    <NextLink href={'/services/development/product-design'} passHref>
                      <Link _hover={{ color: 'blue.500' }}>
                        <Text fontWeight={600}>
                          {indexProps.b2i4}
                        </Text>
                      </Link>
                    </NextLink>
                    <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                      {indexProps.b2i4d}
                    </Text>
                  </VStack>
                </HStack>
                <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <NextLink href={'/services/manufacturing'} passHref>
                      <Link _hover={{ color: 'blue.500' }}>
                        <Text fontWeight={600}>
                          {indexProps.b2i5}
                        </Text>
                      </Link>
                    </NextLink>
                    <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                      {indexProps.b2i5d}
                    </Text>
                  </VStack>
                </HStack>
              </SimpleGrid>
            </Container>
          </Box>
        </>)
    })}</>
  );
}

export default BlogCard;