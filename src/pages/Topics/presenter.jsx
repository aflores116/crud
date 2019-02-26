import React, { Component } from 'react';
export default class Topics extends Component{
    constructor(props){
        super(props)
        console.log("props")
    }
    render(){
        return(
            <div>
                <span>Topics</span>
            </div>
        );
    }
}