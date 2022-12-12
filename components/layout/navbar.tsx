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
        <Box>
            <Flex
                // bg={mode('white', 'gray.800')}
                // color={mode('gray.600', 'white')}
                // align={'center'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 8 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={mode('gray.200', 'gray.900')}
                justify="space-between"
                align="center"
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
                        <Icon ml={{ base: 0, sm: 3 }} mr={{ base: 0, sm: -3 }} fontSize={120} my={-10} viewBox='0 0 324 107'>
                            <path d="M102 82h37v-7h-26l26-38v-6h-34v8h23l-26 38Zm67 1c6 0 11-2 15-4l-3-6c-3 2-7 3-11 3-7 0-12-4-12-11h27v-4c0-11-6-19-17-19-10 0-19 8-19 21 0 12 9 20 20 20Zm-11-24c1-7 5-10 10-10 6 0 9 4 9 10Zm52 24c4 0 9-2 12-6l1 5h7V26h-9v21c-3-3-6-5-10-5-9 0-17 8-17 21s6 20 16 20Zm2-7c-6 0-9-5-9-14 0-8 5-13 10-13 2 0 5 1 8 4v18c-3 3-6 5-9 5Zm48-40c4 0 6-2 6-6s-2-7-6-7-7 3-7 7 3 6 7 6Zm-18 46h37v-7h-14V43h-23v7h14v25h-14Zm50 0h9V60c4-7 9-10 14-10l7 1 2-7c-2-2-4-2-7-2-7 0-13 4-17 10v-9h-8Z" />
                            <g clipRule="evenodd">
                                <path d="m1 11 18 96-6-64 32-2-1-11L57 1 45 20z" />
                                <path d="m51 59 6-58-10 43-21 1 2 22-9 40 13-43z" />
                                <path d="m55 73 1-12-18 4v13l-19 29 24-30zm3-5 16-6 2-13-17 2zm7-20 12-1 2-12h-9L57 1l9 34z" />
                                <path d="m82 34 1-11-10-2L57 1l16 24-1 8z" />
                            </g>
                        </Icon>
                        {/* <Image
                            // alignItems="center" display="flex"
                            userSelect={'none'}
                            // mr={{ base: 6, sm: 0 }}
                            ml={{ base: 0, sm: 14, md: 0 }}
                            loading={"eager"}
                            pointerEvents={'none'}
                            width={'auto'}
                            height={{ base: '8', md: '10' }}
                            src={'/img/smlog.svg'}
                            alt={'zedir logo'}
                        /> */}
                    </Link>
                    <Box ml={{ base: 6, sm: 0 }} ></Box>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                {/* <HStack spacing="4"> */}
                {ContactItem.filter(p => p.locale === locale).map((contactItem) => (
                    <Link key={contactItem.label} href={'/contact'} >
                        <Button
                            display={{ base: 'none', sm: 'block' }}
                            colorScheme={buttonvariant}
                            // fontWeight="bold"
                            _focus={{ shadow: 'outline' }}
                        >
                            {contactItem.label}
                        </Button>
                    </Link>
                ))}
                {/* <IconButton
                        display={{ base: 'none', lg: 'flex' }}
                        size="md"
                        fontSize="lg"
                        aria-label={`Switch to ${text} mode`}
                        variant="ghost"
                        color="current"
                        ml={{ base: "0"0", md: "3" }}
                        onClick={toggleMode}
                        icon={<SwitchIcon />}
                    /> */}
                {/* </HStack> */}
            </Flex>

            <Collapse onClick={onToggle} in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box >
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
                                                py="2"
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
            {/* 
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
                            //  Edit Look & Find out how to toggle (onToggle) the Main Function 
                            <NextLink key={child.label} href={child.href} passHref>
                                <Link py={2} onClick={onToggle}>
                                    {child.label}
                                </Link>
                            </NextLink>
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
    // {
    //     locale: "en",
    //     label: 'Our Approach',
    //     subhref: '/our-approach',
    //     children: [
    //         {
    //             label: 'Agile',
    //             // Methodology & Mindset
    //             subLabel: 'Client & Development strategy',
    //             href: '/our-approach/agile',
    //         },
    //         {
    //             label: 'Quality Assurance',
    //             // subLabel: 'Return on Investment',
    //             href: '/our-approach/quality-assurance',
    //         },
    //         {
    //             label: 'Risk Control',
    //             // subLabel: 'Return on Investment',
    //             href: '/our-approach/risk-control',
    //         },
    //     ],
    // },
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
    // {
    //     locale: "es",
    //     label: 'Nuestro enfoque',
    //     subhref: '/our-approach',
    //     children: [
    //         {
    //             label: 'Ágil',
    //             subLabel: 'Cliente & Estrategia de desarrollo',
    //             href: '/our-approach/agile',
    //         },
    //         {
    //             label: 'Aseguramiento de la calidad',
    //             subLabel: 'Retorno de la inversión',
    //             href: '/our-approach/quality-assurance',
    //         },
    //         {
    //             label: 'Control de Riesgo',
    //             subLabel: 'Desarrollo de productos como servicio',
    //             href: '/our-approach/risk-control',
    //         }
    //     ],
    // },
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