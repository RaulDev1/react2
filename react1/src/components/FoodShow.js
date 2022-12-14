import { useState } from "react";
import FoodEdit from "./FoodEdit";

const FoodShow = ({meal, onDelete, onEdit}) => {
const [showEdit, setShowEdit] = useState(false);

    const handleDeliteClick = () => {
        onDelete(meal.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleTitleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    const handleReceiptSubmit = (id, newReceipt) => {
        setShowEdit(false);
        onEdit(id, newReceipt);
    };

    let content = <h3>{meal.title}</h3>;
    if (showEdit) {
        content = <FoodEdit onSubmit={handleTitleSubmit} meal={meal}/>
    };
    let content2 = <h3>{meal.receipt}</h3>;
    if (showEdit) {
        content2 = <FoodEdit onSubmit={handleReceiptSubmit} meal={meal}/>
    };

    return (
        <div className="food-show">
            <div>{content}</div>
            <div>{content2}</div> 
             <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Изменить
                </button>
                <button className="delete" onClick={handleDeliteClick}>
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default FoodShow;