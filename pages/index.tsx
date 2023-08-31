import React from 'react'
import { useRouter } from "next/router"

import {
  Box,
  Heading,
  Stack,
  Text,
  Flex,
  SimpleGrid,
  Icon,
  Center,
  Image,
} from '@chakra-ui/react'
import indexdat from '../assets/index.json'

import { ReactElement } from 'react'
import { NextSeo } from 'next-seo'

import { GiConqueror } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTeamFill } from 'react-icons/ri'
import { HiOutlinePuzzlePiece } from 'react-icons/hi2'
import { FcApproval, FcServices, FcLock, } from 'react-icons/fc'
import { DevPractices, FadeInBox, MStats } from '../components'

interface FeatureProps1 {
  title: string;
  text: string;
  icon: ReactElement;
}

interface FeatureB5Props {
  icon: React.ReactElement
  title: string
  children: React.ReactNode
}

export const FeatureB5 = ({ title, children, icon }: FeatureB5Props) => {
  return (
    <Box>
      <Flex>
        <Box color={"blue.600"} fontSize="2.8rem">
          {icon}
        </Box>
        <Center>
          <Text pl={5} as="h3" fontSize="lg" fontWeight="bold">
            {title}
          </Text>
        </Center>
      </Flex>
      <Text px={16} lineHeight="tall" color={"gray.600"}>
        {children}
      </Text>
    </Box>
  )
}

const Feature1 = ({ title, text, icon }: FeatureProps1) => {
  return (
    <Box>
      <Flex>
        <Stack>
          <Center
            w={16}
            h={16}
            rounded={'full'}
            bg={'#fbfbfb'}
          >
            {icon}
          </Center>
        </Stack>
        <Stack pl={6} spacing={1} pt={3}>
          <Text display={'inline'} fontWeight={600}>{title}</Text>
          <Text  color={'gray.600'}>{text}</Text>
        </Stack>
      </Flex>
    </Box>
  );
};


const IndexPage = () => {
  const { locale } = useRouter()
  const filteredData = indexdat.data.filter((p) => p.locale === locale);
  return (
    <>
      {filteredData.map((indexData, index) => {
        return (
          <React.Fragment key={index}>
            <NextSeo
              title={indexData.head.title}
              description={indexData.head.description}
              canonical="https://www.halfnine.com"
              languageAlternates={[
                {
                  hrefLang: 'es',
                  href: 'https://www.halfnine.com/es',
                }
              ]}
              openGraph={{
                url: `https://www.halfnine.com/`,
                title: indexData.head.title,
                description: indexData.head.description
              }}
            />
            <Box maxW={'1520px'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} pt={4} mx="auto">
              <Box position={'relative'}>
                <Image alt='Background Image' src={'/img/index/indxbg.png'} loading={'lazy'} position="absolute" opacity={0.03} zIndex={-1} mx={-4} />
              </Box>
              <Box maxW={'container.xl'} mx={'auto'} pt={8}>
                <Box textAlign={"center"} >
                  <Heading as={'h1'} fontSize={{ base: "3xl", md: "5xl" }}>
                    {indexData.block1.h1_1}
                    <br />
                    {indexData.block1.h1_2}
                  </Heading>
                </Box>
              </Box>
              <Box as="hr" borderColor="blue.500" opacity={'0.9'} borderBottomWidth="3px" mx={'auto'} width={'128px'} my={4} />
              <Box maxW={'container.lg'} mx="auto" textAlign={"center"}>
                <Text px={{ base: 0, lg: 24, }} my={4} fontSize={{ base: "lg", md: "xl", }} color={"gray.700"}>
                  {indexData.block1.txt_1}
                </Text>
              </Box>
            </Box>

            <Box minH={{ base: '4rem', md: '8rem' }} />

            <Box bg={'#fbfbfb'} py={{ base: 16, md: 24 }}>
              <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                <FadeInBox fadeDirection='down' >
                  <MStats />
                </FadeInBox>
              </Box>
            </Box>

            <Box py={{ base: 16, md: 24 }} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
              <FadeInBox fadeDirection='down'>
                <Flex pb={4} direction="column-reverse">
                  <Box
                    as="hr"
                    bg="blue.500"
                    h="3px"
                    w="64px"
                    my={1}
                  />
                  <Heading>{indexData.block3.title}</Heading>
                </Flex>
                <SimpleGrid columns={1} spacing={12}>
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
              </FadeInBox>
            </Box>

            <Box bg={'#fbfbfb'} py={{ base: 16, md: 24 }}>
              <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx={'auto'}>
                <DevPractices />
              </Box>
            </Box>

            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" py={{ base: 16, md: 24 }}>
              <FadeInBox fadeDirection='down'>
                <Flex pb={4} direction="column-reverse">
                  <Box
                    as="hr"
                    bg="blue.500"
                    h="3px"
                    w="64px"
                    my={1}
                  />
                  <Heading>{indexData.features.title}</Heading>
                </Flex>
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 2 }}
                  spacing={16}
                >
                  <FeatureB5 icon={<RiTeamFill />} title={indexData.features.f1t}>
                    {indexData.features.f1d}
                  </FeatureB5>
                  <FeatureB5 icon={<RiLightbulbFlashLine />} title={indexData.features.f2t}>
                    {indexData.features.f2d}
                  </FeatureB5>
                  <FeatureB5 icon={<GiConqueror />} title={indexData.features.f3t}>
                    {indexData.features.f3d}
                  </FeatureB5>
                  <FeatureB5 icon={<HiOutlinePuzzlePiece />} title={indexData.features.f4t}>
                    {indexData.features.f4d}
                  </FeatureB5>
                </SimpleGrid>
              </FadeInBox>
            </Box>
          </React.Fragment>
        )
      })}
    </>
  );
}

export default IndexPage;