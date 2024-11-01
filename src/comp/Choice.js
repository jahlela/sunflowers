import { motion } from 'framer-motion';
import React from 'react';

const Choice = ({handleClick, text}) => {
  return (
      <motion.button whileHover={{ scale: 1.2, backgroundColor: ["rgb(52, 50, 119)", "rgb(94, 50, 119)"] }} transition={{ duration: 0.2 }} className="choiceButton" onClick={handleClick}>
          {text}
      </motion.button>
  );
}

export default Choice