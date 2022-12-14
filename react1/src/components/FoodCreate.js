import { useState } from "react";

const FoodCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [recipe, setRecipe] = useState('');

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const onRecipeChange = (e) => {
        setRecipe(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title,recipe);
    };

    return (
        <div className="food-create">
            <h1>To do List</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Please enter food name" className="input-food" value={title} onChange={onTitleChange} />
                <input placeholder="Please enter recipe" className="input-recipe" value={recipe} onChange={onRecipeChange} />
                <button className="button-2">Enter</button>
                
            </form>
        </div>
    );
}

export default FoodCreate;