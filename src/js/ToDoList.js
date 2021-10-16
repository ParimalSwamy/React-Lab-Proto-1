import React, {Component} from 'react'
import ListElement from './ListElement.js'

function ToDoList(){    
    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState("")
    const showDate  = new Date().toDateString()

    function handleSubmit(e){
        e.preventDefault();
        
        const newTodo = {
            id : new Date().getTime(),
            text : todo,
            completed : false
        }

        setTodos([...todos].concat(todo))
        setTodo("")
    }
    

    return(
        <div className="todo-panel todo-box">
            <h2>To Do List</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="task-input" type="text" placeholder="+ Add task" onChange={(e)=> setTodo(e.target.value)} value={todo}/>
                </form>
                <div>
                    {todos.map((todo)=><ListElement todo={todo} time={showDate}/>)}
                </div>
            </div>
        </div>
    );
    
}

export default ToDoList;