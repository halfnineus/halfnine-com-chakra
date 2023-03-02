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

              <SimpleGrid
                py={20}
                alignItems="center"
                columns={{ base: 1, lg: 3 }}
                spacingY={{ base: 10, lg: 32 }}
                spacingX={{ base: 10, lg: 24 }}
              >
                <Box alignSelf="start">
                  {/* <chakra.h2
                    color="blue.500"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    {aboutData.block2.heading}
                  </chakra.h2> */}
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
                    <Feature icco={<BsRecordCircle />} title="Visible Live Progress">
                      Our team works hard to ensure that you see progress throughout every single day. This helps you stay informed and confident that your project is on track.
                    </Feature>
                    <Feature icco={<BsFillFileEarmarkBarGraphFill />} title="Weekly status meetings">
                      We believe in regular communication and transparency. That&apos;s why we hold weekly status meetings with our clients to keep them informed about the progress of their projects.
                    </Feature>
                    <Feature icco={<MdSupportAgent />} title="Free support forever">
                      Unlike most companies that make most of their money from providing support, we offer this for free because we guarantee what we develop will work as desired and intended.
                      {/* Our commitment to our clients doesn&apos;t end when the project is completed. We offer free support forever to ensure that you always have access to the help you need. */}
                    </Feature>
                    <Feature icco={<RiOrganizationChart />} title="Concern for Workflows">
                      We understand the importance of smooth and efficient workflows. That&apos;s why we take extra care to ensure that our solutions integrate seamlessly into your existing processes.
                    </Feature>
                  </Stack>
                </GridItem>
              </SimpleGrid>




              {/* <Divider my={16} />
              <Heading pb={6} textAlign={'center'}>{aboutData.block3.heading}</Heading>
              <Center>
                <SimpleGrid
                  columns={{ base: 1, sm: 1, md: 1, lg: 3 }}
                  spacing={'6'}
                >
                  <FeatureBlog
                    title={'Industrial Control Systems Cybersecurity Initiative'}
                    text={`In this guide, you will learn about the Industrial Control Systems Cybersecurity Initiative (ICS-CERT) and how it can help protect your business's data and systems.`}
                    page={'https://blog.zedir.com/posts/industrial-control-systems-cybersecurity-initiative'}
                    date={'December 6, 2022 · 12min read'}
                    imgsrc={'https://images.pexels.com/photos/1990764/pexels-photo-1990764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={'Industrial Control Systems Cybersecurity Training Act'}
                    text={'This is an overview of the Industrial Control Systems Cybersecurity Training Act and explains the meaning for businesses and individuals responsible for managing and operating ICS.'}
                    page={'https://blog.zedir.com/posts/industrial-control-systems-cybersecurity-training-act'}
                    date={'December 6, 2022 · 12min read'}
                    imgsrc={'https://images.pexels.com/photos/39584/censorship-limitations-freedom-of-expression-restricted-39584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                  <FeatureBlog
                    title={'Industrial Control Systems Joint Working Groups'}
                    text={'Learn about the benefits of joining the Industrial Control Systems Joint Working Groups, a unique organization that brings stakeholders from the public and private sectors together.'}
                    page={'https://blog.zedir.com/posts/industrial-control-systems-joint-working-group'}
                    date={'December 6, 2022 · 12min read'}
                    imgsrc={'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=600'}
                  />
                </SimpleGrid>
              </Center> */}
            </Box>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
