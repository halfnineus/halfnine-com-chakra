import { Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Roi = () => {
    return (
        <>
            <NextSeo
                title='!!changeme  - Automating all Things | Ochoa'
                description='!!changeme We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                canonical="https://ochoa.pro/our-approach/roi"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/our-approach/roi',
                    }
                ]}
            />
            <Text p={8} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                {"ROI - Page Is Still Under construction..."}
            </Text>
        </>
    );
}

export default Roi;