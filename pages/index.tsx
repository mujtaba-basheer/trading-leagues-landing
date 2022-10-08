import { useState } from 'react';
import Head from "next/head";

import Hero from "../components/Hero";
import Swiper from "../components/Swiper";
import InfoSection from "../components/InfoSection";
import Mockups from "../components/Mockups";
import Invite from "../components/Invite";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import { PopupProps } from '../types';

const Layout = () => {
    const [formContext, setFormContext] = useState<PopupProps>({ mobile: "", wailist_no: 0, open_modal: false });

    return <main>
        <Head>
            <title>Trading Leagues</title>
            <meta
                name="title"
                content="Rain Platforms | The financial markets, reimagined"
            />
            <meta
                name="description"
                content="Rain Platforms builds technologies that help to remove barriers between people and the financial world."
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.rainplatforms.com/" />
            <meta
                property="og:title"
                content="Rain Platforms | The financial markets, reimagined"
            />
            <meta
                property="og:description"
                content="Rain Platforms builds technologies that help to remove barriers between people and the financial world."
            />
            <meta property="og:image" content="%PUBLIC_URL%/rain.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.rainplatforms.com/" />
            <meta
                property="twitter:title"
                content="Rain Platforms | The financial markets, reimagined"
            />
            <meta
                property="twitter:description"
                content="Rain Platforms builds technologies that help to remove barriers between people and the financial world."
            />
            <meta property="twitter:image" content="%PUBLIC_URL%/rain.png" />
        </Head>
        <Hero setFormContext={setFormContext} />
        <Swiper />
        <InfoSection />
        <Mockups />
        <Invite setFormContext={setFormContext} />
        <Footer setFormContext={setFormContext} />
        {formContext.open_modal && <Popup formContext={formContext} setFormContext={setFormContext} />}
    </main>;
};

export default Layout;