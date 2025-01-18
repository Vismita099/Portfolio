import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, // Delay the appearance of the second text
      staggerChildren: 1, // Stagger the texts
    },
  },
};

const AnimatedText = ({ text, delay = 0 }) => (
  <motion.div
    variants={textVariants}
    initial="hidden"
    animate="visible"
    transition={{ delay }}
    className="text-3xl font-semibold"
  >
    {text}
  </motion.div>
);

const About = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center"
    >
      <AnimatedText text="Web Developer" />
      <AnimatedText text="UI/UX Designer" delay={1.5} />
    </motion.div>
  );
};

export default About;
