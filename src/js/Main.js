import React, { Component } from 'react'
import DateTimePanel from './DateTimePanel.js'
import ToDoList from './ToDoList.js'
import '../style/CSS/style.css'

class Main extends Component{
    render(){
        return(<div>
             <DateTimePanel/>
             <ToDoList/>
        </div>
           
        );
    }
}

export default Main