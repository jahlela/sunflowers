import { useEffect, useState } from "react";
import "./App.scss";
import EndingModal from "./comp/EndingModal";
import Footer from "./comp/Footer";
import Main from "./comp/Main";
import TitleScreen from "./comp/TitleScreen";
import data from "./data";

function App() {
    //state
    const [inGame, setInGame] = useState(0); //whether player has started the game or not
    const [currentId, setCurrentId] = useState(0); //the current story node you're on
    const [score, setScore] = useState(0); //the score
    const [endings, setEndings] = useState([]); //endings youve gotten

    const [endingModal, setEndingModal] = useState(false);

    const endingTotal = 5; //total number of endings

    //loading data

    // useEffect(() => {
    //     const loadId = JSON.parse(localStorage.getItem("currentId"));
    //     if (loadId) {
    //         setCurrentId(loadId);
    //     }

    //     const loadScore = JSON.parse(localStorage.getItem("score"));
    //     if (loadScore) {
    //         setScore(loadScore)
    //     }

    //     const loadEndings = JSON.parse(localStorage.getItem("endings"));
    //     if (loadEndings) {
    //         setEndings(loadEndings);
    //     }
    // }, [])

    //saving data
    useEffect(() => {
        if (inGame) {
            localStorage.setItem("currentId", JSON.stringify(currentId));
            localStorage.setItem("score", JSON.stringify(score));
            localStorage.setItem("endings", JSON.stringify(endings));
        }
    });

    //functions

    //clicking on an option
    const choiceClicked = (goTo, scoreToSet) => {
        console.log(`score is ${score}, current id is ${currentId}`);
        setCurrentId(goTo);

        //if current id is an ending
        if (!data[goTo].choice.length) {
            //if you dont already have the ending
            if (!endings.includes(data[goTo].id)) {
                //add current id to endings array by spreading endings array and appending current id
                let endingsUnsorted = [...endings, data[goTo].id];
                setEndings(endingsUnsorted.sort((a, b) => a - b));
                console.log(`endings - ${endings}`);
            }
        }

        setScore(scoreToSet);

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, "200"); //scroll to top of window after a .2 second delay

        console.log(`score is ${score}, current id is ${currentId}`);
    };

    //function for either loading an existing game or starting a new game. 0 is start, 1 is load
    const gameStartLoad = (startLoad) => {
        if (startLoad) {
            //if loading an existing game, get values from local storage
            const loadId = JSON.parse(localStorage.getItem("currentId"));
            if (loadId) {
                setCurrentId(loadId);
            }

            const loadScore = JSON.parse(localStorage.getItem("score"));
            if (loadScore) {
                setScore(loadScore);
            }

            const loadEndings = JSON.parse(localStorage.getItem("endings"));
            if (loadEndings) {
                setEndings(loadEndings);
            }
            console.log("loaded existing game " + currentId + startLoad);
        } else {
            //if starting a new game, set all vars to default
            setCurrentId(0);
            setScore(0);
            setEndings([]);
        }

        setInGame(1); //set the in game variable to true
    };

    return (
        <div className="App">
            <div className="mainText">🌻 The Sunflowers present: ProfessionFinder4UBS</div>
            {inGame ? <Main score={score} currentId={currentId} choiceClicked={choiceClicked} /> : <TitleScreen gameStart={() => gameStartLoad(0)} gameLoad={() => gameStartLoad(1)} data={data} />}
            {/* only render main game if game has been started, otherwise render title screen*/}
            {endingModal && <EndingModal handleClose={() => setEndingModal(false)} endingTotal={endingTotal} endings={endings} />}
            {inGame && <Footer score={score} endings={endings.length} endingTotal={endingTotal} handleClick={() => setEndingModal(true)} />}
        </div>
    );
}

export default App;
