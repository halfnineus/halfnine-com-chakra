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
        <Box shadow={'xs'} w={'full'} rounded={'xl'} bg={'white'} p={4}>
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
          <Text pb={5}>
            {filteredData[activeTab].description}
          </Text>
          {filteredData[activeTab].links.map((tab, index) => (
            <div key={index}>
              {tab.href ? (
                <>
                  <Flex align="center" my={3}>
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
                </>
              ) : (
                <Text>{tab.text}</Text>
              )}
            </div>
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
    title: 'Software Development',
    description: 'Our team is dedicated to creating reliable, easy-to-use and secure software solutions that work on any operating system, browser or device. We use the latest technology and have a deep understanding of what different industries need. This allows us to create custom solutions and products that are designed specifically for the people who will be using them.',
    // description: 'We are committed to delivering reliable, scalable and secure software solutions for any OS, browser and device. Our team combines the latest IT advancements with a deep understanding of industry needs to create custom solutions and products that are tailored to the needs and behavior of their users.',
    links: [
      { text: 'Link One', href: '#FirstTab_link1' },
      { text: 'Link Two', href: '#FirstTab_link2' },
      { text: 'Link Three', href: '#FirstTab_link3' },
    ]
  },
  {
    locale: "en",
    title: 'Hardware Development',
    description: 'We are dedicated to delivering dependable, scalable and secure hardware solutions for any device. Our team leverages the latest advancements in technology and combines them with a deep understanding of industry needs to create custom solutions and products that are tailored to the needs and behavior of their users.',
    links: [
      { text: 'Link Four', href: '#SecondTab_link1' },
      { text: 'Link Five', href: '#SecondTab_link2' },
      { text: 'Link Six', href: '#SecondTab_link3' },
    ]
  },
  {
    locale: "en",
    title: 'Firmware Development',
    description: 'Our team is committed to providing firmware solutions that are reliable, scalable and secure for any device. By utilizing the most recent technological advancements and having a deep understanding of the needs of various industries, we are able to create custom solutions and products that are specifically designed to meet the needs and behaviors of their users.',
    links: [
      { text: 'Link Seven', href: '#ThirdTab_link1' },
      { text: 'Link Eight', href: '#ThirdTab_link2' },
      { text: 'Link Nine', href: '#ThirdTab_link3' },
    ]
  },
  {
    locale: "es",
    title: 'Desarrollo de Software',
    description: 'Nuestro equipo se dedica a crear soluciones de software confiables, fáciles de usar y seguras que funcionan en cualquier sistema operativo, navegador o dispositivo. Utilizamos la última tecnología y tenemos un conocimiento profundo de lo que necesitan las diferentes industrias. Esto nos permite crear soluciones y productos personalizados que están diseñados específicamente para las personas que los utilizarán.',
    links: [
      { text: 'Enlace Uno', href: '#FirstTab_link1_es' },
      { text: 'Enlace Dos', href: '#FirstTab_link2_es' },
      { text: 'Enlace Tres', href: '#FirstTab_link3_es' },
    ]
  },
  {
    locale: "es",
    title: 'Desarrollo de Hardware',
    description: 'Estamos dedicados a brindar soluciones de hardware confiables, escalables y seguras para cualquier dispositivo. Nuestro equipo aprovecha los últimos avances en tecnología y los combina con un profundo conocimiento de las necesidades de la industria para crear soluciones y productos personalizados que se adaptan a las necesidades y el comportamiento de sus usuarios.',
    links: [
      { text: 'Enlace Cuatro', href: '#SecondTab_link1_es' },
      { text: 'Enlace Cinco', href: '#SecondTab_link2_es' },
      { text: 'Enlace Seis', href: '#SecondTab_link3_es' },
    ]
  },
  {
    locale: "es",
    title: 'Desarrollo de Firmware',
    description: 'Nuestro equipo está comprometido a proporcionar soluciones de firmware que sean confiables, escalables y seguras para cualquier dispositivo. Al utilizar los avances tecnológicos más recientes y tener una comprensión profunda de las necesidades de varias industrias, podemos crear soluciones y productos personalizados que están diseñados específicamente para satisfacer las necesidades y comportamientos de sus usuarios.',
    links: [
      { text: 'Enlace Siete', href: '#ThirdTab_link1_es' },
      { text: 'Enlace Ocho', href: '#ThirdTab_link2_es' },
      { text: 'Enlace Nueve', href: '#ThirdTab_link3_es' },
    ]
  },
];
