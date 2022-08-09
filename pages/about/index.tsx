import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  Image,
  GridItem,
  Container,
  VStack,
  Flex,
  Divider,
  Grid,
  chakra,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Head from 'next/head'
import { useRouter } from "next/router"

import aboutdat from '../../assets/about.json'

import img1 from './brands/1.png'
import img2 from './brands/2.png'
import img3 from './brands/3.png'
import img4 from './brands/4.png'
import img5 from './brands/5.png'

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};


const IndexAbout = () => {
  const { locale } = useRouter()
  const BuiltWith = (children: any) => {
    return (
      <Box
        maxW={'220px'}
        w={'full'}
        bg={mode('gray.50', 'gray.700')}
        boxShadow={'md'}
        rounded={'md'}
        p={2}
        overflow={'hidden'}
        maxH={'auto'}
      >
        <Box h={'auto'} bg={mode('gray.100', 'gray.300')} mt={-2} mx={-2} mb={2} pos={'relative'}>
          <Image userSelect={'none'} pointerEvents={'none'} alt={'img'} src={children.img} />
        </Box>
        <Stack>
          <Heading color={mode('gray.700', 'white')} fontSize={'2xl'}>
            {children.tech}
          </Heading>
        </Stack>
      </Box>
    )
  }
  return (
    <>
      {aboutdat.data.filter(p => p.locale === locale).map((aboutData, i) => {
        return (
          <>
            <NextSeo title={aboutData.head.title} description={aboutData.head.description} />
            <Box as={Container} maxW="7xl" mt={14} p={4}>
              {/* <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', }} gap={4}>
                <GridItem colSpan={1}>
                  <VStack alignItems="flex-start" spacing="20px">
                    <Heading>{aboutData.block1.heading}</Heading>
                  </VStack>
                </GridItem>
                <GridItem>
                  <Flex><Text>{aboutData.block1.i1}</Text></Flex>
                  <Divider mt={4} mb={4} />
                  <Flex><Text>{aboutData.block1.i2}</Text></Flex>
                </GridItem>
              </Grid>

              <Divider mt={16} mb={16} /> */}


              <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', }} gap={4}>
                <GridItem display={{ base: 'flex', sm: 'none' }} colSpan={1}>
                  <VStack alignItems="flex-end" spacing="20px">
                    <Heading>{aboutData.block2.heading}</Heading>
                  </VStack>
                </GridItem>
                <GridItem>
                  <Flex><Text>{aboutData.block2.i1}</Text></Flex>
                  <Divider mt={2} mb={2} />
                  <Flex><Text>{aboutData.block2.i2}</Text></Flex>
                  <Divider mt={2} mb={2} />
                  <Flex><Text>{aboutData.block2.i3}</Text></Flex>
                  {/* <Divider mt={2} mb={2} />
                  <Flex><Text>{aboutData.block2.i4}</Text></Flex> */}
                  {/* <Divider mt={2} mb={2} />
                  <Flex><Text>{aboutData.block2.i5}</Text></Flex> */}
                </GridItem>
                <GridItem colSpan={1}>
                  <VStack display={{ base: 'none', sm: 'flex' }} alignItems="flex-end" spacing="20px">
                    <Heading>{aboutData.block2.heading}</Heading>
                  </VStack>
                </GridItem>
              </Grid>
              <Divider mt={16} mb={4} />

              {/* 
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '16' }}>
                <Feature
                  heading={'Lorem ipsum'}
                  text={'Short text describing one of you features/service'}
                />
                <Feature
                  heading={'Lorem ipsum'}
                  text={'Short text describing one of you features/service'}
                />
                <Feature
                  heading={'Lorem ipsum'}
                  text={'Short text describing one of you features/service'}
                />
                <Feature
                  heading={'Fourth Feature'}
                  text={'Short text describing one of you features/service'}
                />
              </Grid>
              <Divider mt={16} mb={16} /> */}


            </Box>
            <Box as="section" pt={'6'} pb={16} maxW={{ base: 'xl', md: '7xl' }} textAlign={{ md: 'center', sm: 'center', base: 'start' }} mx={"auto"} px={{ base: '6', md: '8' }}>
              <Heading fontWeight="bold" maxW="xlg" mx="auto">
                {`Made with`}
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} mt="8" spacing={'6'}>
                <BuiltWith tech={'Node.js'} img={img1.src} />
                <BuiltWith tech={'React'} img={img2.src} />
                <BuiltWith tech={'Next.js'} img={img3.src} />
                <BuiltWith tech={'SQLite'} img={img4.src} />
                <BuiltWith tech={'Nodemailer'} img={img5.src} />
              </SimpleGrid>
            </Box>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
