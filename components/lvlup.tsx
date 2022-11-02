import {
    Box,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue as mode,
    Flex,
    Img,
    Button,
    Link,
} from '@chakra-ui/react'

import { BiBrain, BiRightArrowAlt } from 'react-icons/bi'
import { FaRegHandshake } from 'react-icons/fa'
import { GiLeapfrog } from 'react-icons/gi'
import { AiOutlineSolution } from 'react-icons/ai'
import NextLink from 'next/link'

import indexdat from "../assets/components/lvlup.json"
import { useRouter } from 'next/router'

interface FeatureProps {
    icon: React.ReactElement
    title: string
    children: React.ReactNode
}

interface TestimonialProps {
    image: string
    name: string
    role: string
    children: React.ReactNode
}

export const Testimonial = (props: TestimonialProps) => {
    const { children, image, name, role } = props
    return (
        <Box
            as="blockquote"
            rounded="2xl"
            bg={mode('gray.50', 'gray.700')}
            color={mode('gray.800', 'white')}
            shadow="md"
            px="10"
            py="8"
        >
            <Flex mb="6">
                <Img
                    mt="-12"
                    bg={mode('white', 'gray.700')}
                    objectFit="cover"
                    w="24"
                    h="24"
                    rounded="full"
                    color={mode('gray.50', 'gray.700')}
                    shadow="0 0 0 10px currentColor"
                    src={image}
                    alt={name}
                />
                <Box marginStart="5">
                    <Text as="cite" fontStyle="normal" fontSize="md" fontWeight="extrabold">
                        {name}
                    </Text>
                    <Text
                        mt="1"
                        color={mode('gray.600', 'gray.400')}
                        textTransform="uppercase"
                        fontSize="xs"
                        fontWeight="semibold"
                        letterSpacing="wide"
                    >
                        {role}
                    </Text>
                </Box>
            </Flex>
            <Text color={mode('gray.600', 'gray.400')}>{children}</Text>
        </Box>
    )
}

export const Feature = (props: FeatureProps) => {
    const { title, children, icon } = props
    return (
        <Box>
            <Box color={mode("brand.700", "white")} fontSize="2.5rem">
                {icon}
            </Box>
            <Stack mt="6">
                <Text as="h3" fontSize="lg" fontWeight="bold">
                    {title}
                </Text>
                <Text pr="6" lineHeight="tall" color={mode("gray.600", "gray.400")}>
                    {children}
                </Text>
            </Stack>
        </Box>
    )
}


export const App = () => {
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <Box px={{ base: '6', lg: '10' }}>
                            <Box mx="auto">
                                <Stack
                                    spacing="10"
                                    direction={{ base: 'column', lg: 'row' }}
                                    align={{ base: 'flex-start', lg: 'center' }}
                                    justify="space-between"
                                    mr={{ base: 0, xl: 9 }}
                                >

                                    <Heading
                                        size="xl"
                                        lineHeight="short"
                                        maxW={{ base: 'unset', lg: '800px' }}
                                    >
                                        {indexData.lvldat.title}<br />
                                        <Text fontSize="md" pt={2} fontWeight={'normal'}>
                                            {indexData.lvldat.description}
                                        </Text>
                                    </Heading>
                                    <NextLink href={'/contact'} passHref>
                                        <Link>
                                            <Button
                                                w={{ base: 'full', md: 'auto' }}
                                                minW="140px"
                                                colorScheme={'brand'}
                                                // textTransform="uppercase"
                                                // fontWeight="bold"
                                                transition="all 0.2s"
                                                rounded="lg"
                                                outline={0}
                                                _focus={{ shadow: 'outline' }}
                                                _active={{ transform: 'translateY(2px)' }}
                                            >
                                                {indexData.lvldat.button}
                                                <Box as={BiRightArrowAlt} ml="2" fontSize="lg" />
                                            </Button>
                                        </Link>
                                    </NextLink>
                                </Stack>
                                <SimpleGrid
                                    columns={{ base: 1, md: 2, lg: 4 }}
                                    spacing={{ base: '12', md: '8', lg: '2' }}
                                    mt={{ base: '12', md: '12' }}
                                >
                                    <Feature icon={<FaRegHandshake />} title={indexData.features.f1t}>
                                        {indexData.features.f1d}
                                    </Feature>
                                    <Feature icon={<BiBrain />} title={indexData.features.f2t}>
                                        {indexData.features.f2d}
                                    </Feature>
                                    <Feature icon={<GiLeapfrog />} title={indexData.features.f3t}>
                                        {indexData.features.f3d}
                                    </Feature>
                                    <Feature icon={<AiOutlineSolution />} title={indexData.features.f4t}>
                                        {indexData.features.f4d}
                                    </Feature>
                                </SimpleGrid>
                            </Box>
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default App