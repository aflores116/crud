import React, { Component } from 'react';
import './style.scss';

export default class Home extends Component{
    constructor(props){
        super(props)
        console.log("props")
    }
    render(){
        return(
            <div class="list">
                <div ClassName="todo-list">
                <h1>To do list:</h1>
                    <div ClassName="todo-list__to-do">
                    <ul>
                        <li>Create a to do list</li>
                        <li>Eat</li>
                        <li>Practice react</li>
                    </ul>
                    </div>
                    <div ClassName="todo-list__finished">
                        <p>Complete List Coming soon</p>
                    </div>
                </div>
            </div>
        );
    }
}