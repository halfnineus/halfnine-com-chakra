import { useRouter } from 'next/router';
import { Box, Container, Flex, Heading, SimpleGrid, Text, useColorModeValue, } from '@chakra-ui/react'

import devdat from '../pages/assets/devterms.json'

const Feature = (props: any) => {
    return (
        <Box>
            <Heading
                as={"h3"}
                mb={3}
                fontSize="lg"
                lineHeight="shorter"
                fontWeight="bold"
                _light={{ color: "gray.900" }}
            >
                {props.title}
            </Heading>
            <Text
                lineHeight="tall"
                color={useColorModeValue("gray.600", "gray.400")}
            >
                {props.children}
            </Text>
        </Box>
    );
};
const DevTerms = () => {
    const { locale } = useRouter()
    return (
        <>
            {devdat.data.filter(p => p.locale === locale).map((devtermDat, i) => {
                return (
                    <>
                        <Flex
                            px={{ base: '6', md: '20' }}
                            pt={{ base: '6', md: '8' }}
                            pb={{ base: '6', md: '20' }}
                            w="auto"
                            justifyContent="center"
                            alignItems="center"
                            pointerEvents={'none'}
                        >
                            <Box bg={useColorModeValue("gray.50", "gray.700")} rounded={24} mx="auto" shadow="xl" pb={20}>
                                <Box my={12} textAlign={'center'}>
                                    <Container maxW='container.xl' >
                                        <Heading mb={3}>{devtermDat.title.h1}</Heading>
                                        <Text color={useColorModeValue("gray.600", "gray.400")}>{devtermDat.title.txt}</Text>
                                    </Container>
                                </Box>
                                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={20} px={{ base: 4, lg: 16, xl: 24 }}>
                                    <Feature title={devtermDat.block.item1}>{devtermDat.block.item1d}</Feature>
                                    <Feature title={devtermDat.block.item2}>{devtermDat.block.item2d}</Feature>
                                    <Feature title={devtermDat.block.item3}>{devtermDat.block.item3d}</Feature>
                                    <Feature title={devtermDat.block.item4}>{devtermDat.block.item4d}</Feature>
                                    <Feature title={devtermDat.block.item5}>{devtermDat.block.item5d_1}<br />{devtermDat.block.item5d_2}</Feature>
                                    <Feature title={devtermDat.block.item6}>{devtermDat.block.item6d}</Feature>
                                    <Feature title={devtermDat.block.item7}>{devtermDat.block.item7d}</Feature>
                                    <Feature title={devtermDat.block.item8}>{devtermDat.block.item8d}</Feature>
                                    <Feature title={devtermDat.block.item9}>{devtermDat.block.item9d}</Feature>
                                </SimpleGrid>
                            </Box>
                        </Flex>
                    </>)
            })}</>
    );
}

export default DevTerms;