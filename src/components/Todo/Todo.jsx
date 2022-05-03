import './Todo.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti'

const Todo = ({ onDeleteHandler, onClickHandler, todo, handleEdit }) => {
    const {id, task, complete} = todo;


    const handleClick = () => {
        onClickHandler(id);
    }

    const handleDelete = () => {
        onDeleteHandler(id);
    }

    return(
        <div className={complete ? "todo-row complete" : "todo-row"}>
        <div  onClick={handleClick} key={id}>{task}</div>
        <div className='icons'>
            <RiCloseCircleLine
                onClick={handleDelete}
                className='delete-icon'
            />
            <TiEdit
                onClick={() => {handleEdit(id,task)}}
                className='edit-icon'
            />
        </div>
        </div>
    )
}

export default Todo;