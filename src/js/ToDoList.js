import React, {Component} from 'react'
import ListElement from './ListElement.js'

function ToDoList(){    
    //hooks
    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState("")
    const [todoEditing,setTodoEditing] = React.useState(null)
    const [editingText,setEditingText] = React.useState("")

    
    React.useEffect(()=>{
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos)
            setTodos(loadedTodos)
        },[]
    )
    
    React.useEffect(()=>{
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos",temp)
        },[todos]
    )

    

    const showDate  = new Date().toDateString()

    function handleSubmit(e){
        e.preventDefault();
        
        const newTodo = {
            id : new Date().getTime(),
            text : todo,
            completed : false
        }

        setTodos([...todos].concat(newTodo))
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
                    {todos.map((todo)=>
                    <ListElement 
                        editingText={editingText} 
                        setTodoEditing={setTodoEditing} 
                        setEditingText={setEditingText} 
                        setTodos={setTodos} 
                        key={todo.id} 
                        todoEditing={todoEditing} 
                        todos={todos} 
                        todo={todo} 
                        time={showDate}
                        className="list-e"
                    />)}
                </div>
            </div>
        </div>
    );
    
}

export default ToDoList;