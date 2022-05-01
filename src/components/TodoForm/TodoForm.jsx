import { useState } from "react";

const TodoForm = (props) => {

    const [todoInput, setInput] = useState(props.edit ? props.edit.value : '');

    
    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoInput.length > 0) {
            props.onSubmit(todoInput);
            setInput('');
        }
        
    }

    return !props.edit ?
        <form onSubmit={handleSubmit} className="todo-form" action="">
            <input value={todoInput} onChange={inputHandler} type="text" name="Todo Input" id="todo-input" className="todo-input" />
            <button onClick={handleSubmit} className='todo-button'>
            Add todo
            </button>
        </form>
    : (
        <form onSubmit={handleSubmit} className="todo-form" action="">
            <input value={todoInput} onChange={inputHandler} type="text" name="Todo Input" id="todo-input" className="todo-input edit" />
            <button onClick={handleSubmit} className='todo-button edit'>
            Change Todo
          </button>
        </form>
    )
}

export default TodoForm;