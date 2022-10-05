import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Document() {
    return (
        <Html onScroll={() => console.log("d")}>
            <Head>
                <link key="preconnect" rel="preconnect" href="https://fonts.googleapis.com" />
                <link key="crossorigin" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;0,700;1,500&family=Silkscreen&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" sizes="16x16" href={`.${asset_prefix}/favicon.ico`}></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
