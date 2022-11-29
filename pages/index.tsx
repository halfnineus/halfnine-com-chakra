// Industrial IoT and Control Systems Automation Development and Consulting services

import React from 'react'
import { useRouter } from "next/router"

import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Flex,
  Image,
  Container,
  SimpleGrid,
  Icon,
  StackDivider,
  Center,
  keyframes,
} from '@chakra-ui/react'

import indexdat from '../assets/index.json'

import { FcApproval, FcServices, FcLock, } from 'react-icons/fc';
import { IoPeopleOutline, IoRocketOutline, IoBulbOutline, } from 'react-icons/io5';
import { ChevronRightIcon } from '@chakra-ui/icons'

import { ReactElement } from 'react';
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { AiOutlineSolution } from 'react-icons/ai';
import { BiBrain } from 'react-icons/bi';
import { FaRegHandshake } from 'react-icons/fa';
import { GiLeapfrog } from 'react-icons/gi';

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
      <Link href={refx}>
        <Stack
          _hover={{ textColor: 'blue.500', bg: 'blue.50', borderColor: 'blue.50', cursor: 'pointer' }}
          role={'group'}
          direction={'row'}
          align={'center'}
          p={2}
          rounded={'xl'}
          border={'1px'}
          borderColor={'gray.100'}
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
    </>
  );
};

interface FeatureiProps {
  icon: React.ReactElement
  title: string
  children: React.ReactNode
}


export const Featurei = (props: FeatureiProps) => {
  const { title, children, icon } = props
  return (
    <Box>
      <Box color={"blue.600"} fontSize="2.5rem">
        {icon}
      </Box>
      <Stack mt="6">
        <Text as="h3" fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text pr="6" lineHeight="tall" color={"gray.600"}>
          {children}
        </Text>
      </Stack>
    </Box>
  )
}

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
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};


