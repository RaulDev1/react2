import { useState } from "react";

const FoodEdit = ({ meal, onSubmit }) => {
    const [title, setTitle] = useState(meal.title);
    const [receipt, setReceipt] = useState(meal.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
        setReceipt(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(meal.id, title);  
        onSubmit(meal.id, receipt);  
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="Food-Edit">
                
                <input className="edit-recipe" value={receipt} onChange={handleChange}/>
                <button className="save">
                    Сохранить
                </button>
            </form>
        </div>
    );
}

export default FoodEdit;