import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Document() {
    return (
        <Html onScroll={() => console.log("d")}>
            <Head>
                <Script strategy="beforeInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-B840N99HCC"
                ></Script>
                <Script strategy="beforeInteractive">
                    {`if (!window.location.host.startsWith("www")){
                        window.location = window.location.protocol + "//" + "www." + window.location.host + window.location.pathname;
                    }`}
                </Script>
                <Script strategy="beforeInteractive">
                    {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-B840N99HCC');`}
                </Script>
                <link
                    key="preconnect"
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    key="crossorigin"
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;0,700;1,500&family=Silkscreen&display=swap"
                    rel="stylesheet"
                />
                <link href={`.${asset_prefix}/styles/global.css`} rel="stylesheet" />
                <link
                    rel="icon"
                    type="image/x-icon"
                    sizes="16x16"
                    href={`.${asset_prefix}/favicon.ico`}
                />
                <style>
                    {`
            body {
                background-color: #191b2b;
            }

            .hero-section {
                background-color: #191b2b;
                height: 100vh;
                overflow: hidden;
            }

            .banner {
                background-color: #171728;
                text-align: center;
                padding: 0.75em 0;
                z-index: 5;
                position: relative;
            }

            .banner span {
                display: inline-block;
                font-size: 1.25rem;
                font-weight: 400;
                font-family: "Silkscreen", cursive;
                color: #171728;
                min-width: max-content !important;
            }

            .banner div.form-content {
                height: 26px;
                width: 100%;
                max-width: 100vw;
                overflow-x: hidden;
                position: relative;
                display: none;
            }

            .banner div.form-content div.scroll {
                display: flex;
                gap: 3em;
                position: absolute;
                left: 0;
                top: 0;
                width: max-content;
            }

            .banner div.form-content div.scroll:not(:first-child) {
                left: calc(1434px + 3em);
            }

            @media screen and (max-width: 428px) {
                .banner {
                    position: relative;
                    right: auto;
                    left: auto;
                }

                .banner span {
                    font-size: 0.875rem;
                }

                .banner div.form-content div.scroll:not(:first-child) {
                    left: calc(1047px + 3em);
                }
            }

            .hero-container {
                padding: 4em 0;
                background: rgba(5, 8, 26, 0.85);
                background-size: cover;
            }

            .hero-top {
                width: 90vw;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2.5em;
            }

            .hero-top img {
                display: inline-block;
                height: 40px;
                width: auto;
            }

            @media screen and (max-width: 428px) {
                .hero-top img {
                    height: 25px;
                }
            }

            .refer-link {
                display: inline-block;
                color: #00df8d;
                font-size: 1rem;
                font-weight: 600;
                text-transform: uppercase;
                border: 2px solid;
                border-color: #00df8d;
                padding: 0.5em 1em;
                border-radius: 20px;
                text-decoration: none;
                outline: none;
                z-index: 2;
            }

            @media screen and (max-width: 428px) {
                .refer-link {
                    font-size: 0.875rem;
                    border: 1px solid;
                }
            }

            .hero-main {
                height: calc(100vh - 90px - 2.5em);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2em;
            }

            .hero-main h1 {
                font-size: 4rem;
                font-weight: 700;
                color: #ffffff;
                min-height: 76.66px;
                display: flex;
                align-items: center;
                justify-content: center;
                perspective: 3000px;
            }

            .hero-main h1 div.anim-container {
                display: inline-block;
                height: min-content;
                overflow-y: hidden;
                transform-style: preserve-3d;
                width: 185px;
                height: 76.67px;
                position: relative;
            }

            .hero-main h1 div.anim-container div.movable {
                width: 100%;
                height: 200%;
            }

            .hero-main h1 div.anim-container div.movable span {
                display: block;
                height: 50%;
                top: 0;
                right: 0;
                color: #00df8d;
                font-size: inherit;
            }

            .hero-main p.desc {
                font-size: 1.5rem;
                font-weight: 400;
                color: #ffffff;
                line-height: 33.6px;
                width: 650px;
                text-align: center;
            }

            @media screen and (max-width: 428px) {
                .hero-main {
                    height: calc(100vh - 74px - 8.5em);
                    width: 90vw;
                    margin: 0 auto;
                    gap: 10vh;
                }

                .hero-main h1 {
                    position: relative;
                    right: auto;
                    left: auto;
                    font-size: 2.5rem;
                    min-height: 57.33px;
                    gap: 0.5em;
                }

                .hero-main h1 div.anim-container {
                    height: 57.33px;
                    width: auto;
                }

                .hero-main p {
                    font-size: 1rem;
                    line-height: 22.4px;
                    width: auto;
                }
            }

            .hero-form {
            }

            .hero-form div.form-content {
                height: 40px;
                position: relative;
                display: flex;
                align-items: stretch;
            }

            .hero-form div.form-content div.input {
                background-color: #ffffff;
                border-radius: 20px 0 0 20px;
                padding-left: 1em;
                height: 100%;
                position: relative;
                display: flex;
                align-items: center;
            }

            .hero-form div.form-content div.input span {
                font-size: 0.875rem;
            }

            .hero-form div.form-content div.input span.input {
                margin-left: 0.5em;
            }

            .hero-form div.form-content input {
                display: inline-block;
                height: 100%;
                border: none;
                padding: 0 1.5em;
                outline: none;
            }

            .hero-form div.form-content input.text {
                background-color: #ffffff;
                outline: none;
                font-size: 1rem;
                padding: 0;
            }

            .hero-form div.form-content input.text::placeholder {
                color: #9ea0aa;
            }

            .hero-form div.form-content input.submit {
                font-size: 1rem;
                border-radius: 20px;
                font-weight: 600;
                line-height: 16.8px;
                position: relative;
                left: -20px;
                background-color: #00df8d;
                text-transform: uppercase;
                color: #15182c;
                cursor: pointer;
                right: 0;
            }

            .hero-form div.form-content span.loader {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                padding: 0 1.5em;
                border-radius: 20px;
                left: -20px;
                background-color: #00df8d;
                width: 188.55px;
                right: 0;
                bottom: 0;
                padding: 5px 0;
            }

            .hero-form p {
                margin-top: 1.25em;
                font-size: 1rem;
                font-weight: 400;
                color: #ffffff;
                text-align: center;
            }

            @media screen and (max-width: 428px) {
                .hero-form {
                    width: 100%;
                }

                .hero-form div.form-content div.input {
                    padding-left: 0.5em;
                    position: absolute;
                    height: 100%;
                    bottom: 0px;
                    right: 20px;
                    left: 0px;
                }

                .hero-form div.form-content div.input span {
                    font-size: 0.875rem;
                }

                .hero-form div.form-content div.input span.input {
                    margin-left: 0.5em;
                }

                .hero-form div.form-content input {
                    position: absolute;
                    bottom: 0;
                }

                .hero-form div.form-content input.text {
                    position: relative;
                    font-size: 0.875rem;
                    left: 0px;
                    width: 90%;
                }

                .hero-form div.form-content input.submit {
                    position: absolute;
                    font-size: 0.875rem;
                    left: auto;
                    padding: 0 1em;
                }

                .hero-form p {
                    font-size: 0.75rem;
                }
            }

            .hero-app-images {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1em;
                z-index: 5;
            }

            @media screen and (max-width: 428px) {
                .hero-app-images img {
                    display: inline-block;
                    height: 40px;
                    width: auto;
                }
            }
`}
                </style>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
