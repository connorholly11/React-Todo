import React from 'react';
import Todocss from './Todo.css';

class Todo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    console.log(this.props)
        return(
            <div 
            onClick = {() => this.props.togglecompleted(this.props.todo.id)}
            className={this.props.todo.completed ? "completed" : ""}>
                {this.props.todo.task}
            </div>
        )
    }
}

export default Todo;