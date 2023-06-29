import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";

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
    <div>
      <Head>
        <title>Framer Sample Page</title>
      </Head>
      <MainSection>{children}</MainSection>
    </div>
  );
};

export default Layout;
