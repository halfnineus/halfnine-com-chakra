import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import {
    Box,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Grid,
} from '@chakra-ui/react';

interface Props {

}

const Logistics: NextPage<Props> = () => {
    return (
        <>
            <Head>
                <title>Logistics - Ochoa - International Product Development, Design and Production</title>
                <meta name="description" content="" />
            </Head>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <Box
                    maxW={'450px'}
                    w={'full'}
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}
                >
                    <Box h={'250px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                        <Image src={'https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/5vZbMT0/photo-1515378791036-0648a3ef77b2.png'} layout={'fill'} />
                    </Box>
                    <Stack>
                        <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                            Boost your conversion rate
                        </Heading>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </Text>
                    </Stack>
                </Box>
                <Box
                    maxW={'450px'}
                    w={'full'}
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}
                >
                    <Box h={'250px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                        <Image src={'https://external-content.duckduckgo.com/iu/?u=https://i.ibb.co/5vZbMT0/photo-1515378791036-0648a3ef77b2.png'} layout={'fill'} />
                    </Box>
                    <Stack>
                        <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'}>
                            Boost your conversion rate
                        </Heading>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </Text>
                    </Stack>
                </Box>
            </Grid>
        </>
    )
}

export default Logistics


