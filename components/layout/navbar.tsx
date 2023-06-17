import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useDisclosure,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    Divider,
    Center,
    Collapse,
    useOutsideClick,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import { FiChevronDown, FiChevronsRight } from 'react-icons/fi'
import { items } from './navbardata'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { MdPhone } from 'react-icons/md'



const App = () => {
    const router = useRouter();
    const { locale } = useRouter()
    const isRootPage = router.pathname === '/';
    const isShadowPage = router.pathname === '/' || router.pathname === '/contact';
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    })

    const { onToggle, isOpen, onClose } = useDisclosure()
    const { onToggle: onToggleMobile, isOpen: isOpenMobile, onClose: onCloseMobile } = useDisclosure()


    const ref = React.useRef<HTMLDivElement>(null);


    useOutsideClick({
        ref: ref,
        handler: () => {
            onClose();
            onCloseMobile();
        },
    });

    return (
        <Box
            w="full"
            position="fixed"
            bg="white"
            zIndex={999}
            boxShadow={
                isShadowPage
                    ? scrollPosition > 20
                        ? "0px 4px 20px rgba(0,0,0,0.08)"
                        : "none"
                    : "0px 4px 20px rgba(0,0,0,0.08)"
            }
            ref={ref}
        >
            <HStack
                spacing="12"
                justify="space-between"
                maxW={'container.xl'}
                minH={{ base: '60px', lg: '80px' }}
                align="center"
                mx={'auto'}
                px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }}
                top={0}
                width="100%"
            >
                {isRootPage ? Logo : <Link href={'/'} onClick={() => { onClose(); onCloseMobile(); }}>{Logo}</Link>}
                <Flex display={{ base: 'none', lg: 'flex' }} justify="space-between" flex="1">
                    <Center ml={-5}>
                        {/* {ServiceItem.filter(p => p.locale === locale).map((serviceItem, index) => (
                            <Box mr={2} width={'fit-content'} key={index}>
                                <Button onClick={onToggle} rightIcon={<PopoverIcon isOpen={isOpen} />} variant="link" color={'gray.600'} _hover={{ textDecor: "none", color: 'blue.400' }}>
                                    {serviceItem.label}
                                </Button>
                            </Box>
                        ))} */}
                        {NAV_ITEMS.filter(p => p.locale === locale).map((contactItem, index) => (
                            <Box width={'fit-content'} mx={5} key={index}>
                                <Link onClick={onClose} href={contactItem.href}>
                                    <Button variant="link" color={'gray.600'} _hover={{ textDecor: "none", color: 'blue.400' }}>
                                        {contactItem.label}
                                    </Button>
                                </Link>
                            </Box>
                        ))}
                    </Center>
                    {ContactItem.filter(p => p.locale === locale).map((contactItem, index) => (
                        <Link onClick={onClose} key={index} href={'/contact'} >
                            <Button
                                display={{ base: 'none', sm: 'block' }}
                                _focus={{ shadow: 'outline' }}
                                colorScheme={'blue'}
                            >
                                {contactItem.label}
                            </Button>
                        </Link>
                    ))}
                </Flex>
                <HStack display={{ base: 'inherit', lg: 'none' }}>
                    <Link href={'/contact'}>
                        <IconButton
                            icon={<MdPhone />}
                            variant={'outline'}
                            aria-label={'Call Button'}
                            colorScheme='gray'
                            fontSize='20px'
                        />
                    </Link>
                    <IconButton
                        display={{ base: 'flex', lg: 'none' }}
                        onClick={onToggleMobile}
                        icon={
                            isOpenMobile ? <CloseIcon fontSize="1rem" /> : <HamburgerIcon fontSize="1.25rem" />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </HStack>

            </HStack>
            <Collapse onClick={onToggleMobile} in={isOpenMobile} animateOpacity>
                <MobileNav />
            </Collapse>
            <Divider display={isOpen ? 'block' : 'none'} />
            <Collapse in={isOpen} animateOpacity>
                <ResourcesSubmenu isOpen={isDesktop && isOpen} onToggle={onToggle} />
            </Collapse>
        </Box>
    );
}

export default App;

const Logo = (
    <Icon fill={'#231f20'} fontSize={160} maxH={'40px'} viewBox='0 0 1912 280'>
        <path d="M622.8,230h133v50h-187V0h54V230z M187.6,0h54v280h-54v-2l-66.4-96.3h57l9.4,13.8V164H54v116H0V0h53.4L54,0.9
                 l67,97.5H63.8L54,84.2v31.4h133.6V0z M1221.9,0h52v280h-52l-137-198v198h-52V0h53l136,198V0z M382.8,0l-109,280h56l21-57h121l22,57
                 h56L437.8,0H382.8z M367.8,176l42-113l44,113H367.8z M1611.8,0h52v280h-52l-137-198v198h-52V0h53l136,198V0z M1764.8,50v66h131v48
                 h-131v66h147v50h-201V0h201v50H1764.8z M1321.8,0h54v280h-54V0z M790.8,0h205v50h-151v66h135v48h-135v116h-54V0z"/>
    </Icon>
);

