import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Framer Sample Page</title>
      </Head>
      <MainSection>{children}</MainSection>
    </>
  );
};

export default Layout;
