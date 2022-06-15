import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <title>
                        {/* {title + ' - ochoa.pro' || 'ochoa.pro'} */}
                    </title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, height=device-height, width=device-width' />
                    {/* <meta name="description" content={`Informacion sobre el ${title}`} /> */}
                    {/* <meta name="keywords" content={`${title}`} /> */}
                </Head>

                <body style={{ minHeight: '100vh' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}