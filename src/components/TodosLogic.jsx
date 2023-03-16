import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { useState, useEffect } from "react";
import {v4 as uuid4} from "uuid";
import { TodosProvider } from "@/context/TodosContext";
import Header from "@/components/Header"


const TodosLogic = () => {
   /* const todos = [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ];*/
      /*const [todos, setTodos] = useState([
        {
          id: uuid4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuid4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuid4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ])*/
      
            

    return (
            
              
        //<div className="wrapper">
            
            //<div className="todos">
              
              <TodosProvider>
                  
                  <InputTodo />
                  <TodosList />
                  
            </TodosProvider>
           // </div>
        //</div>
        
        
 
        
    );
};
export default TodosLogic;