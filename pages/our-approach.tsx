import { Box, Text, Heading, SimpleGrid, Image, Divider, Center } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Values } from "../components";

// #url
{/* https://duckduckgo.com/?q=%22redefining+agile%22&ia=web */ }
{/* https://duckduckgo.com/?q=Agile+Automation&ia=places */ }
{/* https://learn.microsoft.com/en-us/devops/plan/what-is-agile-development */ }

{/* <Text>
    smd on: Agile Software Development<br />
    Agile Automation<br />
    Agile Architecture<br />
    Agile Application<br />
    Agile Business Intelligence<br />
    Agile Contracts<br />
    Agile Infrastructure<br />
    Agile Learning<br />
    Agile Leadership<br />
    Agile Modeling<br />
    Agile Management<br />
    Agile Marketing<br />
    Agile Manufacturing<br />
    Agile Project Management<br />
    Agile Retail<br />
    Agile Testing<br />
    Agile Tooling<br />
    Agile Usability Engineering<br />
    Agile Unified Process<br />
</Text> */}

{/* https://www.softwaretestinghelp.com/software-quality-assurance/ */ }

{/* https://roiinstitute.net/roi-methodology/ */ }



interface FeatureProps {
    heading: string;
    text: string;
    imgsrc: string;
    ordera: string;
}

const Feature = ({ heading, text, imgsrc, ordera }: FeatureProps) => {
    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2 }}
            spacingY={{ sm: 10, md: 32 }}
            spacingX={{ sm: 10, md: 24 }}
        >
            <Box order={{ sm: "initial", md: ordera }}>
                <Heading
                    mt={4}
                    mb={4}
                    as={'h2'}
                    fontWeight="bold"
                    textAlign={{ sm: "center", md: "left" }}
                    color={"gray.800"}
                >
                    {heading}
                </Heading>
                <Text
                    mb={5}
                    textAlign={{ sm: "center", md: "left" }}
                    color="gray.600"
                    fontSize={'lg'}
                >
                    {text}
                </Text>
            </Box>
            <Center>
                <Box
                    w="full"
                    overflow={'hidden'}
                    rounded={'2xl'}
                    border={'1px'}
                    borderColor={'gray.100'}
                >
                    <Image alt={imgsrc} userSelect={'none'} pointerEvents={'none'} width={'full'} src={imgsrc} />
                </Box>
            </Center>
        </SimpleGrid>
    );
};


