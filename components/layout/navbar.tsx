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
    useColorMode,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import Link from 'next/link'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useRouter } from 'next/router';

export default function WithSubnavigation() {

    const { toggleColorMode: toggleMode } = useColorMode();
    const text = mode("dark", "light");
    const SwitchIcon = mode(FaMoon, FaSun);

    const { isOpen, onToggle } = useDisclosure();
    const buttonvariant = useBreakpointValue(
        {
            sm: 'gray',
            md: 'blue',
        },
        {
            // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
            // (Defaults to 'base')
            fallback: 'md',
        },
    )
    const { locale } = useRouter()

    return (
        <>
            <Flex
                maxW={'container.xl'}
                minH={{ base: '60px', md: '80px' }}
                // py={{ base: 2 }}
                // px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 8 }}
                // justify="space-between"
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
                        <Icon ml={{ base: 0, md: -6 }} mr={{ base: 5, sm: -3 }} fontSize={{ base: 120, md: 180 }} maxH={16} my={{ base: -8, md: -20 }} pb={{ base: 3, md: 2 }} viewBox='0 0 200 33.528'>
                            <path d="M56.18 42.267v2.744H30.575l5.08-8.89h-3.15v-1.778h4.166l3.15-5.538H18.435v-1.778h22.403l5.537-9.652H30.22v-5.74h26.01l-1.32 2.337H32.861v.965H54.35l-6.807 12.09h1.372v1.778h-2.388l-3.15 5.538h19.61v1.778H42.361l-1.83 3.302H56.18v1.422h-8.026v1.422zM91.13 42.47v2.54H66.746V23.168H61.97v-1.778h4.776v-9.906H91.13v5.638H72.334v.864H67v.965h5.334v2.439H92.45v1.778H72.334v2.387h18.135v5.588H72.334v8.331H91.13v1.83H78.328v1.168zM145.232 27.891H133.09v.356q0 3.505-1.168 6.553t-3.404 5.334q-1.066 1.168-2.438 2.083-1.32.863-2.845 1.524-1.524.558-4.165.914-2.642.356-6.706.356h-5.994V33.123h3.25v-.762h-3.25V11.483h5.79q7.52 0 10.72 1.32 3.098 1.27 5.334 3.607l.152.153H112.72v.61q-.407-.052-.762-.052v22.403q7.06.051 9.194-.914 2.185-1.016 3.556-2.54 1.423-1.575 2.134-3.607.711-2.032.711-4.216v-.356h-12.801v-1.778h12.598q-.203-1.016-.559-2.032-.762-1.981-2.184-3.505-.711-.711-1.626-1.372-.914-.66-1.93-1.067-.61-.203-1.677-.406h10.008q1.473 1.829 2.388 4.013.914 2.083 1.168 4.37h12.294z" /><path d="M151.683 45.01h-5.74V31.854h-8.789v-1.778h8.789V11.483h5.74zM198.622 31.65h-5.74l-.05.051 5.892 13.31h-5.639L187.6 33.784h-10.211V45.01h-5.639V30.939h15.291v-.965h-15.29v-8.23h-13.97v-1.778h13.97v-8.483h14.985q2.49 0 4.521.914 2.083.864 3.556 2.388 1.474 1.473 2.286 3.505.864 1.981.864 4.216 0 2.642-1.32 5.131-.61 1.22-1.576 2.235h3.556zm-10.363-9.906h-10.871v6.401h9.398q1.22 0 2.184-.457 1.016-.508 1.728-1.27.762-.762 1.117-1.778.407-1.016.407-2.134 0-2.54-1.575-3.962-1.524-1.473-3.861-1.473h-9.398v2.895h10.871z" />
                        </Icon>
                    </Link>
                    <Box ml={{ base: 6, sm: 0 }} ></Box>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={16}>
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
    const linkColor = mode('gray.600', 'gray.200');
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
                                        // transition={'all .25s ease-in-out'}
                                        // minW={'sm'}
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
                p={2}
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
                    {/* <Text fontSize={'sm'}>{subLabel}</Text> */}
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
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
                    {/* {children && (
                            <Icon
                                as={ChevronDownIcon}
                                transition={'all .25s ease-in-out'}
                                transform={isOpen ? 'rotate(180deg)' : ''}
                                w={6}
                                h={6}
                            />
                        )} */}
                </Flex>
            </Link>
            {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={mode('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            //  Edit Look & Find out how to toggle (onToggle) the Main Function 
                            <Link py={2} onClick={onToggle} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse> */}
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
                label: 'Development Services',
                subLabel: 'Transform Ideas into Solutions',
                href: '/services#development',
            },
            {
                label: 'Digital Transformation',
                subLabel: 'Efficiency in a Digital Approach',
                href: '/services/digitalization',
            },
            {
                label: 'Project Consultation',
                subLabel: 'Change Is Hard - And Necessary',
                href: '/services/consultation',
            }
        ],
    },
    {
        locale: "en",
        label: 'Industries',
        subhref: '/industries',
        children: [
            {
                label: 'Manufacturing and Production',
                href: '/industries/manufacturing-and-production',
            },
            {
                label: 'Security and Safety',
                href: '/industries/security-and-safety',
            },
        ],
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
                label: 'Servicios de desarrollo',
                subLabel: 'Transforme ideas en soluciones',
                href: '/services#development',
            },
            {
                label: 'Transformación Digital',
                subLabel: 'Eficiencia & Modernización de Seguridad',
                href: '/services/digitalization',
            },
            {
                label: 'Consulta de proyectos',
                subLabel: 'El cambio es difícil - Y necesario',
                href: '/services/consultation',
            }
        ],
    },
    {
        locale: "es",
        label: 'Industrias',
        subhref: '/industries',
        children: [
            {
                label: 'Fabricación y Producción',
                href: '/industries/manufacturing-and-production',
            },
            {
                label: 'Seguridad y Protección',
                href: '/industries/security-and-safety',
            },
        ],
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