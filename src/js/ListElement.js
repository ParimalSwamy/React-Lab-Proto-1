import React from 'react'
import { Component } from 'react';

class ListElement extends Component{
    render(){
        return(
            <div className="list-e">
                <div className="list-e-text">
                    <p className="list-e-text-todo">{this.props.todo}</p>
                    <p className="list-e-text-time">{this.props.time}</p>
                </div>
                <div className="list-e-btn">
                    <i className="list-e-btn-edit"></i>
                    <i className="list-e-btn-done"></i>
                    <i className="list-e-btn-del"></i>
                </div>
            </div>
            
        );
    }
}

export default ListElement;