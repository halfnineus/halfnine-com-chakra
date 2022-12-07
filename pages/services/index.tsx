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
    Divider,
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { IoBulbOutline, IoPeopleOutline, IoRocketOutline } from "react-icons/io5";

import indexdat from "../../assets/services/index.json"
import { Contactimg } from "../../components";

const Feature = (props: any) => {
    return (
        <>
            <Box>
                <HStack>
                    <Box color={'blue.600'} fontSize="3rem">
                        {props.icon}
                    </Box>
                    <Heading pl={3} as={'h3'} fontSize="xl">
                        {props.title}
                    </Heading>
                </HStack>
                <Text pt={2} color="gray.600">
                    {props.children}
                </Text>
                <Link href={props.refx}>
                    <Button mt={4} colorScheme={'blue'}>
                        Learn More
                    </Button>
                </Link>
            </Box>
        </>
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
                            title='Industrial Automation Services with Guaranteed Excellence | Zedir.'
                            description='The Zedir Company provides Guaranteed Excellence in Industrial Automation Services. With extensive experience in industrial automation, our team of dedicated engineers is ready to replicate proven methods and solutions for your business.'
                            // The Zedir Company provides Guaranteed Excellence in Industrial Automation Services. With extensive experience in industrial automation, our team of dedicated engineers is ready to replicate proven methods and solutions for your business.
                            // The Zedir Company provides Industrial Automation Services with Guaranteed Excellence. With extensive experience in industrial sectors, our team of dedicated engineers is ready to replicate proven methods and solutions.
                            // The Zedir Company provides Industrial Automation Services with guaranteed excellence. We have a team of dedicated engineers with extensive experience in industrial sectors.
                            canonical="https://www.zedir.com/services"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/services',
                                }
                            ]}
                        />

                        <Box  maxW={'container.xl'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: '0' }} mx="auto" my={8}>
                            <Contactimg label={'Industrial Automation Services | Excellence Guaranteed'} pexelsrc={'9223158/pexels-photo-9223158.jpeg'} />
                            <Heading color={'gray.800'} as={'h1'} size={'lg'} pt={6} pb={2}>Automating all industries together</Heading>
                            <Text pb={2} color={'gray.700'}>
                                Industrial Automation Services from the Zedir Company guarantee excellence. Industrial Automation has the goals of connecting equipment together, developing technology, maximizing production, assuring safety, maximize the use of resources, and assuring quality. Our team of dedicated engineers has extensive experience in these industrial sectors and is ready to replicate proven methods and solutions.
                            </Text>
                            <Text pb={8} color={'gray.700'}>
                                We strive to ensure that our solutions are cost-effective and tailored to the needs of our clients. We understand that each project is unique, so we take the time to understand the specific requirements of each customer. Furthermore, We then develop a solution that is tailored to their needs and guaranteed to provide the highest level of quality and reliability. Our team is available to provide ongoing support and maintenance, so you can have peace of mind knowing that your automation solution will be fully functional and reliable for years to come.
                            </Text>
                            <Box>
                                <Heading pb={4} size={'lg'}>Our Industry Expertise</Heading>
                                <SimpleGrid
                                    columns={{ base: 1 }}
                                    spacing={4}
                                    mx="auto"
                                >
                                    <Feature
                                        title="Firmware, Hardware, and Software Development"
                                        icon={<IoPeopleOutline />}
                                        refx={'/services/development'}
                                    >
                                        Zedir is being built by engineers. We understand the need for transparency, efficiency and more importantly, delivery. We have been focused on putting together a delivery management practice that enables you monitor progress and take decisions based on this information in a way that is fast, transparent, and efficient. We offer the agile industrial automation services to complement and improve your specific systems.
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title="Industrial Digital Transformation"
                                        icon={<IoRocketOutline />}
                                        refx={'/services/digitalization'}
                                    >
                                        Improve your current processes and systems with a wide range of technologies, from providing Cloud Computing to process with efficiency changing levels of demand to providing a comprehensive set of data and information. With the goal to help transform your organization ability to maximize efficiency, increase production, and develop new techniques with technology.
                                        {/* Industrial Digital Transformation Services guarantee excellence in industrial automation. Our team of experts utilizes their knowledge and experience in digital and industrial technologies to deliver solutions that are tailored to the specific needs of each client. Our services focus on helping clients maximize the efficiency and profitability of their operations by working with them to create a unique industrial automation strategy. We take the time to understand the client's specific needs and challenges, and then design a solution that will help them achieve their desired outcomes. Our services include the implementation of advanced technologies like robotics, machine learning, and the Internet of Things. We use the latest technologies to develop custom solutions that will help the client optimize their processes and reduce costs. We also provide ongoing support and maintenance to ensure the client's systems are running smoothly and efficiently. With our Industrial Digital Transformation Services, clients can be assured of excellence in industrial automation. */}
                                        {/* Industrial Digital Transformation Services from [Company name] provide a comprehensive suite of services to help transform your organization digitally and achieve excellence. Our comprehensive approach to digital transformation includes industrial automation, process optimization, data analysis, and AI-driven decision-making. We can help you develop custom solutions that make your operations more efficient, reliable, and cost-effective. Our goal is to help you achieve your business objectives while meeting all safety and regulatory requirements. With our expertise in industrial automation, process optimization, and data analytics, we can ensure that your organization is well-equipped to handle the challenges of the digital age. We understand that each business is unique and therefore, our services are tailored to meet the specific needs of your organization. Our team of experts will work closely with you to make sure that your digital transformation projects are completed on time and with the highest quality. So, if you're looking for industrial digital transformation services that guarantee excellence, look no further than [Company name]. */}
                                        {/* Industrial digital transformation services can help your business reach a higher level of success. Through the use of Industrial Automation, these services can help you maximize efficiency, increase production, and develop new products. By using the latest technologies, you can ensure the excellence of your services and meet the demands of the ever-changing manufacturing industry. With industrial digital transformation services, you can maximize your profitability by reducing operational costs and increasing your output. Your team can benefit from improved data accuracy and better communication, enabling them to make better informed decisions and increase the efficiency of their processes. With the help of experienced professionals, you can guarantee the highest level of excellence for your services. Industrial digital transformation services can help you remain competitive in the market and stay ahead of the curve. With their help, you can be sure that you are providing the best services possible and giving your customers a great experience. */}
                                    </Feature>
                                    <Divider pt={2} />
                                    <Feature
                                        title="Industrial Project Consultation"
                                        icon={<IoBulbOutline />}
                                        refx={'/services/consultation'}
                                    >
                                        {/* Are you looking for industrial project consultation services with guaranteed excellence? Look no further. Our team of experts offers comprehensive services for industrial automation projects, all tailored to your specific needs. We specialize in consulting on projects related to factory automation, process automation, and data analytics. We provide detailed plans and strategies to ensure your project runs smoothly and successfully. Our experienced professionals use the latest technologies and techniques to guarantee the highest quality results. We also provide ongoing support, so you can always be sure that you're getting the best service possible. We understand the importance of your industrial project and strive to give you the best experience possible. Be sure to take advantage of our industrial project consultation services and get the guaranteed excellence you deserve. */}
                                        With the very high importance of high-quality industrial automation projects. We offer solutions to help you keep peace of mind on the excellence and quality of your proejcts. From feasibility study, system design review, project management, installation and commissioning, or maintenance. Our experienced team is committed to helping you get the most out of your industrial automation project.
                                        {/* At Industrial Project Consultation Services, we understand the importance of high-quality industrial automation projects. That's why we offer the best in consultation services, with the goal of guaranteeing excellence. We have years of experience in industrial automation and can work with any project from the simplest to the most complex. We provide a range of services, including feasibility studies, system design, project management, installation and commissioning, and maintenance. Our experienced team is committed to helping you get the most out of your industrial automation project.
                                        We understand that every project is unique, and our team will work with you to ensure that you have the right solution for your needs. We will provide detailed analysis, advice, and recommendations for your project. Our goal is to help you reduce costs, increase productivity, and maximize efficiency. We also offer ongoing support to ensure that your project is always running as it should.
                                        At Industrial Project Consultation Services, we stand behind our services with a guarantee of excellence. We are confident that you will be satisfied with the results of your project. */}
                                        {/* At Industrial Automation Consultants, we provide world-class industrial project consultation services with guaranteed excellence. Our team of experienced professionals is trained in the latest industrial automation technology and has extensive experience in managing complex projects across multiple industries. We have a proven track record of successful project delivery, with a focus on quality, safety and cost-efficiency. Our specialists use the latest tools and techniques to ensure that every project is completed on time and to the highest standards. We also offer comprehensive training for our clients so that they can stay up to date with the latest advancements in industrial automation. Our team is committed to delivering exceptional results each and every time. We guarantee excellence and customer satisfaction, no matter the size or complexity of the project. Contact us today to learn more about how we can help you achieve the best results for your next industrial automation project. */}
                                    </Feature>
                                </SimpleGrid>
                            </Box>
                            {/* <Text py={12} color={'gray.700'}>
                                Outsourcing reduces costs by helping you avoid the industry&apos;s most common problems and
                                freeing your time to focus on big picture strategies.
                                Improve your consistency and reliability, allow faster delivery and infrastructure changes. */}
                            {/* Not having talent in-house or maybe even in the same country presents challenges, We believe that great communication is key to mitigating risk. */}
                            <Heading fontWeight={'semibold'} color={'gray.800'} pt={12} pb={2} size={'md'}>
                                How Outsourcing Can Help You Avoid Common Industry Problems and Focus on Big Picture Strategies
                            </Heading>
                            <Text pb={10} color={'gray.700'}>
                                Outsourcing is a strategy that many businesses use to help cut costs, drive efficiency and unlock new streams of revenue. It also enables you to focus on the big picture of your business while someone else handles the day-to-day operations. But with so many different types of outsourcing options available, it can be difficult to know which one is right for your company. To help you figure it out, we&#39;ve listed some common problems that companies in the industry sector have and how outsourcing those tasks can relieve some of that stress.
                            </Text>
                            {/* </Text>
                            <Heading fontWeight={'semibold'} color={'gray.800'} pb={2} size={'md'}>
                                How Outsourcing Can Help You Avoid Common Industry Problems and Focus on Big Picture Strategies
                            </Heading>
                            <Text pb={10} color={'gray.700'}>
                                Outsourcing is a strategy that many businesses use to help cut costs, drive efficiency and unlock new streams of revenue. It also enables you to focus on the big picture of your business while someone else handles the day-to-day operations. But with so many different types of outsourcing options available, it can be difficult to know which one is right for your company. To help you figure it out, we&#39;ve listed some common problems that companies in the industry sector have and how outsourcing those tasks can relieve some of that stress.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Common Industry Problems and the Outsourcing Solutions
                            </Heading>
                            <Text pb={4} color={'gray.700'}>
                                There are many issues that industries face over time that can make it difficult to grow and scale. These range from talent gaps to poor project management practices. Here&#39;s a look at the most common issues and how they can be addressed through outsourcing. The skills gap
                            </Text>
                            <UnorderedList pb={12} spacing={2}>
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
                            <Text pb={12} color={'gray.700'}>
                                Many industries have skill sets they don&#39;t have the capacity to hire for in-house. Outsourcing those functions allows you to bring in the expertise you need without having to hire someone to do it full-time or on-site. When deciding which tasks to outsource, it&#39;s important to remember that outsourcing expertise is different than outsourcing tasks. Hiring an outside team to do the work for you, whether it&#39;s data entry or compliance testing, can help you get work done more efficiently and for a lower cost than hiring someone full-time. One of the first questions to ask yourself is whether you need to outsource the tasks at all. There may be some tasks you can do in-house or automate and others that are more strategic and should be left to experts.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Increase Productivity with Automation
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                Automation isn&#39;t just for manufacturing companies. In fact, the B2B services industry is one that is seeing automation become more popular. An example is using artificial intelligence to help manage customer service calls. With AI, you can route calls to the right person or team without having to hire more people or stay on the phone. As AI and other automation technologies become more prevalent, they also become easier and cheaper to implement. There&#39;s no need for industries to wait for the perfect moment to automate. Small and incremental changes can add up to big benefits. For example, if your team handles a lot of data and information, adopting a data management system like a CRM or HRIS can help automate processes and make it easier for people to find information they need.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Shifting to a New Technology
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                New technologies are emerging in nearly every industry. In healthcare, while many providers are still using paper records and fax machines, many are shifting to new technologies. If you&#39;re trying to modernize your operations, but don&#39;t have the capacity to make the shift, outsourcing can provide a path to that technology. Outsourcing can help you make the shift to newer technologies by providing managed services, such as cloud computing or applications hosted on remote servers. It can also bring in experts who can help you make the shift to new technologies, such as AI and machine learning technologies.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Create a Culture of Continual Improvement
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                Every company wants to be a learning organization that is constantly bettering itself and finding ways to improve. But for some industries, it&#39;s easier said than done because of the nature of their work. In the healthcare industry, for example, providers are always learning from new research and laws. When your company wants to adopt a culture of continual improvement, but doesn&#39;t have the capacity to do so internally, it&#39;s a sign that outsourcing may be the best option. When you outsource, you get access to a team that is focused on continual improvement and can help the rest of your team adopt those same practices.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Leverage Your Most Valued Assets
                            </Heading>
                            <Text pb={12} color={'gray.700'}>
                                There are some types of work that new or less experienced employees can do better than more seasoned employees. But they may not have the confidence or experience to do them. In these scenarios, you can use outsourcing to give employees work that taps into their strengths while also giving them opportunities to grow. For example, you can use outsourcing to give employees projects that help them develop new skills or gain new industry experience. There&#39;s no one-size-fits-all solution for every industry. Before deciding on an outsourcing approach, it&#39;s important to assess your company and its needs. There are many benefits to outsourcing, like having more time to focus on your core business, reducing costs and having access to new technologies and expertise. But it&#39;s important to remember that outsourcing is an investment that takes time to pay off. Before you make the decision to outsource, it&#39;s important to carefully evaluate your options and use that experience to make the best decision for your company.
                            </Text>
                            <Heading fontWeight={'semibold'} pb={2} color={'gray.800'} size={'md'}>
                                Conclusion
                            </Heading>
                            <Text color={'gray.700'}>
                                Every industry is different, and every company is different, too. It&#39;s important to carefully consider the needs of your company before choosing whether or not to outsource. Outsourcing can bring a lot of benefits to companies, including access to new technologies, the ability to focus on core business, and access to expert help.
                            </Text> */}
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default Index;