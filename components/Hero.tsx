import styled, { keyframes } from "styled-components";
import { SetStateAction, Dispatch, useState, useEffect } from "react";

import Loader from "./ui/Loader";
import { submitHandler } from "../lib/handler";
import device from "../styles/breakpoints";
import { PopupProps } from "../types";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #191b2b;
  height: 100vh;
  overflow: hidden;
`;

const SectionContent = styled.div`
  padding: 4em 0;
  background: rgba(5, 8, 26, 0.85);
  background-size: cover;

  @media ${device.mobile} {
    padding: 2em 0;
  }
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
    display: block;

    & div.scroll {
      display: flex;
      gap: 3em;
      position: absolute;
      left: 0;
      top: 0;
      width: max-content;
      animation: ${marquee} 10s linear infinite;

      &:not(:first-child) {
        left: calc(1434px + 3em);

        @media ${device.mobile} {
          left: calc(1047px + 3em);
        }
      }
    }
  }

  & span {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 400;
    font-family: "Silkscreen", cursive;
    color: #00df8d;
    min-width: max-content !important;

    @media ${device.mobile} {
      font-size: 0.875rem;
    }
  }
`;

const wheel = keyframes`
    0% {
        transform: translateY(-100%);
    }

    50% {
        transform: translateY(-50%);
    }

    100% {
        transform: translateY(0);
    }
`;

const MainContent = styled.div`
  height: calc(100vh - 50px - 40px - 2.5em - 8em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  @media ${device.mobile} {
    height: calc(100vh - 50px - 32px - 2.5em - 4em);
    width: 90vw;
    margin: 0 auto;
    gap: 7.5vh;
  }

  & h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #ffffff;
    min-height: 76.66px;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 3000px;

    @media ${device.mobile} {
      font-size: 3rem;
      min-height: 57px;
      gap: 0.25em;
    }

    & > div {
      display: inline-block;
      height: min-content;
      overflow-y: hidden;
      transform-style: preserve-3d;
      width: 180px;
      height: 76.67px;
      position: relative;

      @media ${device.mobile} {
        height: 57.33px;
        width: auto;
      }

      & > div {
        width: 100%;
        height: 200%;
        transform: translateY(-100%);
        animation: ${wheel} 2.5s cubic-bezier(0.7, 0.08, 0.03, 0.82) infinite forwards;
        animation-delay: 2.5s;
      }

      & span {
        display: block;
        height: 50%;
        top: 0;
        right: 0;
        color: #00df8d;
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
    color: #ffffff;
    line-height: 33.6px;
    width: 650px;
    text-align: center;

    @media ${device.mobile} {
      font-size: 1rem;
      line-height: 22.4px;
      width: auto;
      margin-bottom: -2em;
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
  color: #00df8d;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border: 2px solid;
  border-color: #00df8d;
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

  & > div {
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;

    & div.input {
      background-color: #ffffff;
      border-radius: 20px 0 0 20px;
      padding-left: 1em;

      @media ${device.mobile} {
        padding-left: 0.5em;
        position: absolute;
        height: 100%;
        bottom: 0;
        right: 20px;
        left: 0;
      }

      & > span {
        font-size: 0.875rem;
      }

      & span.input {
        margin-left: 0.5em;
      }
    }

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
        background-color: #ffffff;
        outline: none;
        font-size: 1rem;
        padding: 0;

        &::placeholder {
          color: #9ea0aa;
        }

        &.failure {
          &::placeholder {
            color: red;
          }
        }

        @media ${device.mobile} {
          position: relative;
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
        background-color: #00df8d;
        text-transform: uppercase;
        color: #15182c;
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

    & > span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 1.5em;
      border-radius: 20px;
      left: -20px;
      background-color: #00df8d;
      width: 188.55px;
      right: 0;
      bottom: 0;
      padding: 5px 0;

      @media ${device.mobile} {
        position: absolute;
        left: auto;
        width: 151px;
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

const Hero = ({
  formContext,
  setFormContext,
}: {
  formContext: PopupProps;
  setFormContext: Dispatch<SetStateAction<PopupProps>>;
}) => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <StyledSection
      style={{ minHeight: "100vh", backgroundColor: "#191B2B" }}
      className="hero-section"
    >
      <header style={{ display: "none", visibility: "hidden" }}>
        <h1>
          TradingLeages is India’s best fantasy stock market trading game.
          Compete, Play, Learn and Earn stock market trading and investing in a
          fun, real-time, stree-free experience.
        </h1>
        <h2>
          Join a Trading League on TradingLeagues Now. Play stock market fantasy
          game and win!
        </h2>
        <h3>
          The TradingLeagues App available on google playstore, apple app store
        </h3>
      </header>
      {pageLoaded && (
        <VideoBackground autoPlay muted loop playsInline>
          <source src={`${asset_prefix}/assets/video.mp4`} type="video/mp4" />
        </VideoBackground>
      )}
      <StyledBanner className="banner">
        <div>
          <div className="scroll" style={{ display: "flex" }}>
            <span>Launching this November</span>
            <span>Launching this November</span>
            <span>Launching this November</span>
            <span>Launching this November</span>
          </div>
          <div className="scroll" style={{ display: "flex" }}>
            <span>Launching this November</span>
            <span>Launching this November</span>
            <span>Launching this November</span>
            <span>Launching this November</span>
          </div>
        </div>
      </StyledBanner>
      <SectionContent className="hero-container">
        <TopSection className="hero-top">
          <img
            src={`${asset_prefix}/assets/TradingLeagues_Logo.svg`}
            alt="TradingLeagues the best stock market game app"
          />
          <StyledLink className="refer-link" href="#refer-and-earn">
            refer & earn
          </StyledLink>
        </TopSection>
        <MainContent className="hero-main">
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
          <p>
            TradingLeagues is a first-of-its-kind fantasy trading platform
            providing a gamified experience of the financial markets.
          </p>
          <StyledForm
            onSubmit={(ev) => submitHandler(ev, 0, setFormContext)}
            className="hero-form"
          >
            <div>
              <div className="input">
                <span>+91 - </span>
                <span className="input">
                  <input
                    type="text"
                    autoComplete="off"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                    placeholder={
                      formContext?.status?.[0] === "failure" ? "Invalid Mobile Number" : "Enter Mobile Number"
                    }
                    className={formContext?.status?.[0]}
                    name="mobile"
                    id="mobile"
                  />
                </span>
              </div>
              {formContext?.loading?.[0] ? <span>
                <Loader color="#191b2a" />
              </span> : <input type="submit" value="get early access" />}
            </div>
          </StyledForm>
          <ImagesFlex className="hero-app-images">
            <a href="" target="_blank">
              <img src={`${asset_prefix}/assets/app-store.svg`} />
            </a>
            <a href="" target="_blank">
              <img src={`${asset_prefix}/assets/google-play.svg`} />
            </a>
          </ImagesFlex>
        </MainContent>
      </SectionContent>
    </StyledSection>
  );
};

export default Hero;
