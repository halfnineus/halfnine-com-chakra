import { Box, Text, Heading, SimpleGrid, Image, Divider, Center, Img, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Values } from "../components";
import indexdat from '../assets/index.json'
import { useRouter } from "next/router";

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
    const { locale } = useRouter()
    return (
        <>
            {indexdat.data.filter(p => p.locale === locale).map((indexData, i) => {
                return (
                    <>
                        <NextSeo
                            title='How we do Things - Automating all Things | Zedir'
                            description='Find our agile development strategies and ways to find solutions that focus on advancing innovation and driving powerful outcomes.'
                            canonical="https://www.zedir.com/our-approach"
                            languageAlternates={[
                                {
                                    hrefLang: 'es',
                                    href: 'https://www.zedir.com/es/our-approach',
                                }
                            ]}
                        />
                        <Box maxW={'container.xl'} px={{ base: 4, sm: 4, md: 4, lg: 4, xl: 0 }} pt={4} mx="auto">
                        </Box>
                    </>
                )
            })}
        </>
    );
}

export default Index;