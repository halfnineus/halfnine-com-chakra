import { Box, Divider, useColorModeValue as mode } from '@chakra-ui/react'
import { NavContent } from './NavContent'

import { NextPage } from 'next'

interface Props {

}

const Index: NextPage<Props> = () => {
  return (
    <>
      <Box shadow="sm" as="header" bg={mode('white', 'gray.800')} position="relative" zIndex="10">
        <Box as="nav" aria-label="Main navigation" mx="auto" px={{ base: '6', md: '8' }}>
          <NavContent.Mobile display={{ base: 'flex', lg: 'none' }} />
          <NavContent.Desktop display={{ base: 'none', lg: 'flex' }} />
        </Box>
      </Box>
    </>
  )
}

export default Index