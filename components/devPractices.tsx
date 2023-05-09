import {
  Box,
  Heading,
  Stack,
  Flex,
  Text,
  Circle,
  SimpleGrid,
} from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from "react";
import FadeInBox from './fadeInBox';

const Untitled = () => {
  const { locale } = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const filteredData = tabs.filter((p) => p.locale === locale);
  return (
    <>
      <FadeInBox fadeDirection={'up'}>
        <Flex direction="column-reverse" mb={2}>
          <Box
            as="hr"
            bg="blue.500"
            h="3px"
            w="64px"
            my={1}
          />
          <Heading>{"Our Development Practices"}</Heading>
        </Flex>
      </FadeInBox>
      <Stack direction={{ base: "column", md: "row" }}>
        <FadeInBox>
          <Stack shadow={'xs'} direction="column" p={4} bg={'blue.700'} rounded={'xl'} spacing={0}>
            {filteredData.map((tab, index) => (
              <Box
                key={index}
                pl={{ md: 6, base: 0 }}
                width={{ base: 'full', md: '240px' }}
                py={3}
                rounded={'xl'}
                onClick={() => setActiveTab(index)}
                mx={{ base: 'auto', md: undefined }}
                textAlign={{ base: 'center', md: 'left' }}
                bg={activeTab === index ? 'blue.500' : undefined}
                boxShadow={activeTab === index ? '2xl' : undefined}
                // textDecor={activeTab === index ? 'underline' : '-moz-initial'}
                cursor={'pointer'}
                textColor={'white'}
                fontWeight={'semibold'}
                _hover={{ textDecor: 'underline' }}
                textUnderlineOffset={'2px'}
                userSelect={'none'}
              >
                {tab.title}
              </Box>
            ))}
          </Stack>
        </FadeInBox>
        <FadeInBox fadeDirection='right' shadow={'xs'} w={'full'} rounded={'xl'} bg={'white'} p={8}>
          <Flex direction="column-reverse" mb={2}>
            <Box
              as="hr"
              bg="blue.500"
              h="2px"
              w="64px"
              my={1}
            />
            <Heading as={'h3'} fontSize={{ base: '2xl', md: '3xl' }}>
              {/* {filteredData[activeTab].heading} */}
              {filteredData[activeTab].title}
            </Heading>
          </Flex>
          <Text pb={4}>
            {filteredData[activeTab].description}
          </Text>
          <SimpleGrid columns={2} spacing={4}>
            {filteredData[activeTab].links.map((tab, index) => (
              <Flex key={index} align="center">
                <Circle size="6px" bg="blue.500" mx={2} />
                <Box maxW="fit-content">
                  <Link href={tab.href}>
                    <Text
                      // display="inline-block"
                      // px="2"
                      // my="2"
                      fontWeight="semibold"
                      userSelect={'none'}
                      _hover={{
                        textDecoration: 'none',
                        color: "blue.400",
                      }}
                    >{tab.text}</Text>
                  </Link>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </FadeInBox>
      </Stack>
    </>
  );
}

export default Untitled;

const tabs = [
  {
    locale: "en",
    title: 'Software Development',
    description: `We'll prototype in a week - creating reliable, versatile software tailored to user needs. Latest tech, industry expertise, and custom solutions for any OS, browser, or device.`,
    links: [
      { text: 'Link One', href: '#FirstTab_link1' },
      { text: 'Link Two', href: '#FirstTab_link2' },
      { text: 'Link Three', href: '#FirstTab_link3' },
    ]
  },
  {
    locale: "en",
    title: 'Lorem ipsum',
    description: 'Sollicitudin nibh sit amet commodo. Etiam non quam lacus suspendisse faucibus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. ',
    links: [
      { text: 'Link Four', href: '#SecondTab_link1' },
      { text: 'Link Five', href: '#SecondTab_link2' },
      { text: 'Link Six', href: '#SecondTab_link3' },
      { text: 'Link Six', href: '#SecondTab_link3' },
    ]
  },
  {
    locale: "en",
    title: 'Lorem ipsum',
    description: 'Sollicitudin nibh sit amet commodo. Etiam non quam lacus suspendisse faucibus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. ',
    links: [
      { text: 'Link Seven', href: '#ThirdTab_link1' },
      { text: 'Link Eight', href: '#ThirdTab_link2' },
      { text: 'Link Nine', href: '#ThirdTab_link3' },
      { text: 'Link Nine', href: '#ThirdTab_link3' },
    ]
  },
  {
    locale: "es",
    title: 'Lorem ipsum',
    description: 'Sollicitudin nibh sit amet commodo. Etiam non quam lacus suspendisse faucibus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. ',
    links: [
      { text: 'Enlace Uno', href: '#FirstTab_link1_es' },
      { text: 'Enlace Dos', href: '#FirstTab_link2_es' },
      { text: 'Enlace Tres', href: '#FirstTab_link3_es' },
    ]
  },
  {
    locale: "es",
    title: 'Lorem ipsum',
    description: 'Sollicitudin nibh sit amet commodo. Etiam non quam lacus suspendisse faucibus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. ',
    links: [
      { text: 'Enlace Cuatro', href: '#SecondTab_link1_es' },
      { text: 'Enlace Cinco', href: '#SecondTab_link2_es' },
      { text: 'Enlace Seis', href: '#SecondTab_link3_es' },
    ]
  },
  {
    locale: "es",
    title: 'Lorem ipsum',
    description: 'Sollicitudin nibh sit amet commodo. Etiam non quam lacus suspendisse faucibus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. ',
    links: [
      { text: 'Enlace Siete', href: '#ThirdTab_link1_es' },
      { text: 'Enlace Ocho', href: '#ThirdTab_link2_es' },
      { text: 'Enlace Nueve', href: '#ThirdTab_link3_es' },
    ]
  },
];
