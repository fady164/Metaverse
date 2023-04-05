"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion.js";
import { StartSteps, TitleText, TypingText } from "../components";

import { startingFeatures } from "../constants";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/get-started.png"
          className="w-5/6 h-5/6 object-contain"
          alt=""
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title="Get started with just a few clicks" />
        <div className="mt-8 flex flex-col max-w-[370px] gap-6">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={index} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
