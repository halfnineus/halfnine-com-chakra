import { DefaultSeo } from "next-seo"

const DefaultSEO = () => {
    return (
        <DefaultSeo
            defaultTitle="HalfNine - Tailored Automation Solutions for Efficient Industrial Processes"
            // Stops working on build
            robotsProps={{
                noarchive: true,
                noimageindex: true,
            }}
            openGraph={{
                type: 'website',
                locale: 'en',
                url: process.env.SITE_URL || 'https://www.halfnine.com/',
                site_name: 'HalfNine',
                title: 'HalfNine - Tailored Automation Solutions for Efficient Industrial Processes',
                description: 'Improve your products and services with the power of a digital transformation through Industrial Automation.',
                images: [
                    {
                        url: 'https://www.halfnine.com/perma/metatag.jpg',
                        width: 1200,
                        height: 628,
                        alt: 'OG Image Alt',
                        type: 'image/jpeg'
                    },
                ]
            }}
            twitter={{
                handle: '@halfninecom',
                site: '@halfninecom',
                cardType: 'summary_large_image',
            }}
        />
    );
}

export default DefaultSEO;
