import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Delete, Edit, ToggleCompleted } from '../Redux/todoReducer';

const TodoItem = ({ id, title, completed }) => {

  
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(''); 
  const [editingTodoId, setEditingTodoId] = useState(null);
 
  const handlDelet = (id) => {
    dispatch(Delete(id));
  };

  const handlEdit = (id) => {
    setEditingTodoId(id); // Activate editing for this task
    setEdit(title); // Set the input field value to the current task title
  };

  const handlSaveEdit = (id, text) => {
    dispatch(Edit({ id, text })); // Update the task with the edited text
    setEditingTodoId(null);
    setEdit('');
    
  };
  const handlCheckbox = () => {
    console.log("chek box clicked");
	dispatch(ToggleCompleted(id))

  }

  useEffect(()=> {
	if(editingTodoId !== null && inputRef.current){
		inputRef.current.focus()
	}
  },[editingTodoId])

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
          <input type='checkbox' className='mr-3' checked={completed} onClick={ handlCheckbox}></input>
          {editingTodoId === id ? (
			<>

			
            <input
              style={{ border: 'none',outline:'none' }}
              type='text'
              value={edit}
              onChange={(e) => setEdit(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handlSaveEdit(id, edit);
                }}}
              ref={inputRef} // Set the ref attribute to inputRef
            />
			</>
          ) : (
            title
          )}
        </span>
        <div className=''>
          <button className='btn btn-danger ' onClick={() => handlDelet(id)}>
            Delete
          </button>
          <button
            className='btn btn-primary '
            style={{ marginLeft: 3 }}
            onClick={() => handlEdit(id)}
          >
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
