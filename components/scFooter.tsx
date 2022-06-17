import {
    Box,
    chakra,
    Container,
    Flex,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';

import { ReactNode } from 'react';

import NextLink from 'next/link'

import smlog from '../public/img/smlog.png'
import wsmlog from '../public/img/wsmlog.png'

const Logo = () => {
    return (
        <>
            <Image /*viewBox="0 0 120 28"*/ pointerEvents={'none'} width={'100%'} height={'10'} src={useColorModeValue(smlog.src, wsmlog.src)} />
        </>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SCFooter() {
    return (
        <Box
            color={useColorModeValue('gray.700', 'gray.200')}
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}           
            width={'100%'}
            top={'100%'}
            position={'sticky'}
        >
            <Box
            // borderTopWidth={2}
            // borderStyle={'solid'}
            // borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
                <Container
                    as={Stack}
                    maxW={''}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    // spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <NextLink href={'/'} passHref>
                        <Link>
                            <Logo />
                        </Link>
                    </NextLink>
                    <Text>© 2022 Ochoa LLC. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <NextLink href={'/'} passHref>
                            <Link>Home</Link>
                        </NextLink>
                        <NextLink href={'/about'} passHref>
                            <Link>About</Link>
                        </NextLink>
                        <NextLink href={'/blog'} passHref>
                            <Link>Blog</Link>
                        </NextLink>
                        <NextLink href={'/contact'} passHref>
                            <Link>Contact</Link>
                        </NextLink>
                    </Stack>
                </Container>
            </Box>
        </Box >
    );
}