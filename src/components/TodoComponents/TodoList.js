// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
    }

    render(){
        console.log(this.props)
        // super defines this.props for me and that is why I can call this.props here 
        return(
            <div>
                {this.state.todos.map(
                todos => <div>{todos.task}</div>
                )}
            </div>
        )
    }
}

export default TodoList;
