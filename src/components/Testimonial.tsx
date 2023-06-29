import React from "react";
import { motion, MotionValue, Variants } from "framer-motion";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  parallax: MotionValue<number>;
};

const Container = styled(motion.div)`
  display: block;
  border: 1px solid;
  margin: 0 12px;
`;

const Testimonial = ({ children, parallax }: Props) => {
  return (
    <Container style={{ y: parallax }}>
      {children}
      <div className="w-full text-start font-bold">
        randomName, randomLocation
      </div>
    </Container>
  );
};

export default Testimonial;
