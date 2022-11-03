import { Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Agile = () => {
    return (
        <>
            <NextSeo
                title='!!changeme  - Automating all Things | Ochoa'
                description='!!changeme We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                canonical="https://ochoa.pro/our-approach/agile"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/our-approach/agile',
                    }
                ]}
            />
            <Text p={8} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                {"Agile - Page Is Still Under construction..."}
            </Text>
            {/* <Text>
                Based on: Agile Software Development<br />
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
        </>
    );
}

export default Agile;