import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  useDisclosure,
  useColorModeValue as mode,
  Link,
  Image,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'
import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { Submenu } from './Submenu'
import { ToggleButton } from './ToggleButton'
import { links } from './_data'
import { links2 } from './_data2'

import smlog from '../../public/img/smlog.png'
import wsmlog from '../../public/img/wsmlog.png'

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
            <Image width={'100%'} height={'8'} src={mode(smlog.src, wsmlog.src)} alt={'ochoa.pro'} />
          </Link>
        </NextLink>
        <Box visibility={{ base: 'hidden', sm: 'visible' }}>
          <Button as="a" /* colorScheme="blue" */>
            Get Started
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>



        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          )
            :
            (
              <NavLink.Mobile key={idx} href={'contact'}>
                {link.label}
              </NavLink.Mobile>
            ),
        )}
        {links2.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          )
            :
            (
              <NavLink.Mobile key={idx} href={'contact'}>
                {link.label}
              </NavLink.Mobile>
            ),
        )}



        {/* <Button colorScheme="blue" w="full" size="lg" mt="5">
          Try for free
        </Button> */}
      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props: FlexProps) => {
  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <NextLink href={'/'} passHref>
        <Link display="flex" alignItems="center">
          <Image width={'100%'} height={'8'} src={mode(smlog.src, wsmlog.src)} alt={'ochoa.pro'} />
        </Link>
      </NextLink>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
        {links2.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" /* minW="240px" justify="space-between" */ >
        {/* <Box as="a" href="#" color={mode('blue.600', 'blue.300')} fontWeight="bold">
          Sign In
        </Box> */}
        <NextLink href={'contact'} passHref>
          <Link>
            <Button /* colorScheme="blue" */ fontWeight="bold">
              Get Started
            </Button>
          </Link>
        </NextLink>
      </HStack>
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
