import Head from "next/head";

import InfoSection from "../components/InfoSection";
import Mockups from "../components/Mockups";
import Invite from "../components/Invite";
import Footer from "../components/Footer";

const Layout = () => <main>
    <Head>
        <title>Trading Leagues</title>
    </Head>

    <InfoSection />
    <Mockups />
    <Invite />
    <Footer />
</main>;

export default Layout;