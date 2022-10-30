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
  chakra,
  Icon,
  Center,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import router, { useRouter } from "next/router"
import { NextSeo } from 'next-seo';


import aboutdat from '../assets/about.json'

import { MdTouchApp, MdCheckCircleOutline, MdAvTimer, MdMoney, MdOutlineStars } from 'react-icons/md'
import { GiReturnArrow } from 'react-icons/gi'

import img1 from '../public/img/about/portfolio1.png'
import img2 from '../public/img/about/portfolio2.png'
import img3 from '../public/img/about/portfolio3.png'
import img4 from '../public/img/about/portfolio4.png'
import img5 from '../public/img/about/portfolio5.png'
import img6 from '../public/img/about/portfolio6.png'
import img1x from '../public/img/about/logo1.png'
import img2x from '../public/img/about/logo2.png'
import img3x from '../public/img/about/logo3.png'
import img4x from '../public/img/about/logo4.png'
import img5x from '../public/img/about/logo5.png'


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
      _hover={{ bg: mode("brand.50", "brand.800"), boxShadow: 'md', }}
      cursor={'pointer'}
      // boxShadow={'md'}
      border='1px'
      borderColor={mode('gray.400', 'gray.600')}
      rounded={'md'}
      // boxShadow={'md'}
      p={2}
      overflow={'hidden'}
      maxH={'auto'}
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
    <Box border={'1px'} borderColor={mode('gray.400', 'gray.600')} w={'full'} bg={mode('gray.50', 'gray.700')} boxShadow={'sm'} rounded={'md'} p={6} overflow={'hidden'}>
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

      {/* <chakra.h3 fontSize="xl" fontWeight="600"> */}
      <chakra.h3
        fontSize={"lg"}
        mb={2}
        fontWeight="semibold"
        lineHeight="shorter"
        _light={{ color: "gray.900" }}
      >
        {heading}
      </chakra.h3>
      <chakra.p fontSize="md" color="gray.600" _dark={{ color: "gray.400" }}>
        {text}
      </chakra.p>
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
              title='About Us | Development Services & Consulting - All your needs with custom technology.'
              description="About Us | Our team is built with experience on the world's leading companies and technology."
              canonical="https://ochoa.pro/about"
              languageAlternates={[
                {
                  hrefLang: 'es',
                  href: 'https://ochoa.pro/es/about',
                },
                {
                  hrefLang: 'en',
                  href: 'https://ochoa.pro/en/about',
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
                <Text pt={2} fontSize={'lg'} color={'gray.500'}>{"Developed by us in Orlando, FL. and manufactured in Hong Kong, SAR."}</Text>
                <SimpleGrid pt={6} columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={'6'}>
                  <Featurex img={img1.src} title={"Production Automation Board"} />
                  <Featurex img={img2.src} title={"Production Automation Board"} />
                  <Featurex img={img3.src} title={"Production Automation Board"} />
                  <Featurex img={img4.src} title={"Production Automation Board"} />
                  <Featurex img={img5.src} title={"Production Automation Board"} />
                  <Featurex img={img6.src} title={"Production Automation Board"} />
                </SimpleGrid>
              </Box>

              <Divider mt={8} mb={8} />

              <Heading textAlign={'center'} fontWeight="bold" maxW="xlg" mx="auto">
                {"Be the first on Our Clients List:"}
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} mt="8" spacing={'6'}>
                <BuiltWith img={img1x.src} />
                <BuiltWith img={img2x.src} />
                <BuiltWith img={img3x.src} />
                <BuiltWith img={img4x.src} />
                <BuiltWith img={img5x.src} />
              </SimpleGrid>
              <Stack pt={"8"} direction={{ base: "column", sm: "row", }} spacing={2} justifyContent={{ sm: "left", md: "center", }}>
                <Button size={'lg'} colorScheme={'brand'}/* rightIcon={<FiMail />} */ onClick={() => router.push("/contact")}>
                  {"Contact Us"}
                </Button>
              </Stack>

              <Divider mt={8} mb={5} />
            </Container>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
