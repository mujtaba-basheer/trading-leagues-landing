import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';

const StyledHeading = styled.h1`
  font-size: 1.2em;
  color: black;
  padding: 0.5em;
`;

const StyledContainer = styled.div`
  padding: 1em;
  border: 2px solid black;
`;

const ImageContainer = styled.div`
  padding: 0.5em;
  background-color: black;
`;

const App: NextPage<{}> = () => {
  return (
    <main>
      <Head>
        <title>Trading Leagues</title>
      </Head>

      <StyledHeading>Landing Page</StyledHeading>

      <StyledContainer>
        <ComponentA text='Component A' />
        <ComponentB text='Component B' />
      </StyledContainer>

      <ImageContainer>
        <Image
          src="/assets/logo.svg" // Route of the image file
          height={50} // Desired size with correct aspect ratio
          width={296} // Desired size with correct aspect ratio
          alt="Logo"
        />
      </ImageContainer>
    </main>
  );
};

export default App;
