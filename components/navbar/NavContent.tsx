// Is it a mess? Yes
// Does it work? Yes

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
  Collapse,
  SimpleGrid,
  HTMLChakraProps,
  BoxProps,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { AiOutlineMenu } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'

import smlog from '../../public/img/smlog.png'
import wsmlog from '../../public/img/wsmlog.png'
import { useRouter } from 'next/router'
import * as React from 'react'
import { isFocusable, getOwnerDocument, isRightClick } from '@chakra-ui/utils'
import { MdDevicesOther } from 'react-icons/md'
import { VscTerminalCmd } from 'react-icons/vsc'
import { GiMechanicalArm } from 'react-icons/gi'
import { IoHardwareChipOutline } from 'react-icons/io5'

import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { Variants } from 'framer-motion'
import { HTMLMotionProps, motion } from 'framer-motion'

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

const ToggleButton = (props: ToggleButtonProps) => {
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





// MotionBox

type MotionBoxProps = BoxProps & HTMLMotionProps<'div'>
const MotionBox = motion<BoxProps>(Box)

// end MotionBox



// NavLink

interface NavLinkProps extends HTMLChakraProps<'a'> {
  active?: boolean
}

const DesktopNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      ref={ref}
      display="inline-block"
      px="4"
      py="5"
      fontWeight="semibold"
      aria-current={active ? 'page' : undefined}
      color={mode('gray.600', 'gray.400')}
      transition="all 0.2s"
      {...rest}
      _hover={{ color: 'gray.500' }}
      _active={{ color: 'blue.600' }}
      _activeLink={{
        color: 'blue.600',
        fontWeight: 'bold',
      }}
    />
  )
})
DesktopNavLink.displayName = 'DesktopNavLink'

const MobileNavLink = (props: NavLinkProps) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      aria-current={active ? 'page' : undefined}
      w="full"
      display="flex"
      alignItems="center"
      height="14"
      fontWeight="semibold"
      borderBottomWidth="1px"
      {...rest}
    />
  )
}

const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}

// end NavLink



// NavMenu

const NavMenu = (props: MotionBoxProps) => (
  <MotionBox
    initial="init"
    variants={variants}
    outline="0"
    opacity="0"
    bg={mode('white', 'gray.700')}
    w="full"
    shadow="lg"
    px="4"
    pos="absolute"
    insetX="0"
    pt="6"
    pb="8"
    {...props}
  />
)

const variants: Variants = {
  init: {
    opacity: 0,
    y: -4,
    display: 'none',
    transition: { duration: 0 },
  },
  open: {
    opacity: 1,
    y: 0,
    display: 'block',
    transition: { duration: 0.15 },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.1 },
    transitionEnd: {
      display: 'none',
    },
  },
}

// end NavMenu




// useNavMenu

const getTarget = (event: React.FocusEvent) =>
  (event.relatedTarget || document.activeElement) as HTMLElement

type OmitMotionProps<T> = Omit<T, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'>

