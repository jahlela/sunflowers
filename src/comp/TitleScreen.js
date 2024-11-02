import React from 'react';
import Choice from './Choice';

//title screen component
const TitleScreen = ({gameStart}) => {
    //gameStart is passed up to App.js so we can use onClick to change the state into having started the game
    return (
        <div className="titleScreen">
            <img src={require("../img/dreampath_logo.png")} alt="Dream PATH Logo" className="logo" />
            {/* <h2 className='mainTitle'>Welcome to Dream PATH!</h2> */}
            <h3 className='mainText'>Discover your future 🔮</h3>
            <div className='mainText'>Hey there, future leaders! 🌟 Welcome to Dream Path - the ultimate hub for teens in Switzerland to explore apprenticeship and internship opportunities.
Find engaging assessments and real-life career scenarios. Start your journey towards an exciting future with us today!
</div>
            <div className="titleScreenChoices">
                <Choice handleClick={gameStart} text="Let's go! 😀" />
            </div>
        </div>
    );
}

export default TitleScreen