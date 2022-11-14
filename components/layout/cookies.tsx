import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, Icon, Link, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { setCookie, hasCookie } from 'cookies-next';
import { BiCookie } from 'react-icons/bi'

function Consent() {
    const [consent, setConsent] = useState(true);
    useEffect(() => {
        setConsent(hasCookie('localConsent'));
    }, []);

    const acceptCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
        console.log('accepring cookies');
    };
    const closeP = () => {
        setConsent(true);
        console.log('closing');
    };
    const denyCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
        console.log('denying cookie');
    };
    if (consent === true) {
        return null;
    }
    return (
        // <Box
        //     className={`absolute bottom-3 w-[90%] left-3 p-3 rounded-md bg-slate-200 ${consent ? 'hidden' : ''}`}
        //     width={'full'}
        //     bg={'gray.900'}
        //     minH={'60px'}
        //     bottom={0}
        //     position={'fixed'}
        //     opacity={'.92'}
        //     px={4}
        //     pt={2}
        // >
        //     This Site use cookie, please accept them if you want
        //     <div className="flex align-middle justify-between">
        //         <Button
        //             onClick={(e) => {
        //                 closeP();
        //             }}
        //         >
        //             Close
        //         </Button>
        //         <Button
        //             onClick={(e) => denyCookie()}
        //             className="p-2 bg-red-400 rounded-md"
        //         >
        //             Deny All
        //         </Button>
        //         <Button
        //             onClick={() => {
        //                 acceptCookie();
        //             }}
        //             className="p-2 bg-green-400 rounded-md"
        //         >
        //             Accept All
        //         </Button>
        //     </div>
        // </Box>
        <Box
            className={`absolute bottom-3 w-[90%] left-3 p-3 rounded-md bg-slate-200 ${consent ? 'hidden' : ''}`}
            width={'full'}
            bg={'gray.900'}
            // minH={'60px'}
            bottom={0}
            position={'fixed'}
            opacity={'.92'}
            px={4}
            py={2}
        >
            <HStack>
                <Box color={'yellow.500'} fontSize="1.5rem" pr={1}>
                    <BiCookie />
                </Box>
                <Text fontWeight={'semibold'} fontSize={{ base: 'xs', sm: 'sm', md: "md" }} color={'yellow.500'}>
                    This website uses cookies to ensure you have the best experience possible.
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
                    onClick={() => {
                        acceptCookie();
                    }}
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
    )
}

export default Consent;