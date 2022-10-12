import styled from 'styled-components';

import { coinCssDetails, starCssDetails } from '../lib/invite';
import { submitHandler } from '../lib/handler';
import { CssItemProps, PopupProps } from '../types';
import device from '../styles/breakpoints';
import { Dispatch, SetStateAction } from 'react';
import Loader from './ui/Loader';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Image = (props: CssItemProps & { src: string; alt: string; }) => <img {...props} />;

const StyledSection = styled.section`
  background-color: #00DF8D;
  padding: 6em 0;
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1em;

  @media ${device.mobile} {
    display: block;
  }
`;

const TopSection = styled.div`
  grid-column: 2 / 13;
`;

const BottomSection = styled.div`
  grid-column: 2 / 12;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    display: block;
  }
`;

const BigHeading = styled.h2`
  color: #15182C;
  font-size: 4rem;
  font-weight: 700;
  line-height: 76px;
  width: 750px;
  margin-bottom: 2em;

  @media ${device.mobile} {
    font-size: 2.5rem;
    width: auto;
    line-height: 48px;
    margin-bottom: 1em;
  }
`;

const CtaSection = styled.div`
    @media ${device.mobile} {
        margin-bottom: 4em;
    }

    & h3 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5em;

        @media ${device.mobile} {
            font-size: 1.5rem;
        }
    }

    & p {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 2.5em;
        width: 500px;

        @media ${device.mobile} {
            font-size: 1.2rem;
            width: auto;
        }
    }
`;

const StyledForm = styled.form`
    width: max-content;

    @media ${device.mobile} {
        width: auto;
    }

    & label {
        font-size: 1rem;
        font-weight: 400;
        display: block;
        margin-bottom: 1em;
    }

    & > div {
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: relative;

        @media ${device.mobile} {
            position: relative;
        }

        & div.input {
            height: 100%;
            border-radius: 20px 0 0 20px;
            background-color: #FFFFFF;
            display: flex;
            align-items: center;
            padding-left: 1em;
            width: calc(100% - 20px);

            & span {
                display: inline-block;

                &.input {
                    margin-left: 0.5em;
                }
            }
        }

        & input {
            display: inline-block;
            height: 100%;
            border: none;
            padding: 0 1.5em;

            @media ${device.mobile} {
                position: absolute;
                bottom: 0;
            }

            &[type="text"] {
                outline: none;
                padding: 0;
                font-size: 0.875rem;

                @media ${device.mobile} {
                    position: relative;
                }

                &.failure {
                    &::placeholder {
                        color: red;
                    }
                }
            }

            &[type="submit"] {
                border-radius: 20px;
                font-weight: 500;
                position: absolute;
                right: 0;
                background-color: #2031AE;
                text-transform: uppercase;
                color: #FFFFFF;
                cursor: pointer;
            }
        }

        & > span {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            border-radius: 20px;
            left: -20px;
            background-color: #2031AE;
            width: 103.77px;
            right: 0;
            bottom: 0;
            padding: 5px 0;

            @media ${device.mobile} {
                position: absolute;
                left: auto;
            }
        }
    }`;

const AdSection = styled.div`
    background-color: #FFFFFF;
    border: 10px solid #006640;
    margin-bottom: -6em;
    border-bottom: none;
    border-radius: 40px 0 0 0;
    width: 355px;
    padding: 2.5em 2em 5em 2em;
    position: relative;

    @media ${device.mobile} {
        width: 80%;
        margin: 0 auto -6em auto;
        padding: 1.5em 1.5em 6em 1.5em;
    }

    & h3 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 0.5em;

        @media ${device.mobile} {
            font-size: 2.5rem;
        }

        & span {
            font-size: 1rem;
            font-weight: 500;

            @media ${device.mobile} {
                font-size: 0.75rem;
            }
        }
    }

    & p {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 30px;

        @media ${device.mobile} {
            font-size: 1rem;
            line-height: normal;
        }
        
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }
`;

const PositionedImage = styled(Image)`
    position: absolute;
    display: block;
    top: ${props => (props.top) ? `${props.top}px` : "auto"};
    bottom: ${props => (props.bottom) ? `${props.bottom}px` : "auto"};
    left: ${props => (props.left) ? `${props.left}px` : "auto"};
    right: ${props => (props.right) ? `${props.right}px` : "auto"};
    height: ${props => `${props.size}px`};
    transform: rotate(${props => `${props.rotation}deg`});
    width: auto;
`;

const Invite = ({
    formContext,
    setFormContext,
}: {
    formContext: PopupProps;
    setFormContext: Dispatch<SetStateAction<PopupProps>>;
}) => <StyledSection id="refer-and-earn">
        <SectionContent>
            <TopSection>
                <BigHeading>
                    Invite friends over and compete for the ultimate financial market glory
                </BigHeading>
            </TopSection>
            <BottomSection>
                <CtaSection>
                    <h3>Refer & Earn!</h3>
                    <p>Invite your friends & family to double the fun and compete for the ultimate financial market glory.</p>
                    <StyledForm onSubmit={(ev) => submitHandler(ev, 1, setFormContext)}>
                        <label htmlFor="mobile">Enter your Whatsapp number to receive your unique referral link</label>
                        <div>
                            <div className="input">
                                <span>+91 - </span>
                                <span className="input">
                                    <input type="text" autoComplete="off" maxLength={10} pattern="[0-9]{10}" required placeholder={
                                        formContext?.status?.[1] === "failure" ? "Invalid Mobile Number" : "Enter Mobile Number"
                                    }
                                        className={formContext?.status?.[1]} name="mobile" id="mobile" />
                                </span>
                            </div>
                            {formContext?.loading?.[1] ? <span>
                                <Loader color="#2031AE" />
                            </span> : <input type="submit" value="send link" />}
                        </div>
                    </StyledForm>
                </CtaSection>
                <AdSection>
                    <h3>
                        ₹100 <span>Game Credit</span>
                    </h3>
                    <p>Get ₹100 when you sign up</p>
                    <p>Get ₹100 for every friend that downloads the app.
                    </p>

                    {coinCssDetails.map((x, i) => <PositionedImage src={`${asset_prefix}/assets/coin.svg`} alt="icon" key={i} {...x} />)}
                    {starCssDetails.map((x, i) => <PositionedImage src={`${asset_prefix}/assets/star.svg`} alt="icon" key={i} {...x} />)}
                </AdSection>
            </BottomSection>
        </SectionContent>
    </StyledSection>;

export default Invite;;;