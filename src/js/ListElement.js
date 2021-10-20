import React from 'react'
import { Component } from 'react';

class ListElement extends Component{

    constructor(props){
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.tickTodo = this.tickTodo.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
    }

    deleteTodo(id) {
        const updatedTodos = [...this.props.todos].filter((todo)=> todo.id !== id)
        this.props.setTodos(updatedTodos)
    }

    tickTodo(id){
        const updatedTodos = [...this.props.todos].filter((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo
        }
        )
        this.props.setTodos(updatedTodos)
    }

    submitEdit(id){
        const updatedTodos = [...this.props.todos].map((todo) => {
            if (todo.id === id) {
              todo.text = this.props.editingText;
            }
            return todo;
          });
          this.props.setTodos(updatedTodos);
          this.props.setTodoEditing(null);
          this.props.setEditingText("")  
    }

  


    render(){
        return(
            <div className="list-e">
                <div className="list-e-text">
                   
                        {this.props.todo.id === this.props.todoEditing ?
                        (<input type="text" className="list-e-text-editing" value={this.props.editingText} className="list-e-text-editing" onChange={(e)=>this.props.setEditingText(e.target.value)} />)
                        :
                        (<p className="list-e-text-todo">{this.props.todo.text}</p>)
                        }
                    
                    <p className="list-e-text-time">{this.props.time}</p>
                </div>

                <div className="list-e-btn">
                    {this.props.todo.id === this.props.todoEditing ? 
                    (<i onClick={()=>this.submitEdit(this.props.todo.id)} className="list-e-btn-submit"></i>) 
                    : 
                    (<i onClick={()=>this.props.setTodoEditing(this.props.todo.id)} className="list-e-btn-edit"></i>)
                }
                    {this.props.todo.completed ?
                (<i 
                    id="completed"
                    checked={this.props.todo.completed}
                    onClick={()=>this.tickTodo(this.props.todo.id)} 
                    className="list-e-btn-done-green"
                ></i>)
                :
                (<i 
                    id="completed"
                    checked={this.props.todo.completed}
                    onClick={()=>this.tickTodo(this.props.todo.id)} 
                    className="list-e-btn-done"
                ></i>)    
                
                }
                    

                    <i onClick={() =>this.deleteTodo(this.props.todo.id)} className="list-e-btn-del"></i>
                </div>
            </div>
            
        );
    }
}



export default ListElement;