const IndexPage = () => {
  const { locale } = useRouter()
  const router = useRouter()

  const bounce = keyframes`
    0%   { background-color: #0BC5EA }
    25%  { background-color: #48BB78 }
    50%  { background-color: #9F7AEA }
    75%  { background-color: #48BB78 }
    100% { background-color: #0BC5EA }
  `
  return (
    <>
      {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
        return (
          <>
            <NextSeo
              title={indexData.head.title}
              description={indexData.head.description}
              canonical="https://ochoa.pro"
              languageAlternates={[
                {
                  hrefLang: 'es',
                  href: 'https://ochoa.pro/es',
                }
              ]}
            />
            <Box key={i} as="section" pb={{ base: "none", lg: "12" }} pos="relative" px={{ base: '4', xl: '10' }}>
              <Box maxW={"100%"} mx="auto">
                <Box maxW={{ lg: 'md', xl: 'xl' }} pt={{ base: '6', lg: '8' }} pb={{ base: '16', lg: '40' }}>
                  <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
                    {indexData.block1.h1_1}{' '}
                    <Box as="mark" color={'blue.600'} bg="transparent">{indexData.block1.h1_2}</Box>
                  </Heading>
                  <Text mt={4} fontSize="xl" fontWeight="medium" color={'gray.600'}>
                    {indexData.block2.txt_1}
                  </Text>
                  {/* <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8"> */}
                  <Link href={"/contact"}>
                    <Button mt={8} p={5} size="md" colorScheme={'blue'} shadow="base" fontSize="md">
                      {indexData.block1.button}
                    </Button>
                  </Link>
                  {/* </Stack> */}
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
                <Image userSelect={'none'} pointerEvents={'none'} height="100%" width="100%" objectFit="cover" src={'/img/index/x.jpg'} alt="Base" />
              </Box>
            </Box>


            <Box minH={'5rem'} />

            <Box pb={2} px={{ base: '4', xl: '10' }} mx="auto">
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
                    bgClip="text"
                    display={"inline-block"}
                    pr={{ md: "none", lg: 1 }}
                    pb={{ base: 2, md: 3, lg: "none" }}
                    // bgGradient={"linear(to-r, green.400, blue.600)"}
                    animation={`${bounce} 5s ease infinite`}
                    bgImage={"linear-gradient(to right, #2b6cb0 32%, transparent)"}
                    fontWeight="extrabold"
                  >
                    {indexData.block2.h2_2}
                  </Text>{" "}
                </Heading>
                {/* <Text px={{ base: 0, lg: 24, }} mb={4} fontSize={{ base: "lg", md: "xl", }} color={"gray.700"}>
                  {indexData.block2.txt_1}
                </Text> */}
                <Text px={{ base: 0, lg: 24, }} mb={4} fontSize={{ base: "lg", md: "xl", }} color={"gray.700"}>
                  {indexData.block1.txt}{" "}
                  <Link href={"/our-approach"}>
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
                  .
                  {/* <NextLink href={"/our-approach/agile"}></NextLink> */}
                </Text>
              </Box>
            </Box >
            <Center px={{ base: '4', lg: '0' }}>
              {/* <Container px={{ base: '6', lg: '0' }} maxW={'container.md'}> */}
              {/* Remove window.open on mobile using breakpoint values */}
              <Link href={'https://ochoa.pro/img/index/Basic-IoT-Enviroment.png'} target={'_blank'}>
                <Image
                  // mx="auto"
                  // px={{ base: '4', lg: '0' }}
                  maxW={'container.md'}
                  userSelect={'none'}
                  w="full"
                  rounded="3xl"
                  border={'1px'}
                  _hover={{ shadow: 'md', borderColor: 'blue.500', transform: 'scale(1.005)' }}
                  borderColor={'gray.400'}
                  // shadow="md"
                  src={'/img/index/diagram.jpg'}
                  alt="Basic IoT Enviroment"
                />
              </Link>
            </Center>
            {/* </Container> */}

            <Box minH={'5rem'} />

            <Box px={{ base: '4', xl: '10' }}>
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
            </Box >

            <Box minH={'5rem'} />

            <Container px={{ base: '4', xl: '10' }} maxW={'container.xl'}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                  {/* <Text
                    textTransform={'uppercase'}
                    color={'blue.400'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={'blue.50'}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}
                  >
                    Our Story
                  </Text> */}
                  <Heading pl={{ xl: 2, md: 0 }} pt={8}>{indexData.block4.title}</Heading>
                  <Text pl={{ xl: 2, md: 0 }} color={'gray.500'} fontSize={'lg'}>
                    {indexData.block4.description}
                  </Text>
                  <Stack
                    spacing={2}
                    divider={
                      <StackDivider
                        borderColor={'gray.100'}
                      />
                    }>
                    <Feature2
                      refx={'/services/development'}
                      icon={
                        <Icon as={IoPeopleOutline} color={'blue.600'} w={5} h={5} />
                      }
                      iconBg={'blue.100'}
                      text={indexData.block4.srvc1}
                    />
                    <Feature2
                      refx={'/services/digitalization'}
                      icon={<Icon as={IoRocketOutline} color={'green.600'} w={5} h={5} />}
                      iconBg={'green.100'}
                      text={indexData.block4.srvc2}
                    />
                    <Feature2
                      refx={'/services/consultation'}
                      icon={
                        <Icon as={IoBulbOutline} color={'orange.600'} w={5} h={5} />
                      }
                      iconBg={'orange.100'}
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
                    src={'/img/index/iot.jpg'}
                    objectFit={'cover'}
                    userSelect={'none'}
                    pointerEvents={'none'}
                  />
                </Flex>
              </SimpleGrid>
            </Container>

            <Box minH={'5rem'} />

            <Box px={{ base: '4', xl: '10' }}>
              <Box mx="auto">
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 4 }}
                  spacing={{ base: '12', md: '8', lg: '2' }}
                // mt={{ base: '12', md: '12' }}
                >
                  <Featurei icon={<FaRegHandshake />} title={indexData.features.f1t}>
                    {indexData.features.f1d}
                  </Featurei>
                  <Featurei icon={<BiBrain />} title={indexData.features.f2t}>
                    {indexData.features.f2d}
                  </Featurei>
                  <Featurei icon={<GiLeapfrog />} title={indexData.features.f3t}>
                    {indexData.features.f3d}
                  </Featurei>
                  <Featurei icon={<AiOutlineSolution />} title={indexData.features.f4t}>
                    {indexData.features.f4d}
                  </Featurei>
                </SimpleGrid>
              </Box >
            </Box >
            <Box minH={'5rem'} />

          </>
        )
      })}
    </>
  );
}

export default IndexPage;