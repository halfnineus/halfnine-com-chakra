import { NextPage } from 'next'
import NextLink from 'next/link'
import Head from 'next/head'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react'

import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {

}

const index: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>International Product Development, Design and Production - Ochoa</title>
        <meta name="description" content="Full-service product developoment with Ochoa, Providing services from software, hardware and mechanical engineering. And product manufacturing." />
      </Head>
      <Box
        as="section"
        // bg={mode('gray.50', 'gray.800')}
        pb="24"
        pos="relative"
        px={{ base: '6', lg: '12' }}
      >
        <Box maxW={"100%"} mx="auto">
          <Box
            maxW={{ lg: 'md', xl: 'xl' }}
            pt={{ base: '20', lg: '40' }}
            pb={{ base: '16', lg: '24' }}
          >
            <Heading pointerEvents={'none'} as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
              Full Service Product{' '}
              <Box as="mark" color={mode('blue.600', 'blue.300')} bg="transparent">
                Development & Manufacturing
              </Box>
            </Heading>
            <Text pointerEvents={'none'} mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
              Ochoa offers Development Services provides end-to-end solutions for product design and development and
              manufacturing through our experts and professionals.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
              <NextLink href={'/contact'} passHref>
                <Link>
                  <Button
                    size="lg"
                    colorScheme="blue"
                    height="14"
                    px="8"
                    shadow="base"
                    fontSize="md"
                    bg={mode('blue.600', 'blue.300')}
                  >
                    Talk to an expert
                  </Button>
                </Link>
              </NextLink>
            </Stack>
          </Box>
        </Box>
        <Box
          pos={{ lg: 'absolute' }}
          insetY={{ lg: '0' }}
          insetEnd={{ lg: '0' }}
          bg={"gray.50"}
          w={{ base: 'full', lg: '50%' }}
          height={{ base: '96', lg: 'full' }}
          sx={{
            clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' },
          }}
        >
          <Img
            height="100%"
            width="100%"
            objectFit="cover"
            src="https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/r4wFnzS/Electronics-scaled2.jpg"
            alt="Lady working"
          />
        </Box>
      </Box>



      <Box minH={{ base: 'none', md: 'none', lg: '4rem', }} />



      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading pointerEvents={'none'} fontSize={'3xl'}>What we do.</Heading>
          {/* <Text color={mode('gray.600', 'gray.400')} fontSize={'xl'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </Text> */}
        </Stack>
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <NextLink href={'#'} passHref>
                  <Link>
                    <Text fontWeight={600}>
                      Electronic Engineering
                    </Text>
                  </Link>
                </NextLink>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                  Highly reliable innovative solutions that enable a digital transformation.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Software Engineering
                </Text>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                  Highly reliable product design and development on the latest technology.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Mechanical Engineering
                </Text>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                  Take product ideas from concepts to working prototypes.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Product Design
                </Text>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                  Innovative product design processes that bring ideas to life.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'red.400'} px={2}>
                <Icon as={CloseIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Packaging Design
                </Text>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                  Packaging can be the top-shelf difference in retail success.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Product Manufacturing
                </Text>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                  Products and quality that live up to the expectations of all customers.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'red.400'} px={2}>
                <Icon as={CloseIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Delivery Logistics
                </Text>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                  {/* Product storage, distribution and supply chain management. */}
                  Product storage and supply chain management.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'red.400'} px={2}>
                <Icon as={CloseIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Marketing
                </Text>
                <Text pointerEvents={'none'} color={mode('gray.600', 'gray.400')}>
                  Researching Markets and Promoting products to Consumers.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>



      <Box minH={{ base: '4rem', md: '4rem', lg: '5rem', }} />



      {/* <Box bg="gray.800" as="section" minH="140px" position="relative">
        <Box py="32" position="relative" zIndex={1}>
          <Box maxW={{ base: 'xl', md: '98%' }} mx="auto" px={{ base: '6', md: '8' }} color="white">
            <Box maxW="xl">
              <Heading as={'h3'} pointerEvents={'none'} size="3xl" fontWeight="extrabold">
                Lorem ipsum dolor sit amet amet consectetur
              </Heading>
              <Text pointerEvents={'none'} fontSize={{ md: '2xl' }} mt="4" maxW="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
                <Button
                  as="a"
                  href="#"
                  colorScheme="blue"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                >
                  Lorem ipsum dolor
                </Button>
                <HStack
                  as="a"
                  transition="background 0.2s"
                  justify={{ base: 'center', md: 'flex-start' }}
                  href="#"
                  color="white"
                  rounded="full"
                  fontWeight="bold"
                  px="6"
                  py="3"
                  _hover={{ bg: 'whiteAlpha.300' }}
                >
                  <span>Lorem ipsum</span>
                  <HiChevronRight />
                </HStack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Flex
          id="image-wrapper"
          position="absolute"
          insetX="0"
          insetY="0"
          w="full"
          h="full"
          overflow="hidden"
          align="center"
        >
          <Box position="relative" w="full" h="full">
            <Img
              src="https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/dG0G049/Mechanical-Engineering.jpg"
              alt="Main Image"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="top bottom"
              position="absolute"
            />
            <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
          </Box>
        </Flex>
      </Box> */}
    </>
  )
}

export default index
