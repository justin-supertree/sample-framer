import React from "react";
import styled from "@emotion/styled";

import { NextPageWithLayout } from "@/types/next-page";

import Layout from "@/components/Layout";
import SectionComponent from "@/components/SectionComponent";

const Container = styled.section`
  width: 100%;
  overflow: hidden;
`;

const IndexPage: NextPageWithLayout = () => {
  return (
    <Container>
      <SectionComponent
        title="section sample"
        desc="section text sample"
        direction=""
        backgroundColor=""
      />
    </Container>
  );
};

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
