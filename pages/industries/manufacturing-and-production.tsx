import {
    Box,
    Heading,
    Text,
    Button,
    Divider,
    VStack,
    Grid,
    GridItem,
    Image,
    UnorderedList,
    ListItem,
    Flex,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Mnp = () => {
    return (
        <>
            <NextSeo
                title='Manufacturing and Production Industries - Automating all Things | Ochoa'
                description='Increase your productivity, quality, efficiency, and profit by automating repetitive tasks.'
                canonical="https://ochoa.pro/industries/manufacturing-and-production"
            // languageAlternates={[
            //     {
            //         hrefLang: 'es',
            //         href: 'https://ochoa.pro/es/industries/manufacturing-and-production',
            //     }
            // ]}
            />

            <Box maxW={'container.xl'} px={{ base: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={4}>
                    <GridItem colSpan={1}>
                        <VStack alignItems="flex-start" spacing="20px">
                            <Heading as={'h2'} fontSize="3xl" fontWeight="700">
                                Manufacturing & Production
                            </Heading>
                            <Link href={'/contact'}>
                                <Button colorScheme="blue" size="md">
                                    Let&apos;s Talk!
                                </Button>
                            </Link>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <Text>
                            {`Automation is allowing us to Manufacture and Produce "create" things in a much
                            faster environment while reducing the costs of operation and to create new
                            never-before-possible sources of revenue.`}
                        </Text>
                    </GridItem>
                </Grid>
                <Divider my={12} />
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    We Have the Manufacturing and Production Development Services that Can Help You Find the Balance of Automation and Human-Added Skills to Maximize Efficiency
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    Manufacturing and production are essential components of any business. However, there comes a point when a company needs to reassess its strategy for optimization. Whether you&#39;re in the process of developing new products or services, or looking for ways to improve efficiency in your manufacturing processes, our manufacturing and production development services can help you find the balance between automation and human-added skills that will result in increased productivity. We know how challenging it can be to find that sweet spot between technology and human skills. This article explains why automation is necessary but not sufficient for maximizing efficiency; provides examples of different types of automation; describes the many benefits of implementing knowledgeable machines; and lists some examples of production operations where humans remain irreplaceable.
                </Text>
                <Flex
                    w={'full'}
                    h={48}
                    mb={10}
                    backgroundImage={'/img/industries/manufacturing-and-production.jpg'}
                />
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    What is Manufacturing Automation?
                </Heading>
                <Text pb={10} color={'gray.700'}>
                    Manufacturing automation is the use of computer control and robotics for the production of goods. It is a way to increase production by more efficient use of resources, including reduced labour costs, reduction of defects, and increased consistency in production. Automation has been in use in industries for decades. It has evolved from a state of manual production line operations to computer-controlled systems to include robotics. Manufacturers use automation to manage the complexity of large-scale production while keeping production costs low. Automation can be used to control the operation of machines, to control the sequence of manufacturing operations, and to keep products moving along a production line.
                </Text>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Types of Manufacturing Automation
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    Depending on the particular manufacturing processes in question, there are a variety of ways to achieve automation. Some of the most common types of manufacturing automation include:
                </Text>
                <UnorderedList pb={12} spacing={2}>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Computer-controlled Production Systems:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            With this type of automation, manufacturers control all of the production operations with computers. In some cases, this might include robotics.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Numerical Control:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Also known as computer numerical control, or CNC, numerical control is a method of controlling machine tools, like lathes. It&#39;s similar to computer-controlled production systems in that it uses computers to control the machines, but it doesn&#39;t control the entire production line.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Programmable Logic Controllers:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Programmable logic controllers, or PLCs, are computers that control a manufacturing process. They gather data about the process and then use that information to control the process.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Robotics:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Robotics are automated machines that can be programmed to perform complex tasks. Depending on the circumstances, they can be used on their own or in conjunction with other forms of automation.
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Why is Manufacturing Automation Important?
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    Automation can help manufacturers improve their quality and consistency. It&#39;s also suited to high-volume production. Manufacturers will often use automation to help with the following tasks:
                </Text>
                <UnorderedList pb={12} spacing={2}>
                                        <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Producing Innovative Products:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Automation allows manufacturers to increase production volume, which can help them stay competitive. Automation is particularly helpful for producing innovative products because it allows manufacturers to incorporate new features with limited difficulty.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Producing End-to-End:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            In some cases, manufacturers will outfit their end-to-end production lines with automation. This allows them to produce a single product from start to finish using automated equipment.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Customizing Production:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Manufacturers might use automation to customize production. This could entail using robots to move or adjust production lines or to perform tasks that require particular precision.
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Benefits of Manufacturing Automation
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    Manufacturers that use automation can expect to see a number of benefits, including:
                </Text>
                <UnorderedList pb={12} spacing={2}>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Lower Production Costs:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Automation can help manufacturers reduce production costs. It can reduce labour costs by increasing the volume of production, reducing the need for human workers.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Enhanced Quality:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            When manufacturers use automation to produce high-quality products, they can differentiate themselves from competitors. This can help them stay competitive and profitable.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Improved Efficiency:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Automation makes production more efficient, which can help manufacturers meet sales expectations.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Enhanced Productivity:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            When manufacturers automate production, they can expect to see an increase in productivity. This can help them meet sales growth goals more easily.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Improved Traceability:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Automation can help manufacturers improve traceability, which is the ability to identify the source of defects.
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Examples of Manufacturing Operations Where Humans Remain Irreplaceable
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    For the most part, automation has been responsible for the vast majority of manufacturing advancements since the Industrial Revolution. Although some might argue that we&#39;re currently in the midst of a fourth industrial revolution, where artificial intelligence and machine learning are becoming more prominent in the manufacturing world, the use of robots, AI and other forms of automation are still largely confined to repetitive, predictable and rule-based tasks. That said, there are a few examples of production operations where humans remain irreplaceable. These are areas where the creativity and intuition of human workers is key to producing high-quality goods. Here are three examples of manufacturing operations that can&#39;t be fully automated:
                </Text>
                <UnorderedList pb={12} spacing={2}>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Quality Control:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Quality control is an essential part of manufacturing. While some aspects of quality control can be automated, various quality tests can&#39;t be fully automated. Quality control requires human workers because they&#39;re able to think critically about the product and use their judgement.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            Design and Engineering:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Design and engineering are behind the creation of new products. While robots can help with the implementation of design and engineering, they can&#39;t come up with ideas for new products. Humans are needed because they&#39;re able to think creatively.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontWeight={'semibold'} display={'inline-block'}>
                            R & D:
                        </Text>{" "}
                        <Text pb={4} color={'gray.700'} display={'inline'}>
                            Some manufacturers use robotics and AI to help with research and development, but they can&#39;t fully replace human workers. R&D requires human workers because they&#39;re able to think creatively and use their judgment.
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                    Bottom line
                </Heading>
                <Text pb={4} color={'gray.700'}>
                    Automation is a major part of manufacturing, but it doesn&#39;t always come without its flaws. While it can be used to produce high-quality products and produce them efficiently, it can&#39;t be used to create innovative products. For that, humans are needed. In manufacturing, automation is important because it can help reduce costs, improve quality, increase efficiency, and create consistency. When selecting your automation solution, you&#39;ll want to make sure it can support your production needs.
                </Text>

                <Divider my={12} />
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }}
                    gap={{ base: '8', sm: '12', md: '16' }}>
                    <Feature
                        heading={'Assembly lines'}
                        text={'Robotics has made assembly lines work on a mass scale by automating repetitive tasks.'}
                    />
                    <Feature
                        heading={'Energy'}
                        text={'Data Analytics prevents and predicts maintenance on energy production, making it more reliable.'}
                    />
                    <Feature
                        heading={'Farming'}
                        text={'Technology has made Vertical Farming Possible by automating the farming process.'}
                    />
                    <Feature
                        heading={'This Site'}
                        text={'Frameworks have made this site fast by automating the repetitive code used in production.'}
                    />
                </Grid>

                <Box py={'3rem'} />
            </Box>

        </>
    );
}

export default Mnp


interface FeatureProps {
    heading: string;
    text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
    return (
        <GridItem>
            <Heading pb={1} as={'h3'} fontSize="xl" fontWeight="600">
                {heading}
            </Heading>
            <Text>{text}</Text>
        </GridItem>
    );
};
