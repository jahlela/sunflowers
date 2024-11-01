import React from 'react';
import Choice from './Choice';

//title screen component
const TitleScreen = ({gameStart, gameLoad, data}) => {
    const saveExists = localStorage.getItem("currentId")
    //gameStart is passed up to App.js so we can use onClick to change the state into having started the game
    return (
        <div className="titleScreen">
            <div className="titleScreenChoices">
                <Choice handleClick={gameStart} text="New Game" />
                <div>
                    {saveExists && <Choice handleClick={gameLoad} text="Load Game" />}
                </div>
            </div>
        </div>
    );
}

export default TitleScreen