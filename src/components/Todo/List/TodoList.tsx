import React, { useState } from "react";
import { TodoItem } from "../Item/TodoItem";
import { TodoInput } from "../Input/TodoInput";
import { ITodoItem } from "../../../interfaces/todoItem.interface";
import "./TodoList.scss";

export const TodoList: React.FC<any> = () => {
   const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

   const handleAddItem = (todoItem: ITodoItem) => {
      setTodoItems([...todoItems, todoItem]);
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
               return (
                  <TodoItem
                     key={item.id}
                     todoItem={item}
                     handleCompleted={handleCompletedItem}
                     handleDelete={handleDeletedItem}
                  />
               );
            })}
         </div>
         <div className="todo-list__input">
            <TodoInput handleAddItem={handleAddItem} />
         </div>
      </div>
   );
};
