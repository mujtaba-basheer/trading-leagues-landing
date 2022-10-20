/** @format */

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Harsh from "../public/assets/founder/Harsh@1x.png";
import Raghu from "../public/assets/founder/Raghu@1x.png";
import Upstox from "../public/assets/founder/Upstox.png";
import UpstoxB from "../public/assets/founder/upstox_black.png";
import { useMediaQuery } from "react-responsive";
import device from "../styles/breakpoints";

const Container = styled.div`
	background-color: #292b44;
	display: grid;
`;
const Header = styled.h1`
	color: #00df8d;
	font-size: 50px;
	font-weight: 700;
	font-family: "Barlow";
	font-style: normal;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 1rem;
`;

const ContentArea = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const TextContainer = styled.div`
	color: #ffffff;
	display: flex;
	flex-direction: column;
	width: 40%;
`;

const IntroText = styled.p`
	text-align: center;
	height: 50%;
	line-height: 1.5rem;
	font-family: "Barlow";
	font-style: normal;
	padding: 3rem 4rem;

	@media ${device.mobile} {
		color: #ffffff;
	}
`;

const FounderIntro = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 1rem;

	@media ${device.mobile} {
		background-color: #00df8d;
		color: inherit;
		padding: 0;
		height: auto;
		color: #000000;
		padding: 1rem 0.5rem;
	}
`;

const FounderPic = styled.div`
	@media ${device.mobile} {
	}
`;

const FItem = styled.div`
	line-height: 1.5rem;
`;

const Name = styled.p`
	color: #00df8d;
	font-weight: 700;
	font-size: 20px;
	@media ${device.mobile} {
		color: #000000;
	}
`;

const Title = styled.p`
	font-size: 16px;
	color: #ffffff90;
	@media ${device.mobile} {
		color: #000000;
		font-size: 12px;
	}
`;

const AG = styled.p`
	font-weight: 500;
	font-size: 24px;
	@media ${device.mobile} {
		color: #000000;
		font-size: 18px;
	}
`;

const FounderViewMob = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const MobileView = () => {
	return (
		<Container>
			<Header>Built by World Class Entrepreneurs</Header>
			<IntroText>
				TradingLeagues is a product by Rain Platforms, founded by Raghu Kumar
				and Harsh Agarwal. Prior to Rain, Raghu founded <b>Upstox</b>, India's
				largest stock brokerage. Harsh founded <b>AGacquisitions</b>, one of
				India's first offshore hedge funds.
			</IntroText>
			<FounderViewMob>
				<FounderPic>
					<Image src={Raghu} alt="Raghu" />
				</FounderPic>
				<FounderPic>
					<Image src={Harsh} alt="Harsh" />
				</FounderPic>
			</FounderViewMob>
			<FounderIntro>
				<FItem>
					<Name>Raghu Kumar</Name>
					<Title>Co-founder- Rain Platforms</Title>
					<p style={{ marginBottom: ".3rem" }}>Previously founded:</p>
					<Image src={UpstoxB} alt="Upstox" />
				</FItem>
				<FItem style={{ textAlign: "left" }}>
					<Name>Harsh Aggarwal</Name>
					<Title>Co-founder- Rain Platforms</Title>
					<p style={{ marginBottom: ".3rem" }}>Previously founded:</p>
					<AG>AGacquisitions</AG>
				</FItem>
			</FounderIntro>
		</Container>
	);
};

const Founders = () => {
	const isMobile = useMediaQuery({ query: device.mobile });

	if (isMobile) {
		return <MobileView />;
	}

	return (
		<Container>
			<Header>Built by World Class Entrepreneurs</Header>
			<ContentArea>
				<FounderPic>
					<Image src={Raghu} alt="Raghu" className="img" />
				</FounderPic>
				<TextContainer>
					<IntroText>
						TradingLeagues is a product by Rain Platforms, founded by Raghu
						Kumar and Harsh Agarwal. Prior to Rain, Raghu founded <b>Upstox</b>,
						India's largest stock brokerage. Harsh founded <b>AGacquisitions</b>
						, one of India's first offshore hedge funds.
					</IntroText>
					<FounderIntro>
						<FItem>
							<Name>Raghu Kumar</Name>
							<Title>Co-founder- Rain Platforms</Title>
							<p style={{ marginBottom: ".3rem" }}>Previously founded:</p>
							<Image src={Upstox} alt="Upstox" />
						</FItem>
						<FItem>
							<Name>Harsh Aggarwal</Name>
							<Title>Co-founder- Rain Platforms</Title>
							<p style={{ marginBottom: ".3rem" }}>Previously founded:</p>
							<AG>AGacquisitions</AG>
						</FItem>
					</FounderIntro>
				</TextContainer>
				<FounderPic>
					<Image src={Harsh} alt="Harsh" />
				</FounderPic>
			</ContentArea>
		</Container>
	);
};

export default Founders;
