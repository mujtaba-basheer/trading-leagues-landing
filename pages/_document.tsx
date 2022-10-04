import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html onScroll={() => console.log("d")}>
            <Head>
                <link key="preconnect" rel="preconnect" href="https://fonts.googleapis.com" />
                <link key="crossorigin" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
