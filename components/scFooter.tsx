import {
    Box,
    Container,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react';

import NextLink from 'next/link'

import smlog from '../public/img/smlog.png'
import wsmlog from '../public/img/wsmlog.png'

export default function SCFooter() {
    return (
        <>
            <Box minH={{ base: '8rem', md: '4rem', lg: '4rem', }} />

            <div
                style={{ position: "absolute", bottom: 0, width: "100%" }}
            >
                <Box
                    color={mode('gray.700', 'gray.200')}
                    bg={mode('blackAlpha.100', 'whiteAlpha.100')}
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
                                <Image userSelect={'none'} alt={'Ochoa'} pointerEvents={'none'} width={'auto'} height={'8'} src={mode(smlog.src, wsmlog.src)} />
                            </Link>
                        </NextLink>
                        <Text pointerEvents={'none'}>© 2022 Ochoa - All rights reserved</Text>
                        <Stack direction={'row'} spacing={6}>
                            <NextLink href={'/'} passHref>
                                <Link>
                                    Home
                                </Link>
                            </NextLink>
                            <NextLink href={'/about/'} passHref>
                                <Link>
                                    About Us
                                </Link>
                            </NextLink>
                            <NextLink href={'/contact/'} passHref>
                                <Link>
                                    Contact
                                </Link>
                            </NextLink>
                        </Stack>
                    </Container>
                </Box>
            </div>
        </>
    );
}