const PopoverIcon = (props: any) => {
    const iconStyles = {
        transform: props.isOpen ? 'rotate(-180deg)' : undefined,
        transition: 'transform 0.2s',
        transformOrigin: 'center',
    }
    return <Icon mt={1} aria-hidden as={FiChevronDown} __css={iconStyles} />
}
const ResourcesSubmenu = (props: any) => {
    const { isOpen, onToggle } = props;
    const { locale } = useRouter();
    const filteredData = items.filter((p) => p.locale === locale);
    return (
        <Box position="absolute" boxSize="full" display={{ base: 'none', lg: 'block' }}>
            <Box bg={'white'} boxShadow={'md'} pt={{ base: '4', md: '8' }} pb="4">
                <Box maxW={'container.xl'} mx={'auto'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }}>
                    {/* <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        spacing={{ base: '14', lg: '8' }}
                    > */}
                    <SimpleGrid
                        width={'full'}
                        columns={{ md: 4 }}
                    // maxW={{ lg: '5xl' }}
                    // gap={{ lg: 'inherit', xl: 24 }}
                    >
                        {SRvItem.filter(p => p.locale === locale).map((rmItem) => (
                            <Box width={'fit-content'} maxW={"52"} key={rmItem.label}>
                                <Flex pb={2} direction="column">
                                    {/* <Box width={'fit-content'} role={'group'}>
                                        <Link onClick={onToggle} href={'/services'} >
                                            <Text _groupHover={{ color: 'blue.600' }} key={rmItem.label} fontSize={'lg'} fontWeight={'semibold'}>{rmItem.label}</Text>
                                        </Link>
                                    </Box> */}
                                    <Box
                                        as="hr"
                                        bg="blue.500"
                                        h="2px"
                                        w="30px"
                                    />
                                </Flex>
                                <Text fontSize={'sm'}>
                                    {rmItem.txt}
                                    {/* We provide full-cycle software development services for any businesses needs. */}
                                </Text>
                            </Box>
                        ))}
                        {filteredData.map((item, id) => (
                            <Stack key={id} spacing="4">
                                <Text fontSize="sm" fontWeight="medium" color="gray.600" pointerEvents={'none'}>
                                    {item.title}
                                </Text>
                                <Stack spacing={5}>
                                    {item.links.map((link, id) => (
                                        <Box key={id} width={'fit-content'}>
                                            <Link onClick={onToggle} href={link.href}>
                                                <Stack spacing="4" direction="row" role={'group'}>
                                                    <Icon as={link.icon} boxSize="6" color="gray.600" _groupHover={{ color: 'blue.600' }} />
                                                    {/* <Stack spacing="1"> */}
                                                    <Text fontWeight="medium" color="gray.800" _groupHover={{ color: 'blue.400' }}>{link.title}</Text>
                                                    {/* <Text fontSize="sm" color="muted">{link.description}</Text> */}
                                                    {/* </Stack> */}
                                                </Stack>
                                            </Link>
                                        </Box>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </SimpleGrid>
                    {/* {RMItem.filter(p => p.locale === locale).map((rmItem, index) => (
                        <Box py={2} display="flex" justifyContent="flex-end" key={index}>
                            <Box role={'group'}>
                                <Link onClick={onToggle} href="/services">
                                    <HStack>
                                        <Text color={'gray.700'} _groupHover={{ color: 'blue.400' }}>{rmItem.label}</Text>
                                        <Icon color={'gray.700'} _groupHover={{ color: 'blue.400' }} pt={0.5} fontSize="2xl">
                                            <FiChevronsRight />
                                        </Icon>
                                    </HStack>
                                </Link>
                            </Box>
                        </Box>
                    ))} */}
                    {/* </Stack> */}
                </Box>
            </Box>
        </Box>
    );
};


const MobileNav = () => {
    const { locale } = useRouter()
    return (
        <Stack
            px={4}
            pt={2}
            pb={4}
            display={{ lg: 'none' }}
            borderBottom={'1px'}
            borderBottomColor={'gray.300'}
        >
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
                            color={'gray.600'}>
                            {contactItem.label}
                        </Text>
                    </Flex>
                </Link>
            ))}
        </Stack>
    );
};


const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Link href={href ?? ''}>
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
                        color={'gray.600'}>
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
}

const NAV_ITEMS: Array<NavItem> = [
    // {
    //     locale: "en",
    //     label: 'Quote',
    //     href: '/quote',
    // },
    {
        locale: "en",
        label: 'Approach',
        href: '/our-approach',
    },
    {
        locale: "en",
        label: 'About',
        href: '/about',
    },
    // {
    //     locale: "es",
    //     label: 'Cotizar',
    //     href: '/quote',
    // },
    {
        locale: "es",
        label: 'Método',
        href: '/our-approach',
    },
    {
        locale: "es",
        label: 'Acerca De',
        href: '/about',
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

const ServiceItem = [
    {
        locale: "en",
        label: 'Services',
    },
    {
        locale: "es",
        label: 'Servicios',
    },
]

const RMItem = [
    {
        locale: "en",
        label: 'And More',
    },
    {
        locale: "es",
        label: 'Leer más',
    },
]
const SRvItem = [
    {
        locale: "en",
        label: 'Services',
        txt: 'We provide full-cycle software development services for any businesses needs.',
    },
    {
        locale: "es",
        label: 'Servicios',
        txt: 'Ofrecemos servicios de desarrollo de software de ciclo completo para cualquier necesidad empresarial.',
    },
]