import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { tabLinksData, leagueDetailsData } from '../lib/swiper';
import { LeagueDetailsType } from '../types';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #191B2B;
  padding: 3em 0;
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
`;

const StyledDescription = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    margin: 0 auto;
    width: 500px;
    margin-bottom: 2em;
`;

const TabLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
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

const MainContent = styled.div`
    display: grid;
    width: 90vw;
    grid-template-columns:  repeat(12, 1fr);
    column-gap: 1em;
    opacity: 1;
    transition: opacity 200ms ease-in;
    visibility: visible;

    &.exiting {
        opacity: 0;

        & img {
            opacity: 0;
        }
    }

    &.entering {
        opacity: 1;
        visibility: visible;

        & img {
            opacity: 1;
        }
    }
`;

const LeftSection = styled.div`
    grid-column: 2 / 7;
    color: #FFFFFF;
`;

const RightSection = styled.div`
    grid-column: 7 / 12;
    justify-self: end;
    width: 300px;
`;

const StyledHeading = styled.h2`
    color: ${props => props.color};
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5em;
`;

const MainPara = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 1.2em;
`;

const ShortPara = styled.p`
    font-size: 1.2rem;
    font-weight: 600;

    &:not(:last-child) {
        margin-bottom: 0.75em;
    }
`;

const StyledImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    opacity: 1;
    transition: opacity 300ms ease-in-out;
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
            <MainContent className={leagueDetails.state}>
                <LeftSection>
                    <StyledHeading color={leagueDetails.color}>{leagueDetails.heading}</StyledHeading>
                    <MainPara>{leagueDetails.main}</MainPara>
                    {leagueDetails.paras.map((x, i) => <ShortPara key={i}>{x}</ShortPara>)}
                </LeftSection>
                <RightSection>
                    <StyledImage src={`${asset_prefix}/assets/leagues/${leagueDetails.key}.svg`} />
                </RightSection>
            </MainContent>
        </SectionContent>
    </StyledSection>;
};

export default Swiper;