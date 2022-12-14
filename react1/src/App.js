import './App.css';
import { useState } from 'react';
import FoodCreate from './components/FoodCreate';
import FoodList from './components/FoodList';

const App = () => {
  const [food, setFood] = useState([]);

  const editMealById = (id, newTitle) => {
    const updatedFood = food.map((meal) => {
      if (meal.id === id) {
        return { ...meal, title: newTitle };
      }

      return meal;
    });

    setFood(updatedFood);
  };

  const deleteMealById = (id) => {
      const updatedFood = food.filter((meal) => {
        return meal.id !== id;
      });

      setFood(updatedFood);
  };

  const createFood = (title , receipt) => {
    const updateFood = [...food, {
      id: Math.round(Math.random() * 9999),
      title,
      receipt }];

      setFood(updateFood);
  };

  return (
    <div className="App">
            <FoodCreate onCreate={createFood} />
      <FoodList onEdit={editMealById} food = {food} onDelete={deleteMealById}/>
    </div>
  );
}

export default App;