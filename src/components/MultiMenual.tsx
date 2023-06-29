/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";
import Testimonial from "./Testimonial";

const MenuBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MultiMenual = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const reverseParallax = useTransform(parallax, (v) => -v);
  useMotionValueEvent(parallax, "change", (v) => console.log(v));

  return (
    <div
      className="flex min-h-[150vh] w-full flex-col items-center justify-center gap-12 bg-secondary px-4 py-24 md:p-24"
      ref={target}
    >
      <h2>What Our Happy Clients Say</h2>
      <MenuBlock className="flex grow flex-wrap items-center items-center justify-center justify-center gap-24">
        <Testimonial parallax={parallax}>
          <img
            className="picture"
            src="https://picsum.photos/800/500"
            alt="Cat and dog"
            width={150}
          />
          <div>
            &quot;They do a great job making Milo look so lovely. The staff are
            knowledgeable and friendly, always willing to give help and advice.
            Would definitely recommend!&quot;
          </div>
        </Testimonial>
        <Testimonial parallax={reverseParallax}>
          <img
            className="picture"
            src="https://picsum.photos/800/500"
            alt="Cat and dog"
            width={150}
          />
          <div>
            &quot;They do a great job making Milo look so lovely. The staff are
            knowledgeable and friendly, always willing to give help and advice.
            Would definitely recommend!&quot;
          </div>
        </Testimonial>
        <Testimonial parallax={parallax}>
          <img
            className="picture"
            src="https://picsum.photos/800/500"
            alt="Cat and dog"
            width={150}
          />
          <div>
            &quot;They do a great job making Milo look so lovely. The staff are
            knowledgeable and friendly, always willing to give help and advice.
            Would definitely recommend!&quot;
          </div>
        </Testimonial>
      </MenuBlock>
    </div>
  );
};

export default MultiMenual;
