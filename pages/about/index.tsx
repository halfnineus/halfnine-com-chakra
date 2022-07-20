import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Link,
  GridItem,
  Container,
  Button,
  VStack,
  Flex,
  Divider,
  Grid,
  chakra,
} from '@chakra-ui/react';

import Head from 'next/head'
import { Router } from 'next/router';

import img1 from './brands/1.png'
import img2 from './brands/2.png'
import img3 from './brands/3.png'
import img4 from './brands/4.png'
import img5 from './brands/5.png'

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

const IndexAbout = () => {
  const BuiltWith = (children: any) => {
    return (
      <Box
        maxW={'220px'}
        w={'full'}
        bg={useColorModeValue('gray.50', 'gray.700')}
        boxShadow={'md'}
        rounded={'md'}
        p={2}
        overflow={'hidden'}
        maxH={'auto'}
      >
        <Box h={'auto'} bg={useColorModeValue('gray.100', 'gray.300')} mt={-2} mx={-2} mb={2} pos={'relative'}>
          <Image alt={'img'} src={children.img} />
        </Box>
        <Stack>
          <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
            {children.tech}
          </Heading>
        </Stack>
      </Box>
    )
  }
  return (
    <>
      <Head>
        <title>About Us - Ochoa - International Product Development, Design and Production</title>
        <meta name="description" content={"We keep developing systems to automate simple and complicated industrial processes. Contact us to know more."} />
      </Head>
      <Box pointerEvents={'none'} as={Container} maxW="7xl" mt={14} p={4}>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', }} gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <Heading>About us</Heading>
              {/* <Button colorScheme="green" size="md">
                Call To Action
              </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <Text>
                {`Hi there, we are the Ochoa's, A family of engineers, immigrants starting a business in the United States, chasing the American Dream, opportunity for prosperity and success.`}
              </Text>
            </Flex>
            <Divider mt={4} mb={4} />
            <Flex>
              <Text>
                {`We want to make the world better by Automating simple and repetitive tasks. If you give us the chance, we believe we will work our hardest and won't disappoint.`}
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        <Divider mt={16} mb={16} />


        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', }} gap={4}>
          <GridItem>
            <Flex>
              <Text>
                {`Developing and Manufacturing becomes complex with scale. And many costly mistakes are taken through the path.`}
              </Text>
            </Flex>
            <Divider mt={2} mb={2} />
            <Flex>
              <Text>
                {`Chosing our profesional experience makes your project faster and more cost efficient.`}
              </Text>
            </Flex>
            <Divider mt={2} mb={2} />
            <Flex>
              <Text>
                {`Your ability scale directly affects if and how your business grows.`}
              </Text>
            </Flex>
            <Divider mt={2} mb={2} />
            <Flex>
              <Text>
                {`With our experience making software we have to see it from the point of the investors,
                  what do they want done what are the technologies resources needed , what are the better
                  alternatives for functionality. and how can we build a team around the idea making it a 
                  cost effective product without overspending on overthinking and over engineering.`}
              </Text>
            </Flex>
            <Divider mt={2} mb={2} />
            <Flex>
              <Text>
                {`Upgrading environments merging teams and organizing large technological issues is a nightmare
                   and if you're knowledge on technology is not that big that's why we are here.`}
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-end" spacing="20px">
              <Heading>Why us</Heading>
              {/* <Button colorScheme="green" size="md">
                Call To Action
              </Button> */}
            </VStack>
          </GridItem>
        </Grid>

        {/* <Divider mt={16} mb={16} />

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'First Feature'}
            text={'Short text describing one of you features/service'}
          />
          <Feature
            heading={'Second Feature'}
            text={'Short text describing one of you features/service'}
          />
          <Feature
            heading={'Third Feature'}
            text={'Short text describing one of you features/service'}
          />
          <Feature
            heading={'Fourth Feature'}
            text={'Short text describing one of you features/service'}
          />
        </Grid> */}
      </Box>

      <Divider mt={16} mb={16} />

      <Box as="section" pt={'6'} pb={16} maxW={{ base: 'xl', md: '7xl' }} textAlign={{ md: 'center', sm: 'center', base: 'start' }} mx={"auto"} px={{ base: '6', md: '8' }}>
        <Heading pointerEvents={'none'} fontWeight="bold" maxW="xlg" mx="auto">
          {`Made with`}
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} mt="8" spacing={'6'} pointerEvents={'none'}>
          <BuiltWith tech={'Node.js'} img={img1.src} />
          <BuiltWith tech={'React'} img={img2.src} />
          <BuiltWith tech={'Next.js'} img={img3.src} />
          <BuiltWith tech={'SQLite'} img={img4.src} />
          <BuiltWith tech={'Nodemailer'} img={img5.src} />
        </SimpleGrid>
      </Box>
    </>
  );
}

export default IndexAbout;
