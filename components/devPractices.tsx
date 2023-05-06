import {
  Box,
  Heading,
  Stack,
  Flex,
  Text,
  Circle,
} from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from "react";

const Untitled = () => {
  const { locale } = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const filteredData = tabs.filter((p) => p.locale === locale);
  return (
    <>
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
      <Stack direction={{ base: "column", md: "row" }}>
        <Stack shadow={'xs'} direction="column" p={4} bg={'blue.700'} rounded={'lg'} spacing={0}>
          {filteredData.map((tab, index) => (
            <Box
              rounded={'lg'}
              width={{ base: 'full', md: '220px' }}
              key={index}
              onClick={() => setActiveTab(index)}
              pl={{ md: 8, base: 0 }}
              mx={{ base: 'auto', md: undefined }}
              textAlign={{ base: 'center', md: 'left' }}
              py={2}
              bg={activeTab === index ? 'blue.500' : undefined}
              shadow={activeTab === index ? 'inner' : undefined}
              textDecor={activeTab === index ? 'underline' : '-moz-initial'}
              cursor={'pointer'}
              textColor={'white'}
              fontWeight={'semibold'}
              _hover={{ textDecor: 'underline' }}
              textUnderlineOffset={'2px'}
            >
              {tab.title}
            </Box>
          ))}
        </Stack>
        <Box shadow={'xs'} w={'full'} rounded={'lg'} bg={'white'} p={4}>
          <Flex direction="column-reverse" mb={2}>
            <Box
              as="hr"
              bg="blue.500"
              h="2px"
              w="64px"
              my={1}
            />
            <Heading as={'h3'} fontSize={{ base: '2xl', md: '3xl' }}>
              {filteredData[activeTab].heading}
            </Heading>
          </Flex>
          <Text>
            {filteredData[activeTab].description}
          </Text>
          {filteredData[activeTab].links.map((tab, index) => (
            <>
              {tab.href ? (
                <>
                  <Flex align="center" my={2}>
                    <Circle size="6px" bg="blue.500" mx={2} />
                    <Box maxW="fit-content" key={index}>
                      <Link href={tab.href}>
                        <Text>{tab.text}</Text>
                      </Link>
                    </Box>
                  </Flex>
                </>
              ) : (
                <Text key={index}>{tab.text}</Text>
              )}
            </>
          ))}
        </Box>
      </Stack>
    </>
  );
}

export default Untitled;



const tabs = [
  {
    locale: "en",
    title: 'Tab One',
    heading: 'Content for the First Tab',
    description: 'Description of the First Tab',
    links: [
      { text: 'Link One', href: 'https://www.example.com/link1' },
      { text: 'Link Two', href: 'https://www.example.com/link2' },
      { text: 'Link Three', href: 'https://www.example.com/link3' },
    ]
  },
  {
    locale: "en",
    title: 'Tab Two',
    heading: 'Content for the Second Tab',
    description: 'Description of the Second Tab',
    links: [
      { text: 'Link One', href: 'https://www.example.com/link1' },
      { text: 'Link Two', href: 'https://www.example.com/link2' },
      { text: 'Link Three', href: 'https://www.example.com/link3' },
    ]
  },
  {
    locale: "en",
    title: 'Tab Three',
    heading: 'Content for the Third Tab',
    description: 'Description of the Third Tab',
    links: [
      { text: 'Link One', href: 'https://www.example.com/link1' },
      { text: 'Link Two', href: 'https://www.example.com/link2' },
      { text: 'Link Three', href: 'https://www.example.com/link3' },
    ]
  },
  {
    locale: "es",
    title: 'Pestaña Uno',
    heading: 'Contenido para la primera pestaña',
    description: 'Descripción de la primera pestaña',
    links: [
      { text: 'Enlace Uno', href: 'https://www.example.com/enlace1' },
      { text: 'Enlace Dos', href: 'https://www.example.com/enlace2' },
      { text: 'Enlace Tres', href: 'https://www.example.com/enlace3' },
    ]
  },
  {
    locale: "es",
    title: 'Pestaña Dos',
    heading: 'Contenido para la segunda pestaña',
    description: 'Descripción de la segunda pestaña',
    links: [
      { text: 'Enlace Cuatro', href: 'https://www.example.com/enlace4' },
      { text: 'Enlace Cinco', href: 'https://www.example.com/enlace5' },
      { text: 'Enlace Seis', href: 'https://www.example.com/enlace6' },
    ]
  },
  {
    locale: "es",
    title: 'Pestaña Tres',
    heading: 'Contenido para la tercera pestaña',
    description: 'Descripción de la tercera pestaña',
    links: [
      { text: 'Enlace Siete', href: 'https://www.example.com/enlace7' },
      { text: 'Enlace Ocho', href: 'https://www.example.com/enlace8' },
      { text: 'Enlace Nueve', href: 'https://www.example.com/enlace9' },
    ]
  },
];
