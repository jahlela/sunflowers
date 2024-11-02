import React from "react";


const LearnMoreModal = ({ onClose, currentSelection }) => {
    console.log("Modal Data:", currentSelection); // Check what data is being passed
    const { id, modalContent } = currentSelection;

  
    return (
      <div className="modalOverlay" >
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
            <img src={require(`../img/employee${id}.jpg`) || `../img/employee${id}.jpg`} alt="UBS team member" className="modalImage" />
            <h2>{modalContent.description}</h2>
            <ul>
                {modalContent.statements.map((statement, index) => (
                    <li key={index}>{statement}</li>
                ))}
            </ul>
        </div>
      </div>
    );
  };

export default LearnMoreModal;
