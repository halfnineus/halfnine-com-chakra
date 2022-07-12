import * as React from 'react'
import { isFocusable, getOwnerDocument, isRightClick } from '@chakra-ui/utils'

import {
  Box,
  Collapse,
  SimpleGrid,
  useDisclosure,
  Center,
  chakra,
  HStack,
  HTMLChakraProps,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
  BoxProps,
} from '@chakra-ui/react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { Link } from './_data'
import { useRouter } from 'next/router'
import { Variants } from 'framer-motion'
import { HTMLMotionProps, motion } from 'framer-motion'


// MotionBox

export type MotionBoxProps = BoxProps & HTMLMotionProps<'div'>
export const MotionBox = motion<BoxProps>(Box)

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

export const MobileNavLink = (props: NavLinkProps) => {
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

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}

// end NavLink

// NavMenu

export const NavMenu = (props: MotionBoxProps) => (
  <MotionBox
    initial="init"
    variants={variants}
    outline="0"
    opacity="0"
    bg={useColorModeValue('white', 'gray.700')}
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







// SubmenuItem


interface SubmenuItemProps extends HTMLChakraProps<'a'> {
  title: string
  icon?: React.ReactElement
  children: React.ReactNode
  href: string
}

export const SubmenuItem = (props: SubmenuItemProps) => {
  const { title, icon, children, href } = props
  const router = useRouter()
  return (
    <chakra.a
      onClick={() => router.push(href)}
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
        {icon}
      </Center>
      <Box marginStart="3" as="dl">
        <HStack as="dt">
          <Text
            fontWeight="semibold"
            color={mode('gray.900', 'white')}
            _groupHover={{ color: mode('blue.600', 'inherit') }}
            pointerEvents={'none'}
          >
            {title}
          </Text>
          <Box
            fontSize="xs"
            as={FaChevronRight}
            transition="all 0.2s"
            _groupHover={{ color: mode('blue.600', 'inherit'), transform: 'translateX(2px)' }}
          />
        </HStack>
        <Text as="dd" color={mode('gray.500', 'gray.400')} pointerEvents={'none'}>

          {children}
        </Text>
      </Box>
    </chakra.a>
  )
}

// end SubmenuItem



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







interface SubmenuProps {
  link: Link
}

const DesktopSubmenu = (props: SubmenuProps) => {
  const { link } = props
  const { isOpen, getMenuProps, getTriggerProps } = useNavMenu()
  return (
    <>
      <NavLink.Desktop
        display="flex"
        alignItems="center"
        as="button"
        type="button"
        px="4"
        fontWeight="semibold"
        {...getTriggerProps()}
      >
        <Box>{link.label}</Box>
        <Box marginStart="2" as={FaChevronDown} fontSize="xs" />
      </NavLink.Desktop>
      <NavMenu {...getMenuProps()} animate={isOpen ? 'open' : 'closed'}>
        <Box maxW="7xl" mx="auto" px="8">
          <SimpleGrid spacing="10" columns={2}>
            {link.children?.map((item, idx) => (
              <SubmenuItem key={idx} title={item.label} href={item.href} icon={item.icon}>
                {item.description}
              </SubmenuItem>
            ))}
          </SimpleGrid>
        </Box>
      </NavMenu>
    </>
  )
}

const MobileSubMenu = (props: SubmenuProps) => {
  const { link } = props
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
        <Box flex="1">{link.label}</Box>
        <Box as={FaChevronDown} transform={`rotate(${isOpen ? '180deg' : '0deg'})`} />
      </NavLink.Mobile>
      <Collapse in={isOpen}>
        <Box pl="5">
          {link.children?.map((item, idx) => (
            <NavLink.Mobile key={idx} href={item.href}>
              {item.label}
            </NavLink.Mobile>
          ))}
        </Box>
      </Collapse>
    </Box>
  )
}

export const Submenu = {
  Mobile: MobileSubMenu,
  Desktop: DesktopSubmenu,
}
