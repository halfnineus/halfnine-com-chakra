import React from "react";
import NextLink from "next/link"

import {
  chakra,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Box,
  useDisclosure,
  Spacer,
  IconButton,
  VStack,
  CloseButton,
  useColorMode,
  Image,
} from "@chakra-ui/react";

import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import smlog from '../public/img/smlog.png'
import wsmlog from '../public/img/wsmlog.png'

export default function Navbar() {

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <NextLink href={'/'} passHref>
        <Link display="flex" alignItems="center">
          <Image width={'100%'} height={'10'} src={useColorModeValue(smlog.src, wsmlog.src)} alt={'ochoa.pro'} />
        </Link>
      </NextLink>
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <NextLink href={'/'} passHref>
        <Link display="flex" alignItems="center">
          <Button size="sm" w="full" variant="ghost" leftIcon={<AiFillHome />}>
            Home
          </Button>
        </Link>
      </NextLink>
      <NextLink href={'/contact'} passHref>
        <Link display="flex" alignItems="center">
          <Button
            w="full"
            variant="ghost"
            colorScheme="brand"
            leftIcon={<AiOutlineInbox />}
          >
            Contact
          </Button>
        </Link>
      </NextLink>
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header h="full" bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={1}>
            <NextLink href={'/'} passHref>
              <Link display="flex" alignItems="center">
                <Image pointerEvents={'none'} width={'100%'} height={'10'} src={useColorModeValue(smlog.src, wsmlog.src)} alt={'ochoa.pro'} />
              </Link>
            </NextLink>
          </HStack>
          <Spacer />
          <Box display="flex" alignItems="center">
            <HStack spacing={1}>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Box>
        </Flex>
        {MobileNavContent}
      </chakra.header>
    </React.Fragment>
  )
}
