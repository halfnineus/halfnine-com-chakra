import Head from 'next/head'
import { DevTerms, CTA } from '../../../components/dev';
import PDimg from '../../../public/img/development/ProductDesign.png'
import pddat from '../../../assets/services/development/me.json'
import { useRouter } from "next/router"

const ProductDesign = () => {
    const { locale } = useRouter()
    return (
        <>
            {pddat.data.filter(p => p.locale === locale).map((PDData) => {
                return (
                    <>
                        <Head><title>{PDData.head.title}</title><meta name="description" content={PDData.head.description} /></Head>
                        <CTA
                            src={PDimg.src}
                            toptext={PDData.cta.toptext}
                            heading={PDData.cta.heading}
                            text={PDData.cta.text}
                            buttontxt={PDData.cta.buttontxt}
                        />
                        <DevTerms />
                    </>)
            })
            }
        </>
    );
};
export default ProductDesign;