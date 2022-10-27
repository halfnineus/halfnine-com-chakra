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
  chakra,
} from '@chakra-ui/react'

import ximg from '../public/img/index/x.jpg'
import diagimg from '../public/img/index/diagram.jpg'
import indexdat from '../assets/index.json'
import { FcAssistant, FcSynchronize, FcInTransit } from 'react-icons/fc';
import { FiExternalLink } from "react-icons/fi";

import { ReactElement } from 'react';
interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
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
  return (
    <>
      {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
        return (
          <>
            <Box key={i} as="section" pb={{ base: "none", lg: "12" }} pos="relative" px={{ base: '6', lg: '10' }}>
              <Box maxW={"100%"} mx="auto">
                <Box maxW={{ lg: 'md', xl: 'xl' }} pt={{ base: '12', lg: '8' }} pb={{ base: '16', lg: '40' }}>
                  <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
                    {indexData.block1.h1_1}{' '}
                    <Box as="mark" color={mode('blue.600', 'blue.300')} bg="transparent">{indexData.block1.h1_2}</Box>
                  </Heading>
                  <Text mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
                    {indexData.block1.txt} <Button userSelect={'text'} onClick={() => router.push("/our-approach/agile")} fontSize="xl" fontWeight="medium" color={'blue.400'} variant={'link'}>{indexData.block1.txturl}</Button>.
                  </Text>
                  <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
                    <Button onClick={() => router.push('/contact')} size="md" colorScheme={'brand'} shadow="base" fontSize="md">
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

            <Box minH={'5rem'} />

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
                  <Button colorScheme={'brand'} rightIcon={<FiMail />} onClick={onOpen}>
                    {indexData.block2.button}
                  </Button>
                </Stack> */}
              </Box>
            </Box>
            {/* <Box px={{ base: '6', lg: '10' }} w={{ base: "full", lg: 2 / 4 }} mx="auto" textAlign="center"> */}
            <Container maxW={'container.md'}>
              <Image cursor={'pointer'} onClick={() => window.open("https://ochoa.pro/img/index/diagram.jpg")} userSelect={'none'} w="full" rounded="3xl" border={'1px'} shadow="lg" src={diagimg.src} alt="Ready to consider options" />
            </Container>
            {/* </Box> */}

            <Box minH={'5rem'} />

            <Box px={{ base: '6', lg: '10' }}>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                  icon={<Icon as={FcAssistant} w={10} h={10} />}
                  title={'Support'}
                  text={
                    '!!Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                  }
                />
                <Feature
                  icon={<Icon as={FcSynchronize} w={10} h={10} />}
                  title={'!!Unlimited'}
                  text={
                    '!!Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                  }
                />
                <Feature
                  icon={<Icon as={FcInTransit} w={10} h={10} />}
                  title={'Delivery'}
                  text={
                    '!!Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                  }
                />
              </SimpleGrid>
            </Box>

            <Box minH={'5rem'} />



            <Box minH={'5rem'} />


            {/* <Box minH={'5rem'} /> */}
          </>
        )
      })}
    </>
  );
}

export default IndexPage;