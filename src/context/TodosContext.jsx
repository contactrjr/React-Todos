import { useState, useEffect, createContext, useContext } from 'react';
import {v4 as uuid4} from "uuid";

const TodosContext = createContext(null);

export const TodosProvider = ({children}) => {

    const [todos, setTodos] = useState(getInitialTodos());
    useEffect( () => {
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos',temp);
      }, [todos]
    );
    function getInitialTodos(){

      const getTodos = localStorage.getItem('todos');
      const parsedTodos = JSON.parse(getTodos);
      return parsedTodos || [];
    }

    const deltodo = (id) => {
      console.log('Deleted : ', id)
      setTodos([
        ...todos.filter( (todo) => {
          return todo.id != id;
        }

        ),
      ]);
    }
    const addTodoItem = (title) => {
      const newItem = {
        id: uuid4(),
        title:title,
        completed:false,
      }
      
      setTodos([...todos, newItem]);
    }
    const setUpdatedTitle = (newTitle, id) =>{
      setTodos(
        todos.map ( (todo)=>{
          if(todo.id === id){
            todo.title = newTitle;
            console.log ('Inside the logic : ', newTitle, id);
          } 
          return todo;
        }
        ));
      };
      const headerVal = "New header title here as a global state..."


    return(
        <TodosContext.Provider value={{todos, setTodos, deltodo, addTodoItem, setUpdatedTitle, headerVal}}>
            {children}
        </TodosContext.Provider>
    );
};

export const useTodosContext = () =>useContext(TodosContext);
//export { TodosContext };
