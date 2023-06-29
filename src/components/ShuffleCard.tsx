import React from "react";
import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const Container = styled.div`
  height: 40vh;
  overflow-x: auto;
  margin-top: 10vh;
`;

const CardArea = styled.div`
  width: 50vw;
  margin: auto;
`;

const CardBlock = styled(motion.div)`
  font-size: 164px;
  width: 300px;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
`;

const CardContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: -120px;
`;

const Splash = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  clip-path: path(
    "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
  );
`;

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <CardContainer
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <Splash style={{ background }} />
      <CardBlock variants={cardVariants}>{emoji}</CardBlock>
    </CardContainer>
  );
}

const ShuffleCard = () => {
  return (
    <Container>
      <CardArea>
        {food.map(([emoji, hueA, hueB]) => (
          <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </CardArea>
    </Container>
  );
};

export default ShuffleCard;
