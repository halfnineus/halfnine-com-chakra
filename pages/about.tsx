import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  GridItem,
  Flex,
  SimpleGrid,
  Stack,
  Center,
  Icon,
} from '@chakra-ui/react'
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo'


import aboutdat from '../assets/about.json'
import Link from 'next/link'
import { BsFillFileEarmarkBarGraphFill, BsRecordCircle } from 'react-icons/bs'
import { MdSupportAgent } from 'react-icons/md'
import { RiOrganizationChart } from 'react-icons/ri';


const Feature = (props: any) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Icon
          boxSize={10}
          color="blue.500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {props.icco}
        </Icon>
      </Flex>
      <Box ml={4}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          lineHeight="6"
          color="gray.900"
        >
          {props.title}
        </Text>
        <Text mt={2} color="gray.600">
          {props.children}
        </Text>
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
            alt={'background'}
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
            as={'h4'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            noOfLines={2}
            color={'gray.700'}
            fontSize={'2xl'}
            pb={1}
            fontFamily={'body'}>
            {children.title}
          </Heading>
          <Text overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={2} color={'gray.500'}>
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
              title={aboutData.head.title}
              description={aboutData.head.description}
              canonical="https://www.halfnine.com/about"
              languageAlternates={[
                {
                  hrefLang: 'es',
                  href: 'https://www.halfnine.com/es/about',
                }
              ]}
              openGraph={{
                url: `https://www.halfnine.com/about`,
                title: aboutData.head.title,
                description: aboutData.head.description
              }}
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto">
              <Box pt={4} pb={20}>
                <Heading as={'h1'} letterSpacing="tight" fontWeight="bold" pb={2}>{aboutData.block1.heading}</Heading>
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
                      letterSpacing="tight"
                    >
                      {aboutData.block2.heading}
                    </Heading>
                    <Text
                      mb={6}
                      fontSize={{ base: "md", md: "lg" }}
                      textAlign={{ base: "center", sm: "left" }}
                      color="gray.600"
                    >
                      {aboutData.block2.whyus}
                    </Text>
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
                  spacing={{ base: 6, md: 6, lg: 6, xl: 16 }}
                >
                  <FeatureBlog
                    title={`The Mechanics Behind Industrial Robots`}
                    text={`Industrial robots have transformed manufacturing, improved efficiency, and accuracy. This article covers types, components, programming, etc.`}
                    page={'https://blog.halfnine.com/industrial-robots/the-mechanics-behind-industrial-robots'}
                    date={'March 19, 2023'}
                    imgsrc={'https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={`Designing an Effective Control Panel: A Beginner's Guide`}
                    text={`Industrial control panels automate processes by distributing power, sensing inputs, executing logic, commanding outputs & allowing user interaction.`}
                    page={'https://blog.halfnine.com/control-systems/designing-an-effective-control-panel-a-beginners-guide'}
                    date={'March 18, 2023'}
                    imgsrc={'https://images.pexels.com/photos/7663142/pexels-photo-7663142.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={'Digital Lockout / Tagout: The Key to Ensuring Workplace Safety'}
                    text={`Workplace safety is crucial. Lockout/tagout isolates energy sources to prevent accidental start-ups and protect workers from hazardous energy.`}
                    page={'https://blog.halfnine.com/workplace-safety/digital-lockout-tagout-the-key-to-ensuring-workplace-safety'}
                    date={'March 17, 2023'}
                    imgsrc={'https://images.pexels.com/photos/11391947/pexels-photo-11391947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
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
