import React from 'react';
import { motion } from 'framer-motion';
import './Slide.css';

const textVariants = {
  hidden: { opacity: 0, x: -1000 }, 
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, x: 1000, transition: { duration: 1 } } 
};

const TextContent = ({ content }) => {
  return (
    <motion.div className="text-content" initial="hidden" animate="visible" exit="exit" variants={textVariants}>
      <p className="text">{content}</p>
    </motion.div>
  );
};

export default TextContent;
