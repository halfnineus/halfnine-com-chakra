import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  Image,
  GridItem,
  Container,
  VStack,
  Flex,
  Divider,
  Grid,
  chakra,
  Icon,
  Center,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import { useRouter } from "next/router"

import aboutdat from '../assets/about.json'

import { MdTouchApp, MdCheckCircleOutline, MdAvTimer } from 'react-icons/md'


interface FeatureProps {
  heading: string;
  text: string;
  color: string;
  icon: any;
}

const Feature = ({ heading, text, color, icon }: FeatureProps) => {
  return (
    <GridItem>
      <Flex
        alignItems="center"
        justifyContent="center"
        w={8}
        h={8}
        mb={4}
        rounded="full"
        color={`${color}.600`}
        _dark={{ color: `${color}.100` }}
        bg={`${color}.100`}
      >
        <Icon
          boxSize={5}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          {icon}
        </Icon>
      </Flex>

      {/* <chakra.h3 fontSize="xl" fontWeight="600"> */}
      <chakra.h3
        fontSize={"lg"}
        mb={2}
        fontWeight="semibold"
        lineHeight="shorter"
        _light={{ color: "gray.900" }}
      >
        {heading}
      </chakra.h3>
      <chakra.p fontSize="md" color="gray.600" _dark={{ color: "gray.400" }}>
        {text}
      </chakra.p>
    </GridItem>
  );
};


const IndexAbout = () => {
  const { locale } = useRouter()
  return (
    <>
      {aboutdat.data.filter(p => p.locale === locale).map((aboutData, i) => {
        return (
          <>
            <NextSeo title={aboutData.head.title} description={aboutData.head.description} />
            <Box as={Container} maxW="7xl" mt={8} py={4} px={{ base: '6', lg: '10' }}>
              {/* <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', }} gap={4}>
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

              <Divider mt={16} mb={16} /> */}

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

              <Divider mt={16} mb={8} />

              <Stack spacing={5} mb={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>{"Our Values"}</Heading>
                {/* <Text color={mode('gray.600', 'gray.400')} fontSize={'xl'}>{"indexData.block4.txt"}</Text> */}
              </Stack>

              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '8' }}>
                <Feature
                  color="blue"
                  heading={'Quality'}
                  text={'Focus on expertise without overengineering.'}
                  icon={<MdCheckCircleOutline size={20} />}
                />
                <Feature
                  color="yellow"
                  heading={'Availability'}
                  text={'Meet the demand with supply.'}
                  icon={<MdAvTimer size={21} />}
                />
                <Feature
                  color="gray"
                  heading={'Transparency'}
                  text={'Access to every resource on any step of the process.'}
                  icon={<MdTouchApp size={20} />}
                />
                <Feature
                  color="green"
                  heading={'Value'}
                  text={'Building the right teams to reach return on Investment.'}
                  icon={''}
                />
                <Feature
                  color="pink"
                  heading={'Flexibility'}
                  text={'Change your priorities without worries.'}
                  icon={''}
                />
                <Feature
                  color="purple"
                  heading={'Talent'}
                  text={'Not only the right team but the best for the job.'}
                  icon={''}
                />
              </Grid>

              <Divider mt={16} mb={8} />

            </Box>
          </>)
      })}
    </>
  );
}

export default IndexAbout;
