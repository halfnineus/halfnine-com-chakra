import { Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Mne = () => {
    return (
        <>
            <NextSeo
                title='!!changeme  - Automating all Things | Ochoa'
                description='!!changeme We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                canonical="https://ochoa.pro/industries/mne"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/industries/mne',
                    }
                ]}
            />
            <Text p={8} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" userSelect={'none'}>
                {"Media & Entertainment - Page Is Still Under construction..."}
            </Text>
        </>
    );
}

export default Mne;