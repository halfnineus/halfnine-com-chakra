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
    Button,
    Spacer,
} from '@chakra-ui/react'

import Link from 'next/link'
import { useRouter } from "next/router"
import { RiMailSendLine } from 'react-icons/ri'

import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

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
    // {
    //     locale: "en",
    //     title: 'Services',
    //     links: [
    //         { label: 'Development', href: '/services#development' },
    //         { label: 'Digital Transformation', href: '/services#digitalization' },
    //         { label: 'Project Consultation', href: '/services#consultation' },
    //     ],
    // },
    {
        locale: "en",
        // title: 'Quick Links',
        links: [
            { label: 'Services', href: '/services' },
            { label: 'Industries', href: '/industries' },
            { label: 'Our Approach', href: '/our-approach' },
            { label: 'Blog', href: 'https://blog.halfnine.com' },
            { label: 'About HalfNine', href: '/about' },
        ],
    },
    // {
    //     locale: "es",
    //     title: 'Servicios',
    //     links: [
    //         { label: 'Desarrollo', href: '/services#development' },
    //         { label: 'Transformación Digital', href: '/services#digitalization' },
    //         { label: 'Consulta de proyectos', href: '/services#consultation' },
    //     ],
    // },
    {
        locale: "es",
        // title: 'Enlaces Rápidos',
        links: [
            { label: 'Nuestros Servicios', href: '/services' },
            { label: 'Industrias', href: '/industries' },
            { label: 'Nuestro enfoque', href: '/our-approach' },
            { label: 'Blog', href: 'https://blog.halfnine.com' },
            { label: 'Acerca De HalfNine', href: '/about' },
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
                    <Box
                        key={i}
                        py={6}
                        borderTop={'1px'}
                        borderColor={'gray.200'}
                    >
                        <Container px={{ base: '4', xl: '0' }} maxW={'container.xl'}>
                            {/* <Flex
                                direction={{ base: 'column', lg: 'row' }}
                                justify="space-between"
                                align="flex-start"
                                id="top"
                            > */}
                            {/* <SimpleGrid
                                    w="full"
                                    maxW={{ base: 'unset', lg: '4xl' }}
                                    columns={{ base: 2, lg: 4 }}
                                    spacing={{ base: '8', md: '10' }}
                                    fontSize="sm"
                                    mb={8}
                                >
                                    {links.filter(p => p.locale === locale).map((group, idx) => (
                                        <Box key={idx}>
                                            <Text fontWeight="bold" mb={4}>
                                                {group.title}
                                            </Text>
                                            <Stack direction={'row'}>
                                                {group.links.map((link, idx) => (
                                                    <Box minW="fit-content" maxW={'fit-content'} key={idx}>
                                                        <Link href={link.href}>
                                                            <Text _hover={{ color: 'blue.400' }}  >
                                                                {link.label}
                                                            </Text>
                                                        </Link>
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </Box>
                                    ))}
                                </SimpleGrid> */}
                            <Box w="full" maxW={{ base: 'unset', lg: '4xl' }} fontSize="sm" mb={8}>
                                {links.filter(p => p.locale === locale).map((group, idx) => (
                                    <Box key={idx}>
                                        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 1, md: 8 }}>
                                            {group.links.map((link, idx) => (
                                                <Box maxW="fit-content" key={idx}>
                                                    <Link href={link.href}>
                                                        <Text _hover={{ color: 'blue.400' }}>
                                                            {link.label}
                                                        </Text>
                                                    </Link>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Box>
                                ))}
                            </Box>

                            {/* <Box maxW={'md'} paddingEnd="12">
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
                                                outline={0}
                                                _focus={{ shadow: 'outline' }}
                                                _active={{ transform: 'translateY(2px)' }}
                                                rightIcon={<RiMailSendLine size={14} />}
                                            >
                                                {footerData.lvlup.b2}
                                            </Button>
                                        </Link>
                                    </HStack>
                                </Box> */}
                            {/* </Flex> */}
                        </Container>
                        <HStack mt={-4} spacing={"3.5"} justify="center">
                            <Link href={'https://www.facebook.com/halfninecom'} target={'_blank'}>
                                <Icon
                                    transform={'scale(0.95)'}
                                    _hover={{ color: "#4267B2", transform: 'scale(1)' }}
                                    h="34px"
                                    w="34px"
                                    as={FaFacebookSquare}
                                />
                            </Link>
                            <Link href={'https://twitter.com/halfninecom'} target={'_blank'}>
                                <Icon
                                    transform={'scale(0.95)'}
                                    _hover={{ color: "#1DA1F2", transform: 'scale(1)' }}
                                    h="34px"
                                    w="34px"
                                    as={FaTwitterSquare}
                                />
                            </Link>
                            <Link href={'https://www.linkedin.com/company/halfnineus/'} target={'_blank'}>
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
                                <Icon fill="#231f20" maxH={6} fontSize={160} my={-20} viewBox='0 0 1912 280'>
                                    <path d="M622.8,230h133v50h-187V0h54V230z M187.6,0h54v280h-54v-2l-66.4-96.3h57l9.4,13.8V164H54v116H0V0h53.4L54,0.9
                                             l67,97.5H63.8L54,84.2v31.4h133.6V0z M1221.9,0h52v280h-52l-137-198v198h-52V0h53l136,198V0z M382.8,0l-109,280h56l21-57h121l22,57
                                             h56L437.8,0H382.8z M367.8,176l42-113l44,113H367.8z M1611.8,0h52v280h-52l-137-198v198h-52V0h53l136,198V0z M1764.8,50v66h131v48
                                             h-131v66h147v50h-201V0h201v50H1764.8z M1321.8,0h54v280h-54V0z M790.8,0h205v50h-151v66h135v48h-135v116h-54V0z"/>
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
                                    <Link href={'https://www.halfnine.com/sitemap.xml'} target={'_blank'}>
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
                                        onChange={(e) => {
                                            const locale = e.target.value === "English (US)" ? "en" : "es";
                                            router.push({ pathname, query }, asPath, { locale });
                                        }}
                                    >
                                        <option value="English (US)">{`English (US)`}</option>
                                        <option value="Español (MX)">{`Español (MX)`}</option>
                                    </Select>
                                    {/* <Select
                                            w="124px"
                                            flexShrink={0}
                                            fontSize="inherit"
                                            fontWeight="bold"
                                            variant="unstyled"
                                            id="lang"
                                            name="lang"
                                            defaultValue={footerData.simpleform.valuedat}
                                            onChange={(e) => {
                                                const locale = e.target.value === "English (US)" ? "en" : e.target.value === "Español (MX)" ? "es" : "hi";
                                                router.push({ pathname, query }, asPath, { locale });
                                            }}
                                        >
                                            <option value="English (US)">{`English (US)`}</option>
                                            <option value="Español (MX)">{`Español (MX)`}</option>
                                            <option value="हिन्दी (IN)">{`हिन्दी (IN)`}</option>
                                        </Select> */}
                                    {/* <Select
                                            w="124px"
                                            flexShrink={0}
                                            fontSize="inherit"
                                            fontWeight="bold"
                                            variant="unstyled"
                                            id="lang"
                                            name="lang"
                                            defaultValue={footerData.simpleform.valuedat}
                                            onChange={(e) => {
                                                const locale = e.target.value === "English (US)" ? "en" : e.target.value === "Español (MX)" ? "es" : e.target.value === "हिन्दी (IN)" ? "hi" : e.target.value === "Português (BR)" ? "pt" : "ja";
                                                router.push({ pathname, query }, asPath, { locale });
                                            }}
                                        >
                                            <option value="English (US)">{`English (US)`}</option>
                                            <option value="Español (MX)">{`Español (MX)`}</option>
                                            <option value="हिन्दी (IN)">{`हिन्दी (IN)`}</option>
                                            <option value="Português (BR)">{`Português (BR)`}</option>
                                            <option value="日本語 (JP)">{`日本語 (JP)`}</option>
                                        </Select> */}
                                </FormControl>
                            </Flex>
                        </Container>
                    </Box>
                )
            })}

        </>
    );
}