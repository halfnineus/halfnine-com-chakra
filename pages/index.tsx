import React from 'react'
import { useRouter } from "next/router"

import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  Flex,
  Image,
  Container,
  SimpleGrid,
  Icon,
  StackDivider,
  Link,
} from '@chakra-ui/react'


import ximg from '../public/img/index/x.jpg'
import iot from '../public/img/index/iot.jpg'

import diagimg from '../public/img/index/diagram.jpg'
import indexdat from '../assets/index.json'

import { FcApproval, FcServices, FcLock, } from 'react-icons/fc';
import { IoPeopleOutline, IoRocketOutline, IoBulbOutline, } from 'react-icons/io5';
import { ChevronRightIcon } from '@chakra-ui/icons'

import { ReactElement } from 'react';
import { NextSeo } from 'next-seo'
import { LvlUp } from '../components'
import NextLink from 'next/link'

interface FeatureProps1 {
  title: string;
  text: string;
  icon: ReactElement;
}

interface FeatureProps2 {
  text: string;
  iconBg: string;
  icon?: ReactElement;
  refx: any;
}

const Feature2 = ({ text, icon, iconBg, refx }: FeatureProps2) => {
  return (
    <>
      <NextLink href={refx} passHref>
        <Link _hover={{ textDecorationLine: 'none', textColor: 'blue.500' }}>
          <Stack
            role={'group'}
            direction={'row'}
            align={'center'}
            p={2}
            rounded={'xl'}
            _hover={{ bg: mode('blue.50', 'blue.900'), cursor: 'pointer' }}
            border={'1px'}
            borderColor={mode('gray.100', 'gray.600')}
          >
            <Flex
              w={8}
              h={8}
              align={'center'}
              justify={'center'}
              rounded={'full'}
              bg={iconBg}>
              {icon}
            </Flex>
            <Text fontWeight={600}>
              {text}
            </Text>
            <Flex
              transition={'all .3s ease'}
              transform={'translateX(-25px)'}
              opacity={0}
              _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
              justify={'flex-end'}
              align={'center'}
              flex={1}>
              <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Link>
      </NextLink>
    </>
  );
};

const Feature1 = ({ title, text, icon }: FeatureProps1) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={mode('gray.100', 'gray.700')}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={mode('gray.600', 'gray.400')}>{text}</Text>
    </Stack>
  );
};


