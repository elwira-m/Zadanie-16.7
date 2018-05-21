import React from 'react';
import style from './Todo.css'; 

const Todo = props => (
     <li className={style.Todo}>
        {props.todo} 
        <button onClick={event => props.remove(props.id)}>Remove</button>
    </li>
);

export default Todo;