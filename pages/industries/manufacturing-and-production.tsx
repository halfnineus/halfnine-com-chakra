import { Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Mnp = () => {
    return (
        <>
            <NextSeo
                title='Manufacturing and Production Industries - Automating all Things | Ochoa'
                description='Increase your productivity, quality, efficiency, and profit by automating repetitive tasks.'
                canonical="https://ochoa.pro/industries/manufacturing-and-production"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/industries/manufacturing-and-production',
                    }
                ]}
            />
            <Heading>
                {`Manufacturing & Production - Get ready to create things differently`}
            </Heading>

        </>
    );
}

export default Mnp;