import React from "react";
import { Button, Center, Link, Wrap, WrapItem } from '@chakra-ui/react';
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import NextLink from 'next/link';

const Index = () => {
  return (
    <>
      <title>
        ochoa.pro
      </title>
      <Flex
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("brand.500", "brand.500")}
        px={8}
        py={24}
        mx="auto"
      >
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          pr={{ md: 20 }}
          userSelect={'none'}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color={useColorModeValue("brand.600", "brand.500")}
            mb={6}
          >
            <chakra.span display="block">Full Service Product</chakra.span>
            <chakra.span
              display="block"
            // color={useColorModeValue("brand.600", "brand.500")}
            >
              Development &
            </chakra.span>
            <chakra.span display="block">Manufacturing </chakra.span>

          </chakra.h2>
          <chakra.p
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("brand.600", "brand.500")}
          >
            Get In Touch With Us

          </chakra.p>
          Note: If you are reaching out to us about a new project please submit your project.

          <chakra.p
            fontSize={{ base: "lg", md: "xl" }}
            mb={6}
            color={useColorModeValue("brand.600", "brand.500")}
          >
          </chakra.p>

          <Stack
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <NextLink href={'/contact'} passHref>
                <Link>
                  <Button
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    w="full"
                    rounded="md"
                    color={useColorModeValue("brand.600", "brand.500")}
                    bg={useColorModeValue("#80808044", "#80808044")}
                    _hover={{ bg: 'useColorModeValue("brand.700", "brand.600")' }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </NextLink>
            </Box>
          </Stack>
        </Box>
        <Box mx="auto" /* w={{ base: "4xl", md: 10 / 12 }} textAlign="center" */ >
          <Wrap spacing='30px'  align="normal">
            <WrapItem >
              <Center /* _hover={{ width: '260px', height: '260px' }} */ w='250px' h='250px' bg={useColorModeValue("red.400", "red.600")}>
                Product Design
              </Center>
            </WrapItem>
            <WrapItem>
              <Center /* _hover={{ width: '260px', height: '260px' }} */ w='250px' h='250px' bg={useColorModeValue("green.400", "green.600")}>
                Electronic Engineering
              </Center>
            </WrapItem>
            <WrapItem>
              <Center /* _hover={{ width: '260px', height: '260px' }} */ w='250px' h='250px' bg={useColorModeValue("orange.400", "orange.600")}>
                Electronic Engineering
              </Center>
            </WrapItem>
            <WrapItem>
              <Center /* _hover={{ width: '260px', height: '260px' }} */ w='250px' h='250px' bg={useColorModeValue("blue.400", "blue.600")}>
                Mechanical Engineering
              </Center>
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>
    </>
  );
}

export default Index
