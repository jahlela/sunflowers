import { motion } from 'framer-motion';
import React from 'react';

const Choice = ({handleClick, text}) => {
  return (
      <motion.button className="choiceButton" onClick={handleClick}>
          {text}
      </motion.button>
  );
}

export default Choice

