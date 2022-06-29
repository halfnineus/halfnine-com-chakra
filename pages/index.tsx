import { NextPage } from 'next'
import NextLink from 'next/link'
import Head from 'next/head'
import {
  Badge,
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

import { HiArrowRight, HiChevronRight } from 'react-icons/hi'
import { CheckIcon } from '@chakra-ui/icons'

interface Props {

}

const index: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>ochoa.pro</title>
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
            {/* <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              bg={mode('gray.200', 'gray.700')}
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="18rem"
            >
              <Badge
                px="2"
                variant="solid"
                colorScheme="green"
                rounded="full"
                textTransform="capitalize"
              >
                New
              </Badge>
              <Box fontWeight="medium">Introducing the new Chakra API</Box>
              <Box
                aria-hidden
                transition="0.2s all"
                _groupHover={{ transform: 'translateX(2px)' }}
                as={HiArrowRight}
                display="inline-block"
              />
            </HStack> */}
            <Heading pointerEvents={'none'} as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
              Full Service Product{' '}
              <Box as="mark" color={mode('blue.500', 'blue.300')} bg="transparent">
                Development & Manufacturing
              </Box>
            </Heading>
            <Text pointerEvents={'none'} mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
              Ochoa Development Services provides end-to-end solutions for product design and development and
              manufacturing through our experts and professionals.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
              {/* <NextLink href={'/contact'} passHref>
                <Link>
                  <Button size="lg" colorScheme="blue" height="14" px="8" fontSize="md">
                    Contact Us Now
                  </Button>
                </Link>
              </NextLink> */}
              <NextLink href={'/contact'} passHref>
                <Link>
                  <Button
                    size="lg"
                    // bg="white"
                    // color="gray.800"
                    colorScheme="blue"
                    // _hover={{ bg: 'gray.50' }}
                    height="14"
                    px="8"
                    shadow="base"
                    fontSize="md"
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



      <Box minH={{ /* base: '8rem', */ base: 'none', md: 'none', lg: '4rem', }} />



      <Box pointerEvents={'none'} p={4}>
        <Stack  spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>This is the headline</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </Text>
        </Stack>
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Text color={'gray.600'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Text color={'gray.600'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Text color={'gray.600'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Text color={'gray.600'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Text color={'gray.600'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Text color={'gray.600'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Text color={'gray.600'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                </Text>
              </VStack>
            </HStack>
            <HStack key={'i'} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Text color={'gray.600'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>



      <Box minH={{ /* base: '8rem', */ base: '4rem', md: '4rem', lg: '5rem', }} />



      <Box  bg="gray.800" as="section" minH="140px" position="relative">
        <Box py="32" position="relative" zIndex={1}>
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} color="white">
            <Box maxW="xl">
              <Heading pointerEvents={'none'} as="h1" size="3xl" fontWeight="extrabold">
                Build relationship with the your customers
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
                  Get Started for Free
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
                  <span>Talk to Sales</span>
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
      </Box>

      {/* <Box minH={{ base: '1rem', md: '1rem', lg: '1rem', }} /> */}


    </>
  )
}

export default index
