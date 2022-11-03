import {
  Box,
  Heading,
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
  Icon,
  Center,
  Button,
  SimpleGrid,
  Link,
  HStack,
} from '@chakra-ui/react';
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';


import aboutdat from '../assets/about.json'

import { MdTouchApp, MdCheckCircleOutline, MdAvTimer, MdMoney, MdOutlineStars } from 'react-icons/md'
import { GiReturnArrow } from 'react-icons/gi'

interface FeatureProps {
  heading: string;
  text: string;
  color: string;
  icon: any;
}

const BuiltWith = (children: any) => {
  return (
    <Box
      maxW={{ lg: '220px', base: 'full' }}
      w={'full'}
      bg={mode('gray.50', 'gray.700')}
      _hover={{ /*bg: mode("brand.50", "brand.800"),*/ transform: 'scale(1.05)', opacity: '0.9', boxShadow: 'sm', borderColor: mode('gray.100', 'gray.600') }}
      // cursor={'pointer'}
      // boxShadow={'md'}
      border='1px'
      borderColor={mode('gray.50', 'gray.600')}
      rounded={'md'}
      // boxShadow={'md'}
      p={2}
      overflow={'hidden'}
      maxH={'auto'}
      opacity={0.6}
    >
      <Center>
        <Box alignContent={'center'} h={'auto'} m={-2} pos={'relative'}>
          <Image userSelect={'none'} pointerEvents={'none'} alt={'img'} src={children.img} />
        </Box>
      </Center>
    </Box>
  )
}

const Featurex = (props: any) => {
  return (
    <Box border={'1px'} borderColor={mode('gray.200', 'gray.600')} w={'full'} bg={mode('gray.50', 'gray.700')} boxShadow={'sm'} rounded={'md'} p={6} overflow={'hidden'}>
      <Box h={'auto'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image userSelect={'none'} pointerEvents={'none'} alt={'img'} src={props.img} />
      </Box>
      {/* <Stack> */}
      <Heading color={mode('gray.700', 'white')} fontSize={{ md: 'xl', sm: 'lg', base: 'xl' }}>
        {props.title}
      </Heading>
      {/* <Text color={'gray.500'}>
              {props.children}
          </Text> */}
      {/* </Stack> */}
    </Box>
  );
}

const Feature = ({ heading, text, color, icon }: FeatureProps) => {
  return (
    <GridItem>
      <HStack>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={12}
          h={12}
          mb={4}
          rounded="full"
          color={`${color}.600`}
          _dark={{ color: `${color}.100`, bg: `${color}.600` }}
          bg={`${color}.100`}
        >
          <Icon
            boxSize={7}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {icon}
          </Icon>
        </Flex>

        {/* <Heading fontSize="xl" fontWeight="600"> */}
        <Heading
          as={'h3'}
          fontSize={"lg"}
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          _light={{ color: "gray.900" }}
          pb={4}
          pl={1}
        >
          {heading}
        </Heading>
      </HStack>
      <Text fontSize="md" color="gray.600" _dark={{ color: "gray.400" }}>
        {text}
      </Text>
    </GridItem>
  );
};


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
            <Container maxW="container.xl" pt={8} pb={4} px={{ base: '6', lg: '10' }}>
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

              <Divider mt={12} mb={12} />

              <Stack spacing={5} mb={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>{"Our Values"}</Heading>
                {/* <Text color={mode('gray.600', 'gray.400')} fontSize={'xl'}>{"indexData.block4.txt"}</Text> */}
              </Stack>

              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '10' }}>
                <Feature
                  color="blue"
                  heading={'Quality'}
                  text={'Focus on expertise without overengineering.'}
                  icon={<MdCheckCircleOutline size={20} />}
                />
                <Feature
                  color="yellow"
                  heading={'Availability'}
                  text={'Meet the demand with supply.'}
                  icon={<MdAvTimer size={20} />}
                />
                <Feature
                  color="gray"
                  heading={'Transparency'}
                  text={'Access to every resource at any step of the process.'}
                  icon={<MdTouchApp size={20} />}
                />
                <Feature
                  color="green"
                  heading={'Value'}
                  text={'Building the right teams to reach return on Investment.'}
                  icon={<MdMoney size={20} />}
                />
                <Feature
                  color="pink"
                  heading={'Flexibility'}
                  text={'Change your priorities without worries.'}
                  icon={<GiReturnArrow size={20} />}
                />
                <Feature
                  color="purple"
                  heading={'Talent'}
                  text={'Not only the right team, but the best for the job.'}
                  icon={<MdOutlineStars size={20} />}
                />
              </Grid>

              <Divider mt={12} mb={12} />

              <Box key={i} as="section" maxW={{ base: 'xl', md: 'container.xl' }} textAlign={'center'} mx={"auto"} >
                <Heading textAlign={'center'} fontWeight="bold" maxW="xlg" mx="auto">
                  {"IoT Hardware made for and used by Industry Leading Companies"}
                </Heading>
                <Text pt={2} fontSize={'lg'} color={mode('gray.600', 'gray.400')}>{"Developed by us in Orlando, FL. and manufactured in Hong Kong, SAR."}</Text>
                <SimpleGrid pt={6} columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={'6'}>
                  <Featurex img={'/img/about/portfolio1.png'} title={"Production Automation Board"} />
                  <Featurex img={'/img/about/portfolio2.png'} title={"Production Automation Board"} />
                  <Featurex img={'/img/about/portfolio3.png'} title={"Production Automation Board"} />
                  <Featurex img={'/img/about/portfolio4.png'} title={"Production Automation Board"} />
                  <Featurex img={'/img/about/portfolio5.png'} title={"Production Automation Board"} />
                  <Featurex img={'/img/about/portfolio6.png'} title={"Production Automation Board"} />
                </SimpleGrid>
              </Box>

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
                // opacity={0.8}
                columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
                mt="8"
                spacing={'6'}
              >
                <BuiltWith img={'/img/about/logo3.png'} />
                <BuiltWith img={'/img/about/logo5.png'} />
                <BuiltWith img={'/img/about/logo1.png'} />
                <BuiltWith img={'/img/about/logo4.png'} />
                <BuiltWith img={'/img/about/logo2.png'} />
              </SimpleGrid>
              <NextLink href={"/contact"} passHref>
                <Link cursor={'inherit'} _hover={{ textDecorationLine: 'none' }}>
                  <Stack pt={"8"} direction={{ base: "column", md: "row", }} spacing={2} justifyContent={{ sm: "left", md: "center", }}>
                    <Button size={'lg'} colorScheme={'brand'}/* rightIcon={<FiMail />} onClick={() => router.push("/contact")} */>
                      {"Contact Us"}
                    </Button>
                  </Stack>
                </Link>
              </NextLink>
              <Divider mt={8} mb={5} />
            </Container>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
