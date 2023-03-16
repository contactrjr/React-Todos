import styles from '@/styles/TodoItem.module.css';
import { useState, useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosContext } from '@/context/TodosContext';
import { useAuthContext } from '@/context/AuthContext';


const TodoItem = ({item}) => {
    const {setTodos, deltodo, setUpdatedTitle} = useTodosContext();

    const {user} = useAuthContext();

    const HandleChange = (id) => {
        console.log("selected id : ",id)
        setTodos ((prevtodo) => prevtodo.map((todo) =>
        {
            if (todo.id === id ){
                return({
                    ...todo,
                    completed: !todo.completed,
                })
            }
            return todo;

        }))
    };

    const updatedRefTitle = useRef(null);
    const completedStyle = {
        fontStyle : 'italic',
        color : '#red',
        opacity : 0.4,
        textDecoration : 'line-through'
     
    };
    const [editTitle,setEditTile] = useState(false);
    const HandleEditTitle = () =>{
        console.log('Edittitle : ',editTitle)
        setEditTile(true);
    }
    let editMode = {};
    let viewMode = {};

    if (editTitle){
        viewMode.display = 'none'
    }else {
        editMode.display = 'none'
    };
    const [newTitle, setNewTitle] = useState(item.title);
    const handleUpdateTitle = (e) => {
        setNewTitle(e.target.value)
        //setUpdatedTitle(e.target.value, item.id);
    } 

    const [cancelUpdate, setCancelUpdate]=useState('');
    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            
            console.log('New value in keydown (enter) : ', updatedRefTitle.current.value)
            //setUpdatedTitle(newTitle, item.id);
            setUpdatedTitle(updatedRefTitle.current.value, item.id)
            setEditTile(false);
        }
        if(event.key === 'Escape'){
            console.log('Esc pressed:', item.title);
            setUpdatedTitle(item.title, item.id);
            setEditTile(false);
            //item.title = updatedRefTitle.current.value;
            //setNewTitle(item.title);
            
            
        }
    };
    

    return (
        <>
        
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
            <input 
                type="checkbox" 
                checked={item.completed} 
                onChange= { () => HandleChange(item.id) } />
            <span style={item.completed ? completedStyle : null}> 
                {item.title /*newTitle*/}
            </span>
            
            {user && (<button onClick={() => deltodo(item.id)}><FaTrash/></button>)}
                
            {user && (<button onClick={HandleEditTitle}>
                <AiFillEdit
                style={{
                    color: "red",
                    fontSize: "26px"
                    
                }}
                />
                <div className="tooltip">
                <span className="tooltiptext"
                >Edit</span>
                </div>
            </button>)}
            </div>
            
            <input type="text"
            /*value={/*newTitle item.title} */
            ref={updatedRefTitle}
            defaultValue={item.title}
            className={styles.textInput}         
            
            style={editMode}
            /*onChange= { /*handleUpdateTitle (e) => setUpdatedTitle(e.target.value, item.id, cancelUpdate)} */
            
            onKeyDown = {handleKeyDown}
            >
            
            </input>
        </li>
        </>
    );
};

export default TodoItem;