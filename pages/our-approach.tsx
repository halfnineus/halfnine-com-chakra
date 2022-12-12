import { Box, Text, Heading, SimpleGrid, Image, Divider, Center, Img, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Values } from "../components";

// #url
{/* https://duckduckgo.com/?q=%22redefining+agile%22&ia=web */ }
{/* https://duckduckgo.com/?q=Agile+Automation&ia=places */ }
{/* https://learn.microsoft.com/en-us/devops/plan/what-is-agile-development */ }

{/* <Text>
    smd on: Agile Software Development<br />
    Industrial Automation<br />
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
                title='How we do Things - Automating all Things | Zedir'
                description='Find our agile development strategies and ways to find solutions that focus on advancing innovation and driving powerful outcomes.'
                canonical="https://www.zedir.com/our-approach"
            // languageAlternates={[
            //     {
            //         hrefLang: 'es',
            //         href: 'https://www.zedir.com/es/our-approach',
            //     }
            // ]}
            />
            <Box maxW={'container.xl'} px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                {/* <Heading>Redefining Agile</Heading> */}
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
                    imgsrc="/img/our-approach/redefining-agile.jpg"
                    ordera="initial"
                />
                <Divider my={12} />
                <Feature
                    heading="Quality Assurance"
                    text="The Quality assurance methods we apply are essential for ensuring safety and reliability innovation with the emergence of complex connected devices. The purpose of this process should automate regular testing, as well as security audits to identify any potential risks.  By working together to find big solutions, organizations can develop solutions to meet their safety, reliability, and security needs."
                    imgsrc="/img/our-approach/costumer-satisfaction.jpg"
                    ordera="2"
                />
                <Divider my={12} />
                <Feature
                    heading="Risk Control"
                    text="By introducing controls such as robust authentication, access control, and data privacy protocols, businesses can ensure their investments are secure. Additionally, they can use data analytics to monitor usage and detect anomalies in activity. This can provide an early warning system and act as a deterrent against malicious actors. By investing in these security measures, companies can protect their investments, maintain a competitive edge, and remain in compliance with relevant regulations."
                    imgsrc="/img/our-approach/risk-control.jpg"
                    ordera="initial"
                />
                <Divider my={12} />
                <Feature
                    heading={`ROI (Return on Investment)`}
                    text="Businesses can improve their productivity and efficiency, allowing them to beat out their competitors and maximize returns on investment. Data-driven insights can help companies make better decisions, and identify areas of improvement. So whether your goal is to increase efficiency, reduce costs, or stay ahead of the competition, investing in industrial IoT and control systems can give you the edge you need."
                    imgsrc="/img/our-approach/return-on-investment.jpg"
                    ordera="2"
                />
                <Divider my={12} />
                <Feature
                    heading={`CaaS (Consulting as a Service)`}
                    text="This type of consulting helps businesses make educated and informed decisions when investing in Industrial IoT and Control Systems. By leveraging the expertise of experienced professionals, businesses can save time and money by making the right investments in the right areas. The service is designed to provide comprehensive analysis and advice on the best solutions for the business, taking into account the current and future needs of the organization."
                    imgsrc="/img/our-approach/consulting.jpg"
                    ordera="initial"
                />
                {/* <Divider my={12} />
                <Values /> */}
            </Box>

            <Box py={'3rem'} />

        </>
    );
}

export default Index;