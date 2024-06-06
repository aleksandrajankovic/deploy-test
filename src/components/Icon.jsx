import React from 'react';
import { motion } from 'framer-motion';
import './Slide.css';

const iconVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};

const Icon = ({ icon }) => {
  return (
    <motion.div className="icon" variants={iconVariants} initial="hidden" animate="visible" exit="exit">
      {icon}
    </motion.div>
  );
};

export default Icon;
