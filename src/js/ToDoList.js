import React, {Component} from 'react'
import List from './List'

class ToDoList extends Component{
    render(){
        return(
            <div className="todo-panel todo-box">
                <h2>To Do List</h2>
                <List/>
            </div>
        );
    }
}

export default ToDoList;