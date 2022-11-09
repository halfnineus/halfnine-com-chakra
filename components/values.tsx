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
} from '@chakra-ui/react';

import { MdTouchApp, MdCheckCircleOutline, MdAvTimer, MdMoney, MdOutlineStars } from 'react-icons/md'
import { GiReturnArrow } from 'react-icons/gi'

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
                    _dark={{ color: `${color}.100`, bg: `${color}.600` }}
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
                    _light={{ color: "gray.900" }}
                    pb={4}
                    pl={1}
                >
                    {heading}
                </Heading>
            </HStack>
            <Text fontSize="md" color="gray.600" _dark={{ color: "gray.400" }}>
                {text}
            </Text>
        </GridItem>
    );
};

const Values = () => {
    return (
        <>
            <Stack spacing={5} mb={5} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>{"Our Values"}</Heading>
                {/* <Text color={mode('gray.600', 'gray.400')} fontSize={'xl'}>{"indexData.block4.txt"}</Text> */}
            </Stack>

            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '10' }}>
                <Feature
                    color="blue"
                    heading={'Quality'}
                    text={'Focus on expertise without overengineering.'}
                    icon={<MdCheckCircleOutline size={20} />}
                />
                <Feature
                    color="yellow"
                    heading={'Availability'}
                    text={'Meet the demand with supply.'}
                    icon={<MdAvTimer size={20} />}
                />
                <Feature
                    color="gray"
                    heading={'Transparency'}
                    text={'Access to every resource at any step of the process.'}
                    icon={<MdTouchApp size={20} />}
                />
                <Feature
                    color="green"
                    heading={'Value'}
                    text={'Building the right teams to reach return on Investment.'}
                    icon={<MdMoney size={20} />}
                />
                <Feature
                    color="pink"
                    heading={'Flexibility'}
                    text={'Change your priorities without worries.'}
                    icon={<GiReturnArrow size={20} />}
                />
                <Feature
                    color="purple"
                    heading={'Talent'}
                    text={'Not only the right team, but the best for the job.'}
                    icon={<MdOutlineStars size={20} />}
                />
            </Grid>

        </>
    );
}

export default Values;