const Index = () => {
    return (
        <>
            <NextSeo
                title='How we do Things - Automating all Things | Ochoa'
                description='Find our agile development strategies and ways to find solutions that focus on advancing innovation and driving powerful outcomes.'
                canonical="https://ochoa.pro/our-approach"
                // languageAlternates={[
                //     {
                //         hrefLang: 'es',
                //         href: 'https://ochoa.pro/es/our-approach',
                //     }
                // ]}
            />
            {/* <Box py={'1rem'} /> */}
            {/* <Container maxW={'container.xl'} px={{ sm: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={4}> */}
            <Box maxW={'container.xl'} px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                {/* <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ sm: '16', md: '8' }}> */}
                {/* <Stack my={2}> */}
                {/* <Heading>Redefining Agile</Heading> */}
                {/* Finding Big Solutions Together */}
                {/* <Text letterSpacing={'medium'} pt={2} color={'gray.800'} fontSize={'md'}>
                    Our combined agile development strategies and solutions are focused on advancing innovation and driving powerful outcomes.
                    Focusing on clients and companies making a return on investment by mitigating risk,
                    and developing products that help you focus on other big picture strategies.
                </Text> */}
                {/* </Stack> */}
                {/*
                    <Img
                        border={'1px'}
                        borderColor={mode('gray.400', 'gray.600')}
                        rounded="2xl"
                        objectFit="cover"
                        userSelect={'none'}
                        pointerEvents={'none'}
                        w="full"
                        h={{ sm: "64", md: "96", lg: "72", xl: "64" }}
                        src={'/img/index/our-approach.jpg'}
                        alt="Analytics Inspecting"
                    /> */}
                {/* </SimpleGrid> */}

                <Heading textAlign={{ sm: "center", md: "left" }} color={'black'}>
                    {`Finding big Solutions Together`}
                </Heading>
                <Text textAlign={{ sm: "center", md: "left" }} pt={2} color="gray.700" fontSize={'lg'}>
                    {`These methodologies are used and implemented in more than half of the Fortune 500 company's projects, as well as several government organizations throughout the United States and other countries internationally.`}
                </Text>

                <Divider my={12} />

                <Feature
                    heading="Redefining Agile"
                    text="Our Agile Development Strategies and Solutions are focused on providing the ability to switch priorities, support test applications, and advance industry innovation in order to drive significant outcomes. Allowing you to focus on other big picture strategies."
                    // #AI At our company, we focus on creating powerful outcomes through agile development strategies and solutions. This allows us to change priorities as needed, bring in support when necessary, and test applications to ensure they meet our high standards. By partnering with us, you can focus on advancing innovation in your industry while we handle the big picture strategies.
                    // Agile software and hardware development are rapidly redefining the way products are created. Agile development focuses on creating the highest quality products in the shortest amount of time, allowing for rapid iterations and continuous improvements. By utilizing an agile approach, companies are able to adapt to ever-changing customer needs and expectations. This in turn enables them to stay ahead of the competition and create innovative products that meet customer demands. The agile approach also helps speed up the entire process of product development, from ideation to launch. By breaking large projects into smaller, achievable tasks, teams can stay on task and work efficiently. This makes it easier to manage the development process and ensure the highest quality product. With agile software and hardware development, companies can quickly create and launch innovative products, keeping them in the lead of their respective industries.
                    // Agile development is quickly becoming the go-to method for software and hardware development. No longer do businesses have to wait months or even years to see the results of their development, as it has become possible to redefine and iterate quickly, testing and adapting as needed. By constantly testing and improving, businesses can ensure that their development efforts are as efficient and productive as possible, while also reducing the risk of failure. Agile development also gives businesses the ability to respond quickly to customer feedback and market changes, allowing them to stay ahead of the competition. It's an efficient way to develop software and hardware that allows businesses to remain competitive in an ever-changing landscape. Redefining Agile Development is revolutionizing the way that businesses develop products, giving them the ability to create high-quality products in a fraction of the time.
                    // Agile software and hardware development is quickly becoming the standard for many businesses. Agile development is based on the idea of iteration, with each iteration focusing on delivering a working product or feature. This allows for faster development, as well as faster feedback from the customer. It also enables businesses to respond quickly to any changes in the market or customer needs. Redefining agile development can help businesses reach their goals more quickly and efficiently. This can be done by integrating new technologies, such as machine learning and artificial intelligence, into the development process. Additionally, it can involve shifting focus to customer feedback, creating a more customer-centric development process. It can also mean embracing change and adopting a more flexible approach to development. By redefining agile software and hardware development, businesses can ensure their products and services stay ahead of the competition.
                    // #ORIGINAL Our combined Agile Development Strategies and Solutions are focused on driving powerful outcomes by providing the ability to change priorities, to bring support and test the applications. Helping you advance innovation in your industry and focus on other big picture strategies
                    // Our blended Agile Development Strategies and Solutions are designed to provide the capacity to alter priorities, provide support, and test applications, in order to drive strong results. We assist you in advancing innovation in your industry and concentrating on other major picture strategies.
                    // By providing the ability to change priorities, support, and test applications, our Agile Development Strategies and Solutions are focused on driving strong outcomes. We assist you in advancing innovation in your industry and focusing on other major objectives.
                    imgsrc="/img/our-approach/redefining-agile.jpg"
                    ordera="initial"
                />
                <Divider my={12} />
                <Feature
                    heading="Quality Assurance"
                    text="The Quality assurance methods we apply are essential for ensuring safety and reliability innovation with the emergence of complex connected devices. The purpose of this process should automate regular testing, as well as security audits to identify any potential risks.  By working together to find big solutions, organizations can develop solutions to meet their safety, reliability, and security needs."
                    // Quality assurance in industrial IoT and control systems is critical for ensuring safety and reliability in a wide range of industries. With the emergence of connected devices, the complexity of these systems has grown exponentially. To ensure that these systems are functioning correctly and securely, organizations need to have a robust quality assurance process in place. This process should include regular testing of the system, as well as security audits to identify any potential vulnerabilities. Quality assurance should also include collaboration between engineers, developers, and other stakeholders to ensure that the system is reliable and secure. By working together to find big solutions, organizations can ensure that their industrial IoT and control systems meet their safety, reliability, and security needs.
                    //    Quality assurance in industrial IoT and control systems is an important part of ensuring systems are reliable and secure. Quality assurance is the process of verifying and validating the system is meeting the requirements and specifications outlined for it. This involves testing, problem solving, and documentation. Quality assurance should be done from the onset of the system's development, ensuring that any potential issues are addressed and resolved before the system is released. Quality assurance also requires close collaboration between software engineers, control system engineers, and product designers. This is because the various components of the system must be tested together to ensure they all work properly and are secure. Finding big solutions together is the key to the success of quality assurance in industrial IoT and control systems. Working together, different teams can come up with solutions that would otherwise be out of reach. Quality assurance also ensures that systems are cost-effective and are compliant with industry standards. This saves companies money and ensures they can deliver products that are reliable and secure.
                    // Quality Assurance in Industrial IoT and Control Systems is essential to ensure that systems run reliably and securely. Quality assurance involves testing, measuring, and monitoring all components of the system to ensure they meet the required standards. Quality assurance also involves the use of robust processes and procedures to detect and address any issues before they become a problem. By finding big solutions together, businesses can ensure that their systems are running efficiently, securely, and reliably. Quality assurance also involves making sure that design standards are met and that systems are secure and protected from cyber threats. Quality assurance can also involve audits and tests to ensure that procedures are being followed and that the system is functioning correctly. Quality assurance is an important part of any industrial IoT and control system, as it helps to ensure that the system is running as intended and that any potential issues are identified and addressed quickly.
                    imgsrc="/img/our-approach/costumer-satisfaction.jpg"
                    ordera="2"
                />
                <Divider my={12} />
                <Feature
                    heading="Risk Control"
                    text="By introducing controls such as robust authentication, access control, and data privacy protocols, businesses can ensure their investments are secure. Additionally, they can use data analytics to monitor usage and detect anomalies in activity. This can provide an early warning system and act as a deterrent against malicious actors. By investing in these security measures, companies can protect their investments, maintain a competitive edge, and remain in compliance with relevant regulations."
                    // As businesses become increasingly reliant on Industrial IoT and Control Systems Investment, the need for risk control has never been greater. By introducing controls such as robust authentication, access control, and data privacy protocols, businesses can ensure their investments are secure. Additionally, they can use data analytics to monitor usage and detect anomalies in activity. This can provide an early warning system and act as a deterrent against malicious actors. By investing in these security measures, companies can protect their investments, maintain a competitive edge, and remain in compliance with relevant regulations. Furthermore, companies can take advantage of the ever-evolving technology to gain deeper insights into their operations, allowing them to make better decisions and stay ahead of the curve. With the right risk control measures in place, businesses can confidently embrace Industrial IoT and Control Systems Investment and reap the rewards.
                    // Industrial IoT and Control Systems Investment risk control is a major factor in the success or failure of an industrial IoT and control system project. With the potential for large costs, and the complexity of these projects, having a risk management plan in place is essential. By carefully evaluating the risks involved, and implementing strategies to mitigate those risks, organizations can ensure that their investments pay off. The first step in any risk management plan is to identify any potential risks. This can include anything from security threats to implementation and maintenance costs. Once these risks have been identified, risk mitigation strategies can be developed. These strategies can include budgeting for unexpected costs, implementing security measures to protect from threats, and even hiring a consultant to provide guidance. With the right risk management strategy in place, organizations can more confidently invest in Industrial IoT and Control Systems, knowing that their investments are protected.
                    // Investing in Industrial IoT and Control Systems can be a daunting prospect. With the right risk management plan, however, you can rest assured that your investments will pay off. There are a few key factors to consider when creating a risk management plan. First, you must determine the return on investment (ROI) you're looking for. This will help you to decide which systems are worth investing in and which may not be as beneficial. You should also consider the potential risks of each system, such as potential cyber security risks and system maintenance costs. Finally, review past investments and trends to gain a better understanding of the current market and the potential outcome of new investments. With a comprehensive risk management plan in place, you can confidently move forward with your investments. This is the key to unlocking the potential of Industrial IoT and Control Systems investments.
                    imgsrc="/img/our-approach/risk-control.jpg"
                    ordera="initial"
                />
                <Divider my={12} />
                <Feature
                    heading={`ROI (Return on Investment)`}
                    text="Businesses can improve their productivity and efficiency, allowing them to beat out their competitors and maximize returns on investment. Data-driven insights can help companies make better decisions, and identify areas of improvement. So whether your goal is to increase efficiency, reduce costs, or stay ahead of the competition, investing in industrial IoT and control systems can give you the edge you need."
                    // Investing in industrial IoT and control systems can be a great way to increase the return on investment for your business. By automating processes and leveraging data, you can maximize efficiency and gain valuable insights into customer behavior. This can give you a competitive edge over your rivals and help you stay ahead of the curve. With the right IoT and control systems, you can gain greater visibility into operations and get more out of every dollar you invest. This can help you save costs in the long run and increase the profitability of your business. Additionally, investing in industrial IoT and control systems can help you better manage risk and respond quickly to changing market conditions. By tracking data in real-time, you can make more informed decisions and take the necessary steps to ensure success. All this adds up to a higher return on investment and a better bottom line. So what are you waiting for? Invest in industrial IoT and control systems and start reaping the rewards today!
                    // Companies that invest in Industrial IoT and Control Systems can expect to receive a significant return on their investment. By incorporating new technologies, they can streamline operations, reduce costs, and improve efficiency. With the help of these systems, they can also stay ahead of the competition. By investing in IoT and control systems, companies can gain a competitive edge, as they will be able to quickly access and analyze data and make informed decisions. This will enable them to respond faster to market changes, adapt to customer needs, and develop innovative products and services. They can also build a strong customer base by providing personalized and convenient experiences. Additionally, companies can save on energy costs by using the latest energy efficiency technologies. With the help of Industrial IoT and Control Systems, companies can stay ahead of the competition, increase their revenue, and maximize their ROI.
                    // Investing in industrial IoT and control systems can be an invaluable asset for companies looking to gain a competitive edge. By investing in such systems, businesses can improve their productivity and efficiency, allowing them to beat out their competitors and maximize returns on investment. With industrial IoT and control systems, companies can monitor their equipment in real time and make adjustments to optimize performance. This can mean the difference between meeting customer demands quickly, or being bogged down in inefficient processes. In addition, data-driven insights can help companies make better decisions, and identify areas of improvement. By investing in IoT and control systems, businesses can reduce costs and increase revenues, leading to higher profits. So whether your goal is to increase efficiency, reduce costs, or stay ahead of the competition, investing in industrial IoT and control systems can give you the edge you need.
                    // Industrial Internet of Things (IIoT) and Control Systems Investment can bring a fantastic return on investment (ROI). With the right strategy, businesses are able to increase efficiency and reduce costs. By connecting physical devices, businesses can easily collect, monitor, and analyze data to improve their operations. This can be used to optimize processes and increase production. Additionally, IIoT and Control Systems Investment can be leveraged to improve safety and security, as well as streamline customer service. With the right technology and platforms, businesses can detect problems before they occur, saving time and money in the long run. Finally, IIoT and Control Systems Investment can be used to maximize energy efficiency and reduce energy costs. By monitoring energy usage and making adjustments, businesses can save on utility bills and lower their environmental impact. With the right investments, businesses can realize a great return on investment.
                    // Businesses looking to reap the rewards of Industrial IoT and Control Systems Investment strategies will be thrilled to learn about the impressive Return on Investment (ROI) that can be realized with this type of investment. By leveraging the advantages of Industrial IoT and Control Systems, businesses can reduce costs, increase efficiency, and achieve more accurate results. In addition, Industrial IoT and Control Systems Investment can also lead to an increase in customer satisfaction. With the help of Industrial IoT and Control Systems technology, businesses can monitor their products remotely and ensure that the right tasks are being performed correctly and quickly. As a result, this can lead to fewer customer complaints and happier customers overall. Companies can also benefit from the increased data accuracy that Industrial IoT and Control Systems Investment can provide. By leveraging this technology, businesses can gain access to real-time, accurate data about their products, processes, and operations, helping them make more informed decisions and improve their overall performance. All in all, businesses that invest in Industrial IoT and Control Systems Investment strategies are sure to see a high ROI in the long run.
                    // Industrial IoT and Control Systems Investment can offer a great return on investment for businesses. By investing in IoT and control systems, businesses can streamline processes, reduce costs, and maximize efficiency. For example, these systems can be used to monitor production lines, detect potential errors, and adjust machinery settings to keep processes running smoothly. In addition, they can be used to monitor environmental conditions and ensure that the workplace is safe. Other benefits include improved customer service and increased customer satisfaction. By collecting data from customers, businesses can better tailor their products and services to meet their needs. By investing in industrial IoT and control systems, businesses can reap many rewards, from increased profits to reduced overhead. The potential return on investment is immense, and it is well worth the effort to get started.
                    imgsrc="/img/our-approach/return-on-investment.jpg"
                    ordera="2"
                />
                <Divider my={12} />
                <Feature
                    heading={`CaaS (Consulting as a Service)`}
                    text="This type of consulting helps businesses make educated and informed decisions when investing in Industrial IoT and Control Systems. By leveraging the expertise of experienced professionals, businesses can save time and money by making the right investments in the right areas. The service is designed to provide comprehensive analysis and advice on the best solutions for the business, taking into account the current and future needs of the organization."
                    // Industrial IoT and Control Systems Investment Consulting as a Service is an exciting new trend in the world of industrial automation. This type of consulting helps businesses make educated and informed decisions when investing in Industrial IoT and Control Systems. By leveraging the expertise of experienced professionals, businesses can save time and money by making the right investments in the right areas. The service is designed to provide comprehensive analysis and advice on the best solutions for the business, taking into account the current and future needs of the organization. This helps businesses make strategic decisions that can improve operational efficiency and increase profitability. With the right Industrial IoT and Control Systems Investment Consulting Service, businesses can maximize the potential of their industrial automation investments.
                    // Industrial IoT and Control Systems Investment Consulting as a Service can help companies make informed decisions about their investments in these technologies. As IoT and control systems become increasingly connected and intelligent, it’s essential for companies to continually evaluate their investments and make sure they’re getting the most out of their investments. With the help of an expert consultant, companies can get up-to-date information about the latest trends, technologies, and strategies to ensure they’re making the best decisions. The consultant can also provide guidance and advice on the best ways to invest in these technologies, and help companies optimize their investments for maximum return. Companies can also use the consultant’s expertise to help evaluate opportunities for partnership and collaboration with other organizations. An Investment Consulting as a Service can provide the knowledge, insight, and resources necessary to ensure that companies are making the right decisions when it comes to their investments in Industrial IoT and Control Systems.
                    // Industrial IoT and Control Systems Investment Consulting as a Service is changing the way businesses invest in their operations. This service provides clients with access to experts in the field of industrial IoT and control systems, who can guide them in making the right investments for their projects. With this service, clients can get a customized analysis of their needs, along with tailored advice on the most cost-effective, up-to-date solutions. This can help businesses save time and money while ensuring they have the best technology to meet their operational needs. What's more, they can access the latest industry trends and developments, allowing them to stay ahead of the competition. Investing in the right technology is essential in today's digital world, and this service makes that process easier than ever. With the right advice and guidance, businesses can take their operations to the next level.
                    imgsrc="/img/our-approach/consulting.jpg"
                    ordera="initial"
                />
                <Divider my={12} />
                <Values />
                {/* 
                <Divider my={12} />

                <SimpleGrid
                    columns={{ sm: 1, md: 2 }}
                    spacingY={{ sm: 10, md: 32 }}
                    spacingX={{ sm: 10, md: 24 }}
                >
                    <Box>
                        <Heading
                            mt={4}
                            mb={4}
                            as={'h2'}
                            fontWeight="bold"
                            textAlign={{ sm: "center", md: "left" }}
                        >
                            {`DTaaS (Digital Transformation as a Service)`}
                        </Heading>
                        <Text
                            letterSpacing={1}
                            mb={5}
                            textAlign={{ sm: "center", md: "left" }}
                            color="gray.600"
                            fontSize={{ md: "lg" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue. Sit amet porttitor eget dolor morbi non arcu risus quis. Laoreet sit amet cursus sit amet.                         </Text>
                    </Box>
                    <Center>
                        <Box
                            w="full"
                            overflow={'hidden'}
                            rounded={'2xl'}
                            border={'1px'}
                            borderColor={'gray.100'}
                        >
                            <Image alt={"digital-transformation"} userSelect={'none'} pointerEvents={'none'} width={'full'} src={'/img/our-approach/digital-transformation.jpg'} />
                        </Box>
                    </Center>
                </SimpleGrid> */}
            </Box>

            <Box py={'3rem'} />

        </>
    );
}

export default Index;