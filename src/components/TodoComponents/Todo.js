import React from 'react';
import Todocss from './Todo.css';

class Todo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    console.log(this.props.todo)
        return(
            <div 
            onClick = {this.props.toggleCompleted}
            className={this.props.todo.completed ? "completed" : ""}>
                {this.props.todo.task}
            </div>
        )
    }
}

export default Todo;