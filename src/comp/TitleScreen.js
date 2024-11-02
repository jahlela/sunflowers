import React from 'react';
import Choice from './Choice';

const TitleScreen = ({ gameStart, language }) => {
    const content = {
        EN: {
            title: "Discover your future 🔮",
            description: "Hey there, future leaders! 🌟 Welcome to Dream Path - the ultimate hub for teens in Switzerland to explore apprenticeship and internship opportunities at UBS Switzerland. Find engaging assessments and real-life career scenarios. Start your journey towards an exciting future with us today!",
            buttonText: "Let's go! 😀"
        },
        DE: {
            title: "Entdecke deine Zukunft 🔮",
            description: "Hallo zukünftige Führungskräfte! 🌟 Willkommen bei Dream Path - der ultimativen Anlaufstelle für Jugendliche in der Schweiz, um Ausbildungs- und Praktikumsmöglichkeiten bei UBS Schweiz zu entdecken. Finde spannende Bewertungen und realistische Berufsszenarien. Beginne noch heute deine Reise in eine aufregende Zukunft!",
            buttonText: "Los geht's! 😀"
        }
    };

    const { title, description, buttonText } = content[language];

    return (
        <div className="titleScreen">
            <img src={require("../img/dreampath_logo.png")} alt="Dream PATH Logo" className="logo" />
            <h3 className='mainText'>{title}</h3>
            <div className='mainText'>{description}</div>
            <div className="titleScreenChoices">
                <Choice handleClick={gameStart} text={buttonText} />
            </div>
        </div>
    );
}

export default TitleScreen;
