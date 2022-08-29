import {
    Box,
    BoxProps,
    Heading,
    SimpleGrid,
    useColorModeValue as mode,
    Text,
    Flex,
    FlexProps,
    Icon,
    List,
    ListIcon,
    ListItem,
    VStack,
    Button,
    ButtonProps,
    Stack,
    HStack,
    Divider,
    Spacer,
} from '@chakra-ui/react'
import { FaUser, FaStore } from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { HiCheckCircle } from 'react-icons/hi'

import { NextSeo } from "next-seo";
import { DevTerms } from "../../components/dev";
import { useRouter } from 'next/router'
import { MdCorporateFare } from 'react-icons/md'

const ActionButton = (props: ButtonProps) => {
    const router = useRouter()
    return (
        <Button
            onClick={() => router.push('/contact/')}
            colorScheme="blue"
            size="lg"
            w="full"
            fontWeight="extrabold"
            py={{ md: '8' }}
            {...props}
        />
    )
}

export interface CardProps extends BoxProps {
    isPopular?: boolean
}
const Card = (props: CardProps) => {
    const { children, isPopular, ...rest } = props
    return (
        <Box
            bg={mode('white', 'gray.700')}
            position="relative"
            px="6"
            pb="6"
            pt="16"
            overflow="hidden"
            shadow="lg"
            maxW="md"
            width="100%"
            {...rest}
        >
            {isPopular && <CardBadge>Popular</CardBadge>}
            {children}
        </Box>
    )
}
const CardBadge = (props: FlexProps) => {
    const { children, ...flexProps } = props
    return (
        <Flex
            bg={mode('blue.500', 'blue.200')}
            position="absolute"
            right={-20}
            top={6}
            width="240px"
            transform="rotate(45deg)"
            py={2}
            justifyContent="center"
            alignItems="center"
            {...flexProps}
        >
            <Text
                fontSize="xs"
                textTransform="uppercase"
                fontWeight="bold"
                letterSpacing="wider"
                color={mode('white', 'gray.800')}
            >
                {children}
            </Text>
        </Flex>
    )
}
export interface PricingCardData {
    features: string[]
    name: string
    price: string
    fromprice: any
}
interface PricingCardProps extends CardProps {
    data: PricingCardData
    icon: React.ElementType
    button: React.ReactElement
}
export const PricingCard = (props: PricingCardProps) => {
    const { data, icon, button, ...rest } = props
    const { features, price, name, fromprice } = data
    const accentColor = mode('blue.600', 'blue.200')

    return (
        <Card bg={mode('gray.50', 'gray.700')} rounded={{ sm: 'xl' }} {...rest}>
            <VStack spacing={6}>
                <Icon aria-hidden as={icon} fontSize="4xl" color={accentColor} />
                <Heading size="md" fontWeight="extrabold">
                    {name}
                </Heading>
            </VStack>
            <Flex align="flex-end" justify="center" fontWeight="extrabold" color={accentColor} mt="8" mb="2">
                <Heading size="3xl" fontWeight="inherit" lineHeight="0.9em">
                    {price}
                </Heading>
                <Text fontWeight="inherit" fontSize="2xl">
                    / yr
                </Text>
            </Flex>
            <Heading textAlign={'center'} color={'gray.500'} fontSize="xl" mb="8">
                {'Worth '}
                <Text display={'inline'} textDecor={'line-through'}>
                    {fromprice}
                </Text>
                {'/ yr'}
            </Heading>
            <List spacing="4" mb="8" maxW="28ch" mx="auto">
                {features.map((feature, index) => (
                    <ListItem fontWeight="medium" key={index}>
                        <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={accentColor} />
                        {feature}
                    </ListItem>
                ))}
            </List>
            {button}
        </Card>
    )
}




import { NextPage } from 'next'

interface Props {

}

