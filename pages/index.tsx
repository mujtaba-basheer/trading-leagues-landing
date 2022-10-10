/** @format */

import { useState } from "react";
import Head from "next/head";

import Hero from "../components/Hero";
import Swiper from "../components/Swiper";
import InfoSection from "../components/InfoSection";
import Mockups from "../components/Mockups";
import Invite from "../components/Invite";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import { PopupProps } from "../types";

const Layout = () => {
	const [formContext, setFormContext] = useState<PopupProps>({
		mobile: "",
		wailist_no: 0,
		open_modal: false,
	});

	return (
		<main>
			<Head>
				<title>
					TradingLeagues: Fantasy stock market game. Play, Win & Learn
				</title>
				<meta name="robots" content="index, follow" />
				<meta
					name="title"
					content="TradingLeagues: Fantasy stock market game. Play, Win & Learn"
				/>
				<meta
					name="description"
					content="The best fantasy stock market game app! Choose from four stock market  games to play, compete, earn and learn stock trading. Refer and earn! Join a league now!"
				/>

				{/* <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.tradingleagues.in/" />
            <meta
                property="og:title"
                content="TradingLeagues: Fantasy stock market game. Play, Win & Learn"
            />
            <meta
                property="og:description"
                content="The best fantasy stock market game app! Choose from four stock market  games to play, compete, earn and learn stock trading. Refer and earn! Join a league now!"
            />
            <meta property="og:image" content="https://www.tradingleagues.in/assets/TradingLeagues_Logo.png" />

            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content="https://www.tradingleagues.in/" />
            <meta
                property="twitter:title"
                content="TradingLeagues: Fantasy stock market game. Play, Win & Learn"
            />
            <meta
                property="twitter:description"
                content="The best fantasy stock market game app! Choose from four stock market  games to play, compete, earn and learn stock trading. Refer and earn! Join a league now!"
            />
            <meta property="twitter:image" content="https://www.tradingleagues.in/assets/TradingLeagues_Logo.png" /> */}

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.tradingleagues.in/" />
				<meta
					property="og:title"
					content="TradingLeagues: Fantasy stock market game. Play, Win & Learn"
				/>
				<meta
					property="og:description"
					content="The best fantasy stock market game app! Choose from four stock market games to play, compete, earn and learn stock trading. Refer and earn! Join a league now!"
				/>
				<meta
					property="og:image:secure_url"
					content="https://www.tradingleagues.in/assets/TradingLeagues_Logo.png"
				/>

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.tradingleagues.in/" />
				<meta
					property="twitter:title"
					content="TradingLeagues: Fantasy stock market game. Play, Win & Learn"
				/>
				<meta
					property="twitter:description"
					content="The best fantasy stock market game app! Choose from four stock market games to play, compete, earn and learn stock trading. Refer and earn! Join a league now!"
				/>
				<meta
					property="twitter:image:secure_url"
					content="https://www.tradingleagues.in/assets/TradingLeagues_Logo.png"
				/>
			</Head>
			<header style={{ display: "none", visibility: "hidden" }}>
				<h1>
					TradingLeages is India’s best fantasy stock market trading game.
					Compete, Play, Learn and Earn stock market trading and investing in a
					fun, real-time, stree-free experience.
				</h1>
				<h1>
					Join a Trading League on TradingLeagues Now. Play stock market fantasy
					game and win!
				</h1>
			</header>
			<Hero setFormContext={setFormContext} />
			<Swiper />
			<InfoSection />
			<Mockups />
			<Invite setFormContext={setFormContext} />
			<Footer setFormContext={setFormContext} />
			{formContext.open_modal && (
				<Popup formContext={formContext} setFormContext={setFormContext} />
			)}
		</main>
	);
};

export default Layout;
