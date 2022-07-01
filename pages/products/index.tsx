import { NextPage } from 'next'
import Head from 'next/head'

interface Props {

}

const Index: NextPage<Props> = () => {
    return (
        <>
            <Head>
                <title>Product Showcase - ochoa.pro</title>
            </Head>
            <div>
                Product Showcase
            </div>
        </>
    )
}

export default Index



// import { Text } from '@chakra-ui/react'

// const Products = () => {
//     return (
//         <Text>
//             We count with a line of already designed products
//         </Text>
//     );
// }

// export default Products;