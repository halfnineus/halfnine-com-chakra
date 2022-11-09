import { Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Qualityassurance = () => {
    return (
        <>
            <NextSeo
                title='!!changeme  - Automating all Things | Ochoa'
                description='!!changeme We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                canonical="https://ochoa.pro/our-approach/quality-assurance"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/our-approach/quality-assurance',
                    }
                ]}
            />
            <Text p={8} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                {"Quality Assurance - Page Is Still Under construction..."}
            </Text>
        </>
    );
}

export default Qualityassurance;