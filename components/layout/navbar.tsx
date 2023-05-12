import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useDisclosure,
    Icon,
    Image,
    SimpleGrid,
    SlideFade,
    Stack,
    Text,
    AspectRatio,
    Divider,
    Center,
    Collapse,
    useOutsideClick,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import { FiPlayCircle } from 'react-icons/fi'
import { FiChevronDown } from 'react-icons/fi'
import { items, tutorials } from './data'
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
                {isRootPage ? Logo : <Link onClick={onClose} href={'/'}>{Logo}</Link>}
                {isDesktop ? (
                    <Flex justify="space-between" flex="1">
                        <Center>
                            <Button _hover={{ textDecor: "none", color: 'blue.400' }}
                                variant="link"
                                rightIcon={<PopoverIcon isOpen={isOpen} />}
                                onClick={onToggle}
                                mr={2}
                                color={'gray.600'}
                            >
                                Services
                            </Button>
                            <Link onClick={onClose} href={'/industries'}>
                                <Button mx={6} variant="link" color={'gray.600'} _hover={{ textDecor: "none", color: 'blue.400' }}>
                                    Industries
                                </Button>
                            </Link>
                            <Link onClick={onClose} href={'/our-approach'}>
                                <Button mx={6} variant="link" color={'gray.600'} _hover={{ textDecor: "none", color: 'blue.400' }}>
                                    Approach
                                </Button>
                            </Link>
                            <Link onClick={onClose} href={'/about'}>
                                <Button mx={6} variant="link" color={'gray.600'} _hover={{ textDecor: "none", color: 'blue.400' }}>
                                    About
                                </Button>
                            </Link>
                            <Link onClick={onClose} href={'/pricing'}>
                                <Button mx={6} variant="link" color={'gray.600'} _hover={{ textDecor: "none", color: 'blue.400' }}>
                                    Pricing
                                </Button>
                            </Link>
                        </Center>
                        {ContactItem.filter(p => p.locale === locale).map((contactItem, index) => (
                            <Link key={index} href={'/contact'} >
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
                ) : (
                    <HStack>
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
                )}
            </HStack>
            <Collapse onClick={onToggleMobile} in={isOpenMobile} animateOpacity>
                <MobileNav />
            </Collapse>
            <Divider display={isOpen ? 'block' : 'none'} />
            <Collapse in={isOpen} animateOpacity>
                <ResourcesSubmenu isOpen={isDesktop && isOpen} onToggle={onToggle} />
            </Collapse>
        </Box >
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
    const { isOpen, onToggle } = props
    // const { isOpen, onToggle } = useDisclosure();
    return (
        <Box position="absolute" boxSize="full">
            {/* <SlideFade in={isOpen}> */}
            <Box
                bg={'white'}
                // bg="bg-surface"
                boxShadow={'md'}
                pt={{
                    base: '4',
                    md: '8',
                }}
                pb="8"
            >
                <Container maxW={'container.xl'}>
                    <Stack
                        direction={{
                            base: 'column',
                            lg: 'row',
                        }}
                        spacing={{
                            base: '14',
                            lg: '16',
                        }}
                    >
                        <SimpleGrid
                            columns={{
                                base: 1,
                                md: 2,
                            }}
                            maxW={{
                                lg: '3xl',
                            }}
                            gap={6}
                        >
                            {items.map((item, id) => (
                                <Stack key={id} spacing="3">
                                    <Text fontSize="sm" fontWeight="medium" color="accent">
                                        {item.title}
                                    </Text>
                                    <Stack>
                                        {item.links.map((link, id) => (
                                            <Link onClick={onToggle} href={link.href} key={id}>
                                                <Stack spacing="4" direction="row" p="3">
                                                    <Icon as={link.icon} boxSize="6" color="accent" />
                                                    <Stack spacing="1">
                                                        <Text fontWeight="medium">{link.title}</Text>
                                                        <Text fontSize="sm" color="muted">
                                                            {link.description}
                                                        </Text>
                                                    </Stack>
                                                </Stack>
                                            </Link>
                                        ))}
                                    </Stack>
                                </Stack>
                            ))}
                        </SimpleGrid>
                        {/* {tutorials.map((item, id) => (
                                <Stack key={id} spacing="6">
                                    <Text fontSize="sm" fontWeight="medium" color="accent">
                                        {item.title}
                                    </Text>
                                    <Stack
                                        spacing="8"
                                        direction={{
                                            base: 'column',
                                            md: 'row',
                                            lg: 'column',
                                        }}
                                    >
                                        {item.links.map((link, id) => (
                                            <Stack
                                                direction={{
                                                    base: 'column',
                                                    lg: 'row',
                                                }}
                                                spacing="6"
                                                key={id}
                                            >
                                                <Box>
                                                    <AspectRatio
                                                        ratio={3 / 2}
                                                        width={{
                                                            base: '60',
                                                            lg: '40',
                                                        }}
                                                    >
                                                        <Image
                                                            borderRadius="md"
                                                            objectFit="cover"
                                                            src={link.previewImage}
                                                            alt={link.title}
                                                        />
                                                    </AspectRatio>
                                                </Box>

                                                <Stack spacing="3" shouldWrapChildren>
                                                    <Stack spacing="1">
                                                        <Text fontWeight="medium">{link.title}</Text>
                                                        <Text fontSize="sm" color="muted">
                                                            {link.description}
                                                        </Text>
                                                    </Stack>
                                                    <Button
                                                        variant="link"
                                                        colorScheme="blue"
                                                        leftIcon={<FiPlayCircle fontSize="1.25rem" />}
                                                    >
                                                        Watch video
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Stack>
                            ))} */}
                    </Stack>
                </Container>
            </Box>
            {/* </SlideFade> */}
        </Box>
    )
}



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