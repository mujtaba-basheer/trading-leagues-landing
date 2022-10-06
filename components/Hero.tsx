import styled, { keyframes } from 'styled-components';
import { useRef, useEffect } from 'react';
import { animateType } from '../public/js/hero';
import device from '../styles/breapoints';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #191B2B;
  height: 100vh;
  overflow: hidden;
`;

const SectionContent = styled.div`
  padding: 4em 0;
  background: url(${asset_prefix}/assets/hero-bg.png), rgba(5, 8, 26, 0.85);
  background-size: cover;
`;

const StyledBanner = styled.div`
    background-color: #171728;
    text-align: center;
    padding: 0.75em 0;

    @media ${device.mobile} {
        position: relative;
        right: auto;
        left: auto;
    }

    & h1 {
        font-size: 1.25rem;
        font-weight: 400;
        font-family: 'Silkscreen', cursive;
        color: #00DF8D;

        @media ${device.mobile} {
            font-size: 0.875rem;
        }
    }
`;

const blink = keyframes`
    0% {
        border-right-color: #FFFFFF;
    }
    50% {
        border-right-color: #FFFFFF;
    }
    51% {
        border-right-color: transparent;
    }
    100% {
        border-right-color: transparent;
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
        border-right: 5px solid;
        border-right-color: #FFFFFF;
        animation: ${blink} 500ms ease-out infinite alternate-reverse;

        @media ${device.mobile} {
            font-size: 2.5rem;
            min-height: 48px;
            border-right: 3px solid;
        }

        & span {
            &.w1 {
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

    & img {
        @media ${device.mobile} {
            display: inline-block;
            height: 40px;
            width: auto;
        }
    }
`;

const Hero: () => JSX.Element = () => {
    const typeEl = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const headingEl = typeEl.current;
        if (headingEl !== null) animateType(headingEl);
    }, [typeEl.current]);

    return <StyledSection style={{ height: "100vh" }}>
        <StyledBanner>
            <h1>coming soon on 10th OCtober 2022</h1>
        </StyledBanner>
        <SectionContent>
            <TopSection>
                <img src={`${asset_prefix}/assets/logo.svg`} alt="logo" />
                <StyledLink href="#refer-and-earn">refer & earn</StyledLink>
            </TopSection>
            <MainContent>
                <h1 ref={typeEl}></h1>
                <p>TradingLeagues is a first-of-its-kind fantasy trading platform providing a gamified experience of the financial markets.</p>
                <StyledForm>
                    <div>
                        <input type="text" placeholder="Enter Mobile Number" name="mobile" id="mobile" />
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
    </StyledSection>;
};

export default Hero;