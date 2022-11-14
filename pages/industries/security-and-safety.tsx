import { Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Sns = () => {
    return (
        <>
            <NextSeo
                title='Security and Safety Industries  - Automating all Things | Ochoa'
                description='Create and implement solutions to automate safety chores and tasks and focus on products & services.'
                // description='Create and implement solutions to ease safety chores and tasks and focus on products & services.'
                canonical="https://ochoa.pro/industries/security-and-safety"
                languageAlternates={[
                    {
                        hrefLang: 'es',
                        href: 'https://ochoa.pro/es/industries/security-and-safety',
                    }
                ]}
            />
            <Heading>
                {`Security & Safety - Get ready to ensure things differently`}
            </Heading>
        </>
    );
}

export default Sns;