import styled from 'styled-components';
import { ComponentProps } from '../types/postdata';

const StyledA = styled.div`
  border: 1px solid lightblue;
  padding: 1em;
`;

function ComponentB({ text }: ComponentProps) {
    return <StyledA>
        <p>
            {text}
        </p>
    </StyledA>;
}

export default ComponentB;