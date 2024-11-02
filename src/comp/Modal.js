import React from 'react';

const Modal = ({ isOpen, onClose, currentSelection }) => {
  const { id, modalData } = currentSelection;
  console.log(currentSelection);
  if (!isOpen || !modalData) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContainer">
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
          <img src={require(`../img/employee${id}.jpg`) || `../img/employee${id}.jpg`} alt="UBS team member" className="modalImage" />
          <h2>{modalData.description}</h2>
          <ul>
            {modalData.statements.map((statement, index) => (
              <li key={index}>{statement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
