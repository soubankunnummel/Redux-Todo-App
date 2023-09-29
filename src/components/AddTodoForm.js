import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todoReducer';

const AddTodoForm = () => {
	const inputRef = useRef()
	const dispatch = useDispatch()
	const [value, setValue] = useState('');
 

	const onSubmit = (event) => {
		event.preventDefault();
		if (!value.trim()) {
			// Prevent adding an empty task
			alert('Please enter a task before submitting.')
			return;
		  }
		dispatch(addTodo(value))
		setValue('')
		console.log('user entered: ' + value); 
		
		
	}; 
	useEffect(() => {
		inputRef.current.focus()

	},[])

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				ref={inputRef}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
	
		</form>
	);
};

export default AddTodoForm;
