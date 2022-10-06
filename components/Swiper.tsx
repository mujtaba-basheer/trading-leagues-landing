import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { tabLinksData, leagueDetailsData } from '../lib/swiper';
import { LeagueDetailsType } from '../types';
import device from '../styles/breapoints';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #191B2B;
  padding: 4em 0;

  @media ${device.mobile} {
  }
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: 90vw;
`;

const BigHeading = styled.h1`
  color: #FFFFFF;
  font-size: 4rem;
  font-weight: 700;
  line-height: 76px;
  margin-bottom: 0.5em;
  text-align: center;

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
    gap: 1.75em;

    @media ${device.mobile} {
        display: none;
    }
`;

const TabLinkItem = styled.button<{ "data-active": boolean; }>`
    font-size: 1rem;
    font-weight: 600;
    background: none;
    border: none;
    color: ${props => props["data-active"] ? "#00DF8D" : "#737585"};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    margin-bottom: 4em;
`;

const LeagueMobile = styled.div``;

const LeagueContentMobile = styled.div`
    color: #FFFFFF;
    max-height: 0;
    overflow: hidden;
    padding: 0;
`;

const TabLinkItemMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0;

    & h2 {
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #737585;
    }

    & button {
        background: none;
        border: none;
    }

    &.active {
        & h2 {
            color: #00DF8D;
        }

        &.active + div {
            padding: 1em 0;
            max-height: none;
        }
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
    height: 90%;
    position: relative;
    align-self: center;
`;

const StyledHeading = styled.h2`
    color: ${props => props.color};
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5em;

    @media ${device.mobile} {
        font-size: 1.5rem;
    }
`;

const MainPara = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.75em;
    max-width: 400px;
    text-align: justify;

    @media ${device.mobile} {
        font-size: 1rem;
        max-width: none;
    }
`;

const ShortPara = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    max-width: 400px;
    text-align: justify;

    @media ${device.mobile} {
        font-size: 1rem;
        max-width: none;
    }

    &:not(:last-child) {
        margin-bottom: 0.75em;
    }
`;

const StyledImage = styled.img`
    display: block;
    width: auto;
    height: 100%;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    position: absolute;
    bottom: 0;
    right: 0;

    @media ${device.mobile} {
        position: relative;
        width: 60%;
        height: auto;
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
                Choose from four game formats to get an immersive experience of the financial markets
            </StyledDescription>
            <TabLinks>
                {tabLinksData.map((x, i) => <TabLinkItem key={x.key} data-active={currentTab === i} onClick={() => setCurrentTab(i)}>{x.title}</TabLinkItem>)}
            </TabLinks>
            {leagueDetails && <MainContent>
                <LeftSection className={leagueDetails.state}>
                    <StyledHeading color={leagueDetails.color}>{leagueDetails.heading}</StyledHeading>
                    <MainPara>{leagueDetails.main}</MainPara>
                    {leagueDetails.paras?.map((x, i) => <ShortPara key={i}>{x}</ShortPara>)}
                </LeftSection>
                <RightSection>
                    {leagueDetailsData.map((x, i) => <StyledImage className={`${currentTab === i ? "active " + leagueDetails.state : ""}`} key={x.key} src={`${asset_prefix}/assets/leagues/${x.key}.svg`} />)}
                </RightSection>
            </MainContent>}
            <MainContentMobile>
                {leagueDetailsData.map((x, i) => <LeagueMobile key={x.key}>
                    <TabLinkItemMobile className={currentTab === i ? "active" : ""}>
                        <h2>{x.heading}</h2>
                        <button onClick={(ev) => {
                            let setIndex = i;
                            if (currentTab === i) setIndex = -1;
                            setCurrentTab(setIndex);
                            setTimeout(() => {
                                (ev.target as HTMLElement).scrollIntoView({ behavior: "smooth" });
                            }, 200);
                        }}>
                            <img src={`${asset_prefix}/assets/leagues/arrow-${currentTab === i ? "up" : "down"}.svg`} />
                        </button>
                    </TabLinkItemMobile>
                    <LeagueContentMobile>
                        <StyledImage src={`${asset_prefix}/assets/leagues/${x.key}.svg`} />
                        <StyledHeading color={x.color}>{x.heading}</StyledHeading>
                        <MainPara>{x.main}</MainPara>
                        {x.paras.map((x, i) => <ShortPara key={i}>{x}</ShortPara>)}
                    </LeagueContentMobile>
                </LeagueMobile>)}
            </MainContentMobile>
        </SectionContent>
    </StyledSection>;
};

export default Swiper;