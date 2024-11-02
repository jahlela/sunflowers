import { motion } from 'framer-motion';
import React from 'react';

const Footer = ({score,endings, handleClick, endingTotal}) => {
  return (
      <div className="clear">
        <div className="footerContainer">
          <div className="footer">
              <h2>Score: {score}</h2>
              <motion.button className="endingsBtn" onClick={handleClick}>
                  Learn more
              </motion.button>
          </div>
        </div>
      </div>
  );
}

export default Footer