import React, { useEffect, useState } from 'react'
import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react"
import { setCookie, hasCookie } from 'cookies-next'
import { BiCookie } from 'react-icons/bi'

function Consent() {
    const [consent, setConsent] = useState(true);
    useEffect(() => {
        setConsent(hasCookie('localConsent'));
    }, []);

    const acceptCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365, domain: '.halfnine.com' });
        console.log('accepring cookies');
    };
    const closeP = () => {
        setConsent(true);
        console.log('closing');
    };
    const denyCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365, domain: '.halfnine.com' });
        console.log('denying cookie');
    };
    if (consent === true) {
        return null;
    }
    return (
        <Box
            bg={'gray.200'}
            minH={'60px'}
            position={'fixed'}
            bottom={2}
            left={0}
            right={0}
            px={4}
            py={2}
            rounded={'xl'}
            maxW={'72rem'}
            mx={'auto'}
        >
            <HStack>
                <Box color={'blue.500'} fontSize="1.5rem" pr={1}>
                    <BiCookie />
                </Box>
                <Text fontWeight={'semibold'} fontSize={{ base: 'xs', sm: 'sm', md: "md" }} color={'blue.500'}>
                    {'We collect cookies to analyze our website traffic and performance, we never collect any personal data.'}
                </Text>
                <Spacer />
                <Button
                    onClick={() => {
                        acceptCookie();
                    }}
                    rounded={'xl'}
                    fontWeight={'bold'}
                    fontSize={{ base: 'xs', sm: 'sm', md: "md" }}
                    colorScheme={'blue'}
                    px={{ base: 4, sm: 6, md: 12 }}
                >
                    I Agree
                </Button>
            </HStack>
        </Box>
    )
}

export default Consent;