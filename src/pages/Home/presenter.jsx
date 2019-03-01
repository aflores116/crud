import React, { Component } from 'react';
import './style.scss';

export default class Home extends Component{
    constructor(props){
        super(props)
        console.log("props")
    }
    render(){
        return(
            <div className="list">
                <div className="todo-list">
                <h1>To do list:</h1>
                    <div className="todo-list__to-do">
                    <ul>
                        <li>Create a to do list</li>
                        <li>Eat</li>
                        <li>Practice react</li>
                    </ul>
                    </div>
                    <div className="todo-list__finished">
                        <p>Complete List Coming soon</p>
                    </div>
                </div>
            </div>
        );
    }
}