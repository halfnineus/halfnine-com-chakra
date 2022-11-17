import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Icon,
    Stack,
    Text,
    useColorModeValue as mode,
    SimpleGrid,
    HStack,
    Heading,
    Img,
    Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { IoBulbOutline, IoPeopleOutline, IoRocketOutline } from "react-icons/io5";

import indexdat from "../../assets/services/index.json"

const Feature = (props: any) => {
    return (
        <Link href={props.refx}>
            <Box
                _hover={{ borderColor: 'gray.200', shadow: 'md' }}
                shadow={'sm'}
                rounded={'xl'}
                p={4}
                role={'group'}
                border='1px'
                borderColor={'gray.100'}
            >
                <HStack>
                    <Box
                        boxSize={12}
                        color={'brand.600'}
                        mb={4}
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                        fontSize="3rem"
                    >
                        {props.icon}
                    </Box>
                    <Center>
                        <Heading
                            pl={2}
                            as={'h3'}
                            mb={3}
                            fontSize="lg"
                            lineHeight="shorter"
                            fontWeight="bold"
                            _groupHover={{ color: 'brand.600' }}
                        >
                            {props.title}
                        </Heading>
                    </Center>
                    <Flex
                        transition={'all .3s ease'}
                        transform={{ base: 'translateX(0)', sm: 'translateX(-40px)' }}
                        opacity={{ base: '100%', sm: 0 }}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}>
                        <Icon color={'brand.600'} mb={2} w={12} h={12} as={ChevronRightIcon} />
                    </Flex>
                </HStack>
                <Text
                    as={'p'}
                    lineHeight="tall"
                    color="gray.600"
                >
                    {props.children}
                </Text>
            </Box >
        </Link>
    );
};

const Index = () => {

    const { locale } = useRouter()

    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title='Our Services - Custom Development, Digital Transformation, Project Consultation.'
                            description='Reduce your costs by outsourcing and free your time to focus on big picture strategies.'
                            canonical="https://ochoa.pro/services"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://ochoa.pro/es/services',
                                }
                            ]}
                        />

                        <Box maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} pt={6} mx="auto">
                            <SimpleGrid
                                // maxW={'container.xl'}
                                columns={{ base: 1 }}
                                spacing={4}
                                // px={{ base: '4', xl: '10' }}
                                // pt={6}
                                mx="auto"
                                bg="white"
                            >
                                <Feature
                                    title="Development Services"
                                    icon={<IoPeopleOutline />}
                                    refx={'/services/development'}
                                >
                                    We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.
                                </Feature>

                                <Feature
                                    title="Digital Transformation"
                                    icon={<IoRocketOutline />}
                                    refx={'/services/digitalization'}
                                >
                                    Take a digital approach while selling your products & services, managing your organization and much more!
                                </Feature>

                                <Feature
                                    title="Project Consultation"
                                    icon={<IoBulbOutline />}
                                    refx={'/services/consultation'}
                                >
                                    Find the right options for your project from discovery to deployment of your idea, satisfying your Requirements and your Customer&apos;s Needs.
                                </Feature>
                            </SimpleGrid>

                            <Box py={'3rem'} />

                            {/* <Stack my={2}> */}
                            <Heading>Automating all Things Together</Heading>
                            <Text letterSpacing={'tight'} pt={2} color={mode('gray.600', 'gray.400')} fontSize={'lg'}>
                                Outsourcing reduces costs by helping you avoid the industry&apos;s most common problems and
                                freeing your time to focus on big picture strategies.
                                Improve your consistency and reliability, allow faster delivery and infrastructure changes.
                                Not having talent in-house or maybe even in the same country presents challenges, We believe that great communication is key to mitigating risk.
                            </Text>
                            {/* </Stack> */}

                            {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
                                <Stack my={2}>
                                    <Heading>Automating All Things Together</Heading>
                                    <Text maxW={'34rem'} pt={2} color={mode('gray.600', 'gray.400')} fontSize={'lg'}>
                                        Outsourcing reduces costs by helping you avoid the industry&apos;s most common problems and
                                        freeing your time to focus on big picture strategies.
                                        Improve your consistency and reliability, allow faster delivery and infrastructure changes.
                                        Not having talent in-house or maybe even in the same country presents challenges, We believe that great communication is key to mitigating risk.
                                    </Text>
                                </Stack>
                                <Img
                                    border={'1px'}
                                    borderColor={mode('gray.400', 'gray.600')}
                                    rounded="2xl"
                                    objectFit="cover"
                                    userSelect={'none'}
                                    pointerEvents={'none'}
                                    w="full"
                                    h={{ sm: "64", md: "96", lg: "72", xl: "64" }}
                                    src={'/img/index/services.jpg'}
                                    alt="Automation Support Center"
                                />
                            </SimpleGrid> */}
                        </Box>
                        <Box py={'3rem'} />
                    </>
                )
            })}
        </>
    );
}

export default Index;