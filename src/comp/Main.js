import { motion } from 'framer-motion'
import React, { useState } from 'react'
import data from '../data.js'
import Choice from './Choice.js'
import EndingModal from './EndingModal.js'
import LearnMoreModal from './LearnMoreModal.js'

const Main = ({ score, currentId, choiceClicked }) => {
    const currentSelection = data[currentId];
    const { title, text, choice } = currentSelection;
    const [isLearnMoreModalOpen, setLearnMoreModal] = useState(false);

    const openLearnMoreModal = () => {
        console.log("Opening modal..."); // Check if this appears in console
        setLearnMoreModal(true);
    };
    

    const [endings, setEndings] = useState([]); //endings youve gotten
    const [endingModal, setEndingModal] = useState(false);
    const endingTotal = 5;


  return (
    //   <AnimatePresence mode="wait">
          <motion.div 
            key={currentId} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1}}
            transition={{duration: 1.2}}
            exit={{opacity: 0}}
            
            className="main">
              {/* main text of current node */}
              {/* image of current node. image must have name of current id */}
              <img className="mainImg" src={require(`../img/${currentId}.jpg`)} alt="" loading="lazy"/>
              <h2 className="mainTitle">{title}</h2>
              <div className="mainText">{text}</div>
              <div className="cloudButton" role="button" onClick={() => setEndingModal(true)}>
                  <div className='mainText cloudButtonText'>Learn More</div>
              </div>
              {/* <motion.button className="endingsBtn" onClick={() => setEndingModal(true)} /> */}
          {isLearnMoreModalOpen && <LearnMoreModal handleClose={setLearnMoreModal(false)} currentSelection={currentSelection} />} 
          {endingModal && <EndingModal handleClose={() => setEndingModal(false)} endingTotal={endingTotal} endings={endings} />}


              <div className="mainChoices">
                  {choice.length ? ( //if choice array isnt empty list choices
                      choice.map((choice) => {
                          return (
                              <div key={choice.id}>
                                  <Choice handleClick={() => choiceClicked(choice.goTo, score + 1)} text={choice.text}></Choice>
                              </div>
                          );
                      })
                  ) : (
                      //if it is empty, make it a killscreen
                      <div className="killScreenChoices">
                          <h2>The End</h2>
                          <h3>Final Score: {score}</h3>
                           <Choice handleClick={() => choiceClicked(0, 0)} text="Try Again" />
                      </div>
                  )}
              </div>
          </motion.div>
    //   </AnimatePresence>
  );
}

export default Main
