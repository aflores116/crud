import React, { Component } from 'react';
import './style.scss';


export default class TodoItem extends Component{
    constructor(props){
        super(props)
        console.log("props");

        this.state = {
            isCompleted : false,
        }
    }

    isItemCompleted = () => {

    }

    render(){
        const {isCompleted} = this.state;
        const {
            text = '',
            completed = false,
           
        } =  this.props;

        return(
           <div className={"TodoItem"}>
            <ul className={"Todo"}>
               <span className ={"completed-item"}>{isCompleted && completed}</span>
               <span className ={"Todo-text"}>{text}</span>
            </ul>
           </div>
        );
    }
}