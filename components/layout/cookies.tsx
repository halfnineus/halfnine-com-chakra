import { Box, Center, Container, Stack, Text } from "@chakra-ui/react";
// import { setCookie } from 'cookies-next'

const Cookies = ({ req, res }: any) => {
    return (
        <>
            <Box
                width={'full'}
                bg={'black'}
                minH={'60px'}
                bottom={0}
                position={'fixed'}
                opacity={'.9'}
                p={4}
            >
                <Text fontWeight={'semibold'} color={'yellow.500'}>
                    This website uses cookies to ensure the best experience possible.
                </Text>
            </Box>
        </>
    );
}

export default Cookies;