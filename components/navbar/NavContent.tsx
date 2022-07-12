import {
  Center,
  chakra,
  VisuallyHidden,
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
import { Submenu, NavMenu, NavLink } from './Submenu'
import { links } from './_data'

import { AiOutlineMenu } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'

import smlog from '../../public/img/smlog.png'
import wsmlog from '../../public/img/wsmlog.png'
import { useRouter } from 'next/router'


// ToggleButton
const Bar = chakra('span', {
  baseStyle: {
    display: 'block',
    pos: 'absolute',
    w: '1.25rem',
    h: '0.125rem',
    rounded: 'full',
    bg: 'currentcolor',
    mx: 'auto',
    insetStart: '0.125rem',
    transition: 'all 0.12s',
  },
})

const ToggleIcon = (props: { active: boolean }) => {
  const { active } = props
  return (
    <Box
      className="group"
      data-active={active ? '' : undefined}
      as="span"
      display="block"
      w="1.5rem"
      h="1.5rem"
      pos="relative"
      aria-hidden
      pointerEvents="none"
    >
      <Bar top="0.4375rem" _groupActive={{ top: '0.6875rem', transform: 'rotate(45deg)' }} />
      <Bar bottom="0.4375rem" _groupActive={{ bottom: '0.6875rem', transform: 'rotate(-45deg)' }} />
    </Box>
  )
}

interface ToggleButtonProps {
  isOpen: boolean
  onClick(): void
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { isOpen, onClick } = props
  return (
    <Center
      marginStart="-6"
      px="4"
      py="4"
      as="button"
      color="gray.400"
      _active={{ color: 'blue.600' }}
      onClick={onClick}
    >
      <ToggleIcon active={isOpen} />
      <VisuallyHidden>Toggle Menu</VisuallyHidden>
    </Center>
  )
}

// end ToggleButton





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
            <Image loading={"eager"} pointerEvents={"none"} width={'auto'} height={'8'} src={mode(smlog.src, wsmlog.src)} alt={'log.ochoa'} />
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
          <Image loading={"eager"} cursor={'pointer'} pointerEvents={'none'} width={'auto'} height={'10'} src={mode(smlog.src, wsmlog.src)} alt={'Ochoa'} />
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
        <Button colorScheme="blue" fontWeight="bold" onClick={() => router.push('/contact')}>
          Contact Us
        </Button>
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
