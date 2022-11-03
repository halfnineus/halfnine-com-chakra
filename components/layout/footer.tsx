import {
    Box,
    Flex,
    Image,
    Link,
    Stack,
    Text,
    Container,
    SimpleGrid,
    Tag,
    HStack,
    VStack,
    Divider,
    Icon,
    Center,
    useColorModeValue as mode,
} from '@chakra-ui/react';

import NextLink from 'next/link'
import { useRouter } from "next/router"

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter, FiYoutube } from "react-icons/fi";

import footdat from '../../assets/components/footer.json'

export default function SCFooter() {
    const { locale } = useRouter()
    return (
        <>
            {footdat.data.filter(p => p.locale === locale).map((footerData, i) => {
                return (
                    <>
                        <Box
                            bg={mode('gray.50', 'gray.900')}
                            color={mode('gray.700', 'gray.200')}
                            // mx="auto"
                            margin={'auto'}
                        >
                            <Text align="center"> !!changeme</Text>
                            <Box pt={10} pb={2}>
                                <Flex
                                    align={'center'}
                                    _before={{
                                        content: '""',
                                        borderBottom: '1px solid',
                                        borderColor: mode('gray.200', 'gray.700'),
                                        flexGrow: 1,
                                        mr: 5,
                                    }}
                                    _after={{
                                        content: '""',
                                        borderBottom: '1px solid',
                                        borderColor: mode('gray.200', 'gray.700'),
                                        flexGrow: 1,
                                        ml: 5,
                                    }}>
                                    <NextLink href={'/'} passHref>
                                        <Link>
                                            <Image userSelect={'none'} alt={'Ochoa'} pointerEvents={'none'} width={'auto'} height={'10'} src={mode('/img/smlog.png', '/img/wsmlog.png')} />
                                        </Link>
                                    </NextLink>
                                </Flex>
                                <VStack py={4}>
                                    <HStack spacing={4} justify="center">
                                        <NextLink href={'https://www.linkedin.com/company/ochoapro'} passHref>
                                            <Link isExternal>
                                                <Icon
                                                    color="gray.800"
                                                    _dark={{ color: "white" }}
                                                    h="25px"
                                                    w="25px"
                                                    as={FaFacebookF}
                                                />
                                            </Link>
                                        </NextLink>
                                        <NextLink href={'https://www.linkedin.com/company/ochoapro'} passHref>
                                            <Link isExternal>
                                                <Icon
                                                    color="gray.800"
                                                    _dark={{ color: "white" }}
                                                    h="25px"
                                                    w="25px"
                                                    as={FiTwitter}
                                                />
                                            </Link>
                                        </NextLink>
                                        <NextLink href={'https://www.linkedin.com/company/ochoapro'} passHref>
                                            <Link isExternal>
                                                <Icon
                                                    _dark={{ color: "white" }}
                                                    h="25px"
                                                    w="25px"
                                                    as={FaLinkedinIn}
                                                />
                                            </Link>
                                        </NextLink>
                                        <NextLink href={'https://www.linkedin.com/company/ochoapro'} passHref>
                                            <Link isExternal>
                                                <Icon
                                                    _dark={{ color: "white" }}
                                                    h="25px"
                                                    w="25px"
                                                    as={FiYoutube}
                                                />
                                            </Link>
                                        </NextLink>
                                    </HStack>
                                    <Text textAlign="center" fontSize="smaller" color={'gray.700'} _dark={{ color: "white" }}>
                                        {/* &copy; 2022 Ochoa - All rights reserved */}
                                        {footerData.components.copyright}
                                    </Text>
                                </VStack>
                            </Box>
                        </Box>
                        {/* <Box minH={{ base: '8rem', md: '4rem', lg: '4rem', }} />
                    <Flex w="full" alignItems="center" justifyContent="center" style={{ position: "absolute", bottom: 0, width: "100%" }}>
                        <Flex bg={mode('blackAlpha.100', 'whiteAlpha.100')} w="full" as="footer" flexDir={{ base: "column", sm: "column", md: "row" }} align="center" justify="space-between" px="6" py="4">
                            <NextLink href={'/'} passHref>
                                <Link>
                                    <Image userSelect={'none'} alt={'Ochoa'} pointerEvents={'none'} width={'auto'} height={'8'} src={mode('/img/smlog.png', '/img/wsmlog.png')} />
                                </Link>
                            </NextLink>
                            <Text pl={{ sm: 'none', md: '16', lg: '20' }} pointerEvents={'none'}>{footerData.components.copyright}</Text>
                            <Stack direction={'row'} spacing={6}>
                                <NextLink href={'/'} passHref><Link userSelect={'none'}>{footerData.components.i1}</Link></NextLink>
                                <NextLink href={'/about'} passHref><Link userSelect={'none'}>{footerData.components.i2}</Link></NextLink>
                                <NextLink href={'/contact'} passHref><Link userSelect={'none'}>{footerData.components.i3}</Link></NextLink>
                            </Stack>
                        </Flex>
                    </Flex> */}
                    </>
                )
            })}

        </>
    );
}