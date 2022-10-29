import { NextSeo } from "next-seo";

const Consultation = () => {
    return (
        <>
            <NextSeo
                title=' Services | Development Services, Digital Transformation, Project Consultation.'
                description='We assemble and lead teams with the skills and tools needed for building the products and tools that power your business.'
                canonical="https://ochoa.pro/services/consultation"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/services/consultation',
                    },
                    {
                        hrefLang: 'en',
                        href: 'https://ochoa.pro/en/services/consultation',
                    }
                ]}
            />
            consultation - Page under construction
        </>
    );
}

export default Consultation;