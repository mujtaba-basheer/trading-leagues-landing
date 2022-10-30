/** @format */

// import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import device from "../styles/breakpoints";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Container = styled.div`
  background-image: url(${asset_prefix}/assets/dark-blue-noise.png);
  position: relative;
  display: grid;
  padding: 0 1em;
  padding-top: 3em;

  @media ${device.mobile} {
    display: block;
  }
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

  @media ${device.mobile} {
    font-size: 40px;
    text-align: left;
  }
`;

const ContentArea = styled.div`
  padding-top: 2.5em;
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
    padding: 0;
    text-align: left;
    margin-bottom: 2em;
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
    height: auto;
    color: #000000;
    padding: 1rem;
    margin: 0 -1em;
  }
`;

const FounderPic = styled.div`
  align-self: flex-end;

  @media ${device.mobile} {
    align-self: auto;
    height: 300px;
  }

  & img {
    display: block;

    @media ${device.mobile} {
      height: 100%;
      width: auto;
    }
  }
`;

// @ts-ignore
const FItem = styled("div")`
  line-height: 1.5rem;

  & p.previous {
    @media ${device.mobile} {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const Name = styled.p`
  color: #00df8d;
  font-weight: 700;
  font-size: 20px;

  @media ${device.mobile} {
    color: #000000;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Title = styled.p`
  font-size: 16px;
  color: #ffffff90;

  @media ${device.mobile} {
    color: #000000;
    font-weight: 300;
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

const Star1 = styled.img`
  position: absolute;
  top: -12.5px;
  left: 2em;
  display: block;
  transform: rotate(-10deg);
`;
const Star2 = styled.img`
  position: absolute;
  top: 40%;
  right: 2em;
  display: block;

  @media ${device.mobile} {
    top: 3em;
  }
`;
const Star3 = styled.img`
  position: absolute;
  bottom: 2em;
  left: 2em;
  display: block;
`;

const MobileView = () => {
  return (
    <Container>
      <Header>
        Built by
        <br /> World Class Entrepreneurs
      </Header>
      <IntroText>
        TradingLeagues is a product by Rain Platforms, founded by Raghu Kumar
        and Harsh Agarwal. Prior to Rain, Raghu founded <b>Upstox</b>, India's
        largest stock brokerage. Harsh founded <b>AGacquisitions</b>, one of
        India's first offshore hedge funds.
      </IntroText>
      <FounderViewMob>
        <FounderPic>
          <img
            src={`${asset_prefix}/assets/founder/Raghu@1x.png`}
            alt="Raghu"
          />
        </FounderPic>
        <FounderPic>
          <img
            src={`${asset_prefix}/assets/founder/Harsh@1x.png`}
            alt="Harsh"
          />
        </FounderPic>
      </FounderViewMob>
      <FounderIntro>
        <FItem>
          <Name>Raghu Kumar</Name>
          <Title>
            Co-founder,
            <br />
            Rain Platforms
          </Title>
          <p className="previous" style={{ marginBottom: ".3rem" }}>
            Previously founded:
          </p>
          <img
            src={`${asset_prefix}/assets/founder/upstox_black.png`}
            alt="Upstox"
          />
        </FItem>
        <FItem style={{ textAlign: "right" }}>
          <Name>Harsh Agarwal</Name>
          <Title>
            Co-founder,
            <br />
            Rain Platforms
          </Title>
          <p className="previous" style={{ marginBottom: ".3rem" }}>
            Previously founded:
          </p>
          <AG>AGacquisitions</AG>
        </FItem>
      </FounderIntro>

      <Star2 src={`${asset_prefix}/assets/star1.svg`} />
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
          <img
            src={`${asset_prefix}/assets/founder/Raghu@1x.png`}
            alt="Raghu"
            className="img"
          />
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
              <img
                src={`${asset_prefix}/assets/founder/Upstox.png`}
                alt="Upstox"
              />
            </FItem>
            <FItem style={{ textAlign: "right" }}>
              <Name>Harsh Agarwal</Name>
              <Title>Co-founder- Rain Platforms</Title>
              <p style={{ marginBottom: ".3rem" }}>Previously founded:</p>
              <AG>AGacquisitions</AG>
            </FItem>
          </FounderIntro>
        </TextContainer>
        <FounderPic>
          <img
            src={`${asset_prefix}/assets/founder/Harsh@1x.png`}
            alt="Harsh"
          />
        </FounderPic>
      </ContentArea>

      <Star1 src={`${asset_prefix}/assets/star.svg`} />
      <Star2 src={`${asset_prefix}/assets/star1.svg`} />
      <Star3 src={`${asset_prefix}/assets/star2.svg`} />
    </Container>
  );
};

export default Founders;
