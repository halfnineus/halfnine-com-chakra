import { SimpleGrid, Flex, Heading, Button, Image, Text, Box } from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import router from 'next/router'

const CTA = (props: any) => {
    return (
        <SimpleGrid my={4} columns={{ base: 1, md: 2 }} spacing={0}>
            <Flex pl={{ base: 'none', md: 20 }}>
                <Image
                    rounded={20}
                    shadow={"md"}
                    src={props.src}
                    alt="EEimg"
                    fit="cover"
                    w="full"
                    loading="lazy"
                    opacity={0.9}
                    pointerEvents={'none'}
                />
            </Flex>
            <Flex direction="column" alignItems="start" justifyContent="center" px={{ base: 4, md: 8, lg: 20 }} py={24} zIndex={3}>
                <Text pointerEvents={'none'} fontSize="lg" textTransform="uppercase" fontWeight="bold">
                    {props.toptext}
                </Text>
                <Heading pointerEvents={'none'} mb={4} fontSize={"4xl"} lineHeight="shorter" textShadow="2px 0 currentcolor">
                    {props.heading}
                </Heading>
                <Text pointerEvents={'none'} pr={{ base: 0, lg: 16 }} mb={4} fontSize="lg" letterSpacing="wider">
                    {props.text}
                </Text>
                <Box display="inline-flex" rounded="md" shadow="md">
                    <Button mt={2} rounded="md" rightIcon={<BiMailSend />} colorScheme={'blue'} onClick={() => router.push('/contact')}>
                        {props.buttontxt}
                    </Button>
                </Box>
            </Flex>
        </SimpleGrid>
    );
}

export default CTA;