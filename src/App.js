import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const dumbydata = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state  
  constructor(){
    super();
    this.state = {
      todos: dumbydata,
      // singleClickHandler = () => alert("I was clicked")

    
    }
    
      //Put event handlers in constructor method then bind them in the JSX

  }

  toggleCompleted = (id) => {
    console.log('toggle working')
    this.setState({
      todos:this.state.todos.map(todo => {
      if (id === todo.id){
        //if the id is equal to the todo.id then toggle
        return{...todo, completed: !todo.completed};
      }
      else{
        return todo;
      }
    })
    //this is letting me toggle the completed or not
  })
  }

  addTodo = task => {
    this.setState({
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }


  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Todo List:</h1>
        <br></br>
        
        <TodoList todos={this.state.todos}  
                  toggleCompleted={this.toggleCompleted}
        />
         {/* passing the state props to TodoList */}

        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
