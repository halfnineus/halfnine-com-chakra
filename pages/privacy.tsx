import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Privacy = () => {
    return (
        <>
            <NextSeo
                title={"Privacy Policies - Automating all Things | Zedir"}
                description={"Read more about our privacy practices, policies how we implement them and why."}
                canonical="https://www.zedir.com/privacy"
                // languageAlternates={[
                //     {
                //         hrefLang: 'es',
                //         href: 'https://www.zedir.com/es/privacy',
                //     }
                // ]}
            />
            <Box px={8} py={6}>
                What Information Do We Collect on this Website?
                <br /><br />Personal Information.
                <br />“Personal Information” is information that identifies you as an individual or relates to an identifiable individual. On our website, we currently allow you to submit to us your name, company name, phone number and email address.
                <br /><br />Other Information.
                <br />“Other Information” is any information that does not reveal your specific identity or does not directly relate to an identifiable individual. This might include, for instance, browser and device information collected through cookies, pixel tags, and other technologies or aggregated information. We use this information to facilitate the operation of our website and for other purposes described below.


                <br /><br /><br />How Does Zedir Use Personal Information?

                <br />We may use Personal Information:

                <br /><br />To respond to your inquiries and fulfill your requests.
                <br />To communicate with you and provide you with related customer service.
                <br />To send you marketing communications, including via email in compliance with applicable laws, that we believe may be of interest to you.
                <br />To personalize your experience on the website by presenting products and offers tailored to you.

                <br /><br />Some of these activities have additional rules, which could contain additional information about how we use and disclose your Personal Information, so we suggest that you read these rules carefully.

                <br />For our business purposes, such as data analysis, audits, fraud monitoring and prevention, developing new products, enhancing, improving or modifying our website and services, identifying usage trends, determining the effectiveness of our promotional campaigns and operating and expanding our business activities.
                <br /><br />As we believe to be necessary or appropriate under applicable law, including laws outside your country of residence to comply with legal process, to respond to requests from public and government authorities including public and government authorities outside your country of residence, to enforce our terms and conditions, to protect our operations or those of any of our affiliates, to protect our rights, privacy, safety or property, and/or that of our affiliates, you or others and to allow us to pursue available remedies or limit the damages that we may sustain.

                <br /><br /><br />Zedir also uses Google Analytics and Hotjar for web analytics services.

                <br />Google Analytics uses cookies and similar technologies to analyze how users use the Domains. The information generated about Domain usage (including your shortened IP address) is transmitted to Google in the U.S. This information is used to evaluate visitors use of our website and provide other services related to the website and Internet use. Google may also collect information about our website&apos;s visitors use of other websites. For more information about Google Analytics, or to opt out of Google Analytics, please go to: https://tools.google.com/dlpage/gaoptout.
            </Box>
        </>
    );
}

export default Privacy;