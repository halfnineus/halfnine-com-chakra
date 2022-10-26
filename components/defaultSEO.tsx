import { DefaultSeo } from "next-seo";

const DefaultSEO = () => {
    return (
        <>
            <DefaultSeo
                canonical='https://ochoa.pro/'
                languageAlternates={[{
                    hrefLang: 'es',
                    href: 'https://ochoa.pro/es',
                }]}
                robotsProps={{
                    noarchive: true,
                    noimageindex: true,
                }}
                openGraph={{
                    type: 'website',
                    locale: 'en',
                    url: 'https://ochoa.pro/',
                    site_name: 'Ochoa',
                    title: 'International Product Development, Design, and Production - Ochoa',
                    description: 'Full-service product development with Ochoa, Providing services from software, hardware and mechanical engineering. And electronics manufacturing.',
                    images: [
                        {
                            url: 'https://ochoa.pro/perma/metatag.jpg',
                            width: 1200,
                            height: 628,
                            alt: 'OG Image Alt',
                            type: 'image/jpeg'
                        },
                    ]
                }}
            />
        </>
    );
}

export default DefaultSEO;
