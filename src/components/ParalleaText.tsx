import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import styled from "@emotion/styled";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const Container = styled.section`
  margin-bottom: 15rem;
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 72px;
  font-weight: 800;
`;

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const ParalleaText = () => {
  return (
    <Container>
      <TextBlock>
        <ParallaxText baseVelocity={-1}>
          Framer Motion Framer MotionFramer MotionFramer MotionFramer
          MotionFramer MotionFramer MotionFramer MotionFramer MotionFramer
          MotionFramer MotionFramer MotionFramer MotionFramer MotionFramer
          MotionFramer
        </ParallaxText>
      </TextBlock>

      <TextBlock>
        <ParallaxText baseVelocity={1}>
          Scroll velocityScroll velocityScroll velocityScroll velocityScroll
          velocityScroll velocityScroll velocityScroll velocityScroll
          velocityScroll velocityScroll velocityScroll velocityScroll
        </ParallaxText>
      </TextBlock>
    </Container>
  );
};

export default ParalleaText;
