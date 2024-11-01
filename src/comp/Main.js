import React, {useState, useEffect} from 'react'
import data from '../data.js'
import Choice from './Choice.js'
import { AnimatePresence, motion } from 'framer-motion'

const Main = ({score, currentId, choiceClicked}) => {
  return (
      <AnimatePresence exitBeforeEnter>
          <motion.div 
            key={currentId} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1}}
            transition={{duration: 0.2}}
            exit={{opacity: 0}}
            
            className="main">
              {/* main text of current node */}
              {/* image of current node. image must have name of current id */}
              <img className="mainImg" src={require(`../img/${currentId}.png`)} alt="" loading="lazy"/>
              <h2 className="mainTitle">{data[currentId].title}</h2>
              <div className="mainText">{data[currentId].text}</div>
              <div className="mainChoices">
                  {data[currentId].choice.length ? ( //if choice array isnt empty list choices
                      data[currentId].choice.map((choice) => {
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
      </AnimatePresence>
  );
}

export default Main