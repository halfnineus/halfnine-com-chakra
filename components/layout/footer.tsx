import {
    Box,
    Flex,
    Image,
    Link,
    Stack,
    Text,
    Container,
    SimpleGrid,
    HStack,
    Icon,
    useColorModeValue as mode,
    FormControl,
    FormLabel,
    Select,
    chakra,
    HTMLChakraProps,
    useToken,
    Button,
} from '@chakra-ui/react';

import NextLink from 'next/link'
import { useRouter } from "next/router"
import { BiRightArrowAlt } from 'react-icons/bi';

import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

import footdat from '../../assets/components/footer.json'

export const Logo = (props: HTMLChakraProps<'svg'> & { iconColor?: string }) => {
    const { iconColor = 'currentColor', ...rest } = props
    const color = useToken('colors', iconColor)
    return (
        <chakra.svg aria-hidden viewBox="0 0 123 24" fill="none" {...rest}>
            <path
                d="M23 0H7a1 1 0 00-1 1v16H3c-1.654 0-3 1.346-3 3v4h14v-3.583c0-.808.645-1.417 1.5-1.417.723 0 1.5.47 1.5 1.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V1a1 1 0 00-1-1zM12 20.417V22H2v-2a1 1 0 011-1h9.304c-.196.43-.304.909-.304 1.417zM20 13H10v-2h10v2zm0-6H10V5h10v2z"
                fill={color}
            />
            <path
                d="M36.102 19h10.142v-2.855h-6.627v-2.99h6.108v-2.862h-6.108V7.31h6.627V4.455H36.102V19zM51.518 12.778c.007-1.242.732-1.981 1.833-1.981 1.1 0 1.754.724 1.747 1.932V19h3.473v-6.953c.007-2.457-1.492-4.098-3.786-4.098-1.612 0-2.833.817-3.316 2.145h-.121V8.09h-3.303V19h3.473v-6.222zM70.513 8.09h-3.658l-2.017 7.515h-.113l-2.01-7.514h-3.658L62.793 19h3.977l3.743-10.91zM76.192 19.206c2.863 0 4.745-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.889 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.188-5.568-5.284-5.568-3.296 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.518 5.617zm-2.095-6.84c.05-1.086.91-1.91 2.06-1.91 1.143 0 1.967.796 1.981 1.91h-4.04zM86.217 4.455h-3.473V19h3.473V4.455zM93.12 19.206c3.43 0 5.511-2.266 5.511-5.625 0-3.367-2.08-5.632-5.511-5.632-3.43 0-5.512 2.265-5.512 5.632 0 3.36 2.081 5.625 5.512 5.625zm.021-2.62c-1.285 0-1.996-1.222-1.996-3.026 0-1.811.71-3.04 1.996-3.04 1.243 0 1.953 1.229 1.953 3.04 0 1.804-.71 3.025-1.953 3.025zM100.01 23.091h3.473v-5.86h.071c.441 1.01 1.421 1.925 3.068 1.925 2.415 0 4.361-1.889 4.361-5.603 0-3.85-2.059-5.604-4.339-5.604-1.726 0-2.671 1.008-3.09 2.01h-.106V8.09h-3.438v15zm3.402-9.546c0-1.782.739-2.883 2.01-2.883 1.286 0 1.996 1.13 1.996 2.883 0 1.762-.71 2.905-1.996 2.905-1.271 0-2.01-1.136-2.01-2.904zM117.503 19.206c2.862 0 4.744-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.89 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.187-5.568-5.284-5.568-3.295 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.519 5.617zm-2.096-6.84c.05-1.086.909-1.91 2.06-1.91 1.144 0 1.967.796 1.982 1.91h-4.042z"
                fill="currentColor"
            />
        </chakra.svg>
    )
}

export const SocialButton = chakra('a', {
    baseStyle: {
        rounded: 'lg',
        w: '8',
        h: '8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bg: 'blackAlpha.100',
        // color: 'white',
        transition: 'all 0.2s',
        _hover: {
            bg: 'blackAlpha.500',
        },
    },
})


export interface LinkGroup {
    locale: string
    title?: string
    links: Array<{
        label: string
        href: string
        badge?: React.ReactElement
    }>
}

