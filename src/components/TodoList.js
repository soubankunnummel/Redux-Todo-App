import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	const todos = useSelector((state) => state.todo.todos )
	console.log(todos);

	const revese = [...todos].reverse()


	return (
		<ul className='list-group' >
			{revese.map((todo) => (  
				<div key={todo.id}>

				<TodoItem id={todo.id} title={todo.text} completed={todo.completed} />
				</div>
			))}
		</ul>
	);
};

export default TodoList;
