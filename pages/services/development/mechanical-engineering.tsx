import Head from 'next/head'
import { DevTerms, CTA } from '../../../components/dev';
import MEimg from '../../../public/img/development/MechanicalEngineering.png'
import medat from '../../../assets/services/development/me.json'
import { useRouter } from "next/router"

const MechanicalEngineering = () => {
    const { locale } = useRouter()
    return (
        <>
            {medat.data.filter(p => p.locale === locale).map((MEData) => {
                return (
                    <>
                        <Head><title>{MEData.head.title}</title><meta name="description" content={MEData.head.description} /></Head>
                        <CTA
                            src={MEimg.src}
                            toptext={MEData.cta.toptext}
                            heading={MEData.cta.heading}
                            text={MEData.cta.text}
                            buttontxt={MEData.cta.buttontxt}
                        />
                        <DevTerms />
                    </>)
            })
            }
        </>
    );
};
export default MechanicalEngineering;