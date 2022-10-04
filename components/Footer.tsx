import styled from 'styled-components';

import { socialData } from '../lib/social';

const StyledSection = styled.footer`
  background-color: #191B2A;
  padding: 3em 0;
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CtaSection = styled.div`
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
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 1.75em;

        & span {
            font-size: 1.2rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
        }
    }

    & div.social-list {
        display: inline-flex;
        align-items: flex-end;
        gap: 0.5em;
    }
`;

const StyledForm = styled.form`
    & div {
        height: 40px;

        & input {
            display: inline-block;
            height: 100%;
            border: none;
            padding: 0 1.5em;

            &[type="text"] {
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 20px 0 0 20px;
                outline: none;
                font-size: 1rem;
                color: #FFFFFF;

                &::placeholder {
                    color: #9EA0AA;
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
            }
        }
    }`;

const Footer: () => JSX.Element = () => <StyledSection>
    <SectionContent>
        <CtaSection>
            <img src="/assets/logo_footer.svg" alt="logo" />
            <StyledForm>
                <div>
                    <input type="text" placeholder="Enter Mobile Number" name="mobile" id="mobile" />
                    <input type="submit" value="get early access" />
                </div>
            </StyledForm>
        </CtaSection>
        <SocialSection>
            <h2>Stay ahead of the game</h2>
            <div>
                <span>Follow our trail for the latest updates</span>
                <div className="social-list">
                    {socialData.map(x => <a href={x.url} target="_blank" rel="noreferrer" key={x.title}>
                        <img src={`/assets/social/${x.title}.svg`} alt={x.title} />
                    </a>)}
                </div>
            </div>
        </SocialSection>
    </SectionContent>
</StyledSection>;

export default Footer;