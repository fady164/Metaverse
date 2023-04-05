"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion.js";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        textStyles="text-center"
        title="Track friends around you and invite them to play together in the same world"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] w-full h-[550px]"
      >
        <img
          src="/map.png"
          className="w-full h-full 
        object-cover"
          alt=""
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" className="w-full h-full " alt="" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" className="w-full h-full " alt="" />
        </div>
        <div className="absolute top-1/2 left-[50%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" className="w-full h-full " alt="" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
