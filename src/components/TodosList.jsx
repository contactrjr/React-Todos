import TodoItem from "@/components/TodoItem";
import { useTodosContext } from "@/context/TodosContext";


const TodosList = ({todoitems, setTodos, deltodo, setUpdatedTitle}) => {

const {todos} = useTodosContext();
//console.log("In todoslist:",value);

    return (
        <ul>
            {
            todos.map((todo) => ( 
                <TodoItem key={todo.id} item={todo}/>
            
            ))
            }
        </ul>
        //<TodoItem />
    );
};
export default TodosList;