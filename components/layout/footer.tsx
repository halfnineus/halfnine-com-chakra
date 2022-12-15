import {
    Box,
    Flex,
    Image,
    Stack,
    Text,
    Container,
    SimpleGrid,
    HStack,
    Icon,
    FormControl,
    FormLabel,
    Select,
    chakra,
    HTMLChakraProps,
    useToken,
    Button,
} from '@chakra-ui/react';

import Link from 'next/link'
import { useRouter } from "next/router"
import { RiMailSendLine } from 'react-icons/ri';

import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

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
            { label: 'Manufacturing and Production', href: '/industries/manufacturing-and-production' },
            { label: 'Security and Safety', href: '/industries/security-and-safety' },
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
            { label: 'Seguridad & Protección', href: '/industries/security-and-safety' },
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
                            py={6}
                            borderTop={'1px'}
                            borderColor={'gray.200'}
                        >
                            <Container px={{ base: '4', xl: '0' }} maxW={'container.xl'}>
                                <Flex
                                    direction={{ base: 'column', lg: 'row' }}
                                    justify="space-between"
                                    align="flex-start"
                                    id="top"
                                >
                                    <SimpleGrid
                                        w="full"
                                        maxW={{ base: 'unset', lg: '4xl' }}
                                        columns={{ base: 2, lg: 4 }}
                                        spacing={{ base: '8', md: '10' }}
                                        fontSize="sm"
                                    >
                                        {links.filter(p => p.locale === locale).map((group, idx) => (
                                            <>
                                                <Box key={idx}>
                                                    <Text fontWeight="bold" mb={4}>
                                                        {group.title}
                                                    </Text>
                                                    <Stack>
                                                        {group.links.map((link, idx) => (
                                                            <Link key={idx} href={link.href}>
                                                                <Text _hover={{ color: 'blue.400' }}>
                                                                    {link.label}
                                                                </Text>
                                                            </Link>
                                                        ))}
                                                    </Stack>
                                                </Box>
                                            </>
                                        ))}
                                    </SimpleGrid>
                                    <Box maxW={'md'} paddingEnd="12">
                                        <Stack
                                            direction={{ base: 'column', lg: 'column' }}
                                            align={{ base: 'flex-start', lg: 'flex-start' }}
                                            justify={"start"}
                                            mr={{ base: 0, xl: 9 }}
                                        >
                                            <Text
                                                size="xl"
                                                lineHeight="short"
                                                maxW={{ base: 'unset', lg: '800px' }}
                                                fontWeight={'semibold'}
                                                pt={{ base: 8, sm: 8, md: 8, lg: 0 }}
                                            >
                                                {footerData.lvlup.t1}
                                            </Text>
                                            <Text fontSize="sm" fontWeight={'normal'} lineHeight={'5'}>
                                                {footerData.lvlup.d1}
                                            </Text>
                                        </Stack>
                                        <HStack textAlign={'center'} py={{ base: 2, md: 0 }}>
                                            <Text maxW={{ base: 'unset', lg: '800px' }} lineHeight="short" pr={2} pt={{ base: 4, sm: 4, md: 4, lg: 4 }} pb={4} fontWeight={'semibold'} fontSize={{ base: '14px', sm: '16px', md: '16px' }}>
                                                {footerData.lvlup.t2}
                                            </Text>
                                            <Link href={'/contact'}>
                                                <Button
                                                    w={{ base: 'full', md: 'auto' }}
                                                    minW="120px"
                                                    colorScheme={'blue'}
                                                    size={'sm'}
                                                    // textTransform="uppercase"
                                                    // fontWeight="bold"
                                                    transition="all 0.2s"
                                                    rounded="lg"
                                                    outline={0}
                                                    _focus={{ shadow: 'outline' }}
                                                    _active={{ transform: 'translateY(2px)' }}
                                                    rightIcon={<RiMailSendLine size={14} />}
                                                >
                                                    {footerData.lvlup.b2}
                                                    {/* <Box as={SiMinutemailer} ml="2" fontSize="md" /> */}
                                                </Button>
                                            </Link>
                                        </HStack>
                                    </Box>
                                </Flex>
                            </Container>
                            <HStack pt={2} spacing={"3.5"} justify="center">
                                <Link href={'https://www.facebook.com/zedircom'} target={'_blank'}>
                                    <Icon
                                        transform={'scale(0.95)'}
                                        _hover={{ color: "#4267B2", transform: 'scale(1)' }}
                                        h="34px"
                                        w="34px"
                                        as={FaFacebookSquare}
                                    />
                                </Link>
                                <Link href={'https://twitter.com/zedircom'} target={'_blank'}>
                                    <Icon
                                        transform={'scale(0.95)'}
                                        _hover={{ color: "#1DA1F2", transform: 'scale(1)' }}
                                        h="34px"
                                        w="34px"
                                        as={FaTwitterSquare}
                                    />
                                </Link>
                                <Link href={'https://www.linkedin.com/company/zedir/'} target={'_blank'}>
                                    <Icon
                                        transform={'scale(0.95)'}
                                        _hover={{ color: "#0077B5", transform: 'scale(1)' }}
                                        h="34px"
                                        w="34px"
                                        as={FaLinkedin}
                                    />
                                </Link>
                            </HStack>
                            <Flex
                                py={2}
                                align={'center'}
                                _before={{
                                    content: '""',
                                    borderBottom: '1px solid',
                                    borderColor: 'gray.200',
                                    flexGrow: 1,
                                    mr: 5,
                                }}
                                _after={{
                                    content: '""',
                                    borderBottom: '1px solid',
                                    borderColor: 'gray.200',
                                    flexGrow: 1,
                                    ml: 5,
                                }}>
                                <Link href={'/'}>
                                    {/* <Image userSelect={'none'} alt={'Zedir'} pointerEvents={'none'} width={'auto'} height={'10'} src={'/img/smlog.png'} /> */}
                                    <Icon fontSize={120} my={-10} viewBox='0 0 1895.1 500'>
                                        <path d="m249.9 268.7 202.9-9.3c-12.5-25.5-16-48.5-40-52.2l-108-18L95 155.5c6 12.4 103.9 115.7 154.9 113.2zM0 0c22 44.8 133 143 164.9 148.6l259.9 41.7c-17.5-34.8-21-58.5-52-68.4L0 0zm315.4 350.8 155.9-41.7c-10-20.5-10-33-29-31.7l-92 5-169.9 9.3c6 8.7 94 69.6 135 59.1zm123 149.2c28.5-23 36-47.9 52.5-85.8 18.5-42.3 6.5-48.5-14-90.8-2-4.4-29.5 1.2-32.5 6.2-3.5 4.4-1 33.6-1.5 39.8l-5 130.6h.5zm-7-166.7c-18.5 5.6-43 1.2-47.5 26.7l-20.5 107c46-13.6 66.5-82.7 68-133.7zm-58 16.8c-46 12.4-45 28.6-65 82.1 31.5-3.7 60.5-46 65-82.1zM709.9 375.1h150.3l-5.6 41.4H652.8v-38.8l151.2-218H668.3v-40.5h190.8v39.2L709.9 375.1zM964.2 318.3c1.4 23.4 8 40.4 19.7 50.8a61 61 0 0 0 42.3 15.7c11.1 0 21.4-1.7 30.9-5.2 9.5-3.4 19.1-8.3 28.8-14.6l20.9 28.9a131.7 131.7 0 0 1-83 28.5c-23.7 0-43.7-5-60-15.1a95.2 95.2 0 0 1-37-42 145.1 145.1 0 0 1-12.6-62.2 145 145 0 0 1 12.5-61.3 96 96 0 0 1 91.4-58.7c30.2 0 54 10.1 71.6 30.4 17.6 20.2 26.4 48 26.4 83.4a217.8 217.8 0 0 1-1.1 21.5H964.2zm54.3-99.5A48.7 48.7 0 0 0 981 235c-9.9 10.8-15.6 27.6-17 50.4h105.3c-.4-21.4-5-37.8-13.7-49.3a43.3 43.3 0 0 0-37.1-17.3zM1316.2 92.3l48.2 5.4v318.8H1322l-3.4-28a83.5 83.5 0 0 1-27.8 25 74 74 0 0 1-36.2 8.8c-19.5 0-35.6-5-48.1-15a88.5 88.5 0 0 1-28.1-41.9 191.6 191.6 0 0 1-9.3-62.7c0-23.1 3.6-43.7 10.8-61.7a98 98 0 0 1 30.8-42.5 76.7 76.7 0 0 1 48.2-15.5c23.4 0 42.5 8.3 57.3 24.8V92.3zm-44.6 127.8a43.2 43.2 0 0 0-37.9 20.1c-9 13.4-13.6 34.3-13.6 62.6 0 29 4.1 50 12.4 63a39 39 0 0 0 34.8 19.5c10.9 0 20.4-3.2 28.4-9.5s14.9-13.9 20.5-22.8V245.3a62.8 62.8 0 0 0-19.6-18.6 48.4 48.4 0 0 0-25-6.6zM1565.4 189v192.1h61.8v35.3h-178.1v-35.3h68.1V224.4h-65.9V189h114.1zm-33.6-111.3c9.5 0 17.1 2.9 22.9 8.6a29 29 0 0 1 8.7 21.5 30 30 0 0 1-31.6 30.6c-9.2 0-16.7-2.9-22.6-8.8a29.5 29.5 0 0 1-8.8-21.8c0-8.6 2.9-15.8 8.8-21.5a31 31 0 0 1 22.6-8.6zM1701.7 416.5V382h33.4V223.3h-33.4V189h70.2l8.8 52.8c8.5-19.1 19-33.6 31.6-43.6 12.6-10 28.8-15 48.6-15a92 92 0 0 1 18.2 1.6c5.4 1.1 10.7 2.5 16 4.2l-8.2 83.8h-34.5v-46.3c-16.1.6-29.9 7-41.6 19.3s-20.8 29.5-27.6 51.8V382h45.9v34.5h-127.4z" />
                                    </Icon>
                                </Link>
                            </Flex>
                            <Container px={{ base: '4', xl: '0' }} maxW={'container.xl'}>
                                <Flex
                                    direction={{ base: 'column-reverse', lg: 'row' }}
                                    align={{ base: 'flex-start', lg: 'center' }}
                                    justify="space-between"
                                    fontSize="sm"
                                >
                                    <Stack as={HStack} direction={'row'} spacing={{ base: '4', lg: '8' }} id="bottom" mt={{ base: '4', lg: '0' }}>
                                        <Text>
                                            {footerData.components.copyright}
                                        </Text>
                                        <Link href={'/privacy'}>
                                            <Text _hover={{ color: "#1DA1F2" }}>
                                                {footerData.components.i2}
                                            </Text>
                                        </Link>
                                        <Link href={'https://www.zedir.com/sitemap.xml'} target={'_blank'}>
                                            <Text _hover={{ color: "#1DA1F2" }}>
                                                {footerData.components.i3}
                                            </Text>
                                        </Link>
                                    </Stack>
                                    <FormControl w="auto" display="flex" alignItems="center">
                                        <FormLabel mb="1" fontSize="sm" fontWeight="normal">
                                            {footerData.simpleform.lnr}
                                        </FormLabel>
                                        <Select
                                            w="124px"
                                            flexShrink={0}
                                            fontSize="inherit"
                                            fontWeight="bold"
                                            variant="unstyled"
                                            id="lang"
                                            name="lang"
                                            defaultValue={footerData.simpleform.valuedat}
                                        >
                                            <option onClick={() => { router.push({ pathname, query }, asPath, { locale: 'en' }) }} onBlur={() => { router.push({ pathname, query }, asPath, { locale: 'en' }) }} value="English (US)">{`English (US)`}</option>
                                            <option onClick={() => { router.push({ pathname, query }, asPath, { locale: 'es' }) }} onBlur={() => { router.push({ pathname, query }, asPath, { locale: 'es' }) }} value="Español (MX)">{`Español (MX)`}</option>
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