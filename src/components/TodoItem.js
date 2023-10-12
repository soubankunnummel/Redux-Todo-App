import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, ToggleCompleted, startEditing, saveEditing, updateEditedText } from '../Redux/todoReducer';

const TodoItem = ({ id, title, completed }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const isEditing = useSelector((state) => state.todo.isEditing === id); 

  const editedText = useSelector((state) => state.todo.editedText); 

  const todos = useSelector((state) => state.todo.todos); 

  const handlDelet = (id) => {
    dispatch(Delete(id));
  };

  const handlEdit = (id) => {
    
    console.log("edit clicked");
    dispatch(startEditing(id));

    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      dispatch(updateEditedText(todo.text)); 
    }
  };

  const handlSaveEdit = () => {
   
    dispatch(saveEditing({ id, text: editedText }));
  };

  const handlCheckbox = () => {
    dispatch(ToggleCompleted(id));
  };
  

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
          <input
            type='checkbox'
            className='mr-3'
            checked={completed}
            onClick={handlCheckbox}
          ></input>
          {isEditing ? (
            <input
              style={{ border: 'none', outline: 'none' }}
              type='text'
              value={editedText}
              onChange={(e) => dispatch(updateEditedText(e.target.value))}
              
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handlSaveEdit();
                }
              }}
              onBlur={handlSaveEdit}
              ref={inputRef}
            />
          ) : (
            title
          )}
        </span>
        <div className=''>
          <button className='btn btn-danger ' onClick={() => handlDelet(id)}>
            Delete
          </button>
          {isEditing ? (
            <button
              className='btn btn-primary '
              style={{ marginLeft: 3 }}
              onClick={handlSaveEdit}
            >
              Save
            </button>
          ) : (
            <button
              className='btn btn-primary '
              style={{ marginLeft: 3 }}
              onClick={() => handlEdit(id)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
