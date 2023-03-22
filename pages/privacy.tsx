import { Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import Link from "next/link";

const Privacy = () => {
    return (
        <>
            <NextSeo
                title={"Privacy Policies - Automating all Things | HalfNine"}
                description={"Read more about our privacy practices and policies and how we implement them to ensure the protection of your personal data."}
                canonical="https://www.halfnine.com/privacy"
                // languageAlternates={[
                //     {
                //         hrefLang: 'es',
                //         href: 'https://www.halfnine.com/es/privacy',
                //     }
                // ]}
                openGraph={{
                    url: `https://www.halfnine.com/privacy`,
                    title: "Privacy Policies - Automating all Things | HalfNine",
                    description: "Read more about our privacy practices and policies and how we implement them to ensure the protection of your personal data."
                }}
            />
            <Box maxW={'container.md'} px={{ base: '4', sm: '4', md: '4', lg: '4', xl: 0 }} mx="auto" pt={4} pb={16}>
                <Heading as="h1" size="lg">Privacy Policy</Heading>
                <Text mt={4}>
                    We take your privacy seriously and have implemented measures to ensure that we collect, use,
                    and store your information in a lawful and transparent manner. This privacy policy outlines
                    what information we collect, how we use it, and the choices you have regarding the collection
                    and use of your information.
                </Text>
                <Heading as="h2" size="md" mt={4}>What Information Do We Collect?</Heading>
                <Heading as="h3" size="sm" mt={4}>a. Personal Information:</Heading>
                <Text mt={2}>
                    We collect your name, company name, phone number, and email address when you voluntarily
                    submit them to us on our website. This information identifies you as an individual or relates
                    to an identifiable individual.
                </Text>
                <Heading as="h3" size="sm" mt={4}>b. Other Information:</Heading>
                <Text mt={2}>
                    We collect browser and device information through cookies, pixel tags, and other technologies.
                    This information does not reveal your specific identity or directly relate to an identifiable
                    individual. We use this information to facilitate the operation of our website and for other
                    purposes described below.
                </Text>
                <Heading as="h2" size="md" mt={4} mb={2}>How Do We Use Your Personal Information?</Heading>
                <OrderedList spacing={2}>
                    <ListItem>Responding to your inquiries and fulfilling your requests.</ListItem>
                    <ListItem>Communicating with you and providing you with related customer service.</ListItem>
                    <ListItem>Sending you marketing communications that we believe may be of interest to you.</ListItem>
                    <ListItem>Personalizing your experience on the website by presenting products and offers tailored to you.</ListItem>
                    <ListItem>For our business purposes, such as data analysis, audits, fraud monitoring and prevention,
                        developing new products, enhancing, improving or modifying our website and services,
                        identifying usage trends, determining the effectiveness of our promotional campaigns and
                        operating and expanding our business activities.</ListItem>
                    <ListItem>As we believe to be necessary or appropriate under applicable law, including laws outside
                        your country of residence to comply with legal process, to respond to requests from public
                        and government authorities including public and government authorities outside your country
                        of residence, to enforce our terms and conditions, to protect our operations or those of any
                        of our affiliates, to protect our rights, privacy, safety or property,
                        and/or that of our affiliates,
                        you or others and to allow us to pursue available remedies or limit the damages that we may sustain.</ListItem>
                </OrderedList>
                <Heading as="h2" size="md" mt={4} mb={2}>How Do We Use Other Information?</Heading>
                <Text display={'inline'}>
                    {`We use Other Information to facilitate the operation of our website and for other purposes described above.
                    We may also use Google Analytics and Hotjar for web analytics services,
                    which use cookies and similar technologies to analyze how users use the website.
                    Google Analytics transmits information generated about website usage (including your shortened IP address)
                    to Google in the U.S., which is used to evaluate visitor usage of our website
                    and provide other services related to website and internet use.
                    Google may also collect information about our website&apos;s visitors&apos; use of other websites.
                    For more information about Google Analytics,
                    or to opt-out of Google Analytics,
                    please go to: `}
                </Text>
                <Link href={"https://tools.google.com/dlpage/gaoptout"} target="_blank"><Text display={'inline'} _hover={{ color: 'blue.400' }}>https://tools.google.com/dlpage/gaoptout.</Text></Link>
                <Heading as="h2" size="md" mt={4}>How Do We Protect Your Information?</Heading>
                <Text mt={2}>
                    We have implemented appropriate technical and organizational measures to protect your information
                    against accidental or unlawful destruction, loss, alteration,
                    unauthorized disclosure or access.
                </Text>
                <Heading as="h2" size="md" mt={4}>Your Choices and Rights</Heading>
                <Text mt={2}>a. You have the right to request access to,
                    correction, or deletion of your Personal Information that we hold about you.
                </Text>
                <Text mt={2}>
                    b. You may opt-out of receiving marketing communications from us by following the unsubscribe
                    instructions included in our emails or by contacting us directly.
                </Text>
                <Text mt={2}>
                    c. You may disable cookies or adjust your cookie settings in your browser to prevent us from
                    collecting your Other Information. However, this may affect the functionality of our website.
                </Text>
                <Heading as="h2" size="md" mt={4}>Changes to This Privacy Policy</Heading>
                <Text mt={2}>
                    We may update this privacy policy from time to time. Any changes will be posted on our website with an updated effective date.
                </Text>
                <Heading as="h2" size="md" mt={4} mb={2}>Contact Us</Heading>
                <Text display={'inline'}>
                    {`If you have any questions or concerns about our privacy practices or this privacy policy, please `}
                </Text>
                <Link href={"/contact"}><Text display={'inline'} _hover={{ color: 'blue.400' }}>contact us</Text></Link>.
            </Box>
        </>
    );
}

export default Privacy;