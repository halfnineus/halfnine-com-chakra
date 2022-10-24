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
    useBreakpointValue
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
import router from 'next/router';
import NextLink from 'next/link'

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
    return (
        <Box>
            <Flex
                // bg={mode('white', 'gray.800')}
                // color={mode('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4, md: 8 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={mode('gray.200', 'gray.900')}
                // align={'center'}
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
                    <NextLink href={'/'} passHref>
                        <Link display="flex" alignItems="center">
                            <Image userSelect={'none'} ml={{ base: 0, sm: 14, md: 0 }} mr={{ base: 6, sm: 0 }} loading={"eager"} cursor={'pointer'} pointerEvents={'none'} width={'auto'} height={{ base: '8', md: '10' }} src={mode(smlog.src, wsmlog.src)} alt={'Ochoa'} />
                        </Link>
                    </NextLink>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <HStack spacing="4">
                    <Button display={{ base: 'none', sm: 'block' }} colorScheme={buttonvariant} fontWeight="bold" onClick={() => router.push('/contact/')}>
                        {"Contact Us"}
                    </Button>
                    <IconButton
                        display={{ base: 'none', md: 'flex' }}
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
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = mode('gray.600', 'gray.200');
    // const linkHoverColor = mode('gray.800', 'white');
    const popoverContentBgColor = mode('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                display="inline-block"
                                px="2"
                                py="2"
                                fontWeight="semibold"


                                userSelect={'none'}

                                // p={2}
                                href={navItem.href ?? '#'}
                                // fontSize={'sm'}
                                // fontWeight={500}
                                // color={linkColor}
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
                                // border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={2}
                                rounded={'xl'}
                                minW={'sm'}
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
            bg={"gray.50"}
            onClick={() => router.push(href)}
            // href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: mode('blue.50', 'gray.900') }}>
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
    return (
        <Stack
            bg={mode('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
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
                href={mhref ?? '#'}
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
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: any;
    mhref?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Services',
        href: '/services/',
        children: [
            {
                label: 'Development Services',
                subLabel: '!!Trending Design to inspire you',
                href: '/services/development/',
            },
            {
                label: 'Digital Transformation',
                subLabel: '!!Up-and-coming Designers',
                href: '/services/digitalization/',
            },
            {
                label: 'Project Consultation',
                subLabel: '!!Up-and-coming Designers',
                href: '/services/consultation/',
            },
        ],
    },
    // {
    //     label: 'Find Work',
    //     children: [
    //         {
    //             label: 'Job Board',
    //             subLabel: 'Find your dream design job',
    //             href: '#',
    //         },
    //         {
    //             label: 'Freelance Projects',
    //             subLabel: 'An exclusive list for contract work',
    //             href: '#',
    //         },
    //     ],
    // },
    {
        label: 'Portfolio',
        href: '/portfolio/',
        mhref: '/portfolio/',
    },
    {
        label: 'About',
        href: '/about/',
        mhref: '/about/',
    },
];