import React from 'react';

const TodoForm = props => (
    <form onSubmit={(e) => {
        e.preventDefault();
        props.addTodo(e.target.querySelector('input').value)
    }}>
        <input />
        <button>Add</button> 
    </form>
);

export default TodoForm;