import React from "react";

const AppContolsCounter = ({ total }) => {
  return (
    <div className="app__controls__counter">
      <h2>
        total calories: <span>{total}</span>
      </h2>
    </div>
  );
};

export default AppContolsCounter;
