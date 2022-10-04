import styled from 'styled-components';
import { infoData, infoPoints } from '../lib/info';

const StyledSection = styled.section`
  background-color: #2031AE;
  padding: 3em 0;
`;

const SectionContent = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1em;
`;

const LeftSection = styled.div`
  grid-column: 2 / 7;
`;

const RightSection = styled.div`
  grid-column: 7 / 12;
`;

const BigHeading = styled.h1`
  color: #00DF8D;
  font-size: 4rem;
  font-weight: 700;
  line-height: 76px;
  width: 350px;
  margin-bottom: 0.75em;
`;

const ListContainer = styled.ul`
  list-style:none;
`;

const Point = styled.li`
  font-size: 1.5rem;
  color: #FFFFFF;
  font-weight: 400;

  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const InfoList = styled.ul`
  list-style: none;
`;

const InfoItem = styled.li`
  color: #FFFFFF;

  & h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.35em;
  }

  & p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 28px;
  }

  &:not(:last-child) {
    margin-bottom: 2em;
  }
`;

const InfoSection: () => JSX.Element = () => <StyledSection>
  <SectionContent>
    <LeftSection>
      <BigHeading>
        Take on the market the fun way!
      </BigHeading>
      <ListContainer>
        {infoPoints.map((text, i) => <Point key={i}>{text}</Point>)}
      </ListContainer>
    </LeftSection>
    <RightSection>
      <InfoList>
        {infoData.map((item, i) => <InfoItem key={i}>
          <h3>{item.heading}</h3>
          <p>{item.para}</p>
        </InfoItem>)}
      </InfoList>
    </RightSection>
  </SectionContent>
</StyledSection>;

export default InfoSection;