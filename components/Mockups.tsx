import styled from 'styled-components';

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const StyledSection = styled.section`
    height: 500px;
    background-image: url(${`"${asset_prefix}/assets/mockups.svg"`});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Mockups: () => JSX.Element = () => <StyledSection className="parallax-item">
</StyledSection>;

export default Mockups;