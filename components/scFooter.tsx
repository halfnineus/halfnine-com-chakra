import {
    Box,
    chakra,
    Container,
    Divider,
    Flex,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import NextLink from 'next/link'

import smlog from '../public/img/smlog.png'
import wsmlog from '../public/img/wsmlog.png'

export default function SCFooter() {
    return (
        <>
            <Divider />
            <Box minH={{ base: '8rem', md: '4rem', lg: '4rem', }} />
            <Flex
                w="full"
                alignItems="center"
                justifyContent="center"
                style={{ position: "absolute", bottom: 0, width: "100%" }}
            >
                <Flex
                    w="full"
                    as="footer"
                    flexDir={{ base: "column", sm: "column", md: "row" }}
                    align="center"
                    justify="space-between"
                    px="6"
                    py="4"
                >
                    <NextLink href={'/'} passHref>
                        <Link>
                            <Image userSelect={'none'} alt={'Ochoa'} pointerEvents={'none'} width={'auto'} height={'8'} src={useColorModeValue(smlog.src, wsmlog.src)} />
                        </Link>
                    </NextLink>
                    <Text pl={{ sm: 'none', md: '16', lg: '32' }} pointerEvents={'none'}>© 2022 Ochoa - All rights reserved</Text>
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
                </Flex>
            </Flex>
        </>
    );
}