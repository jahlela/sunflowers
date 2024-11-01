import React from "react";
import data from "../data";
import EndingList from "./EndingList";

function EndingModal({ handleClose, endings, endingTotal }) {
    const endingList = []; //array to populate which displays list of endings

    //use for loop to populate array
    for (let i = 2; i < endingTotal + 2; i++) {
        let showEnding;

        if (endings.includes(i)) {
            //if youve unlocked this ending
            showEnding = <EndingList ending={i} data={data} key={i} />; //show
        } else {
            showEnding = <li>???</li>;
        }

        endingList.push(showEnding);
    }
    console.log(endingList);
    //const endingList = endings.map((ending, index) => <EndingList ending={ending} data={data} key={index} />);
    return (
        <div className="modalBg" onClick={handleClose}>
            <div className="modalContainer">
                <div className="modalContent">
                    <h1>Endings Reached</h1>
                    <h2>
                        {endings.length} / {endingTotal}
                    </h2>
                    <ol>{endingList}</ol>
                </div>
                <div className="modalFooter">
                    <h2>Click anywhere to close</h2>
                </div>
            </div>
        </div>
    );
}

export default EndingModal;
