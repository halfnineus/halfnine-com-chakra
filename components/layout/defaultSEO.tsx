import { DefaultSeo } from "next-seo";

const DefaultSEO = () => {
    return (
        <>
            <DefaultSeo
                defaultTitle="Agile Automation Development & Consulting | Ochoa"
                // Stops working on build
                robotsProps={{
                    noarchive: true,
                    noimageindex: true,
                }}
                openGraph={{
                    type: 'website',
                    locale: 'en',
                    url: 'https://ochoa.pro/',
                    site_name: 'Ochoa',
                    title: 'Ochoa - Automating all Things | Agile Automation Development & Consulting',
                    description: 'Find the right team for your Industrial IoT & Control Systems and turn your ideas into a reality.',
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