function useNavMenu() {
  const { isOpen, onClose, onToggle, onOpen } = useDisclosure()
  const menuRef = React.useRef<HTMLDivElement>(null)
  const triggerRef = React.useRef<HTMLAnchorElement>(null)
  const timeoutRef = React.useRef<number>()

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const focusMenu = () => {
    timeoutRef.current = window.setTimeout(() => {
      menuRef.current?.focus({ preventScroll: true })
    }, 100)
  }

  const getTriggerProps = () => {
    const triggerProps: React.ComponentPropsWithRef<'a'> = {
      ref: triggerRef,
      'aria-expanded': isOpen,
      'aria-controls': 'menu',
      'aria-haspopup': 'true',
    }

    triggerProps.onClick = (event: React.MouseEvent) => {
      if (isRightClick(event)) return
      onToggle()
      if (!isOpen) {
        focusMenu()
      }
    }

    triggerProps.onBlur = (event: React.FocusEvent) => {
      const target = getTarget(event)
      if (isOpen && !menuRef.current?.contains(target)) {
        onClose()
      }
    }

    triggerProps.onKeyDown = (event: React.KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        onClose()
        triggerRef.current?.focus({ preventScroll: true })
      }

      if (event.key === 'ArrowDown') {
        if (!isOpen) onOpen()
        focusMenu()
      }
    }

    return triggerProps
  }

  const getMenuProps = () => {
    const menuProps: OmitMotionProps<React.ComponentPropsWithRef<'div'>> = {
      ref: menuRef,
      id: 'menu',
      tabIndex: -1,
    }

    menuProps.onKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case 'Escape': {
          onClose()
          return triggerRef.current?.focus()
        }
        case 'ArrowDown': {
          const doc = getOwnerDocument(menuRef.current)
          const next = doc?.activeElement?.nextElementSibling as HTMLAnchorElement | null
          return next?.focus()
        }
        case 'ArrowUp': {
          const doc = getOwnerDocument(menuRef.current)
          const prev = doc?.activeElement?.previousElementSibling as HTMLAnchorElement | null
          const el = (prev ?? triggerRef.current) as HTMLElement
          return el.focus()
        }
        default:
          break
      }
    }

    menuProps.onBlur = (event: React.FocusEvent) => {
      const target = getTarget(event)
      const shouldBlur =
        isOpen && !target.isSameNode(triggerRef.current) && !menuRef.current?.contains(target)
      if (shouldBlur) {
        onClose()
        if (!isFocusable(target)) {
          triggerRef.current?.focus({ preventScroll: true })
        }
      }
    }

    return menuProps
  }

  return {
    isOpen,
    onClose,
    getTriggerProps,
    getMenuProps,
  }
}

//end useNavMenu


const NavlinkwLinks = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box>
      <NavLink.Mobile
        as="button"
        textAlign="start"
        type="button"
        cursor="pointer"
        onClick={onToggle}
        paddingEnd="4"
      >
        <Box flex="1">{'Development'}</Box>
        <Box as={FaChevronDown} transform={`rotate(${isOpen ? '180deg' : '0deg'})`} />
      </NavLink.Mobile>
      <Collapse in={isOpen}>
        <Box pl="5">
          <NavLink.Mobile href={'/portfolio'}>
            {'Electronic Engineering'}
          </NavLink.Mobile>
          <NavLink.Mobile href={'/portfolio'}>
            {'Software Engineering'}
          </NavLink.Mobile>
          <NavLink.Mobile href={'/portfolio'}>
            {'Mechanical Engineering'}
          </NavLink.Mobile>
          <NavLink.Mobile href={'/portfolio'}>
            {'Product Design'}
          </NavLink.Mobile>
        </Box>
      </Collapse>
    </Box>
  )
}

const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex {...props} align="center" justify="space-between" className="nav-content__mobile">
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <NextLink href={'/'} passHref>
          <Link display="flex" alignItems="center">
            <Image userSelect={'none'} loading={"eager"} pointerEvents={"none"} width={'auto'} height={'8'} src={mode(smlog.src, wsmlog.src)} alt={'log.ochoa'} />
          </Link>
        </NextLink>
        <Box visibility={{ base: 'hidden', sm: 'visible' }}>
          <NextLink href={'/contact/'} passHref>
            <Link>
              <Button fontWeight="bold">
                Contact Us
              </Button>
            </Link>
          </NextLink>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        <NavLink.Mobile href={'/portfolio'}>
          {'Our Portfolio'}
        </NavLink.Mobile>
        <NavlinkwLinks />
        <NavLink.Mobile href={'/portfolio'}>
          {'Manufacturing'}
        </NavLink.Mobile>
        <NavLink.Mobile href={'/portfolio'}>
          {'About Us'}
        </NavLink.Mobile>
      </NavMenu >
    </>
  )
}

