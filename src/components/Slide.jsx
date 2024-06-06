import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';
import TextContent from './TextContent';
import './Slide.css';

const Slide = ({ content, icon, key }) => {
  return (
    <motion.div
      className="slide"
      key={key}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        exit: { opacity: 0 }
      }}
    >
      <div className="slide-content">
        <Icon icon={icon} />
        <TextContent content={content} />
      </div>
    </motion.div>
  );
};

export default Slide;
