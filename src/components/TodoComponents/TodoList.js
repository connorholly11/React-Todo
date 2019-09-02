// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

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
                {this.props.todos.map
                (todo => <Todo key={todo.id} todo={todo} />
                )}
{/* mapping over the dumbydata array and putting each task in a div */}

            </div>
        )
    }
}

export default TodoList;
