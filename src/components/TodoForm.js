import React, { Component } from 'react';

class TodoForm extends Component {

    //constructor with state to manage the form 
    constructor(){
        super();
        this.state = {
            newToDo: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            newToDo: e.target.value
        })
    };

    handleAddSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newToDo);
        this.setState({
            newToDo: ''
        })
    }

    handleClear = () => {
        this.props.completed();
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleAddSubmit}>
                <input
                name='newTodo'
                type='text'
                onChange={this.handleChange}
                value={this.state.newToDo}
                 />
                <button className='add-todo'>+</button>
            </form>
                <div>
                    <button className='clr-todo' onClick={this.handleClear}>Clear Completed</button>
                </div>
            </>
        );
    }
}

export default TodoForm;