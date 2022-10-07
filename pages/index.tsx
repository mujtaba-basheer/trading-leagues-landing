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
    const [formContext, setFormContext] = useState<PopupProps>({ mobile: "", wailist_no: 0, open_modal: !false });

    return <main>
        <Head>
            <title>Trading Leagues</title>
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