const Development: NextPage<Props> = () => {
    const router = useRouter()
    return (
        <>
            <NextSeo title={'Manufacturing - Ochoa - International Product Development, Design and Production'} description={'protafolioData.head.description'} />
            <Box px={{ base: '6', lg: '10' }}>
                <Heading p={6} textAlign={'center'}>Our Web Services</Heading>
                <Heading pb={2} fontSize={'lg'} textAlign={'center'}>Always Included: Website Design, Web Hosting, SSL, Domain Name, SEO Compliance</Heading>
                <Text pb={6} textAlign={'center'}>Custom Features: Locales, Webmail, Custom API, Contact Forms, Auth, Uptime Monitor, etc.</Text>

                <SimpleGrid
                    columns={{ base: 1, lg: 3 }}
                    spacing={{ base: '8', lg: '0' }}
                    maxW="7xl"
                    mx="auto"
                    justifyItems="center"
                    alignItems="center"
                    py={3}
                >
                    <PricingCard
                        data={{
                            price: '$100',
                            name: 'Personal',
                            features: [
                                'Static Site',
                                'Design and Hosting',
                                'Up to 4 Pages',
                                'Optional CMS and Shop',
                                'Business Hours support',
                            ],
                            fromprice: '$200',
                        }}
                        icon={FaUser}
                        button={
                            <ActionButton variant="outline" borderWidth="2px">
                                Contact Us
                            </ActionButton>
                        }
                    />

                    <PricingCard
                        // isPopular
                        zIndex={1}
                        transform={{ lg: 'scale(1.05)' }}
                        data={{
                            price: '$500',
                            name: 'Business',
                            features: [
                                'Static and Dynamic Site ',
                                'Design and Hosting',
                                'Up to 24 Pages',
                                'Optional CMS and Shop',
                                '2 Custom Features',
                                'Daytime Hours support',
                            ],
                            fromprice: '$2000',
                        }}
                        icon={BsFillBriefcaseFill}
                        button={<ActionButton>Contact Us</ActionButton>}
                    />
                    <PricingCard
                        data={{
                            price: '$3000',
                            name: 'Commerce',
                            features: [
                                'Static and Dynamic Site',
                                'Design and Hosting',
                                'Unlimited-Pages',
                                'Optional CMS and Shop',
                                '8 Custom Features',
                                '24/7 On-Call Support',
                            ],
                            fromprice: '$20000',
                        }}
                        icon={FaStore}
                        button={
                            <ActionButton variant="outline" borderWidth="2px">
                                Contact Us
                            </ActionButton>
                        }
                    />
                </SimpleGrid>
            </Box>

            <Box minH={'2rem'} />

            <Box px={{ base: '6', lg: '10' }}>
                <Flex
                    // w="auto"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* <Box rounded={'20'} bg={mode('gray.50', 'gray.700')} shadow="lg" mx="auto">
                        <SimpleGrid p={8} alignItems="start">
                            <Flex w="auto"> */}
                    <Box maxW={'1000px'} p={6} shadow={'lg'} bg={mode('gray.50', 'gray.700')} rounded={'20'}>
                        <HStack spacing={4}>
                            <Icon color={mode('blue.600', 'blue.200')} aria-hidden as={MdCorporateFare} fontSize="4xl" />
                            <Heading size="md" fontWeight="extrabold">
                                {'Enterprise'}
                            </Heading>
                        </HStack>
                        <Flex pb={4} align="flex-end" justify="start" fontWeight="extrabold" color={mode('blue.600', 'blue.200')}>
                            <Heading size="lg" fontWeight="inherit" lineHeight="0.9em">
                                {'Contact for Pricing'}
                            </Heading>
                        </Flex>
                        <Stack width={{ base: "350px", lg: "auto" }}>
                            <SimpleGrid columns={{ base: 1, lg: 4 }} spacing="4" mb="4">
                                <List maxW="28ch">
                                    <ListItem mr="6">
                                        <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={mode('blue.600', 'blue.200')} />
                                        {'Static and Dynamic Site'}
                                    </ListItem>
                                </List>
                                <List maxW="28ch">
                                    <ListItem mr="6">
                                        <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={mode('blue.600', 'blue.200')} />
                                        {'Unlimited Pages'}
                                    </ListItem>
                                </List>
                                <List maxW="28ch" >
                                    <ListItem mr="6">
                                        <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={mode('blue.600', 'blue.200')} />
                                        {'Unlimited Features'}
                                    </ListItem>
                                </List>
                                <List maxW="28ch" >
                                    <ListItem mr="6">
                                        <ListIcon fontSize="xl" as={HiCheckCircle} marginEnd={2} color={mode('blue.600', 'blue.200')} />
                                        {'24/7 On-Call Support'}
                                    </ListItem>
                                </List>
                            </SimpleGrid>
                        </Stack>
                        <Button
                            colorScheme={'blue'}
                            size="lg"
                            w="full"
                            fontWeight="extrabold"
                            py={{ md: '8' }}
                            rounded={'lg'}
                            onClick={() => router.push('/contact')}
                        >
                            {'Contact Us'}
                        </Button>
                    </Box>
                </Flex>
                {/* </SimpleGrid>
                    </Box>
                </Flex> */}
            </Box>

            <Box minH={'5rem'} />

            <Box px={{ base: '6', lg: '10' }}>
                <Heading textAlign={'center'}>Our Other Services</Heading>
                <Text pb={2} fontSize={'lg'} textAlign={'center'}>Sorry, Right now we are not offering our other services to the public.</Text>
            </Box>


            <Box minH={'5rem'} />
        </>
    )
}

export default Development
