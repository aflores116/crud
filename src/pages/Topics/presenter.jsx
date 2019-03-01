import React, { Component } from 'react';
import TodoItem from '../../components/todoItem';
export default class Topics extends Component{


    constructor(props){
        super(props)
        console.log("props");

        this.state = {
            inputValue: '',
            TodoItems: [],
        };
       
    }

  handleChange = (ev) => {
      this.setState({inputValue: ev.target.value.toUpperCase()});
      console.log('ev', this.state.inputValue);
  }
  submitTodoItem = () =>{
      
     const {TodoItems, inputValue} = this.state;
        
        let isRepeated = false

        TodoItems.forEach((item, index) =>{
            if(item.props.text === inputValue){
                isRepeated = true;
            }
        });

        if(isRepeated){
            return;
        }
        if(inputValue.length < 1){
            return;
        }
        
        TodoItems.push((<TodoItem text={inputValue} completed={false}/>))
        this.setState({TodoItems});

       
  }

    render(){
        const {inputValue, TodoItems} = this.state;
        const todos = TodoItems.map((item, index) =>{
            return{
                ...item,
                key: `${index} - To do Item`
            } 
        });

        return(
            <div className={"topics"}>
                <form>
                <label>
                
                    <input name="{text}" type="text" name="name" value={inputValue} onChange={this.handleChange}/>
                </label>

                    <button type="button" className={"topics-button"} onClick={this.submitTodoItem}>submit</button>
                    {todos}
                </form>
            </div>
        );
    }
}