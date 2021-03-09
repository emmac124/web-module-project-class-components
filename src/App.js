import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  toggleTodo = (clickedTodoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedTodoId){
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  addTodo = (todo) => {
    const newTodo = {
      task: todo,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  handleCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    })
    }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo List!</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} completed={this.handleCompleted} />
      </div>
    );
  }
}

export default App;
