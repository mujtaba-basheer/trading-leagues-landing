import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { tabLinksData, leagueDetailsData } from '../lib/swiper';
import { LeagueDetailsType } from '../types';
import device from '../styles/breakpoints';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background: url(${asset_prefix}/assets/noise.png), #191B2B;
  background-size: cover;
  padding: 6em 0;

  @media ${device.mobile} {
  }
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: 90vw;
`;

const BigHeading = styled.h2`
  color: #FFFFFF;
  font-size: 4rem;
  font-weight: 700;
  line-height: 76px;
  margin-bottom: 0.5em;
  text-align: center;
  color: #00DF8D;

  @media ${device.mobile} {
    font-size: 2.5rem;
    line-height: 48px;
  }
`;

const StyledDescription = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    margin: 0 auto;
    width: 500px;
    margin-bottom: 3em;

    @media ${device.mobile} {
        font-size: 1rem;
        line-height: 22.4px;
        width: 300px;
    }
`;

const TabLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5em;

    @media ${device.mobile} {
        display: none;
    }
`;

const TabLinkItem = styled.button<{ "data-active": boolean; }>`
    font-size: 1rem;
    font-weight: 600;
    background: none;
    border: none;
    font-family: inherit;
    color: ${props => props["data-active"] ? "#00DF8D" : "#737585"};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    margin-bottom: 4em;
`;

const LeagueContentMobile = styled.div`
    color: #FFFFFF;
    padding: 0;
    
    &:not(:last-child) {
        margin-bottom: 3em;
    }
`;

const MainContent = styled.div`
    display: grid;
    width: 90vw;
    grid-template-columns:  repeat(12, 1fr);
    column-gap: 1em;

    @media ${device.mobile} {
        display: none;
        visibility: hidden;
    }
`;

const MainContentMobile = styled.div`
    display: none;
    scroll-snap-align: end;

    @media ${device.mobile} {
        display: block;
    }
`;

const LeftSection = styled.div`
    grid-column: 2 / 7;
    color: #FFFFFF;
    opacity: 1;
    transition: opacity 200ms ease-in;

    &.exiting {
        opacity: 0;

        & img {
            opacity: 0;
        }
    }

    &.entering {
        opacity: 1;

        & img {
            opacity: 1;
        }
    }
`;

const RightSection = styled.div`
    grid-column: 7 / 12;
    justify-self: end;
    position: relative;
    align-self: center;
    width: 318px;
    height: 446px;
`;

const StyledHeading = styled.h2`
    color: ${props => props.color};
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5em;

    @media ${device.mobile} {
        font-size: 1.5rem;
        text-align: center;
    }
`;

const MainPara = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.75em;

    @media ${device.mobile} {
        font-size: 1rem;
        max-width: none;
        text-align: center;
    }
`;

const ShortPara = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 28px;

    @media ${device.mobile} {
        font-size: 1rem;
        max-width: none;
        text-align: center;
        line-height: normal;
    }

    &:not(:last-child) {
        margin-bottom: 0.75em;

        @media ${device.mobile} {
            margin-bottom: 1.25em;
        }
    }
`;

const StyledImage = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 25px;
    box-shadow: 0px 0px 20px 5px ${props => props.color}50;
    position: absolute;
    bottom: 0;
    right: 0;

    @media ${device.mobile} {
        border-radius: 15px;
        position: relative;
        width: 60%;
        height: auto;
        margin: 0 auto;
        margin-bottom: 1.5em;
        opacity: 1;
    }

    &.active {
        opacity: 1;

        &.exiting {
            opacity: 0;
        }
    }
`;

const Swiper: () => JSX.Element = () => {
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [leagueDetails, setLeagueDetails] = useState<LeagueDetailsType>(leagueDetailsData[currentTab]);

    useEffect(() => {
        setLeagueDetails({ ...leagueDetails, state: "exiting" });
        setTimeout(() => {
            setLeagueDetails({ ...leagueDetailsData[currentTab], state: "entering" });
        }, 200);
    }, [currentTab]);

    return <StyledSection>
        <SectionContent>
            <BigHeading>
                Get your trade game on!
            </BigHeading>
            <StyledDescription>
                Multiple stock market game formats to play, compete, and win real money!
            </StyledDescription>
            <TabLinks>
                {tabLinksData.map((x, i) => <TabLinkItem key={x.key} data-active={currentTab === i} onClick={() => setCurrentTab(i)}>
                    {x.title}
                </TabLinkItem>)}
            </TabLinks>
            {leagueDetails && <MainContent>
                <LeftSection className={leagueDetails.state}>
                    <StyledHeading color={leagueDetails.color}>{leagueDetails.heading}</StyledHeading>
                    <MainPara>{leagueDetails.main}</MainPara>
                    {leagueDetails.paras?.map((x, i) => <ShortPara key={i}>{x}</ShortPara>)}
                </LeftSection>
                <RightSection>
                    {leagueDetailsData.map((x, i) => <StyledImage color={x.color} className={`${currentTab === i ? "active " + leagueDetails.state : ""}`} key={x.key} alt="Play a BattleLeague trading game on TradingLeagues app and win!" src={`${asset_prefix}/assets/leagues/${x.img_file}.svg`} />)}
                </RightSection>
            </MainContent>}
            <MainContentMobile>
                {leagueDetailsData.map((x, i) => <LeagueContentMobile key={x.key}>
                    <StyledImage alt="Play a BattleLeague trading game on TradingLeagues app and win!" src={`${asset_prefix}/assets/leagues/${x.img_file}.svg`} />
                    <StyledHeading color={x.color}>{x.heading}</StyledHeading>
                    <MainPara>{x.main}</MainPara>
                    {x.paras.map((x, i) => <ShortPara key={i}>{x}</ShortPara>)}
                </LeagueContentMobile>)}
            </MainContentMobile>
        </SectionContent>
    </StyledSection>;
};

export default Swiper;