import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue as mode,
    useDisclosure,
    useColorMode,
    HStack,
    Image,
    Spacer,
    useBreakpointValue,
    Center
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import smlog from '../../public/img/smlog.png'
import wsmlog from '../../public/img/wsmlog.png'

import { FaMoon, FaSun } from 'react-icons/fa'
import router, { useRouter } from 'next/router';

export default function WithSubnavigation() {

    const { toggleColorMode: toggleMode } = useColorMode();
    const text = mode("dark", "light");
    const SwitchIcon = mode(FaMoon, FaSun);

    const { isOpen, onToggle } = useDisclosure();
    const buttonvariant = useBreakpointValue(
        {
            sm: 'gray',
            md: 'brand',
        },
        {
            // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
            // (Defaults to 'base')
            fallback: 'md',
        },
    )
    const { locale } = useRouter()

    return (
        <Box>
            <Box textAlign={'center'} bg={'red.300'} minH={'40px'} display={{ base: 'block', sm: 'none' }}>
                <Text fontWeight={'bold'}>
                    There are several Errors with mobile Navigation<br />Use Desktop or Tablet for a better Experience.
                </Text>
            </Box>
            <Flex
                // bg={mode('white', 'gray.800')}
                // color={mode('gray.600', 'white')}
                // align={'center'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4, lg: 8 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={mode('gray.200', 'gray.900')}
                justify="space-between"
                align="center"
            >
                {/* <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}> */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onToggle}
                    icon={
                        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                {/* </Flex> */}
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Box alignItems="center" display="flex" onClick={() => router.push('/')} cursor={'pointer'} mr={{ base: 6, sm: 0 }}>
                        <Image userSelect={'none'} ml={{ base: 0, sm: 14, md: 0 }} loading={"eager"} cursor={'pointer'} pointerEvents={'none'} width={'auto'} height={{ base: '8', md: '10' }} src={mode(smlog.src, wsmlog.src)} alt={'Ochoa'} />
                    </Box>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <HStack spacing="4">
                    {ContactItem.filter(p => p.locale === locale).map((contactItem) => (
                        <Button
                            key={contactItem.label}
                            display={{ base: 'none', sm: 'block' }}
                            colorScheme={buttonvariant}
                            fontWeight="bold"
                            onClick={() => router.push('/contact')}
                        >
                            {contactItem.label}
                        </Button>
                    ))}
                    <IconButton
                        display={{ base: 'none', lg: 'flex' }}
                        size="md"
                        fontSize="lg"
                        aria-label={`Switch to ${text} mode`}
                        variant="ghost"
                        color="current"
                        ml={{ base: "0", md: "3" }}
                        onClick={toggleMode}
                        icon={<SwitchIcon />}
                    />
                </HStack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box >
    );
}

const DesktopNav = () => {
    const linkColor = mode('gray.600', 'gray.200');
    const popoverContentBgColor = mode('white', 'gray.800');
    const { locale } = useRouter()

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.filter(p => p.locale === locale).map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                display="inline-block"
                                px="2"
                                py="2"
                                fontWeight="semibold"
                                userSelect={'none'}
                                onClick={() => router.push(navItem.href)}
                                _hover={{
                                    textDecoration: 'none',
                                    color: "blue.400",
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                // minW={'sm'}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={2}
                                rounded={'xl'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            bg={mode("gray.50", 'gray.900')}
            onClick={() => router.push(href)}
            // href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: mode('blue.50', 'blue.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'blue.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
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
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.filter(p => p.locale === locale).map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href, mhref }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                // href={mhref ?? '#'}
                onClick={() => {
                    router.push(mhref);
                    // !!Ignore url undefined. 
                    window.location.reload()
                }}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={mode('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={mode('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    locale?: string;
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: any;
    mhref?: any;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        locale: "en",
        label: 'Services',
        href: '/services',
        children: [
            {
                label: 'Development Services',
                subLabel: 'Transform Ideas into Solutions',
                href: '/services/development',
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
        href: '/industries',
        children: [
            {
                label: 'Manufacturing & Production',
                href: '/industries/mnp',
            },
            {
                label: 'Media & Entertainment',
                href: '/industries/mne',
            },
            {
                label: 'Security & Safety',
                href: '/industries/sns',
            },
        ],
    },
    {
        locale: "en",
        label: 'Our Approach',
        href: '/our-approach',
        children: [
            {
                label: 'Agile',
                subLabel: 'Client & Development strategy',
                href: '/our-approach/agile',
            },
            {
                label: 'ROI',
                subLabel: 'Return on Investment',
                href: '/our-approach/roi',
            },
            {
                label: 'PDaaS',
                subLabel: 'Product Development as a Service',
                href: '/our-approach/pdaas',
            }
        ],
    },
    {
        locale: "en",
        label: 'About',
        href: '/about',
        mhref: '/about',
    },
    {
        locale: "es",
        label: 'Servicios',
        href: '/services',
        children: [
            {
                label: 'Servicios de desarrollo',
                subLabel: 'Transforme ideas en soluciones',
                href: '/services/development',
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
        href: '/industries',
        children: [
            {
                label: 'Fabricación & Producción',
                href: '/industries/mnp',
            },
            {
                label: 'Medios & Entretenimiento',
                href: '/industries/mne',
            },
            {
                label: 'Security & Protección',
                href: '/industries/sns',
            },
        ],
    },
    {
        locale: "es",
        label: 'Nuestro enfoque',
        href: '/our-approach',
        children: [
            {
                label: 'Ágil',
                subLabel: 'Cliente & Estrategia de desarrollo',
                href: '/our-approach/agile',
            },
            {
                label: 'ROI',
                subLabel: 'Retorno de la inversión',
                href: '/our-approach/roi',
            },
            {
                label: 'PDaaS',
                subLabel: 'Desarrollo de productos como servicio',
                href: '/our-approach/pdaas',
            }
        ],
    },
    {
        locale: "es",
        label: 'Acerca De',
        href: '/about',
        mhref: '/about',
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