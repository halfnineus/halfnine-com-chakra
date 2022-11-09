import { Box, Button, HStack, Icon, Link, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";
// import { setCookie } from 'cookies-next'
import { BiCookie } from 'react-icons/bi'

const Cookies = ({ req, res }: any) => {
    return (
        <>
            <Box
                width={'full'}
                bg={'black'}
                minH={'60px'}
                bottom={0}
                position={'fixed'}
                opacity={'.92'}
                px={4}
                pt={2}
            >
                <HStack>
                    {/* {
                        cookies === parseCookies(null, 'CookieConsent') &&
                        (
                            <Box color={'red.500'} fontSize="1.5rem" pr={1}>
                            <BiCookie />
                            </Box>
                            )
                        }
                        {
                            !cookies &&
                            (
                                <Box color={'yellow.500'} fontSize="1.5rem" pr={1}>
                                <BiCookie />
                            </Box>
                            )
                        } */}
                    <Box color={'yellow.500'} fontSize="1.5rem" pr={1}>
                        <BiCookie />
                    </Box>
                    <Text fontWeight={'semibold'} fontSize={{ base: 'xs', sm: 'sm', md: "md" }} color={'yellow.500'}>
                        This website uses cookies to ensure the best experience possible.
                    </Text>
                    <NextLink
                        href={"http://cookiesandyou.com/"}
                        // href={"https://www.cloudflare.com/learning/privacy/what-are-cookies/"}
                        passHref
                        legacyBehavior
                    >
                        <Link isExternal>
                            <Button
                                userSelect={'text'}
                                fontSize={{ base: 'xs', sm: 'sm', md: "md" }}
                                fontWeight="medium"
                                color={'blue.400'}
                                variant={'link'}
                            >
                                {"Learn More"}
                            </Button>
                        </Link>
                    </NextLink>
                    <Spacer />
                    <Button
                        // onClick={handleClick}
                        fontWeight={'bold'}
                        fontSize={{ base: 'xs', sm: 'sm', md: "md" }}
                        colorScheme={'yellow'}
                        px={{ base: 4, sm: 6, md: 12 }}
                        mr={{ base: 0, xl: 12 }}
                    >
                        Got It!
                    </Button>
                </HStack>
            </Box>
        </>
    );
}

export default Cookies;