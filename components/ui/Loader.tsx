import styled, { keyframes } from 'styled-components';

import device from '../../styles/breakpoints';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.span`
    display: inline-block;
    position: relative;
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid ${props => props.color}; /* Blue */
    border-radius: 50%;
    height: 90%;
    aspect-ratio: 1 / 1;
    animation: ${rotate} 2s linear infinite;
`;

const Loader = ({ color }: { color: string; }) => <StyledLoader color={color}></StyledLoader>;

export default Loader;