import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodoItem } from "../../../interfaces/todoItem.interface";
import "./TodoInput.scss";

interface TodoInputProps {
   handleAddItem: (arg0: ITodoItem) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ handleAddItem }) => {
   const [todoText, setTodoText] = useState<string>("");

   const handleSubmit = () => {
      const newTodo: ITodoItem = {
         id: uuidv4(),
         text: todoText,
         completed: false
      };

      handleAddItem(newTodo);
      setTodoText("");
   };

   return (
      <div className="todo-input">
         <input
            className="todo-input__textbox"
            type="text"
            value={todoText}
            onChange={event => setTodoText(event.target.value)}
         />

         <button className="todo-input__submit-btn" onClick={handleSubmit}>
            Add
         </button>
      </div>
   );
};
