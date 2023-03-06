import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  GridItem,
  VStack,
  Flex,
  Divider,
  Grid,
  SimpleGrid,
  Avatar,
  Stack,
  Center,
  chakra,
  Icon,
} from '@chakra-ui/react';
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo';


import aboutdat from '../assets/about.json'
import Link from 'next/link';
import { BsFillFileEarmarkBarGraphFill, BsRecordCircle } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md';
import { SiCommonworkflowlanguage } from 'react-icons/si';
import { RiOrganizationChart } from 'react-icons/ri';


const Feature = (props: any) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Icon
          boxSize={10}
          // mt={1}
          // mr={2}
          color="blue.500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {props.icco}
        </Icon>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="bold"
          lineHeight="6"
          color="gray.900"
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color="gray.600">
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};


const FeatureBlog = (children: any) => {
  return (
    <Link href={children.page}>
      <Box
        _hover={{ transform: 'scale(1.02)', boxShadow: "xl" }}
        transition={'all 0.1s ease-in-out'}
        role={'group'}
        maxW={'400px'}
        w={'full'}
        h={'full'}
        bg={'white'}
        boxShadow={'md'}
        rounded={'xl'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'200px'}
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
        <Stack mt={2} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}>{`Created on: `}{children.date}</Text>
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
              title='About Us | Development Services & Consulting - Automating all Things | Zedir'
              description="Our team is built with leading experience on some of the world's leading companies technologies."
              canonical="https://www.zedir.com/about"
              languageAlternates={[
                {
                  hrefLang: 'es',
                  href: 'https://www.zedir.com/es/about',
                }
              ]}
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto">
              <Box pt={4} pb={20}>
                <Heading letterSpacing="tight" fontWeight="bold" pb={2}>{aboutData.block1.heading}</Heading>
                <Text textAlign={'justify'}>{aboutData.block1.i1}</Text>
              </Box>
            </Box>

            <Box bg={'gray.50'}>
              <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto">
                <SimpleGrid
                  py={20}
                  alignItems="center"
                  columns={{ base: 1, lg: 3 }}
                  spacingY={{ base: 10, lg: 32 }}
                  spacingX={{ base: 10, lg: 24 }}
                >
                  <Box alignSelf="start">
                    <Heading
                      mb={3}
                      fontWeight="bold"
                      // lineHeight="shorter"
                      letterSpacing="tight"
                    >
                      {aboutData.block2.heading}
                    </Heading>
                    {/* <chakra.p
                    mb={6}
                    fontSize={{ base: "lg", md: "xl" }}
                    textAlign={{ base: "center", sm: "left" }}
                    color="gray.600"
                    >
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                    magnam voluptatum cupiditate veritatis in accusamus quisquam.
                  </chakra.p> */}
                  </Box>
                  <GridItem colSpan={2}>
                    <Stack
                      spacing={{ base: 10, md: 0 }}
                      display={{ md: "grid" }}
                      gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                      gridColumnGap={{ md: 8 }}
                      gridRowGap={{ md: 10 }}
                    >
                      <Feature icco={<BsRecordCircle />} title={aboutData.block2.txt1}>
                        {aboutData.block2.txt1d}
                      </Feature>
                      <Feature icco={<BsFillFileEarmarkBarGraphFill />} title={aboutData.block2.txt2}>
                        {aboutData.block2.txt2d}
                      </Feature>
                      <Feature icco={<MdSupportAgent />} title={aboutData.block2.txt3}>
                        {aboutData.block2.txt3d}
                      </Feature>
                      <Feature icco={<RiOrganizationChart />} title={aboutData.block2.txt4}>
                        {aboutData.block2.txt4d}
                      </Feature>
                    </Stack>
                  </GridItem>
                </SimpleGrid>
              </Box>
            </Box>


            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto" my={20}>
              <Heading pb={8} textAlign={'center'}>{aboutData.block3.heading}</Heading>
              <Center>
                <SimpleGrid
                  columns={{ base: 1, sm: 1, md: 1, lg: 3 }}
                  spacing={{ md: 6, lg: 6, xl: 16 }}
                >
                  <FeatureBlog
                    title={'Industrial Automation Wiring and Grounding...'}
                    text={`Industrial automation wiring is a complex task that requires thorough knowledge of the various codes and regulations that...`}
                    page={'https://blog.zedir.com/posts/industrial-automation-wiring-and-grounding-guidelines'}
                    date={'March 6, 2023'}
                    imgsrc={'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={'Industrial Automation for Dummies'}
                    text={'Industrial automation is a system design activity related to creating a control system that will achieve a specific goal. Industrial...'}
                    page={'https://blog.zedir.com/posts/industrial-automation-for-dummies'}
                    date={'March 5, 2023'}
                    imgsrc={'https://images.pexels.com/photos/8175930/pexels-photo-8175930.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={'How AI is affecting Industrial Automated...'}
                    text={'Artificial Intelligence (AI) is a technology that can automatically learn from data, identify patterns and make predictions to...'}
                    page={'https://blog.zedir.com/posts/how-ai-is-affecting-industrial-automated-processes'}
                    date={'March 5, 2023'}
                    imgsrc={'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                </SimpleGrid>
              </Center>
            </Box>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
