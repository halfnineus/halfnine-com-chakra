import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const Index = () => {
  return (
    <>
      <Heading pb={2} size={{ base: 'sm', md: 'md' }}>
        What can you expect?
      </Heading>
      <Text pb={8} color="muted" fontSize={{ base: 'lg', md: 'xl' }}>
        A bundle of 210+ ready-to-use, responsive and accessible components with clever
        structured sourcode files.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} columnGap={8} rowGap={{ base: 10, md: 16 }}>
        {features.map((feature) => (
          <Stack key={feature.name} spacing={{ base: '4', md: '3' }}>
            <Square
              size={{ base: '10', md: '12' }}
              bg="blue.500"
              color="white"
              borderRadius="lg"
            >
              <Icon as={feature.icon} boxSize={{ base: '5', md: '6' }} />
            </Square>
            <Stack spacing={{ base: '1', md: '2' }} flex="1">
              <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
                {feature.name}
              </Text>
              <Text color="muted">{feature.description}</Text>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Index

import { BsFillMoonFill, BsStars } from 'react-icons/bs'
import { FaAccessibleIcon, FaExpandAlt, FaPaintBrush } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'

const features = [
  {
    name: '210+ Components',
    description: 'Chakra UI Pro has 210+ componentsto help you develop your project faster.',
    icon: BsStars,
  },
  {
    name: 'Production Ready',
    description:
      'Effortlessly create your next production-ready experience with Chakra UI Pro components.',
    icon: IoRocketSharp,
  },
  {
    name: 'Light & Dark',
    description: 'All components support a light and a dark color mode out of the box.',
    icon: BsFillMoonFill,
  },
  {
    name: 'Themeable',
    description:
      "Your style. Your blue. Customize the components as you need them. It's that simple.",
    icon: FaPaintBrush,
  },
  {
    name: 'Fully Responsive',
    description: 'Responsive components that look great on mobile, tablet and desktop.',
    icon: FaExpandAlt,
  },
  {
    name: 'Accessible',
    description:
      "Accessibility first. That's why we pay attention to accessibility right from the start.",
    icon: FaAccessibleIcon,
  },
]
