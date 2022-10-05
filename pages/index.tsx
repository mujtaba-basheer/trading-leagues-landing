import Head from "next/head";

import Swiper from "../components/Swiper";
import InfoSection from "../components/InfoSection";
import Mockups from "../components/Mockups";
import Invite from "../components/Invite";
import Footer from "../components/Footer";

const Layout = () => <main>
    <Head>
        <title>Trading Leagues</title>
    </Head>

    <Swiper />
    <InfoSection />
    <Mockups />
    <Invite />
    <Footer />
</main>;

export default Layout;