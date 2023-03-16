import { useState} from "react";
import {RxEnter} from "react-icons/rx";

import { useTodosContext } from "@/context/TodosContext";


const InputTodo = ({}) => {

    const {addTodoItem} = useTodosContext();

    const [title,setTitle] = useState('');

    const HandleChange = (e) => {
        setMessage('');
    setTitle(e.target.value)
    }
    //const newTodo = {}
    const [message,setMessage] = useState('');
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        if (title.trim()){
            addTodoItem(title)
            setMessage('')
        }
        else{
            console.log("Empty")
            setMessage('Please type a todo')
        }
        setTitle('');
    }
    const val = useTodosContext();
    console.log('Input todo value : ', val);
    return (
        
        
        <>
        
        <form onSubmit={HandleSubmit} className="form-container">
            <input type="text" className="input-text"
            placeholder="Enter your task" 
            value={title}
            onChange = {HandleChange}            />
            <button className="input-submit"><RxEnter/></button>
        </form>
        <span className="submit-warning">{message}</span>
        </>
    )
    };

export default InputTodo;