import {
    Heading,
    Stack,
    Text,
    GridItem,
    Container,
    Flex,
    Grid,
    Icon,
    HStack,
} from '@chakra-ui/react'

import { MdTouchApp, MdCheckCircleOutline, MdAvTimer, MdMoney, MdOutlineStars } from 'react-icons/md'
import { GiReturnArrow } from 'react-icons/gi'
import { useRouter } from 'next/router'

interface FeatureProps {
    heading: string;
    text: string;
    color: string;
    icon: any;
}

const Feature = ({ heading, text, color, icon }: FeatureProps) => {
    return (
        <GridItem>
            <HStack>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    w={12}
                    h={12}
                    mb={4}
                    rounded="full"
                    color={`${color}.600`}
                    bg={`${color}.100`}
                >
                    <Icon
                        boxSize={7}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        {icon}
                    </Icon>
                </Flex>
                <Heading
                    as={'h3'}
                    fontSize={"lg"}
                    mb={2}
                    fontWeight="semibold"
                    lineHeight="shorter"
                    color={'gray.900'}
                    pb={4}
                    pl={1}
                >
                    {heading}
                </Heading>
            </HStack>
            <Text mt={-4} pl={16} ml={-1} fontSize="md" color="gray.600">
                {text}
            </Text>
        </GridItem>
    );
};

import indexdat from '../assets/components/values.json'

const Values = () => {
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <Stack spacing={5} mb={5} as={Container} maxW={'3xl'} textAlign={'center'}>
                            <Heading fontSize={'3xl'} key={indexData.heading.title}>{indexData.heading.title}</Heading>
                        </Stack>
                        <Grid
                            templateColumns={{
                                base: 'repeat(1, 1fr)',
                                sm: 'repeat(2, 1fr)',
                                md: 'repeat(3, 1fr)',
                            }}
                            gap={{ base: '8', sm: '12', md: '16' }}>
                            <Feature
                                color="blue"
                                heading={indexData.heading.item1}
                                text={indexData.heading.item1d}
                                icon={<MdCheckCircleOutline size={20} />}
                                />
                            <Feature
                                color="yellow"
                                heading={indexData.heading.item2}
                                text={indexData.heading.item2d}
                                icon={<MdAvTimer size={20} />}
                                />
                            <Feature
                                color="gray"
                                heading={indexData.heading.item3}
                                text={indexData.heading.item3d}
                                icon={<MdTouchApp size={20} />}
                                />
                            <Feature
                                color="green"
                                heading={indexData.heading.item4}
                                text={indexData.heading.item4d}
                                icon={<MdMoney size={20} />}
                                />
                            <Feature
                                color="pink"
                                heading={indexData.heading.item5}
                                text={indexData.heading.item5d}
                                icon={<GiReturnArrow size={20} />}
                                />
                            <Feature
                                color="purple"
                                heading={indexData.heading.item6}
                                text={indexData.heading.item6d}
                                icon={<MdOutlineStars size={20} />}
                                />
                        </Grid>
                    </>
                )
            })}
        </>
    );
}

export default Values;