import { DefaultSeo } from "next-seo";

const DefaultSEO = () => {
    return (
        <>
            <DefaultSeo
                defaultTitle="Industrial Automation Development & Consulting | Zedir"
                // Stops working on build
                robotsProps={{
                    noarchive: true,
                    noimageindex: true,
                }}
                openGraph={{
                    type: 'website',
                    locale: 'en',
                    url: 'https://www.zedir.com/',
                    site_name: 'Zedir',
                    title: 'Zedir - Automating all Things | Industrial Automation Development & Consulting',
                    description: 'Find the right team for your Industrial IoT & Control Systems and turn your ideas into a reality.',
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
            />
        </>
    );
}

export default DefaultSEO;
