import styled, { keyframes } from 'styled-components';
import { SetStateAction, Dispatch, useState, useEffect } from 'react';

import { submitHandler } from '../lib/handler';
import device from '../styles/breakpoints';
import { PopupProps } from '../types';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #191B2B;
  height: 100vh;
  overflow: hidden;
`;

const SectionContent = styled.div`
  padding: 4em 0;
  background: rgba(5, 8, 26, 0.85);
  background-size: cover;
`;

const VideoBackground = styled.video`
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.1;
`;

const marquee = keyframes`
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-100% - 3em));
    }
`;

const StyledBanner = styled.div`
    background-color: #171728;
    text-align: center;
    padding: 0.75em 0;
    z-index: 5;
    position: relative;

    @media ${device.mobile} {
        position: relative;
        right: auto;
        left: auto;
    }

    & > div {
        height: 26px;
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        position: relative; 

        & div.scroll {
            display: flex;
            gap: 3em;
            position: absolute;
            left: 0;
            top: 0;
            width: max-content;
            animation: ${marquee} 10s linear infinite;

            &:not(:first-child) {
                left: calc(1328px + 3em);

                @media ${device.mobile} {
                    left: calc(944px + 3em);
                }
            }
        }
    }

    & h1 {
        display: inline-block;
        font-size: 1.25rem;
        font-weight: 400;
        font-family: 'Silkscreen', cursive;
        color: #00DF8D;
        min-width: max-content !important;

        @media ${device.mobile} {
            font-size: 0.875rem;
        }
    }
`;

const wheel = keyframes`
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-50%);
    }

    100% {
        transform: translateY(-100%);
    }
`;

const MainContent = styled.div`
    height: calc(100vh - 90px - 2.5em);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    @media ${device.mobile} {
        height: calc(100vh - 74px - 8.5em);
        width: 90vw;
        margin: 0 auto;
        gap: 10vh;
    }

    & h1 {
        font-size: 4rem;
        font-weight: 700;
        color: #FFFFFF;
        min-height: 76.66px;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 3000px;

        @media ${device.mobile} {
            font-size: 2.5rem;
            min-height: 48px;
            gap: 0.5em;
        }

        

        & > div {
            display: inline-block;
            height: min-content;
            overflow-y: hidden;
            transform-style: preserve-3d;
            width: 200px;
            height: 76.67px;
            position: relative;

            @media ${device.mobile} {
                height: 48px;
                width: auto;
            }

            & > div {
                width: 100%;
                height: 200%;
                transform: translateY(0);
                animation: ${wheel} 2.5s cubic-bezier(0.7, 0.08, 0.03, 0.82) infinite forwards;
                animation-delay: 2.5s;
            }

            & span {
                display: block;
                height: 50%;
                top: 0;
                right: 0;
                color: #00DF8D;
            }
        }

        @media ${device.mobile} {
            position: relative;
            right: auto;
            left: auto;
        }
    }

    & p {
        font-size: 1.5rem;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 33.6px;
        width: 650px;
        text-align: center;

        @media ${device.mobile} {
            font-size: 1rem;
            line-height: 22.4px;
            width: auto;
        }
    }
`;

const TopSection = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5em;

    & img {
        display: inline-block;
        height: 40px;
        width: auto;

        @media ${device.mobile} {
            height: 25px;
        }
    }
`;

const StyledLink = styled.a`
    display: inline-block;
    color: #00DF8D;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    border: 2px solid;
    border-color: #00DF8D;
    padding: 0.5em 1em;
    border-radius: 20px;
    text-decoration: none;
    outline: none;
    z-index: 2;

    @media ${device.mobile} {
        font-size: 0.875rem;
        border: 1px solid;
    }
`;

const StyledForm = styled.form`
    margin-bottom: 2em;

    @media ${device.mobile} {
        width: 100%;
    }

    & div {
        height: 40px;
        position: relative;
        display: flex;
        align-items: center;

        & input {
            display: inline-block;
            height: 100%;
            border: none;
            padding: 0 1.5em;
            outline: none;

            @media ${device.mobile} {
                position: absolute;
                bottom: 0;
            }

            &[type="text"] {
                background-color: #FFFFFF;
                border-radius: 20px 0 0 20px;
                outline: none;
                font-size: 1rem;

                &::placeholder {
                    color: #9EA0AA;
                }

                @media ${device.mobile} {
                    font-size: 0.875rem;
                    left: 0;
                    width: 90%;
                }
            }

            &[type="submit"] {
                font-size: 1rem;
                border-radius: 20px;
                font-weight: 600;
                line-height: 16.8px;
                position: relative;
                left: -20px;
                background-color: #00DF8D;
                text-transform: uppercase;
                color: #15182C;
                cursor: pointer;
                right: 0;

                @media ${device.mobile} {
                    position: absolute;
                    font-size: 0.875rem;
                    left: auto;
                    padding: 0 1em;
                }
            }
        }
    }
`;

const ImagesFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    z-index: 5;

    & img {
        @media ${device.mobile} {
            display: inline-block;
            height: 40px;
            width: auto;
        }
    }
`;

const Hero = ({ setFormContext }: { setFormContext: Dispatch<SetStateAction<PopupProps>>; }) => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setPageLoaded(true);
    }, []);

    return <StyledSection style={{ minHeight: "100vh", backgroundColor: "#191B2B" }}>
        {pageLoaded && (< VideoBackground autoPlay muted loop>
            <source src={`${asset_prefix}/assets/video.mp4`} type="video/mp4" />
        </VideoBackground>)
        }
        <StyledBanner>
            <div>
                <div className="scroll">
                    <h1>Coming this november to an App Store Near you !</h1>
                    <h1>Coming this november to an App Store Near you !</h1>
                </div>
                <div className="scroll">
                    <h1>Coming this november to an App Store Near you !</h1>
                    <h1>Coming this november to an App Store Near you !</h1>
                </div>
            </div>
        </StyledBanner>
        <SectionContent>
            <TopSection>
                <img src={`${asset_prefix}/assets/logo.svg`} alt="logo" />
                <StyledLink href="#refer-and-earn">refer & earn</StyledLink>
            </TopSection>
            <MainContent>
                <h1>
                    <div>
                        <div>
                            <span>Game</span>
                            <span>Trade</span>
                            <span>Game</span>
                        </div>
                    </div>
                    On!
                </h1>
                <p>TradingLeagues is a first-of-its-kind fantasy trading platform providing a gamified experience of the financial markets.</p>
                <StyledForm onSubmit={(ev) => submitHandler(ev, setFormContext)}>
                    <div>
                        <input type="text" maxLength={10} pattern="[0-9]{10}" required placeholder="Enter Mobile Number" name="mobile" id="mobile" />
                        <input type="submit" value="get early access" />
                    </div>
                </StyledForm>
                <ImagesFlex>
                    <a href="" target="_blank">
                        <img src={`${asset_prefix}/assets/app-store.svg`} />
                    </a>
                    <a href="" target="_blank">
                        <img src={`${asset_prefix}/assets/google-play.svg`} />
                    </a>
                </ImagesFlex>
            </MainContent>
        </SectionContent>
    </StyledSection >;
};

export default Hero;