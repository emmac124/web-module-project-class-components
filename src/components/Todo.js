import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <li 
                onClick={() => props.toggleTodo(props.todo.id)}
                className={`item${props.todo.completed ? ' completed' : ''}`}>
                {props.todo.task}
            </li>
        </div>
    );
}

export default Todo;