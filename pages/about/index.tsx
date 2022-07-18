import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Link,
} from '@chakra-ui/react';

import Head from 'next/head'
import { Router } from 'next/router';

import img1 from './brands/1.png'
import img2 from './brands/2.png'
import img3 from './brands/3.png'
import img4 from './brands/4.png'
import img5 from './brands/5.png'

const IndexAbout = () => {
  return (
    <>
      <Head>
        <title>About Us - Ochoa - International Product Development, Design and Production</title>
        <meta name="description" content={"We keep developing systems to automate simple and complicated industrial processes. Contact us to know more."} />
      </Head>
      <Heading> About Us</Heading>
      <Text>
        <br />
        {`small family business`}<br />
        {`Automating simple and repetitive tasks.`}<br /><br />
      </Text>
      <Heading> Why Us</Heading>
      <Text>
        <br />
        {`Developing and Manufacturing becomes complex with scale. And many costly mistakes are taken through the path.`}<br />
        {`Chosing our profesional experience makes your project faster and more cost efficient.`}<br /><br />
        {'Your ability scale directly affects if and how your business grows.'}<br /><br />
        {`With our experience making software we have to see it from the point of the investors,
         what do they want done what are the technologies resources needed , what are the better
          alternatives for functionality. and how can we build a team around the idea making it a 
          cost effective product without overspending on overthinking and over engineering.`}<br /><br />
        {`Upgrading environments merging teams and organizing large technological issues is a nightmare
         and if you’re knowledge on technology is not that big that’s why we are here.`}
      </Text>
      <Box as="section" py={'6'} maxW={{ base: 'xl', md: '7xl' }} textAlign={{md:'center', sm: 'center', base:'start'}} mx={"auto"} px={{ base: '6', md: '8' }}>
        <Heading pointerEvents={'none'} fontWeight="bold" maxW="xlg" mx="auto">
          {`Made with`}
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
          mt="8"
          spacing={'6'}
          color={useColorModeValue('inherit', 'white')}
          pointerEvents={'none'}
        >
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
              <Image alt={'img'} src={img1.src} />
            </Box>
            <Stack>
              <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                Node.js
              </Heading>
            </Stack>
          </Box>
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
              <Image alt={'img'} src={img2.src} />
            </Box>
            <Stack>
              <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                React
              </Heading>
            </Stack>
          </Box>
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
              <Image alt={'img'} src={img3.src} />
            </Box>
            <Stack>
              <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                Next.js
              </Heading>
            </Stack>
          </Box>
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
              <Image alt={'img'} src={img4.src} />
            </Box>
            <Stack>
              <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                SQLite
              </Heading>
            </Stack>
          </Box>
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
              <Image alt={'img'} src={img5.src} />
            </Box>
            <Stack>
              <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                Nodemailer
              </Heading>
            </Stack>
          </Box>
          
        </SimpleGrid>
      </Box>
    </>
  );
}

export default IndexAbout;
