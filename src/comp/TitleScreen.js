import React from 'react';
import Choice from './Choice';

//title screen component
const TitleScreen = ({gameStart}) => {
    //gameStart is passed up to App.js so we can use onClick to change the state into having started the game
    return (
        <div className="titleScreen">
            <div className="titleScreenChoices">
                <Choice handleClick={gameStart} text="Let's go! 😀" />
            </div>
        </div>
    );
}

export default TitleScreen