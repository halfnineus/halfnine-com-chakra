import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue as mode,
    useDisclosure,
    useBreakpointValue,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const buttonvariant = useBreakpointValue(
        {
            sm: 'gray',
            md: 'blue',
        },
        {
            fallback: 'md',
        },
    )
    const { locale } = useRouter()

    return (
        <>
            <Flex
                maxW={'container.xl'}
                minH={{ base: '60px', md: '80px' }}
                align="center"
                mx={'auto'}
                px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }}
            >
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onToggle}
                    icon={
                        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Link href={'/'}>
                        <Icon fontSize={{ base: 120, md: 180 }} maxH={'40px'} viewBox='0 0 1912 280'>
                            <path fill="#231f20" d="M54 0v116h134V0h54v280h-54V164H54v116H0V0h54ZM274 280 383 0h55l112 280h-56l-22-57H351l-21 57h-56Zm94-104h86L410 63l-42 113Zm226 104-25-62V0h54v230h133v50H594ZM996 0v50H845v66h135v48H845v116h-54V0h205ZM1086 0l136 198V0h52v280h-52L1085 82v198h-52V0h53ZM1322 280V0h54v280h-54ZM1476 0l136 198V0h52v280h-52L1475 82v198h-52V0h53ZM1711 230V0h201v50h-147v66h131v48h-131v66h147v50h-172l-29-50Z" />
                        </Icon>
                    </Link>
                    <Box ml={{ base: 6, sm: 0 }} ></Box>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={12}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                {ContactItem.filter(p => p.locale === locale).map((contactItem) => (
                    <Link key={contactItem.label} href={'/contact'} >
                        <Button
                            display={{ base: 'none', sm: 'block' }}
                            colorScheme={buttonvariant}
                            _focus={{ shadow: 'outline' }}
                        >
                            {contactItem.label}
                        </Button>
                    </Link>
                ))}
            </Flex>
            <Collapse onClick={onToggle} in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </>
    );
}

const DesktopNav = (e: any,) => {
    const popoverContentBgColor = mode('white', 'gray.800');
    const { locale } = useRouter()

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.filter(p => p.locale === locale).map((navItem) => (
                <Box key={navItem.label}>
                    <Popover onClose={() => (document.activeElement as HTMLElement).blur()} trigger={'hover'} placement={'bottom-start'} closeDelay={160} openDelay={40}>
                        {({ onOpen, onClose }: any) => (
                            <>
                                <PopoverTrigger>
                                    <Box>
                                        <Link href={navItem.href ?? navItem.subhref}>
                                            <Text
                                                onClick={onClose}
                                                display="inline-block"
                                                px="2"
                                                my="2"
                                                fontWeight="semibold"
                                                userSelect={'none'}
                                                _hover={{
                                                    textDecoration: 'none',
                                                    color: "blue.400",
                                                }}
                                            >
                                                {navItem.label}
                                            </Text>
                                        </Link>
                                    </Box>
                                </PopoverTrigger>
                                {navItem.children && (
                                    <PopoverContent
                                        boxShadow={'xl'}
                                        bg={popoverContentBgColor}
                                        p={2}
                                        rounded={'xl'}
                                        onClick={onClose}
                                    >
                                        <Stack>
                                            {navItem.children.map((child) => (
                                                <DesktopSubNav key={child.label} {...child} />
                                            ))}
                                        </Stack>
                                    </PopoverContent>
                                )}
                            </>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link href={href}>
            <Stack
                bg={mode("gray.50", 'gray.900')}
                role={'group'}
                py={2}
                px={3}
                rounded={'md'}
                _hover={{ bg: mode('gray.50', 'blue.900') }}
                direction={'row'}
                align={'center'}
            >
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'blue.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-12px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(4px)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    const { locale } = useRouter()
    return (
        <Stack
            bg={mode('white', 'gray.800')}
            px={4}
            pt={2}
            pb={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.filter(p => p.locale === locale).map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            {ContactItem.filter(p => p.locale === locale).map((contactItem) => (
                <Link key={contactItem.label} href={'/contact'}>
                    <Flex
                        pt={4}
                        justify={'space-between'}
                        align={'center'}
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        <Text
                            fontWeight={600}
                            color={mode('gray.600', 'gray.200')}>
                            {contactItem.label}
                        </Text>
                    </Flex>
                </Link>
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href, subhref }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Link href={subhref ?? ''}>
                <Flex
                    py={2}
                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                        textDecoration: 'none',
                    }}
                >
                    <Text
                        fontWeight={600}
                        color={mode('gray.600', 'gray.200')}>
                        {label}
                    </Text>
                </Flex>
            </Link>
        </Stack>
    );
};

interface NavItem {
    locale?: string;
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: any;
    subhref?: any;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        locale: "en",
        label: 'Services',
        subhref: '/services',
        children: [
            {
                label: 'Development',
                subLabel: 'Transform Ideas into Solutions',
                href: '/services#development',
            },
            {
                label: 'Digital Transformation',
                subLabel: 'Efficiency in a Digital Approach',
                href: '/services#digitalization',
            },
            {
                label: 'Project Consultation',
                subLabel: 'Change Is Hard - And Necessary',
                href: '/services#consultation',
            }
        ],
    },
    {
        locale: "en",
        label: 'Industries',
        subhref: '/industries',
    },
    {
        locale: "en",
        label: 'Our Approach',
        href: '/our-approach',
        subhref: '/our-approach',
    },
    {
        locale: "en",
        label: 'About',
        href: '/about',
        subhref: '/about',
    },
    {
        locale: "es",
        label: 'Servicios',
        subhref: '/services',
        children: [
            {
                label: 'Desarrollo',
                subLabel: 'Transforme ideas en soluciones',
                href: '/services#development',
            },
            {
                label: 'Transformación Digital',
                subLabel: 'Eficiencia & Modernización de Seguridad',
                href: '/services#digitalization',
            },
            {
                label: 'Consulta de proyectos',
                subLabel: 'El cambio es difícil - Y necesario',
                href: '/services#consultation',
            }
        ],
    },
    {
        locale: "es",
        label: 'Industrias',
        subhref: '/industries',
    },
    {
        locale: "es",
        label: 'Nuestro enfoque',
        href: '/our-approach',
        subhref: '/our-approach',
    },
    {
        locale: "es",
        label: 'Acerca De',
        href: '/about',
        subhref: '/about',
    },
];

const ContactItem = [
    {
        locale: "en",
        label: 'Contact Us',
    },
    {
        locale: "es",
        label: 'Contáctanos',
    },
]