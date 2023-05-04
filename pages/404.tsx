import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <NextSeo title={'404 Not Found'} description={'404 Not Found'} />
      <Box mx="auto" maxW={'container.xl'}>
        <Stack
          direction={['column', 'row']}
          align={['center', 'flex-start']}
          justify="center"
          spacing={12}
          pt={4}
          pb={16}
        >
          <Heading
            as="h2"
            fontSize={['6xl', '8xl']}
            bgGradient="linear(to-r, blue.400, blue.500)"
            backgroundClip="text"
          >
            404
          </Heading>
          <Box>
            <Text fontSize="18px" mt={3} mb={2}>
              Sorry about that
            </Text>
            <Text color={'#gray.500'} mb={6}>
              The page you&apos;re looking for does not seem to be available
            </Text>

            <Link href={'/'}>
              <Button colorScheme="blue" variant="solid">
                Go to Home
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
