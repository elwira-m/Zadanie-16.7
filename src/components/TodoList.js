import React from 'react';
import style from './TodoList.css';
import Todo from '../components/Todo';


const TodoList = props => {

    const todoListItems = props.data.map(item => 
	<Todo key={item.id} id={item.id} todo={item.text} remove={props.remove}/>)
	
    return (
        <ul className={style.TodoList}>{todoListItems}</ul>
    )
}

export default TodoList;
