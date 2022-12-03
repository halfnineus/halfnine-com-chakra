import { Heading, Flex, Text, Box, Spacer, Button, ListItem, UnorderedList, OrderedList } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { MdOutlineContacts } from 'react-icons/md'

const App = () => {
    return (
        <>
            <NextSeo
                title={""}
                description={""}
                canonical="https://www.zedir.com/pages/blog/"
            />
            <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} py={6} mx="auto">
                <Heading color={'gray.800'} size={'lg'}>
                </Heading>
                <Flex
                    w={'full'}
                    h={80}
                    my={8}
                    backgroundImage={'https://images.pexels.com/photos/changeme?auto=compress&cs=tinysrgb&fit=crop&h=320&w=1300'}
                    border={'2px'}
                    rounded={'lg'}
                    // shadow={'md'}
                    overflow={'hidden'}
                    borderColor={'gray.600'}
                >
                    <Box placeSelf={'end'} alignItems={'center'} bg={'blackAlpha.600'} height={20} width={'full'} display={'inherit'} px={6}>
                        <Text fontWeight={'bold'} fontSize={'2xl'} color={'white'} opacity={'1'}>
                            Take your business to the Next Level with Us
                        </Text>
                        <Spacer />
                        <Link href={'/contact'}>
                            <Button rightIcon={<MdOutlineContacts size={20} />}>Talk with Us!</Button>
                        </Link>
                    </Box>
                </Flex>
                <Text pb={12} color={'gray.700'}>
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={12} color={'gray.700'}>
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={12} color={'gray.700'}>
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={12} color={'gray.700'}>
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={4} color={'gray.700'}>
                </Text>
                <UnorderedList pb={12}>
                    <ListItem pb={2}>
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                        </Text>
                    </ListItem>
                    <ListItem pb={2}>
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={4} color={'gray.700'}>
                </Text>
                <OrderedList pb={12}>
                    <ListItem pb={2}>
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                        </Text>
                    </ListItem>
                    <ListItem pb={2}>
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                        </Text>
                    </ListItem>
                </OrderedList>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={12} color={'gray.700'}>
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={12} color={'gray.700'}>
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={12} color={'gray.700'}>
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text pb={12} color={'gray.700'}>
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                </Heading>
                <Text color={'gray.700'}>
                </Text>
                <Box py={'3rem'} />
            </Box>
        </>
    );
}

export default App;