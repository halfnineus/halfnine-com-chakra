import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  // Image,
  GridItem,
  VStack,
  Flex,
  Divider,
  Grid,
  SimpleGrid,
  Avatar,
  Stack,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo';


import aboutdat from '../assets/about.json'
import Link from 'next/link';


const BuiltWith = (children: any) => {
  return (
    <Box
      maxW={{ base: 'full', sm: '200px', md: '200px', lg: '200px', }}
      w={'full'}
      overflow={'hidden'}
      rounded={'md'}
      p={2}
      maxH={'auto'}
      opacity={0.8}
    >
      <Box alignItems={'center'} alignContent={'center'} h={'auto'} m={-2} pos={'relative'}>
        {/* <Image userSelect={'none'} pointerEvents={'none'} alt={'Img_Logo'} src={children.img} /> */}
      </Box>
    </Box>
  )
}

const FeatureBlog = (children: any) => {
  return (
    <Link href={children.page} target={'_blank'}>
      <Box
        _hover={{ transform: 'scale(1.02)', boxShadow: "xl" }}
        transition={'all 0.1s ease-in-out'}
        role={'group'}
        maxW={'445px'}
        w={'full'}
        h={'full'}
        bg={'white'}
        boxShadow={'md'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={children.imgsrc}
            layout={'fill'}
            alt={''}
          />
        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          <Heading
            color={'gray.700'}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {children.title}
          </Heading>
          <Text color={'gray.500'}>
            {children.text}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'/img/stickman.jpg'}
            name={'Dan Ochoa'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Dan Ochoa</Text>
            <Text color={'gray.500'}>{children.date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Link >

  );
}


const IndexAbout = () => {
  const { locale } = useRouter()
  return (
    <>
      {aboutdat.data.filter(p => p.locale === locale).map((aboutData, i) => {
        return (
          <>
            <NextSeo
              title='About Us | Development Services & Consulting - Automating all Things | Ochoa'
              description="Our team is built with leading experience on some of the world's leading companies technologies."
              canonical="https://ochoa.pro/about"
              languageAlternates={[
                {
                  hrefLang: 'es',
                  href: 'https://ochoa.pro/es/about',
                }
              ]}
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} pt={4} mx="auto">
              <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', }} gap={4}>
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

              <Divider my={16} />

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
                </GridItem>
                <GridItem colSpan={1}>
                  <VStack display={{ base: 'none', sm: 'flex' }} alignItems="flex-end" spacing="20px">
                    <Heading>{aboutData.block2.heading}</Heading>
                  </VStack>
                </GridItem>
              </Grid>

              <Divider my={16} />
              <Heading pb={6} textAlign={'center'}>{aboutData.block3.heading}</Heading>
              <Center>
                {/* <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)', }} gap={6}> */}
                <SimpleGrid
                  columns={{ base: 1, sm: 1, md: 1, lg: 3 }}
                  // mt="16"
                  spacing={'6'}
                >
                  <FeatureBlog
                    title={'Why Is IoT Considered A Disruptive Technology'}
                    text={'Internet of Things and Industrial Internet have ushered in a new era of industrial automation that has opened up new business opportunities and unlocked the potential of control system development.'}
                    page={'/pages/the-disruptive-technology-of-iot-and-its-impact-on-the-future'}
                    date={'Nov 28, 2022 · 12min read'}
                    imgsrc={'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={'Unlocking The Potential of Industrial IoT'}
                    text={'Industrial IIoT is a network of devices that can exchange data through internet. It is an ecosystem where objects such as industrial machines are connected with sensors and software so that they can exchange data by the internet.'}
                    page={'/pages/the-benefits-of-implementing-industrial-iot-and-control-systems'}
                    date={'Nov 29, 2022 · 12min read'}
                    imgsrc={'https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={'Achieve the best IIoT and ICS results'}
                    text={'From predictive maintenance and asset tracking to automated process control and real-time data analytics, these technologies provide powerful tools for manufacturers to increase productivity.'}
                    page={'/pages/how-to-leverage-industrial-iot-and-control-systems-for-the-best-results'}
                    date={'Nov 30, 2022 · 12min read'}
                    imgsrc={'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  {/* </Grid> */}
                </SimpleGrid>
              </Center>

              {/* <Divider mt={8} mb={8} />
              <Box textAlign="center">
                <Heading size="lg" mb="4">
                  Be the first on Our Clients List:
                </Heading> */}
              {/* <Text maxW="2xl" mx="auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua elit consectetur adipiscing.
                </Text> */}
              {/* </Box> */}
              {/* <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
                mt="8"
                spacing={'6'}
              >
                <BuiltWith img={'/img/about/logo.png'} />
                <BuiltWith img={'/img/about/logo.png'} />
                <BuiltWith img={'/img/about/logo.png'} />
                <BuiltWith img={'/img/about/logo.png'} />
                <BuiltWith img={'/img/about/logo.png'} />
              </SimpleGrid> */}



              <Divider my={16} />
            </Box>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
