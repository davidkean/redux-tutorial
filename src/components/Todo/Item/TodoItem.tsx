import React from "react";
import classnames from "classnames";
import { ITodoItem } from "../../../interfaces/todoItem.interface";
import "./TodoItem.scss";

interface TodoItemProps {
   todoItem: ITodoItem;
   handleCompleted: (arg0: string) => void;
   handleDelete: (arg0: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
   todoItem,
   handleCompleted,
   handleDelete
}) => {
   const { id, text, completed } = todoItem;

   const todoTextClasses = classnames("todo-item__text", {
      "todo-item__text--completed": completed
   });

   return (
      <div className="todo-item">
         <div className={todoTextClasses}>{text}</div>
         <div className="todo-item__controls">
            {!completed && (
               <button
                  className="complete-btn"
                  onClick={() => handleCompleted(id)}
               >
                  Complete
               </button>
            )}
            <button className="delete-btn" onClick={() => handleDelete(id)}>
               X
            </button>
         </div>
      </div>
   );
};
