import styled from 'styled-components';
import { ComponentProps } from '../types/postdata';

const StyledA = styled.div`
  border: 1px solid red;
  padding: 1em;
  margin-bottom: 1em;
`;

function ComponentA({ text }: ComponentProps) {
  return <StyledA>
    <p>
      {text}
    </p>
  </StyledA>;
}

export default ComponentA;