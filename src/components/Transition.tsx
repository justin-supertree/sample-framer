import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  overflow: hidden;
`;

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
};

const Transition = ({ children }: Props) => {
  const { asPath } = useRouter();

  return (
    <Container>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default Transition;
