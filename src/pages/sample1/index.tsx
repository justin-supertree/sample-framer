/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionComponent from "@/components/SectionComponent";
import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";
import MultiMenual from "@/components/MultiMenual";
import ParalleaText from "@/components/ParalleaText";
import ShuffleCard from "@/components/ShuffleCard";

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const introPictureVariants: Variants = {
  hide: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const Container = styled.div`
  padding: 16px 7rem;
  text-align: center;
`;

const EmptyBlock = styled.div`
  width: 100%;
  height: 100vh;
`;

const TextHeader = styled(motion.header)`
  text-align: left;
`;

const IndexOne = () => {
  return (
    <div>
      <SectionComponent
        title="section 1"
        desc="section text 111111111111111111111111111111111"
        direction=""
        backgroundColor=""
      />
      <Container>
        <TextHeader
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <h1 className="text-center text-5xl md:text-start md:text-8xl">
            The Best Pet <br /> Groomers <br /> in Town
          </h1>
          <p>For a pawfect look and feel!</p>
        </TextHeader>
        <motion.div
          className="absolute right-0 -bottom-12 w-full sm:w-4/5 md:-bottom-36 md:w-[950px]"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
          <img
            className="picture"
            src="https://picsum.photos/800/500"
            alt="Cat and dog"
          />
        </motion.div>
      </Container>

      <Container>
        <TextHeader
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <h1 className="text-center text-5xl md:text-start md:text-8xl">
            The Best Pet <br /> Groomers <br /> in Town
          </h1>
          <p>For a pawfect look and feel!</p>
        </TextHeader>
        <motion.div
          className="absolute right-0 -bottom-12 w-full sm:w-4/5 md:-bottom-36 md:w-[950px]"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
          <img
            className="picture"
            src="https://picsum.photos/800/500"
            alt="Cat and dog"
          />
        </motion.div>
      </Container>

      <Container>
        <TextHeader
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <h1 className="text-center text-5xl md:text-start md:text-8xl">
            The Best Pet <br /> Groomers <br /> in Town
          </h1>
          <p>For a pawfect look and feel!</p>
        </TextHeader>
        <motion.div
          className="absolute right-0 -bottom-12 w-full sm:w-4/5 md:-bottom-36 md:w-[950px]"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
          <img
            className="picture"
            src="https://picsum.photos/800/500"
            alt="Cat and dog"
          />
        </motion.div>
      </Container>

      <Container>
        <ParalleaText />
      </Container>

      <Container>
        <MultiMenual />
      </Container>

      <Container>
        <ShuffleCard />
      </Container>

      <EmptyBlock />

      <Container>
        <ParalleaText />
      </Container>
    </div>
  );
};

export default IndexOne;
