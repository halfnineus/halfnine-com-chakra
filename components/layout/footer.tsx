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
            { label: 'Development', href: '/services#development' },
            { label: 'Digital Transformation', href: '/services#digitalization' },
            { label: 'Project Consultation', href: '/services#consultation' },
        ],
    },
    {
        locale: "en",
        title: 'Quick Links',
        links: [
            { label: 'Industries', href: '/industries' },
            { label: 'Our Approach', href: '/our-approach' },
            { label: 'About', href: '/about' },
        ],
    },
    {
        locale: "es",
        title: 'Servicios',
        links: [
            { label: 'Desarrollo', href: '/services#development' },
            { label: 'Transformación Digital', href: '/services#digitalization' },
            { label: 'Consulta de proyectos', href: '/services#consultation' },
        ],
    },
    {
        locale: "es",
        title: 'Enlaces Rápidos',
        links: [
            { label: 'Industrias', href: '/industries' },
            { label: 'Nuestro enfoque', href: '/our-approach' },
            { label: 'Acerca De', href: '/about' },
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
                                py={6}
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
                                    <Icon maxH={16} fontSize={160} my={-20} viewBox='10 0 200 60'>
                                        <path d="M56.18 42.267v2.744H30.575l5.08-8.89h-3.15v-1.778h4.166l3.15-5.538H18.435v-1.778h22.403l5.537-9.652H30.22v-5.74h26.01l-1.32 2.337H32.861v.965H54.35l-6.807 12.09h1.372v1.778h-2.388l-3.15 5.538h19.61v1.778H42.361l-1.83 3.302H56.18v1.422h-8.026v1.422zM91.13 42.47v2.54H66.746V23.168H61.97v-1.778h4.776v-9.906H91.13v5.638H72.334v.864H67v.965h5.334v2.439H92.45v1.778H72.334v2.387h18.135v5.588H72.334v8.331H91.13v1.83H78.328v1.168zM145.232 27.891H133.09v.356q0 3.505-1.168 6.553t-3.404 5.334q-1.066 1.168-2.438 2.083-1.32.863-2.845 1.524-1.524.558-4.165.914-2.642.356-6.706.356h-5.994V33.123h3.25v-.762h-3.25V11.483h5.79q7.52 0 10.72 1.32 3.098 1.27 5.334 3.607l.152.153H112.72v.61q-.407-.052-.762-.052v22.403q7.06.051 9.194-.914 2.185-1.016 3.556-2.54 1.423-1.575 2.134-3.607.711-2.032.711-4.216v-.356h-12.801v-1.778h12.598q-.203-1.016-.559-2.032-.762-1.981-2.184-3.505-.711-.711-1.626-1.372-.914-.66-1.93-1.067-.61-.203-1.677-.406h10.008q1.473 1.829 2.388 4.013.914 2.083 1.168 4.37h12.294z" /><path d="M151.683 45.01h-5.74V31.854h-8.789v-1.778h8.789V11.483h5.74zM198.622 31.65h-5.74l-.05.051 5.892 13.31h-5.639L187.6 33.784h-10.211V45.01h-5.639V30.939h15.291v-.965h-15.29v-8.23h-13.97v-1.778h13.97v-8.483h14.985q2.49 0 4.521.914 2.083.864 3.556 2.388 1.474 1.473 2.286 3.505.864 1.981.864 4.216 0 2.642-1.32 5.131-.61 1.22-1.576 2.235h3.556zm-10.363-9.906h-10.871v6.401h9.398q1.22 0 2.184-.457 1.016-.508 1.728-1.27.762-.762 1.117-1.778.407-1.016.407-2.134 0-2.54-1.575-3.962-1.524-1.473-3.861-1.473h-9.398v2.895h10.871z" />
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