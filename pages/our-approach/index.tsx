import { NextSeo } from "next-seo";

const Index = () => {
    return (
        <>
            <NextSeo
                title=' Services | Development Services, Digital Transformation, Project Consultation.'
                description='We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                canonical="https://ochoa.pro/our-approach"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/our-approach',
                    },
                    {
                        hrefLang: 'en',
                        href: 'https://ochoa.pro/en/our-approach',
                    }
                ]}
            />
            our-approach - Page under construction
        </>
    );
}

export default Index;