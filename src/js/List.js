import React from 'react'
import { Component } from 'react';

class List extends Component{
    render(){
        return(
            <input className="task-input" type="text" placeholder="+ Add task"></input>
        );
    }
}

export default List;