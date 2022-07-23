import Head from 'next/head'
import { DevTerms, CTA } from '../../../components/dev';
import EEimg from '../../../public/img/development/ElectronicEngineering.jpg'
import eedat from '../../../assets/services/development/ee.json'
import { useRouter } from "next/router"

const ElectronicEngineering = () => {
    const { locale } = useRouter()
    return (
        <>
            {eedat.data.filter(p => p.locale === locale).map((EEData) => {
                return (
                    <>
                        <Head><title>{EEData.head.title}</title><meta name="description" content={EEData.head.description} /></Head>
            
                        <CTA
                            src={EEimg.src}
                            toptext={EEData.cta.toptext}
                            heading={EEData.cta.heading}
                            text={EEData.cta.text}
                            buttontxt={EEData.cta.buttontxt}
                        />
                        <DevTerms />
                    </>)
            })
            }
        </>
    );
};
export default ElectronicEngineering;