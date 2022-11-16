import {
  Box,
  Heading,
  Text,
  useColorModeValue as mode,
  Image,
  GridItem,
  Container,
  VStack,
  Flex,
  Divider,
  Grid,
  Center,
  SimpleGrid,
} from '@chakra-ui/react';
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo';


import aboutdat from '../assets/about.json'


const BuiltWith = (children: any) => {
  return (
    <Box
      maxW={{ base: 'full', sm: '200px', md: '200px', lg: '200px', }}
      w={'full'}
      bg={mode('white', 'gray.700')}
      _hover={{ transform: 'scale(1.02)', opacity: '1', boxShadow: 'sm', bg: 'gray.50', borderColor: mode('gray.100', 'gray.600') }}
      cursor={'pointer'}
      borderColor={mode('gray.50', 'gray.600')}
      rounded={'md'}
      p={2}
      overflow={'hidden'}
      maxH={'auto'}
      opacity={0.8}
    >
      <Center>
        <Box alignContent={'center'} h={'auto'} m={-2} pos={'relative'}>
          <Image userSelect={'none'} pointerEvents={'none'} alt={'img'} src={children.img} />
        </Box>
      </Center>
    </Box>
  )
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
            {/* <Container maxW="container.xl" pt={6} pb={4} px={{ base: '4', xl: '10' }}> */}
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

              <Divider mt={16} mb={16} />

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

              <Divider mt={8} mb={8} />

              <Box textAlign="center">
                <Heading size="lg" mb="4">
                  Be the first on Our Clients List:
                </Heading>
                {/* <Text maxW="2xl" mx="auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua elit consectetur adipiscing.
                </Text> */}
              </Box>
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
                mt="8"
                spacing={'6'}
              >
                <BuiltWith img={'/img/about/logo.png'} />
                <BuiltWith img={'/img/about/logo.png'} />
                <BuiltWith img={'/img/about/logo.png'} />
                <BuiltWith img={'/img/about/logo.png'} />
                <BuiltWith img={'/img/about/logo.png'} />
              </SimpleGrid>
              <Divider mt={8} mb={5} />
            </Box>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
