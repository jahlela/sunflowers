import { motion } from 'framer-motion';
import React from 'react';

const Footer = ({score,endings, handleClick, endingTotal}) => {
  return (
      <div className="clear">
        <div className="footerContainer">
          <div className="footer">
              <h2>Score: {score}</h2>
              <motion.button whileHover={{ scale: 1.2, backgroundColor: ["rgb(94, 50, 119)", "rgb(52, 50, 119)"] }} transition={{ duration: 0.2 }} className="endingsBtn" onClick={handleClick}>
                  Roles Unlocked: {endings} / {endingTotal}
              </motion.button>
          </div>
        </div>
      </div>
  );
}

export default Footer