const DesktopNavContent = (props: FlexProps) => {
  const { isOpen, getMenuProps, getTriggerProps } = useNavMenu()
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = mode("dark", "light");
  const SwitchIcon = mode(FaMoon, FaSun);
  const router = useRouter()
  return (
    <Flex align="center" justify="space-between" {...props}>
      <NextLink href={'/'} passHref>
        <Link display="flex" alignItems="center">
          <Image userSelect={'none'} loading={"eager"} cursor={'pointer'} pointerEvents={'none'} width={'auto'} height={'10'} src={mode(smlog.src, wsmlog.src)} alt={'Ochoa'} />
        </Link>
      </NextLink>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        <Box as="li">
          <NavLink.Desktop onClick={() => router.push("/portfolio/")} cursor={'pointer'}>{"Our Portfolio"}</NavLink.Desktop>
        </Box>
        <Box as="li">
          <NavLink.Desktop
            display="flex"
            alignItems="center"
            as="button"
            type="button"
            px="4"
            fontWeight="semibold"
            {...getTriggerProps()}
          >
            <Box>{'Development'}</Box>
            <Box marginStart="2" as={FaChevronDown} fontSize="xs" />
          </NavLink.Desktop>
          <NavMenu {...getMenuProps()} animate={isOpen ? 'open' : 'closed'}>
            <Box maxW="7xl" mx="auto" px="8">
              <SimpleGrid spacing="10" columns={2}>
                <chakra.a
                  onClick={() => router.push('/services/development/electronic-engineering/')}
                  className="group"
                  cursor={'pointer'}
                  m="-3"
                  p="3"
                  display="flex"
                  alignItems="flex-start"
                  transition="all 0.2s"
                  rounded="lg"
                  _hover={{ bg: mode('gray.50', 'gray.600') }}
                  _focus={{ shadow: 'outline' }}
                >
                  <Center
                    aria-hidden
                    as="span"
                    flexShrink={0}
                    w="10"
                    h="10"
                    fontSize="3xl"
                    color={mode('blue.600', 'blue.400')}
                  >
                    {<IoHardwareChipOutline />}
                  </Center>
                  <Box marginStart="3" as="dl">
                    <HStack as="dt">
                      <Text
                        fontWeight="semibold"
                        color={mode('gray.900', 'white')}
                        _groupHover={{ color: mode('blue.600', 'inherit') }}
                        pointerEvents={'none'}
                      >
                        {'Electronic Engineering'}
                      </Text>
                      <Box
                        fontSize="xs"
                        as={FaChevronRight}
                        transition="all 0.2s"
                        _groupHover={{ color: mode('blue.600', 'inherit'), transform: 'translateX(2px)' }}
                      />
                    </HStack>
                    <Text as="dd" color={mode('gray.500', 'gray.400')} pointerEvents={'none'}>

                      {'Reliable and innovative solutions that enable a digital transformation.'}
                    </Text>
                  </Box>
                </chakra.a>
                <chakra.a
                  onClick={() => router.push('/services/development/software-engineering/')}
                  className="group"
                  cursor={'pointer'}
                  m="-3"
                  p="3"
                  display="flex"
                  alignItems="flex-start"
                  transition="all 0.2s"
                  rounded="lg"
                  _hover={{ bg: mode('gray.50', 'gray.600') }}
                  _focus={{ shadow: 'outline' }}
                >
                  <Center
                    aria-hidden
                    as="span"
                    flexShrink={0}
                    w="10"
                    h="10"
                    fontSize="3xl"
                    color={mode('blue.600', 'blue.400')}
                  >
                    {<VscTerminalCmd />}
                  </Center>
                  <Box marginStart="3" as="dl">
                    <HStack as="dt">
                      <Text
                        fontWeight="semibold"
                        color={mode('gray.900', 'white')}
                        _groupHover={{ color: mode('blue.600', 'inherit') }}
                        pointerEvents={'none'}
                      >
                        {'Software Engineering'}
                      </Text>
                      <Box
                        fontSize="xs"
                        as={FaChevronRight}
                        transition="all 0.2s"
                        _groupHover={{ color: mode('blue.600', 'inherit'), transform: 'translateX(2px)' }}
                      />
                    </HStack>
                    <Text as="dd" color={mode('gray.500', 'gray.400')} pointerEvents={'none'}>

                      {'Reliable product development and design on the latest technology.'}
                    </Text>
                  </Box>
                </chakra.a>
                <chakra.a
                  onClick={() => router.push('/services/development/mechanical-engineering/')}
                  className="group"
                  cursor={'pointer'}
                  m="-3"
                  p="3"
                  display="flex"
                  alignItems="flex-start"
                  transition="all 0.2s"
                  rounded="lg"
                  _hover={{ bg: mode('gray.50', 'gray.600') }}
                  _focus={{ shadow: 'outline' }}
                >
                  <Center
                    aria-hidden
                    as="span"
                    flexShrink={0}
                    w="10"
                    h="10"
                    fontSize="3xl"
                    color={mode('blue.600', 'blue.400')}
                  >
                    {<GiMechanicalArm />}
                  </Center>
                  <Box marginStart="3" as="dl">
                    <HStack as="dt">
                      <Text
                        fontWeight="semibold"
                        color={mode('gray.900', 'white')}
                        _groupHover={{ color: mode('blue.600', 'inherit') }}
                        pointerEvents={'none'}
                      >
                        {'Mechanical Engineering'}
                      </Text>
                      <Box
                        fontSize="xs"
                        as={FaChevronRight}
                        transition="all 0.2s"
                        _groupHover={{ color: mode('blue.600', 'inherit'), transform: 'translateX(2px)' }}
                      />
                    </HStack>
                    <Text as="dd" color={mode('gray.500', 'gray.400')} pointerEvents={'none'}>

                      {'Take product ideas from concepts to working prototypes.'}
                    </Text>
                  </Box>
                </chakra.a>
                <chakra.a
                  onClick={() => router.push('/services/development/product-design/')}
                  className="group"
                  cursor={'pointer'}
                  m="-3"
                  p="3"
                  display="flex"
                  alignItems="flex-start"
                  transition="all 0.2s"
                  rounded="lg"
                  _hover={{ bg: mode('gray.50', 'gray.600') }}
                  _focus={{ shadow: 'outline' }}
                >
                  <Center
                    aria-hidden
                    as="span"
                    flexShrink={0}
                    w="10"
                    h="10"
                    fontSize="3xl"
                    color={mode('blue.600', 'blue.400')}
                  >
                    {<MdDevicesOther />}
                  </Center>
                  <Box marginStart="3" as="dl">
                    <HStack as="dt">
                      <Text
                        fontWeight="semibold"
                        color={mode('gray.900', 'white')}
                        _groupHover={{ color: mode('blue.600', 'inherit') }}
                        pointerEvents={'none'}
                      >
                        {'Product Design'}
                      </Text>
                      <Box
                        fontSize="xs"
                        as={FaChevronRight}
                        transition="all 0.2s"
                        _groupHover={{ color: mode('blue.600', 'inherit'), transform: 'translateX(2px)' }}
                      />
                    </HStack>
                    <Text as="dd" color={mode('gray.500', 'gray.400')} pointerEvents={'none'}>

                      {'Innovative product design processes that bring ideas to life.'}
                    </Text>
                  </Box>
                </chakra.a>
              </SimpleGrid>
            </Box>
          </NavMenu>
        </Box>
        <Box as="li">
          <NavLink.Desktop onClick={() => router.push("/services/manufacturing/")} cursor={'pointer'}>{"Manufacturing"}</NavLink.Desktop>
        </Box>
        <Box as="li">
          <NavLink.Desktop onClick={() => router.push("/about/")} cursor={'pointer'}>{"About Us"}</NavLink.Desktop>
        </Box>

      </HStack>
      <HStack spacing="4" >
        <Button colorScheme="blue" fontWeight="bold" onClick={() => router.push('/contact/')}>
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
