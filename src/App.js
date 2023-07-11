import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import AppContolsCounter from "./components/AppControls/AppContolsCounter";
import APpControlDelete from "./components/AppControls/APpControlDelete";
import AppControlsInput from "./components/AppControls/AppControlsInput";
import react, { useState, useEffect } from "react";
import AppMealsList from "./components/AppMealsList/AppMealsList";
import AppModal from "./components/AppModal/AppModal";
import AppMealsFilter from "./components/AppMealsFilter/AppMealsFilter";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const addMealsHandler = () => {
    // console.log(mealName);
    // console.log(calories);
    const oldMeals = meals ? [...meals] : [];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    };
    const newMeals = oldMeals.concat(meal);

    if (calories <= 0 || mealName === "") {
      // alert("Must not be empty");
      setOpenModal(true);
    } else {
      setMeals(newMeals);
      localStorage.setItem("meals", JSON.stringify(newMeals));
    }
    setMealName("");
    setCalories(0);
    console.log(mealName);
    console.log(calories);
  };

  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));
  };

  const deleteAllMeals = () => {
    setMeals([]);
    localStorage.clear();
  };

  const total =
    meals !== null
      ? meals
          .map((meal) => meal.calories)
          .reduce((acc, value) => acc + +value, 0)
      : 0;
  console.log(total);

  useEffect(() => {
    const oldStates = [...meals];
    if (selectedFilter === "Ascending") {
      const ascendingmeals = oldStates.sort((a, b) => a.calories - b.calories);
      setMeals(ascendingmeals);
    } else if (selectedFilter === "Descending") {
      const descendingMeals = oldStates.sort((a, b) => b.calories - a.calories);
      setMeals(descendingMeals);
    }
  }, [selectedFilter]);

  useEffect(() => {
    const localStorageMeals = JSON.parse(localStorage.getItem("meals"));
    setMeals(localStorageMeals);
  }, [setMeals]);

  return (
    <div className="App">
      <AppBar />
      {openModal ? <AppModal setOpenModal={setOpenModal} /> : ""}
      <AppContolsCounter total={total} />
      <APpControlDelete deleteAllMeals={deleteAllMeals} />
      <AppControlsInput
        addMealsHandler={addMealsHandler}
        mealName={mealName}
        calories={calories}
        setMealName={setMealName}
        setCalories={setCalories}
      />
      <div className="app__meals__container">
        <AppMealsFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler} />
      </div>
    </div>
  );
};

export default App;
