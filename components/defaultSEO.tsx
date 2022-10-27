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
                // Stops working on build
                // robotsProps={{
                //     noarchive: true,
                //     noimageindex: true,
                // }}
                openGraph={{
                    type: 'website',
                    locale: 'en',
                    url: 'https://ochoa.pro/',
                    site_name: 'Ochoa',
                    title: 'Agile Automation Development & Consulting - Ochoa',
                    description: 'Improve your products and services with a digital transformation powered by Agile Automation.',
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
