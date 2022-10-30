/** @format */

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: inline-block;
  text-align: left;
  line-height: 49px;
  height: 49px;
  vertical-align: middle;
`;

const StyledH1 = styled.h1`
  display: inline-block;
  margin: 0;
  margin-right: 20px;
  padding: 0 23px 0 0;
  font-size: 24px;
  font-weight: 500;
  vertical-align: top;
  line-height: 49px;
`;

const StyledH2 = styled.h2`
  font-size: 14px;
  font-weight: normal;
  line-height: 49px;
  margin: 0;
  padding: 0;
`;

const PrivacyPolicy = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname, window.location.pathname);
  }, []);

  return (
    <main>
      <Head>
        <title>TradingLeagues: Privacy Policy</title>
        <style>
          {`body { margin: 0; color: #000; background: #fff; }
            .next-error-h1 {
                border-right: 1px solid rgba(0, 0, 0, .3);
            }

            @media (prefers-color-scheme: dark) {
                body { color: #fff; background: #000; }
                .next-error-h1 {
                border-right: 1px solid rgba(255, 255, 255, .3);
                }
            }`}
        </style>
      </Head>
      <Container>
        <Container>
          <StyledH1 className="next-error-h1">404</StyledH1>
          <div>
            <h2>This page could not be found.</h2>
          </div>
        </Container>
      </Container>
    </main>
  );
};

export default PrivacyPolicy;
