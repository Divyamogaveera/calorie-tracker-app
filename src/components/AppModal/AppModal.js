import React from "react";

const AppModal = ({ setOpenModal }) => {
  return (
    <div className="app__modal">
      <h3>Calories must be bigger than zero and meal name can not be blank</h3>
      <button className="btn__close__modal" onClick={() => setOpenModal(false)}>
        Close
      </button>
    </div>
  );
};

export default AppModal;
