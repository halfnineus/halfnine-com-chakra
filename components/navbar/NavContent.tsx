import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  useDisclosure,
  useColorMode,
  useColorModeValue as mode,
  Link,
  Image,
  IconButton,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'
import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { Submenu } from './Submenu'
import { ToggleButton } from './ToggleButton'
import { links } from './_data'

import { AiOutlineMenu } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'

import smlog from '../../public/img/smlog.png'
import wsmlog from '../../public/img/wsmlog.png'
import { useRouter } from 'next/router'

const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <NextLink href={'/'} passHref>
          <Link display="flex" alignItems="center">
            <Image pointerEvents={"none"} width={'100%'} height={'8'} src={mode(smlog.src, wsmlog.src)} alt={'Ochoa'} />
          </Link>
        </NextLink>
        <Box visibility={{ base: 'hidden', sm: 'visible' }}>
          <NextLink href={'/contact'} passHref>
            <Link>
              <Button fontWeight="bold">
                Contact Us
              </Button>
            </Link>
          </NextLink>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          )
            :
            (
              <NavLink.Mobile key={idx} href={link.href}>
                {link.label}
              </NavLink.Mobile>
            ),
        )}
      </NavMenu >
    </>
  )
}

const DesktopNavContent = (props: FlexProps) => {
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = mode("dark", "light");
  const SwitchIcon = mode(FaMoon, FaSun);
  const router = useRouter()
  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <NextLink href={'/'} passHref>
        <Link display="flex" alignItems="center">
          <Image pointerEvents={"none"} width={'100%'} height={'10'} src={mode(smlog.src, wsmlog.src)} alt={'Ochoa'} />
        </Link>
      </NextLink>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop onClick={() => router.push(link.href)} cursor={'pointer'}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="4" >
        <NextLink href={'/contact'} passHref>
          <Link>
            <Button colorScheme="blue" fontWeight="bold">
              Contact Us
            </Button>
          </Link>
        </NextLink>
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
          color={mode("gray.800", "inherit")}
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={mobileNav.onOpen}
        />
      </HStack>
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
