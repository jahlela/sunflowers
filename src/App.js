import { useEffect, useState } from "react";
import "./App.scss";
import EndingModal from "./comp/EndingModal";
import Footer from "./comp/Footer";
import Main from "./comp/Main";
import TitleScreen from "./comp/TitleScreen";
import data from "./data";

function App() {
    // State
    const [inGame, setInGame] = useState(0); // whether player has started the game or not
    const [currentId, setCurrentId] = useState(0); // the current story node you're on
    const [score, setScore] = useState(0); // the score
    const [endings, setEndings] = useState([]); // endings you've gotten
    const [endingModal, setEndingModal] = useState(false);
    const endingTotal = 5; // total number of endings

    // Language state
    const [language, setLanguage] = useState("EN"); // default to English

    // Load saved language preference from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "EN";
        setLanguage(savedLanguage);
    }, []);

    // Save game data to localStorage whenever relevant state changes
    useEffect(() => {
        if (inGame) {
            localStorage.setItem("currentId", JSON.stringify(currentId));
            localStorage.setItem("score", JSON.stringify(score));
            localStorage.setItem("endings", JSON.stringify(endings));
        }
    }, [inGame, currentId, score, endings]);

    // Update the language and store it in localStorage
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    // Function to handle choice click
    const choiceClicked = (goTo, scoreToSet) => {
        console.log(`score is ${score}, current id is ${currentId}`);
        setCurrentId(goTo);

        // If current id is an ending
        if (!data[goTo].choice.length) {
            if (!endings.includes(data[goTo].id)) {
                let endingsUnsorted = [...endings, data[goTo].id];
                setEndings(endingsUnsorted.sort((a, b) => a - b));
                console.log(`endings - ${endings}`);
            }
        }

        setScore(scoreToSet);

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200); // scroll to top of window after a 0.2 second delay

        console.log(`score is ${score}, current id is ${currentId}`);
    };

    // Function for either loading an existing game or starting a new game. 0 is start, 1 is load
    const gameStartLoad = (startLoad) => {
        if (startLoad) {
            const loadId = JSON.parse(localStorage.getItem("currentId"));
            if (loadId) setCurrentId(loadId);

            const loadScore = JSON.parse(localStorage.getItem("score"));
            if (loadScore) setScore(loadScore);

            const loadEndings = JSON.parse(localStorage.getItem("endings"));
            if (loadEndings) setEndings(loadEndings);

            console.log("loaded existing game " + currentId + startLoad);
        } else {
            setCurrentId(0);
            setScore(0);
            setEndings([]);
        }

        setInGame(1); // set the in-game variable to true
    };

    return (
        <div className="App">
            {!inGame && <div className="mainText">🌻 The Sunflowers</div>}
            {inGame ? (
                <Main score={score} currentId={currentId} choiceClicked={choiceClicked} />
            ) : (
                <TitleScreen
                    gameStart={() => gameStartLoad(0)}
                    gameLoad={() => gameStartLoad(1)}
                    data={data}
                    language={language} // Pass the language state to TitleScreen
                />
            )}
            {/* Render EndingModal if endingModal is true */}
            {endingModal && (
                <EndingModal
                    handleClose={() => setEndingModal(false)}
                    endingTotal={endingTotal}
                    endings={endings}
                />
            )}
            {/* Pass language state and language change handler to Footer */}
            <Footer
                language={language}
                onLanguageChange={handleLanguageChange}
                score={score}
                endings={endings.length}
                endingTotal={endingTotal}
                handleClick={() => setEndingModal(true)}
            />
        </div>
    );
}

export default App;