export const links: LinkGroup[] = [
    {
        locale: "en",
        title: 'Services',
        links: [
            { label: 'Development Services', href: '/services/development' },
            { label: 'Digital Transformation', href: '/services/digitalization' },
            { label: 'Project Consultation', href: '/services/consultation' },
        ],
    },
    {
        locale: "en",
        title: 'Industries',
        links: [
            { label: 'Manufacturing & Production', href: '/industries/manufacturing-and-production' },
            { label: 'Security & Safety', href: '/industries/security-and-safety' },
        ],
    },
    {
        locale: "en",
        title: 'Quick Links',
        links: [
            { label: 'Our Approach', href: '/our-approach' },
            { label: 'About', href: '/about' },
            // { label: 'Risk Control', href: '/our-approach/risk-control' },
        ],
    },
    {
        locale: "es",
        title: 'Servicios',
        links: [
            { label: 'Servicios de desarrollo', href: '/services/development' },
            { label: 'Transformación Digital', href: '/services/digitalization' },
            { label: 'Consulta de proyectos', href: '/services/consultation' },
        ],
    },
    {
        locale: "es",
        title: 'Industrias',
        links: [
            { label: 'Fabricación & Producción', href: '/industries/manufacturing-and-production' },
            { label: 'Security & Protección', href: '/industries/security-and-safety' },
        ],
    },
    {
        locale: "es",
        title: 'Enlaces Rápidos',
        links: [
            { label: 'Nuestro enfoque', href: '/our-approach' },
            { label: 'Acerca De', href: '/about' },
            // { label: 'Control de Riesgo', href: '/our-approach/risk-control' },
        ],
    },
]

