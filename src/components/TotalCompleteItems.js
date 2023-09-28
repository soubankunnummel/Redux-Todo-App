import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const todos = useSelector((state) => state.value)
	const completedTaskCount = todos.filter((todo) => todo.completed).length;

	console.log(completedTaskCount);
	
	const count = completedTaskCount
	return <h4 className='mt-3'>Total Complete Items:{`${count}`} </h4>;
};

export default TotalCompleteItems;
