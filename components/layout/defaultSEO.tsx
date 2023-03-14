import { DefaultSeo } from "next-seo";

const DefaultSEO = () => {
    return (
        <>
            <DefaultSeo
                defaultTitle="Zedir - Tailored Automation Solutions for Efficient Industrial Processes"
                // Stops working on build
                robotsProps={{
                    noarchive: true,
                    noimageindex: true,
                }}
                openGraph={{
                    type: 'website',
                    locale: 'en',
                    url: process.env.SITE_URL || 'https://www.zedir.com/',
                    site_name: 'Zedir',
                    title: 'Zedir - Tailored Automation Solutions for Efficient Industrial Processes',
                    description: 'Improve your products and services with the power of a digital transformation through Industrial Automation.',
                    images: [
                        {
                            url: 'https://www.zedir.com/perma/metatag.jpg',
                            width: 1200,
                            height: 628,
                            alt: 'OG Image Alt',
                            type: 'image/jpeg'
                        },
                    ]
                }}
                twitter={{
                    handle: '@zedircom',
                    site: '@zedircom',
                    cardType: 'summary_large_image',
                }}
            />
        </>
    );
}

export default DefaultSEO;
