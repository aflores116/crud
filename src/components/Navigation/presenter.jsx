import React, { Component } from 'react';
import './style.scss';

export default class Navigation extends Component{
    constructor(props){
        super(props)
        console.log("props")
    }

    render(){
        
        return(
            <div className={"app-navigation"}>
                <a href="/" target="_blank">Home</a>
                <a href="./About" target="_blank">Home</a>
                <a href="./Topics" target="_blank">Home</a>
            </div>
        );
    }
}