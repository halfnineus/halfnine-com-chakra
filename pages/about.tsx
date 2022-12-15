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
} from '@chakra-ui/react';
import { useRouter } from "next/router"
import { NextSeo } from 'next-seo';


import aboutdat from '../assets/about.json'
import Link from 'next/link';

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
              </Center>
              <Divider my={16} />
            </Box>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
