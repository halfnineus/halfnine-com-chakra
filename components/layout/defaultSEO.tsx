import { DefaultSeo } from "next-seo"

const DefaultSEO = () => {
    return (
        <DefaultSeo
            defaultTitle="HalfNine - Information Technology Development Company"
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
                title: 'HalfNine - Information Technology Development Company',
                description: 'Our team provides reliable, scalable and secure software solutions for any Operating System, browser and device. Contact us for custom IT solutions that perfectly fit your needs.',
                images: [
                    {
                        url: 'https://www.halfnine.com/metatag.jpg',
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
