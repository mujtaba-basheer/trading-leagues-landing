import styled from 'styled-components';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
  background-color: #191B2B;
  height: 100vh;
  overflow: hidden;
`;

const SectionContent = styled.div`
  padding: 3em 0;
  background: url(${asset_prefix}/assets/hero-bg.png), rgba(5, 8, 26, 0.85);
  background-size: cover;
`;

const StyledBanner = styled.div`
    background-color: #171728;
    text-align: center;
    padding: 0.75em 0;

    & h1 {
        font-size: 1.25rem;
        font-weight: 400;
        font-family: 'Silkscreen', cursive;
        color: #00DF8D;
    }
`;

const MainContent = styled.div`
    height: calc(100vh - 90px - 2.5em);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    & h1 {
        font-size: 4rem;
        font-weight: 700;
        color: #FFFFFF;

        & span {
            color: #00DF8D;
        }
    }

    & p {
        font-size: 1.5rem;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 33.6px;
        width: 650px;
        text-align: center;
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
    }
`;

const StyledLink = styled.a`
    display: inline-block;
    color: #00DF8D;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    border: 2px solid #00DF8D;
    padding: 0.5em 1em;
    border-radius: 20px;
    text-decoration: none;
`;

const StyledForm = styled.form`
    margin-bottom: 2em;

    & div {
        height: 40px;

        & input {
            display: inline-block;
            height: 100%;
            border: none;
            padding: 0 1.5em;

            &[type="text"] {
                background-color: #FFFFFF;
                border-radius: 20px 0 0 20px;
                outline: none;
                font-size: 1rem;

                &::placeholder {
                    color: #9EA0AA;
                }
            }

            &[type="submit"] {
                font-size: 1rem;
                border-radius: 20px;
                font-weight: 600;
                position: relative;
                left: -20px;
                background-color: #00DF8D;
                text-transform: uppercase;
                color: #15182C;
                cursor: pointer;
            }
        }
    }
`;

const ImagesFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
`;

const Hero: () => JSX.Element = () => {

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
                <h1><span>Trade</span> On!</h1>
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