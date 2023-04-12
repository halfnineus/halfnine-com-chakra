import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head />
                <body style={{ minHeight: '100vh' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
} 