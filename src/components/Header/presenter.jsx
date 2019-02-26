import React, { Component } from 'react';
import Navigation from '../Navigation';
import './style.scss';


export default class Header extends Component{
    constructor(props){
        super(props)
        console.log("props")
    }

    render(){
        
        return(
            <div className={"app-header"}>
               <Navigation/>
            </div>
        );
    }
}