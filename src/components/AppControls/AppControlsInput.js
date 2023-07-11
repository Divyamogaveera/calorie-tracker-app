import React from "react";

const AppControlsInput = ({
  addMealsHandler,
  mealname,
  calories,
  setMealName,
  setCalories,
}) => {
  const onAddMealsClick = () => {
    addMealsHandler();
  };
  return (
    <div className="app__controls">
      <div className="app__controls__inputs">
        <input
          type="text"
          placeholder="Meal"
          value={mealname}
          onChange={(e) => setMealName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          min={0}
        />
        <button onClick={onAddMealsClick}>Add Meal</button>
      </div>
    </div>
  );
};

export default AppControlsInput;
