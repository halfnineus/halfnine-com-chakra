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
                        <Icon ml={{ base: 0, sm: 3 }} mr={{ base: 0, sm: -3 }} fontSize={120} my={-10} viewBox='0 0 1895.1 500'>
                            <path d="m249.9 268.7 202.9-9.3c-12.5-25.5-16-48.5-40-52.2l-108-18L95 155.5c6 12.4 103.9 115.7 154.9 113.2zM0 0c22 44.8 133 143 164.9 148.6l259.9 41.7c-17.5-34.8-21-58.5-52-68.4L0 0zm315.4 350.8 155.9-41.7c-10-20.5-10-33-29-31.7l-92 5-169.9 9.3c6 8.7 94 69.6 135 59.1zm123 149.2c28.5-23 36-47.9 52.5-85.8 18.5-42.3 6.5-48.5-14-90.8-2-4.4-29.5 1.2-32.5 6.2-3.5 4.4-1 33.6-1.5 39.8l-5 130.6h.5zm-7-166.7c-18.5 5.6-43 1.2-47.5 26.7l-20.5 107c46-13.6 66.5-82.7 68-133.7zm-58 16.8c-46 12.4-45 28.6-65 82.1 31.5-3.7 60.5-46 65-82.1zM709.9 375.1h150.3l-5.6 41.4H652.8v-38.8l151.2-218H668.3v-40.5h190.8v39.2L709.9 375.1zM964.2 318.3c1.4 23.4 8 40.4 19.7 50.8a61 61 0 0 0 42.3 15.7c11.1 0 21.4-1.7 30.9-5.2 9.5-3.4 19.1-8.3 28.8-14.6l20.9 28.9a131.7 131.7 0 0 1-83 28.5c-23.7 0-43.7-5-60-15.1a95.2 95.2 0 0 1-37-42 145.1 145.1 0 0 1-12.6-62.2 145 145 0 0 1 12.5-61.3 96 96 0 0 1 91.4-58.7c30.2 0 54 10.1 71.6 30.4 17.6 20.2 26.4 48 26.4 83.4a217.8 217.8 0 0 1-1.1 21.5H964.2zm54.3-99.5A48.7 48.7 0 0 0 981 235c-9.9 10.8-15.6 27.6-17 50.4h105.3c-.4-21.4-5-37.8-13.7-49.3a43.3 43.3 0 0 0-37.1-17.3zM1316.2 92.3l48.2 5.4v318.8H1322l-3.4-28a83.5 83.5 0 0 1-27.8 25 74 74 0 0 1-36.2 8.8c-19.5 0-35.6-5-48.1-15a88.5 88.5 0 0 1-28.1-41.9 191.6 191.6 0 0 1-9.3-62.7c0-23.1 3.6-43.7 10.8-61.7a98 98 0 0 1 30.8-42.5 76.7 76.7 0 0 1 48.2-15.5c23.4 0 42.5 8.3 57.3 24.8V92.3zm-44.6 127.8a43.2 43.2 0 0 0-37.9 20.1c-9 13.4-13.6 34.3-13.6 62.6 0 29 4.1 50 12.4 63a39 39 0 0 0 34.8 19.5c10.9 0 20.4-3.2 28.4-9.5s14.9-13.9 20.5-22.8V245.3a62.8 62.8 0 0 0-19.6-18.6 48.4 48.4 0 0 0-25-6.6zM1565.4 189v192.1h61.8v35.3h-178.1v-35.3h68.1V224.4h-65.9V189h114.1zm-33.6-111.3c9.5 0 17.1 2.9 22.9 8.6a29 29 0 0 1 8.7 21.5 30 30 0 0 1-31.6 30.6c-9.2 0-16.7-2.9-22.6-8.8a29.5 29.5 0 0 1-8.8-21.8c0-8.6 2.9-15.8 8.8-21.5a31 31 0 0 1 22.6-8.6zM1701.7 416.5V382h33.4V223.3h-33.4V189h70.2l8.8 52.8c8.5-19.1 19-33.6 31.6-43.6 12.6-10 28.8-15 48.6-15a92 92 0 0 1 18.2 1.6c5.4 1.1 10.7 2.5 16 4.2l-8.2 83.8h-34.5v-46.3c-16.1.6-29.9 7-41.6 19.3s-20.8 29.5-27.6 51.8V382h45.9v34.5h-127.4z" />
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