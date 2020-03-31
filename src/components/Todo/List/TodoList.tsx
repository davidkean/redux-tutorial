import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "../Item/TodoItem";
import { TodoInput } from "../Input/TodoInput";
import "./TodoList.scss";

const todoListItems = [
   { id: uuidv4(), text: "Get Milk", completed: false },
   { id: uuidv4(), text: "Do Laundry", completed: false },
   { id: uuidv4(), text: "Paint the kitchen", completed: false }
];

export const TodoList: React.FC<any> = () => {
   const [todoItems, setTodoItems] = useState(todoListItems);

   const handleAddItem = (todoText: string) => {
      setTodoItems([...todoItems, { id: uuidv4(), text: todoText, completed: false }]);
   };

   const handleCompletedItem = (itemId: string) => {
      const updatedItems = todoItems.map(item => {
         return item.id === itemId ? { ...item, completed: true } : item;
      });
      setTodoItems(updatedItems);
   };

   const handleDeletedItem = (itemId: string) => {
      setTodoItems(todoItems.filter(item => item.id !== itemId));
   };

   return (
      <div className="todo-list">
         <div className="todo-list__title">TO-DO:</div>
         <div className="todo-list__items">
            {todoItems.map(item => {
               return <TodoItem key={item.id} todoItem={item} handleCompleted={handleCompletedItem} handleDelete={handleDeletedItem} />;
            })}
         </div>
         <div className="todo-list__input">
            <TodoInput handleAddItem={handleAddItem} />
         </div>
      </div>
   );
};
