import styled from 'styled-components';

import Loader from './ui/Loader';
import { socialData } from '../lib/social';
import { submitHandler } from '../lib/handler';
import device from '../styles/breakpoints';
import { PopupProps } from '../types';
import { Dispatch, SetStateAction } from 'react';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.footer`
  background: url(${asset_prefix}/assets/noise.png), #191B2A;
  background-size: cover;
  padding: 4em 0;
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    display: block;
  }
`;

const CtaSection = styled.div`
    @media ${device.mobile} {
        margin-bottom: 2.25em;
    }

    & img {
        display: block;
        margin-bottom: 1.5em;
    }
`;

const SocialSection = styled.div`
    & h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #FFFFFF;
        margin-bottom: 0.5em;

        @media ${device.mobile} {
            font-size: 1.25rem;
            margin-bottom: 0;
        }
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 1.75em;

        @media ${device.mobile} {
            display: block;
        }

        & span {
            font-size: 1.2rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);

            @media ${device.mobile} {
                font-size: 1rem;
                display: block;
                margin: 1em 0;   
            }
        }
    }

    & div.social-list {
        display: inline-flex;
        align-items: flex-end;
        gap: 0.5em;

        @media ${device.mobile} {
            gap: 2em;
        }
    }
`;

const StyledForm = styled.form`
    & > div {
        height: 40px;
        position: relative;
        display: flex;
        align-items: center;

        & div.input {
            height: 100%;
            width: calc(100% - 20px);
            border-radius: 20px 0 0 20px;
            background-color: rgba(255, 255, 255, 0.1);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            padding-left: 1em;

            @media ${device.mobile} {
                padding-left: 0.5em;
            }

            & span {
                display: inline-block;
                
                @media ${device.mobile} {
                    font-size: 1rem;
                }

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
                padding: 0 1em;
            }

            &[type="text"] {
                background-color: transparent;
                padding: 0;
                outline: none;
                font-size: 1rem;
                color: #FFFFFF;

                @media ${device.mobile} {
                    position: relative;
                }

                &::placeholder {
                    color: #9EA0AA;
                }

                &.failure {
                    &::placeholder {
                        color: red;
                    }
                }
            }

            &[type="submit"] {
                font-size: 0.875rem;
                border-radius: 20px;
                font-weight: 500;
                position: relative;
                left: -20px;
                background-color: #00DF8D;
                text-transform: uppercase;
                color: #15182C;
                cursor: pointer;

                @media ${device.mobile} {
                    font-size: 0.825rem;
                    padding: 0 0.5em;
                    position: absolute;
                    left: auto;
                    right: 0;
                }
            }
        }

        & > span {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            border-radius: 20px;
            left: -20px;
            background-color: #00DF8D;
            width: 163.9px;
            padding: 5px 0;

            @media ${device.mobile} {
                position: absolute;
                left: auto;
                right: 0;
                bottom: 0;
                width: 150px;
            }
        }
    }
`;

const Footer = ({
    formContext,
    setFormContext,
}: {
    formContext: PopupProps;
    setFormContext: Dispatch<SetStateAction<PopupProps>>;
}) => <StyledSection>
        <SectionContent>
            <CtaSection>
                <img src={`${asset_prefix}/assets/logo_footer.svg`} alt="logo" />
                <StyledForm onSubmit={(ev) => submitHandler(ev, 2, setFormContext)}>
                    <div>
                        <div className="input">
                            <span>+91 - </span>
                            <span className="input">
                                <input type="text" autoComplete="off" maxLength={10} pattern="[0-9]{10}" required placeholder={
                                    formContext?.status?.[2] === "failure" ? "Invalid Mobile Number" : "Enter Mobile Number"
                                }
                                    className={formContext?.status?.[2]} name="mobile" id="mobile" />
                            </span>
                        </div>
                        {formContext?.loading?.[2] ? <span><Loader color="#191B2A" /></span> : <input type="submit" value="get early access" />}
                    </div>
                </StyledForm>
            </CtaSection>
            <SocialSection>
                <h2>Stay ahead of the game</h2>
                <div>
                    <span>Follow our trail for the latest updates</span>
                    <div className="social-list">
                        {socialData.map(x => <a href={x.url} target="_blank" rel="noreferrer" key={x.title}>
                            <img src={`${asset_prefix}/assets/social/${x.title}.svg`} alt={x.title} />
                        </a>)}
                    </div>
                </div>
            </SocialSection>
        </SectionContent>
    </StyledSection>;

export default Footer;