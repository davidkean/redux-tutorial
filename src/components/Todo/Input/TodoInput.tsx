import React, { useState } from "react";
import "./TodoInput.scss";

interface TodoItemProps {
   handleAddItem: (arg0: string) => void;
}

export const TodoInput: React.FC<TodoItemProps> = ({ handleAddItem }) => {
   const [todoText, setTodoText] = useState<string>("");

   const handleSubmit = () => {
      handleAddItem(todoText);
      setTodoText("");
   };

   return (
      <div className="todo-input">
         <input className="todo-input__textbox" type="text" value={todoText} onChange={event => setTodoText(event.target.value)} />

         <button className="todo-input__submit-btn" onClick={handleSubmit}>
            Add
         </button>
      </div>
   );
};
