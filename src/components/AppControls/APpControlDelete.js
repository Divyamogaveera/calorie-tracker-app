import React from "react";
// import React from "react";

const APpControlDelete = ({ deleteAllMeals }) => {
  return (
    <div className="app__controls__delete">
      <button className="btn__delete__all" onClick={() => deleteAllMeals()}>
        Delete All
      </button>
    </div>
  );
};

export default APpControlDelete;
