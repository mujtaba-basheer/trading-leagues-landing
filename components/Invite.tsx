import styled from 'styled-components';

import { coinCssDetails, starCssDetails } from '../lib/invite';
import { CssItemProps } from '../types';

const Image = (props: CssItemProps & { src: string; alt: string; }) => <img {...props} />;

const StyledSection = styled.section`
  background-color: #00DF8D;
  padding: 3em 0;
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1em;
`;

const TopSection = styled.div`
  grid-column: 2 / 13;
`;

const BottomSection = styled.div`
  grid-column: 2 / 12;
  display: flex;
  justify-content: space-between;
`;

const BigHeading = styled.h1`
  color: #15182C;
  font-size: 4rem;
  font-weight: 700;
  line-height: 76px;
  width: 750px;
  margin-bottom: 2em;
`;

const CtaSection = styled.div`
    & h3 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5em;
    }

    & p {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 2.5em;
        width: 500px;
    }
`;

const StyledForm = styled.form`
    & label {
        font-size: 1rem;
        font-weight: 400;
        display: block;
        margin-bottom: 1em;
    }

    & div {
        height: 40px;

        & input {
            display: inline-block;
            height: 100%;
            border: none;
            padding: 0 1.5em;

            &[type="text"] {
                border-radius: 20px 0 0 20px;
                outline: none;
            }

            &[type="submit"] {
                border-radius: 20px;
                font-weight: 500;
                position: relative;
                left: -20px;
                background-color: #2031AE;
                text-transform: uppercase;
                color: #FFFFFF;
                cursor: pointer;
            }
        }
    }`;

const AdSection = styled.div`
    background-color: #FFFFFF;
    border: 10px solid #006640;
    margin-bottom: -3em;
    border-bottom: none;
    border-radius: 40px 0 0 0;
    width: 355px;
    padding: 2.5em 2em 5em 2em;
    position: relative;

    & h3 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 0.5em;

        & span {
            font-size: 1rem;
            font-weight: 500;
        }
    }

    & p {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 30px;
        
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }
`;

const Coin = styled(Image)`
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

const Invite: () => JSX.Element = () => <StyledSection>
    <SectionContent>
        <TopSection>
            <BigHeading>
                Invite friends over and compete for the ultimate Financial Market glory
            </BigHeading>
        </TopSection>
        <BottomSection>
            <CtaSection>
                <h3>Refer & Earn!</h3>
                <p>Invite your friends & family to double the fun and compete for the ultimate Financial Market glory.</p>
                <StyledForm>
                    <label htmlFor="mobile">Enter your Whatsapp number to recieve the referral link</label>
                    <div>
                        <input type="text" placeholder="Enter Mobile Number" name="mobile" id="mobile" />
                        <input type="submit" value="send link" />
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

                {coinCssDetails.map((x, i) => <Coin src="/assets/coin.svg" alt="icon" key={i} {...x} />)}
                {starCssDetails.map((x, i) => <Coin src="/assets/star.svg" alt="icon" key={i} {...x} />)}
            </AdSection>
        </BottomSection>
    </SectionContent>
</StyledSection>;

export default Invite;