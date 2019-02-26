import React, { Component } from 'react';
import './style.scss';

export default class Footer extends Component{
    constructor(props){
        super(props)
        console.log("props")
    }

    render(){
        
        return(
            <div className={"app-footer"}>
                <p>Just your average footer</p>
            </div>
        );
    }
}