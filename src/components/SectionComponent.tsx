import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

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
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const Title = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
`;

const ButtonBlock = styled.div`
  margin-bottom: 24px;
  gap: 16px;
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
        <ButtonBlock>
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Link href="/sample1">
            <Button>Sample1</Button>
          </Link>
          <Link href="/sample2">
            <Button>Sample2</Button>
          </Link>
          <Link href="/sample3">
            <Button>Sample3</Button>
          </Link>
        </ButtonBlock>

        <div>
          <Title>{title}</Title>
          <p>{desc}</p>
        </div>
      </div>
    </Container>
  );
};

export default SectionComponent;
