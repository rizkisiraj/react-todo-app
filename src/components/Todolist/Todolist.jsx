import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

const Todolist = ({updateTodo, handleDelete, handleClick, todos }) => {
    const [edit, setEdit] = useState({id: null, value: ''});
    const handleEdit = (id,value) => {
        setEdit({id: id, value: value})
    }
    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    return edit.id === null
       ? 
       (
        <div>
            {
                todos.map(todo => {
                    return (
                        <Todo 
                        key={todo.id}
                        updateTodo={updateTodo}
                        onDeleteHandler={handleDelete} 
                        onClickHandler={handleClick} 
                        todo={todo}
                        handleEdit={handleEdit}
                        />
                    )
                })
            }
        </div>
        )
        :
        (<TodoForm edit={edit} onSubmit={submitUpdate} />)
}

export default Todolist;