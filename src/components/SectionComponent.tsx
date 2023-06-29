import React from "react";
import styled from "@emotion/styled";

type Props = {
  title?: string;
  desc?: string;
  img?: string;
  direction?: string;
  backgroundColor?: string;
};

const Container = styled.div<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 16px;
  font-weight: 600;
`;

const Title = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
`;

const SectionComponent = ({
  title,
  desc,
  img,
  direction,
  backgroundColor,
}: Props) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <div>
        <Title>{title}</Title>
        <p>{desc}</p>
      </div>
    </Container>
  );
};

export default SectionComponent;
