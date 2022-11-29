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
    ListItem,
    UnorderedList,
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
                _hover={{ borderColor: 'gray.200', shadow: 'sm' }}
                rounded={'xl'}
                p={4}
                role={'group'}
                border='1px'
                borderColor={'gray.100'}
            >
                <HStack>
                    <Box
                        boxSize={12}
                        color={'blue.600'}
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
                            _groupHover={{ color: 'blue.600' }}
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
                        <Icon color={'blue.600'} mb={2} w={12} h={12} as={ChevronRightIcon} />
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

                            <Heading>Automating all Things Together</Heading>
                            <Text letterSpacing={'tight'} pt={2} pb={4} color={'gray.700'} fontSize={'lg'}>
                                Outsourcing reduces costs by helping you avoid the industry&apos;s most common problems and
                                freeing your time to focus on big picture strategies.
                                Improve your consistency and reliability, allow faster delivery and infrastructure changes.
                                {/* Not having talent in-house or maybe even in the same country presents challenges, We believe that great communication is key to mitigating risk. */}
                            </Text>
                            <Heading fontWeight={'semibold'} color={'gray.800'} pb={2} size={'md'}>
                                How Outsourcing Can Help You Avoid Common Industry Problems and Focus on Big Picture Strategies
                            </Heading>
                            <Text pb={8} color={'gray.700'}>
                                Outsourcing is a strategy that many businesses use to help cut costs, drive efficiency and unlock new streams of revenue. It also enables you to focus on the big picture of your business while someone else handles the day-to-day operations. But with so many different types of outsourcing options available, it can be difficult to know which one is right for your company. To help you figure it out, we&#39;ve listed some common problems that companies in the industry sector have and how outsourcing those tasks can relieve some of that stress.
                            </Text>
                            <Flex
                                w={'full'}
                                h={48}
                                mb={8}
                                backgroundImage={'/img/services/index.jpg'}
                            />
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Common Industry Problems and the Outsourcing Solutions
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                There are many issues that industries face over time that can make it difficult to grow and scale. These range from talent gaps to poor project management practices. Here&#39;s a look at the most common issues and how they can be addressed through outsourcing. The skills gap
                            </Text>
                            <UnorderedList pb={6} spacing={2}>
                                <ListItem>
                                    <Text pb={4} color={'gray.700'} display={'inline'}>
                                        There are a number of industries that are facing a severe skills gap, especially those in the STEM (Science, Technology, Engineering, and Math) fields. Healthcare, for example, is facing a shortage of nurses and other healthcare professionals as the population continues to age. There are also growing concerns about the ability to find enough IT talent to support the growing digital transformation of industries such as healthcare. The best solution for this problem is to bring in experts from the outside who have the specific skills and experience needed to meet your company&#39;s needs. Poor project management
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text pb={4} color={'gray.700'} display={'inline'}>
                                        It&#39;s not uncommon for companies to struggle with project management, but it&#39;s an area that outsourcing can help address. When you bring in an outside organization to handle a project, you also get access to their experienced project managers. The best strategy here is to establish a clear definition of project success and to hold your vendors accountable for meeting or exceeding those benchmarks.
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Bring in Expert Help When You Need It
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                Many industries have skill sets they don&#39;t have the capacity to hire for in-house. Outsourcing those functions allows you to bring in the expertise you need without having to hire someone to do it full-time or on-site. When deciding which tasks to outsource, it&#39;s important to remember that outsourcing expertise is different than outsourcing tasks. Hiring an outside team to do the work for you, whether it&#39;s data entry or compliance testing, can help you get work done more efficiently and for a lower cost than hiring someone full-time. One of the first questions to ask yourself is whether you need to outsource the tasks at all. There may be some tasks you can do in-house or automate and others that are more strategic and should be left to experts.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Increase Productivity with Automation
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                Automation isn&#39;t just for manufacturing companies. In fact, the B2B services industry is one that is seeing automation become more popular. An example is using artificial intelligence to help manage customer service calls. With AI, you can route calls to the right person or team without having to hire more people or stay on the phone. As AI and other automation technologies become more prevalent, they also become easier and cheaper to implement. There&#39;s no need for industries to wait for the perfect moment to automate. Small and incremental changes can add up to big benefits. For example, if your team handles a lot of data and information, adopting a data management system like a CRM or HRIS can help automate processes and make it easier for people to find information they need.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Shifting to a New Technology
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                New technologies are emerging in nearly every industry. In healthcare, while many providers are still using paper records and fax machines, many are shifting to new technologies. If you&#39;re trying to modernize your operations, but don&#39;t have the capacity to make the shift, outsourcing can provide a path to that technology. Outsourcing can help you make the shift to newer technologies by providing managed services, such as cloud computing or applications hosted on remote servers. It can also bring in experts who can help you make the shift to new technologies, such as AI and machine learning technologies.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Create a Culture of Continual Improvement
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                Every company wants to be a learning organization that is constantly bettering itself and finding ways to improve. But for some industries, it&#39;s easier said than done because of the nature of their work. In the healthcare industry, for example, providers are always learning from new research and laws. When your company wants to adopt a culture of continual improvement, but doesn&#39;t have the capacity to do so internally, it&#39;s a sign that outsourcing may be the best option. When you outsource, you get access to a team that is focused on continual improvement and can help the rest of your team adopt those same practices.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Leverage Your Most Valued Assets
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                There are some types of work that new or less experienced employees can do better than more seasoned employees. But they may not have the confidence or experience to do them. In these scenarios, you can use outsourcing to give employees work that taps into their strengths while also giving them opportunities to grow. For example, you can use outsourcing to give employees projects that help them develop new skills or gain new industry experience. There&#39;s no one-size-fits-all solution for every industry. Before deciding on an outsourcing approach, it&#39;s important to assess your company and its needs. There are many benefits to outsourcing, like having more time to focus on your core business, reducing costs and having access to new technologies and expertise. But it&#39;s important to remember that outsourcing is an investment that takes time to pay off. Before you make the decision to outsource, it&#39;s important to carefully evaluate your options and use that experience to make the best decision for your company.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Conclusion
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                Every industry is different, and every company is different, too. It&#39;s important to carefully consider the needs of your company before choosing whether or not to outsource. Outsourcing can bring a lot of benefits to companies, including access to new technologies, the ability to focus on core business, and access to expert help.
                            </Text>
                        </Box>
                        <Box py={'3rem'} />
                    </>
                )
            })}
        </>
    );
}

export default Index;