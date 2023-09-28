import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	const todos = useSelector((state) => state.value )
	console.log(todos);


	return (
		<ul className='list-group' >
			{todos.map((todo) => (
				<div key={todo.id}>

				<TodoItem id={todo.id} title={todo.text} completed={todo.completed} />
				</div>
			))}
		</ul>
	);
};

export default TodoList;
