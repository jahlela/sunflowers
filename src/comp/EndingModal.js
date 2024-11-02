import React from "react";

function EndingModal({ handleClose, currentSelection }) {
    const { id, modalContent } = currentSelection;

    return (
        <div className="modalBg" onClick={handleClose}>
            <div className="modalContainer">
                <div className="modalContent">
                    <img
                        src={require(`../img/employee${id}.jpg`) || `../img/employee${id}.jpg`}
                        alt="UBS team member"
                        className="modalImage"
                    />
                    <h2>{modalContent.description}</h2>
                    <ul>
                        {modalContent.statements.map((statement, index) => (
                            <li key={index}>{statement}</li>
                        ))}
                    </ul>
                </div>
                <div className="modalFooter">
                    <h2>Click anywhere to close</h2>
                </div>
            </div>
        </div>
    );
}

export default EndingModal;
