import React from "react";
import styled from "@emotion/styled";

import { NextPageWithLayout } from "@/types/next-page";

import Layout from "@/components/Layout";
import SectionComponent from "@/components/SectionComponent";

const Container = styled.section`
  width: 100%;
  border: 1px solid;
`;

const IndexPage: NextPageWithLayout = () => {
  return (
    <Container>
      <SectionComponent
        title="section 1"
        desc="section text 111111111111111111111111111111111"
        direction=""
        backgroundColor="lightyellow"
      />
      <SectionComponent
        title="section 2"
        desc="section text 2222222222222222222222222222222222"
        direction=""
        backgroundColor="lightblue"
      />
      <SectionComponent
        title="section 3"
        desc="section text 33333333333333333333333333333333333"
        direction=""
        backgroundColor="lightgreen"
      />
      <SectionComponent
        title="section 4"
        desc="section text 444444444444444444444444444444444444"
        direction=""
        backgroundColor="lightcoral"
      />
    </Container>
  );
};

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
