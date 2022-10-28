import {
    Box,
    Flex,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react';

import NextLink from 'next/link'

import smlog from '../public/img/smlog.png'
import wsmlog from '../public/img/wsmlog.png'

import footdat from '../assets/components/footer.json'
import { useRouter } from "next/router"
export default function SCFooter() {
    const { locale } = useRouter()
    return (
        <>{footdat.data.filter(p => p.locale === locale).map((footerData, i) => {
            return (<>
                <Box minH={{ base: '8rem', md: '4rem', lg: '4rem', }} />
                <Flex w="full" alignItems="center" justifyContent="center" style={{ position: "absolute", bottom: 0, width: "100%" }}>
                    <Flex bg={mode('blackAlpha.100', 'whiteAlpha.100')} w="full" as="footer" flexDir={{ base: "column", sm: "column", md: "row" }} align="center" justify="space-between" px="6" py="4">
                        <NextLink href={'/'} passHref>
                            <Link>
                                <Image userSelect={'none'} alt={'Ochoa'} pointerEvents={'none'} width={'auto'} height={'8'} src={mode(smlog.src, wsmlog.src)} />
                            </Link>
                        </NextLink>
                        <Text pl={{ sm: 'none', md: '16', lg: '20' }} pointerEvents={'none'}>{footerData.components.copyright}</Text>
                        <Stack direction={'row'} spacing={6}>
                            <NextLink href={'/'} passHref><Link userSelect={'none'}>{footerData.components.i1}</Link></NextLink>
                            <NextLink href={'/about'} passHref><Link userSelect={'none'}>{footerData.components.i2}</Link></NextLink>
                            <NextLink href={'/contact'} passHref><Link userSelect={'none'}>{footerData.components.i3}</Link></NextLink>
                        </Stack>
                    </Flex>
                </Flex>
            </>)
        })}

        </>
    );
}