const IndexPage = () => {
  const { locale } = useRouter()
  const router = useRouter()
  return (
    <>
      {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
        return (
          <>
            <NextSeo
              title='Ochoa - Automating all Things | Agile Automation Development & Consulting'
              description='Improve your products and services with a digital transformation powered by Agile Automation.'
              canonical="https://ochoa.pro"
              languageAlternates={[
                {
                  hrefLang: 'es',
                  href: 'https://ochoa.pro/es',
                }
              ]}
            />
            <Box key={i} as="section" pb={{ base: "none", lg: "12" }} pos="relative" px={{ base: '6', lg: '10' }}>
              <Box maxW={"100%"} mx="auto">
                <Box maxW={{ lg: 'md', xl: 'xl' }} pt={{ base: '6', lg: '8' }} pb={{ base: '16', lg: '40' }}>
                  <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
                    {indexData.block1.h1_1}{' '}
                    <Box as="mark" color={mode('blue.600', 'blue.300')} bg="transparent">{indexData.block1.h1_2}</Box>
                  </Heading>
                  <Text mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
                    {indexData.block1.txt}{" "}
                    <NextLink href={"/our-approach/agile"} passHref><Link>
                      <Button
                        userSelect={'text'}
                        fontSize="xl"
                        fontWeight="medium"
                        color={'blue.400'}
                        variant={'link'}
                      >
                        {indexData.block1.txturl}
                      </Button>
                    </Link>
                    </NextLink>
                    .
                    {/* <NextLink href={"/our-approach/agile"}></NextLink> */}
                  </Text>

                  <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
                    <NextLink href={"/contact"} passHref><Link>
                      <Button size="md" colorScheme={'brand'} shadow="base" fontSize="md">
                        {indexData.block1.button}
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
                sx={{ clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }, }}>
                <Image userSelect={'none'} pointerEvents={'none'} height="100%" width="100%" objectFit="cover" src={ximg.src} alt="Base" />
              </Box>
            </Box>


            <Box minH={'5rem'} />

            <Box pb={2} px={{ base: '6', lg: '10' }} mx="auto">
              <Box w={{ base: "full", md: 11 / 12, xl: "full", }} mx="auto" textAlign={{ base: "left", md: "center", }}>
                <Heading
                  mb={{ base: 4, md: 6 }}
                  fontSize={{ base: "4xl", md: "6xl", }}
                  fontWeight="bold"
                  lineHeight="none"
                  letterSpacing={{ base: "normal", md: "tight", }}
                >
                  {indexData.block2.h2_1}{" "}
                  <Text
                    display={{ base: "block", lg: "inline", }}
                    pr={{ md: "none", lg: 1 }}
                    pb={{ base: 2, md: 3, lg: "none" }}
                    bgClip="text"
                    bgGradient={mode("linear(to-r, green.400,blue.600)", "linear(to-r, blue.300,green.500)")}
                    fontWeight="extrabold"
                  >
                    {indexData.block2.h2_2}
                  </Text>{" "}
                </Heading>
                <Text px={{ base: 0, lg: 24, }} mb={4} fontSize={{ base: "lg", md: "xl", }} color={mode("gray.600", "gray.300")}>
                  {indexData.block2.txt_1} <br />{indexData.block2.txt_2}
                </Text>
              </Box>
            </Box>
            <Container px={{ base: '6', lg: '0' }} maxW={'container.md'}>
              {/* Remove window.open on mobile using breakpoint values */}
              <NextLink href={'https://ochoa.pro/img/index/Basic-IoT-Enviroment.png'} passHref>
                <Link isExternal>
                  <Image
                    // onClick={() => window.open("https://ochoa.pro/img/index/Basic-IoT-Enviroment.png")}
                    userSelect={'none'}
                    w="full"
                    rounded="3xl"
                    border={'1px'}
                    _hover={{ shadow: 'md', borderColor: 'blue.500' }}
                    borderColor={mode('gray.400', 'gray.600')}
                    // shadow="md"
                    src={diagimg.src}
                    alt="Basic IoT Enviroment"
                  />
                </Link>
              </NextLink>
            </Container>

            <Box minH={'5rem'} />

            <Box px={{ base: '6', lg: '10' }}>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature1
                  icon={<Icon as={FcServices} w={10} h={10} />}
                  title={indexData.block3.f1t}
                  text={indexData.block3.f1b}

                />
                <Feature1
                  icon={<Icon as={FcApproval} w={10} h={10} />}
                  title={indexData.block3.f2t}
                  text={indexData.block3.f2b}

                />
                <Feature1
                  icon={<Icon as={FcLock} w={10} h={10} />}
                  title={indexData.block3.f3t}
                  text={indexData.block3.f3b}
                />
              </SimpleGrid>
            </Box>

            <Box minH={'5rem'} />

            <Container maxW={'container.xl'}>
              <SimpleGrid px={{ base: '2', xl: '10' }} columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                  {/* <Text
                    textTransform={'uppercase'}
                    color={'blue.400'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={mode('blue.50', 'blue.900')}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}
                  >
                    Our Story
                  </Text> */}
                  <Heading pl={2} pt={8}>{indexData.block4.title}</Heading>
                  {/* <Heading>A digital Product design agency</Heading> */}
                  <Text pl={2} color={'gray.500'} fontSize={'lg'}>
                    {indexData.block4.description}
                  </Text>
                  <Stack
                    spacing={2}
                    divider={
                      <StackDivider
                        borderColor={mode('gray.100', 'gray.700')}
                      />
                    }>
                    <Feature2
                      refx={'/services/development'}
                      icon={
                        <Icon as={IoPeopleOutline} color={mode('blue.600', 'blue.300')} w={5} h={5} />
                      }
                      iconBg={mode('blue.100', 'blue.900')}
                      text={indexData.block4.srvc1}
                    />
                    <Feature2
                      refx={'/services/digitalization'}
                      icon={<Icon as={IoRocketOutline} color={mode('green.600', 'green.300')} w={5} h={5} />}
                      iconBg={mode('green.100', 'green.900')}
                      text={indexData.block4.srvc2}
                    />
                    <Feature2
                      refx={'/services/consultation'}
                      icon={
                        <Icon as={IoBulbOutline} color={mode('orange.600', 'orange.300')} w={5} h={5} />
                      }
                      iconBg={mode('orange.100', 'orange.900')}
                      text={indexData.block4.srvc3}
                    />
                  </Stack>
                </Stack>
                <Flex>
                  <Image
                    rounded={"2xl"}
                    border='1px'
                    borderColor={'gray.600'}
                    // rounded={'xl'}
                    alt={'feature image'}
                    src={iot.src}
                    objectFit={'cover'}
                    userSelect={'none'}
                    pointerEvents={'none'}
                  />
                </Flex>
              </SimpleGrid>
            </Container>

            <Box minH={'5rem'} />

            <LvlUp />

            <Box minH={'5rem'} />

          </>
        )
      })}
    </>
  );
}

export default IndexPage;