export default function SCFooter() {
    const { locale } = useRouter()
    const router = useRouter()
    const { pathname, asPath, query } = router
    return (
        <>
            {footdat.data.filter(p => p.locale === locale).map((footerData, i) => {
                return (
                    <>
                        <Box
                            key={i}
                            bg={mode('white', 'gray.900')}
                            color={mode('gray.700', 'gray.200')}
                            margin={'auto'}
                            py={6}
                            borderTop={'1px'}
                            borderColor={mode('gray.300', 'gray.600')}
                        >
                            <Container px={{ base: '4', xl: '0' }} maxW={'container.xl'}>
                                <Flex
                                    direction={{ base: 'column', lg: 'row' }}
                                    justify="space-between"
                                    // pb="4"
                                    align="flex-start"
                                    id="top"
                                >
                                    <SimpleGrid
                                        w="full"
                                        maxW={{ base: 'unset', lg: '4xl' }}
                                        columns={{ base: 2, lg: 4 }}
                                        spacing={{ base: '8', md: '12' }}
                                        fontSize="sm"
                                    >
                                        {links.filter(p => p.locale === locale).map((group, idx) => (
                                            <>
                                                <Box key={idx}>
                                                    <Text fontWeight="bold" mb="4">
                                                        {group.title}
                                                    </Text>
                                                    <Stack>
                                                        {group.links.map((link, idx) => (
                                                            <NextLink key={idx} href={link.href} passHref>
                                                                <Link>
                                                                    {link.label}
                                                                </Link>
                                                            </NextLink>
                                                        ))}
                                                    </Stack>
                                                </Box>
                                            </>
                                        ))}
                                    </SimpleGrid>
                                    <Box maxW={'md'} paddingEnd="12">
                                        <Stack
                                            spacing="10"
                                            direction={{ base: 'column', lg: 'row' }}
                                            align={{ base: 'flex-start', lg: 'center' }}
                                            justify="space-between"
                                            mr={{ base: 0, xl: 9 }}
                                        >
                                            <Text
                                                size="xl"
                                                lineHeight="short"
                                                maxW={{ base: 'unset', lg: '800px' }}
                                                fontWeight={'semibold'}
                                                pt={{ base: 8, sm: 8, md: 8, lg: 0 }}
                                            >
                                                {footerData.lvlup.t1}<br />
                                                <Text fontSize="sm" pt={2} fontWeight={'normal'}>
                                                    {footerData.lvlup.d1}
                                                </Text>
                                            </Text>
                                        </Stack>
                                        <HStack textAlign={'center'} py={{ base: 2, md: 0 }}>
                                            <Text maxW={{ base: 'unset', lg: '800px' }} lineHeight="short" pr={2} pt={{ base: 4, sm: 4, md: 4, lg: 4 }} pb={4} fontWeight={'semibold'} fontSize={{ base: '14px', sm: '16px', md: '16px' }}>
                                                {footerData.lvlup.t2}
                                            </Text>
                                            <NextLink href={'/contact'} passHref>
                                                <Link>
                                                    <Button
                                                        w={{ base: 'full', md: 'auto' }}
                                                        minW="120px"
                                                        colorScheme={'brand'}
                                                        size={'sm'}
                                                        // textTransform="uppercase"
                                                        // fontWeight="bold"
                                                        transition="all 0.2s"
                                                        rounded="lg"
                                                        outline={0}
                                                        _focus={{ shadow: 'outline' }}
                                                        _active={{ transform: 'translateY(2px)' }}
                                                    >
                                                        {footerData.lvlup.b2}
                                                        <Box as={BiRightArrowAlt} ml="2" fontSize="lg" />
                                                    </Button>
                                                </Link>
                                            </NextLink>
                                        </HStack>
                                    </Box>
                                </Flex>
                            </Container>
                            <HStack pt={2} spacing={"3.5"} justify="center">
                                <NextLink href={'https://www.facebook.com/ochoaiot'} passHref legacyBehavior>
                                    <Link transform={'scale(0.95)'} _hover={{ color: "#4267B2", transform: 'scale(1)' }} isExternal>
                                        <Icon
                                            // color="gray.800"
                                            _dark={{ color: "white" }}
                                            h="34px"
                                            w="34px"
                                            as={FaFacebookSquare}
                                        />
                                    </Link>
                                </NextLink>
                                <NextLink href={'https://twitter.com/ochoa_pro'} passHref legacyBehavior>
                                    <Link transform={'scale(0.95)'} _hover={{ color: "#1DA1F2", transform: 'scale(1)' }} isExternal>
                                        <Icon
                                            // color="gray.800"
                                            _dark={{ color: "white" }}
                                            h="34px"
                                            w="34px"
                                            as={FaTwitterSquare}
                                        />
                                    </Link>
                                </NextLink>
                                <NextLink href={'https://www.youtube.com/@ochoapro'} passHref legacyBehavior>
                                    <Link transform={'scale(0.95)'} _hover={{ color: "#FF0000", transform: 'scale(1)' }} isExternal>
                                        <Icon
                                            _dark={{ color: "white" }}
                                            h="34px"
                                            w="34px"
                                            as={FaYoutubeSquare}
                                        />
                                    </Link>
                                </NextLink>
                                <NextLink href={'https://www.linkedin.com/company/ochoapro/'} passHref legacyBehavior>
                                    <Link transform={'scale(0.95)'} _hover={{ color: "#0077B5", transform: 'scale(1)' }} isExternal>
                                        <Icon
                                            _dark={{ color: "white" }}
                                            h="34px"
                                            w="34px"
                                            as={FaLinkedin}
                                        />
                                    </Link>
                                </NextLink>
                            </HStack>
                            <Flex
                                py={2}
                                align={'center'}
                                _before={{
                                    content: '""',
                                    borderBottom: '1px solid',
                                    borderColor: mode('gray.200', 'gray.700'),
                                    flexGrow: 1,
                                    mr: 5,
                                }}
                                _after={{
                                    content: '""',
                                    borderBottom: '1px solid',
                                    borderColor: mode('gray.200', 'gray.700'),
                                    flexGrow: 1,
                                    ml: 5,
                                }}>
                                <NextLink href={'/'} passHref>
                                    <Link>
                                        <Image userSelect={'none'} alt={'Ochoa'} pointerEvents={'none'} width={'auto'} height={'10'} src={mode('/img/smlog.png', '/img/wsmlog.png')} />
                                    </Link>
                                </NextLink>
                            </Flex>
                            <Container maxW={'container.xl'}>
                                <Flex
                                    direction={{ base: 'column-reverse', lg: 'row' }}
                                    align={{ base: 'flex-start', lg: 'center' }}
                                    justify="space-between"
                                    fontSize="sm"
                                >
                                    <Box id="bottom" mt={{ base: '4', lg: '0' }}>
                                        {footerData.components.copyright}
                                        {/* <NextLink href={'/about'} passHref legacyBehavior>
                                            <Link px={{ base: '4', lg: '8' }} isExternal>
                                                {footerData.components.i1}
                                            </Link>
                                        </NextLink> */}
                                        <NextLink href={'/privacy'} passHref>
                                            <Link px={{ base: '4', lg: '8' }}>
                                                {footerData.components.i2}
                                            </Link>
                                        </NextLink>
                                        <NextLink href={'https://ochoa.pro/sitemap.xml'} passHref legacyBehavior>
                                            <Link pr={{ base: '4', lg: '8' }} isExternal>
                                                {footerData.components.i3}
                                            </Link>
                                        </NextLink>
                                    </Box>
                                    <FormControl w="auto" display="flex" alignItems="center">
                                        <FormLabel mb="1" fontSize="sm" fontWeight="normal">
                                            {footerData.lnr}
                                        </FormLabel>
                                        <Select
                                            w="124px"
                                            flexShrink={0}
                                            fontSize="inherit"
                                            fontWeight="bold"
                                            variant="unstyled"
                                            id="lang"
                                            name="lang"
                                            defaultValue="English (US)"
                                        >
                                            <option onSelect={() => { router.push({ pathname, query }, asPath, { locale: 'en' }) }} onClick={() => { router.push({ pathname, query }, asPath, { locale: 'en' }) }} value="English (US)">English (US)</option>
                                            <option onSelect={() => { router.push({ pathname, query }, asPath, { locale: 'en' }) }} onClick={() => { router.push({ pathname, query }, asPath, { locale: 'es' }) }} value="Español (MX)">Español (MX)</option>
                                        </Select>
                                    </FormControl>
                                </Flex>
                            </Container>
                        </Box>
                    </>
                )
            })}

        </>
    );
}