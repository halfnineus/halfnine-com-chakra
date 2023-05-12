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
  Breadcrumb,
  BreadcrumbItem,
  Link,
} from '@chakra-ui/react'
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo'


import aboutdat from '../../assets/about.json'
// import Link from 'next/link'
import { BsFillFileEarmarkBarGraphFill, BsRecordCircle } from 'react-icons/bs'
import { MdSupportAgent } from 'react-icons/md'
import { RiOrganizationChart } from 'react-icons/ri'


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
            <Box py={4} maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
              <Breadcrumb fontSize={'sm'} textColor="blackAlpha.700" letterSpacing={'tighter'}>
                <BreadcrumbItem>
                  <Link href="/">
                    <Text _hover={{ color: 'blue.400' }}>{"Home"}</Text>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Text pointerEvents={'none'}>{"About"}</Text>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Box bg={'blue.600'} textColor={'white'}>
              <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto">
                <Heading py={2}>
                </Heading>
              </Box>
            </Box>
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto">
              <Box pt={4} pb={20}>
                <Heading as={'h1'} letterSpacing="tight" fontWeight="bold" pb={2}>{aboutData.block1.heading}</Heading>
                <Text textAlign={'justify'}>{aboutData.block1.i1}</Text>
              </Box>
            </Box>
            <Box bg={'#fbfbfb'}>
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
                    title={`Revolutionize Your Industry with Vision Inspection Systems`}
                    text={`Vision inspection systems increase productivity and quality while reducing costs by inspecting products at high speeds and detecting defects.`}
                    page={'https://blog.halfnine.com/inspection-systems/revolutionize-your-industry-with-vision-inspection-systems'}
                    date={'March 26, 2023'}
                    imgsrc={'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={`Industrial Robot Design: Techniques and Best Practices`}
                    text={`This article covers the basics of robot development design, including techniques, best practices, and common mistakes to avoid for effective design.`}
                    page={'https://blog.halfnine.com/industrial-robots/industrial-robot-design-techniques-and-best-practices'}
                    date={'March 25, 2023'}
                    imgsrc={'https://images.pexels.com/photos/15888223/pexels-photo-15888223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={'Building Software with Security in Mind'}
                    text={`Secure software is crucial for developers in the face of increasing cyberattacks. This article covers the risks and best practices for secure software.`}
                    page={'https://blog.halfnine.com/software-development/building-software-with-security-in-mind-best-practices'}
                    date={'March 24, 2023'}
                    imgsrc={'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
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
